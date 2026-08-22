"use server";

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { writeFile } from 'fs/promises';
import { join } from 'path';

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
  const title = formData.get('title') as string;
  const author = formData.get('author') as string;
  const date = formData.get('date') as string;
  const excerpt = formData.get('excerpt') as string;
  const content = formData.get('content') as string;
  const titlePt = formData.get('titlePt') as string | null;
  const excerptPt = formData.get('excerptPt') as string | null;
  const contentPt = formData.get('contentPt') as string | null;
  const imageFile = formData.get('imageFile') as File | null;
  const imageUrl = formData.get('imageUrl') as string;
  
  if (!title || !author || !date || !excerpt || !content) {
    return { error: 'All core fields are required.' };
  }
  
  try {
    let finalImageUrl = imageUrl;

    if (imageFile && imageFile.size > 0) {
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
  const title = formData.get('title') as string;
  const author = formData.get('author') as string;
  const date = formData.get('date') as string;
  const excerpt = formData.get('excerpt') as string;
  const content = formData.get('content') as string;
  const titlePt = formData.get('titlePt') as string | null;
  const excerptPt = formData.get('excerptPt') as string | null;
  const contentPt = formData.get('contentPt') as string | null;
  const imageFile = formData.get('imageFile') as File | null;
  const imageUrl = formData.get('imageUrl') as string;
  
  if (!title || !author || !date || !excerpt || !content) {
    return { error: 'Missing required text fields.' };
  }
  
  try {
    const dataToUpdate: any = {
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
