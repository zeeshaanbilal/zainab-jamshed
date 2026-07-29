"use server";

import { encrypt } from '@/lib/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(prevState: any, formData: FormData) {
  const password = formData.get('password');
  
  if (password === process.env.ADMIN_PASSWORD) {
    const sessionData = { role: 'admin', isLoggedIn: true };
    const session = await encrypt(sessionData);
    
    const cookieStore = await cookies();
    cookieStore.set('session', session, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    });
    
    redirect('/admin');
  } else {
    return { error: 'Invalid password' };
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
  redirect('/login');
}
