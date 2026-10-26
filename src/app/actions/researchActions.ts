"use server";

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

function formatFileSize(bytes: number, decimals = 1): string {
  if (!+bytes) return '0 KB';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

async function generateUniqueResearchSlug(title: string, existingId?: string): Promise<string> {
  const baseSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
  
  let slug = baseSlug || 'research-paper';
  let counter = 1;
  while (true) {
    const existing = await prisma.research.findUnique({ where: { slug } });
    if (!existing || existing.id === existingId) {
      return slug;
    }
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
}

async function savePdfLocally(file: File, filename: string): Promise<string | null> {
  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uploadDir = join(process.cwd(), 'public', 'uploads', 'research');
    await mkdir(uploadDir, { recursive: true });
    const filepath = join(uploadDir, filename);
    await writeFile(filepath, buffer);
    return `/uploads/research/${filename}`;
  } catch (err) {
    console.warn('Could not write local PDF file (normal in read-only serverless):', err);
    return null;
  }
}

export async function createResearch(formData: FormData) {
  const titleEn = formData.get('title') as string;
  const excerptEn = formData.get('excerpt') as string;
  const descriptionEn = formData.get('description') as string | null;
  const titlePtRaw = formData.get('titlePt') as string | null;
  const excerptPtRaw = formData.get('excerptPt') as string | null;
  const descriptionPtRaw = formData.get('descriptionPt') as string | null;

  const title = titleEn || titlePtRaw || '';
  const excerpt = excerptEn || excerptPtRaw || '';
  const description = descriptionEn || descriptionPtRaw || '';

  const titlePt = titlePtRaw || titleEn || null;
  const excerptPt = excerptPtRaw || excerptEn || null;
  const descriptionPt = descriptionPtRaw || descriptionEn || null;

  const author = (formData.get('author') as string) || 'ZJ Logix Research';
  const date = (formData.get('date') as string) || new Date().toISOString().split('T')[0];
  const category = (formData.get('category') as string) || 'Data Analytics';
  const customSlug = formData.get('customSlug') as string | null;

  const pdfFile = formData.get('pdfFile') as File | null;
  const pdfUrlInput = (formData.get('pdfUrl') as string | null)?.trim() || null;

  if (!title || !excerpt) {
    return { error: 'Title and Excerpt/Abstract are required fields.' };
  }

  try {
    const slug = customSlug
      ? await generateUniqueResearchSlug(customSlug)
      : await generateUniqueResearchSlug(title);

    let pdfData: string | null = null;
    let pdfFileName: string | null = null;
    let fileSize: string | null = null;
    let finalPdfUrl: string | null = pdfUrlInput;

    if (pdfFile && pdfFile.size > 0) {
      pdfFileName = pdfFile.name;
      fileSize = formatFileSize(pdfFile.size);
      
      const bytes = await pdfFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      pdfData = buffer.toString('base64');

      // Attempt local write as fallback / cache
      const sanitizedName = `${Date.now()}-${pdfFile.name.replace(/\s+/g, '-')}`;
      const localPath = await savePdfLocally(pdfFile, sanitizedName);

      // Default URL routes to our streaming API endpoint
      finalPdfUrl = `/api/research/${slug}/pdf`;
    }

    if (!finalPdfUrl && !pdfData) {
      return { error: 'Please upload a PDF file or provide a valid PDF URL.' };
    }

    await prisma.research.create({
      data: {
        slug,
        title,
        author,
        date,
        category,
        excerpt,
        description,
        pdfUrl: finalPdfUrl,
        pdfData,
        pdfFileName,
        fileSize,
        titlePt,
        excerptPt,
        descriptionPt,
      },
    });

    revalidatePath('/research');
    revalidatePath('/en/research');
    revalidatePath('/pt/research');
    revalidatePath('/admin');
    return { success: true };
  } catch (error: any) {
    console.error('Error creating research paper:', error);
    return { error: error.message || 'Failed to create research paper.' };
  }
}

export async function updateResearch(id: string, formData: FormData) {
  const titleEn = formData.get('title') as string;
  const excerptEn = formData.get('excerpt') as string;
  const descriptionEn = formData.get('description') as string | null;
  const titlePtRaw = formData.get('titlePt') as string | null;
  const excerptPtRaw = formData.get('excerptPt') as string | null;
  const descriptionPtRaw = formData.get('descriptionPt') as string | null;

  const title = titleEn || titlePtRaw || '';
  const excerpt = excerptEn || excerptPtRaw || '';
  const description = descriptionEn || descriptionPtRaw || '';

  const titlePt = titlePtRaw || titleEn || null;
  const excerptPt = excerptPtRaw || excerptEn || null;
  const descriptionPt = descriptionPtRaw || descriptionEn || null;

  const author = (formData.get('author') as string) || 'ZJ Logix Research';
  const date = (formData.get('date') as string) || new Date().toISOString().split('T')[0];
  const category = (formData.get('category') as string) || 'Data Analytics';
  const customSlug = formData.get('customSlug') as string | null;

  const pdfFile = formData.get('pdfFile') as File | null;
  const pdfUrlInput = (formData.get('pdfUrl') as string | null)?.trim() || null;

  if (!title || !excerpt) {
    return { error: 'Title and Excerpt/Abstract are required fields.' };
  }

  try {
    const slug = customSlug
      ? await generateUniqueResearchSlug(customSlug, id)
      : await generateUniqueResearchSlug(title, id);

    const updateData: any = {
      slug,
      title,
      author,
      date,
      category,
      excerpt,
      description,
      titlePt,
      excerptPt,
      descriptionPt,
    };

    if (pdfFile && pdfFile.size > 0) {
      updateData.pdfFileName = pdfFile.name;
      updateData.fileSize = formatFileSize(pdfFile.size);
      
      const bytes = await pdfFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      updateData.pdfData = buffer.toString('base64');

      const sanitizedName = `${Date.now()}-${pdfFile.name.replace(/\s+/g, '-')}`;
      await savePdfLocally(pdfFile, sanitizedName);

      updateData.pdfUrl = `/api/research/${slug}/pdf`;
    } else if (pdfUrlInput) {
      updateData.pdfUrl = pdfUrlInput;
    }

    await prisma.research.update({
      where: { id },
      data: updateData,
    });

    revalidatePath('/research');
    revalidatePath('/en/research');
    revalidatePath('/pt/research');
    revalidatePath(`/en/research/${slug}`);
    revalidatePath(`/pt/research/${slug}`);
    revalidatePath('/admin');
    return { success: true };
  } catch (error: any) {
    console.error('Error updating research paper:', error);
    return { error: error.message || 'Failed to update research paper.' };
  }
}

export async function deleteResearch(id: string) {
  try {
    await prisma.research.delete({
      where: { id },
    });

    revalidatePath('/research');
    revalidatePath('/en/research');
    revalidatePath('/pt/research');
    revalidatePath('/admin');
    return { success: true };
  } catch (error: any) {
    console.error('Error deleting research paper:', error);
    return { error: error.message || 'Failed to delete research paper.' };
  }
}

export async function quickUploadPdf(formData: FormData) {
  const file = formData.get('pdfFile') as File | null;
  if (!file || file.size === 0) {
    return { error: 'Please select a valid PDF file to upload.' };
  }

  try {
    const rawName = file.name || 'Research Document.pdf';
    const nameWithoutExt = rawName.replace(/\.[^/.]+$/, '');
    const cleanTitle = nameWithoutExt
      .replace(/[_-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    const title = cleanTitle
      .split(' ')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ') || 'Research Document';

    const slug = await generateUniqueResearchSlug(title);
    const fileSize = formatFileSize(file.size);

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const pdfData = buffer.toString('base64');

    const sanitizedName = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
    await savePdfLocally(file, sanitizedName);

    const finalPdfUrl = `/api/research/${slug}/pdf`;
    const today = new Date().toISOString().split('T')[0];

    const created = await prisma.research.create({
      data: {
        slug,
        title,
        author: 'ZJ Logix',
        date: today,
        category: 'Publications',
        excerpt: `Document: ${rawName}`,
        pdfUrl: finalPdfUrl,
        pdfData,
        pdfFileName: rawName,
        fileSize,
      },
    });

    revalidatePath('/research');
    revalidatePath('/en/research');
    revalidatePath('/pt/research');
    revalidatePath('/admin');

    return {
      success: true,
      item: {
        id: created.id,
        slug: created.slug,
        title: created.title,
        author: created.author,
        date: created.date,
        category: created.category,
        excerpt: created.excerpt,
        pdfUrl: created.pdfUrl,
        pdfFileName: created.pdfFileName,
        fileSize: created.fileSize,
      },
    };
  } catch (error: any) {
    console.error('Error in quickUploadPdf:', error);
    return { error: error.message || 'Failed to upload document.' };
  }
}

