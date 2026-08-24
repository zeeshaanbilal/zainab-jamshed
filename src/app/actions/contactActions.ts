"use server";

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function submitContactMessage(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !subject || !message) {
    return { error: 'All fields are required.' };
  }

  try {
    await prisma.contactMessage.create({
      data: {
        name,
        email,
        subject,
        message,
      }
    });
    
    revalidatePath('/admin');
    return { success: true };
  } catch (error: any) {
    return { error: 'Failed to submit message. Please try again.' };
  }
}

export async function deleteContactMessage(id: string) {
  try {
    await prisma.contactMessage.delete({
      where: { id }
    });
    
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    return { error: 'Failed to delete message.' };
  }
}
