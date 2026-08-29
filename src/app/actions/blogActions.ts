"use server";

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { writeFile } from 'fs/promises';
import { join } from 'path';

async function generateUniqueSlug(title: string, existingId?: string): Promise<string> {
  const baseSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
  
  let slug = baseSlug;
  let counter = 1;
  while (true) {
    const existing = await prisma.blog.findUnique({ where: { slug } });
    if (!existing || existing.id === existingId) {
      return slug;
    }
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
}

async function uploadImage(file: File): Promise<string | null> {
  if (!file || file.size === 0) return null;
  
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  
  const filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
  const uploadDir = join(process.cwd(), 'public', 'uploads');
  const filepath = join(uploadDir, filename);
  
  await writeFile(filepath, buffer);
  
  return `/uploads/${filename}`;
}

export async function createBlog(formData: FormData) {
  const titleEn = formData.get('title') as string;
  const excerptEn = formData.get('excerpt') as string;
  const contentEn = formData.get('content') as string;
  const titlePtRaw = formData.get('titlePt') as string | null;
  const excerptPtRaw = formData.get('excerptPt') as string | null;
  const contentPtRaw = formData.get('contentPt') as string | null;

  const title = titleEn || titlePtRaw || '';
  const excerpt = excerptEn || excerptPtRaw || '';
  const content = contentEn || contentPtRaw || '';

  const titlePt = titlePtRaw || titleEn || null;
  const excerptPt = excerptPtRaw || excerptEn || null;
  const contentPt = contentPtRaw || contentEn || null;

  const author = formData.get('author') as string;
  const date = formData.get('date') as string;
  const imageFile = formData.get('imageFile') as File | null;
  const imageUrl = formData.get('imageUrl') as string;
  const customSlug = formData.get('customSlug') as string | null;
  
  if (!title || !author || !date || !excerpt || !content) {
    return { error: 'All core fields are required.' };
  }
  
  try {
    let finalImageUrl = imageUrl;

    if (imageFile && imageFile.size > 0) {
      if (process.env.NODE_ENV === 'production') {
        return { error: 'Direct image uploads are not supported on the live server. Please upload your image to a site like ImgBB or Imgur and paste the link in the "Image URL" box instead.' };
      }
      const uploadedUrl = await uploadImage(imageFile);
      if (uploadedUrl) {
        finalImageUrl = uploadedUrl;
      }
    }

    if (!finalImageUrl) {
      return { error: 'You must provide either an Image URL or Upload an Image.' };
    }

    await prisma.blog.create({
      data: {
        slug: customSlug ? await generateUniqueSlug(customSlug) : await generateUniqueSlug(title),
        title,
        author,
        date,
        excerpt,
        content,
        titlePt,
        excerptPt,
        contentPt,
        image: finalImageUrl,
      }
    });
    
    revalidatePath('/blogs');
    revalidatePath('/admin');
    return { success: true };
  } catch (error: any) {
    return { error: error.message || 'Failed to create blog. If you are on Vercel, image uploads are not supported locally. Please use an Image URL instead.' };
  }
}

export async function updateBlog(id: string, formData: FormData) {
  const titleEn = formData.get('title') as string;
  const excerptEn = formData.get('excerpt') as string;
  const contentEn = formData.get('content') as string;
  const titlePtRaw = formData.get('titlePt') as string | null;
  const excerptPtRaw = formData.get('excerptPt') as string | null;
  const contentPtRaw = formData.get('contentPt') as string | null;

  const title = titleEn || titlePtRaw || '';
  const excerpt = excerptEn || excerptPtRaw || '';
  const content = contentEn || contentPtRaw || '';

  const titlePt = titlePtRaw || titleEn || null;
  const excerptPt = excerptPtRaw || excerptEn || null;
  const contentPt = contentPtRaw || contentEn || null;

  const author = formData.get('author') as string;
  const date = formData.get('date') as string;
  const imageFile = formData.get('imageFile') as File | null;
  const imageUrl = formData.get('imageUrl') as string;
  const customSlug = formData.get('customSlug') as string | null;
  
  if (!title || !author || !date || !excerpt || !content) {
    return { error: 'Missing required text fields.' };
  }
  
  try {
    const dataToUpdate: any = {
      slug: customSlug ? await generateUniqueSlug(customSlug, id) : await generateUniqueSlug(title, id),
      title,
      author,
      date,
      excerpt,
      content,
      titlePt,
      excerptPt,
      contentPt,
    };

    if (imageFile && imageFile.size > 0) {
      if (process.env.NODE_ENV === 'production') {
        return { error: 'Direct image uploads are not supported on the live server. Please upload your image to a site like ImgBB or Imgur and paste the link in the "Image URL" box instead.' };
      }
      const uploadedUrl = await uploadImage(imageFile);
      if (uploadedUrl) {
        dataToUpdate.image = uploadedUrl;
      }
    } else if (imageUrl) {
      dataToUpdate.image = imageUrl;
    }

    await prisma.blog.update({
      where: { id },
      data: dataToUpdate
    });
    
    revalidatePath('/blogs');
    revalidatePath('/admin');
    return { success: true };
  } catch (error: any) {
    return { error: error.message || 'Failed to update blog. If you are on Vercel, image uploads are not supported locally. Please use an Image URL instead.' };
  }
}

export async function deleteBlog(id: string) {
  try {
    await prisma.blog.delete({
      where: { id }
    });
    
    revalidatePath('/blogs');
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    return { error: 'Failed to delete blog.' };
  }
}
