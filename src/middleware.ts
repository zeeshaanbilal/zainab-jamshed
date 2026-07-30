import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from '@/lib/auth';

// Setup next-intl middleware
const intlMiddleware = createMiddleware({
  locales: ['en', 'pt'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // 1. Handle Admin Authentication
  if (path.startsWith('/admin')) {
    const session = request.cookies.get('session')?.value;
    
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    
    try {
      await decrypt(session);
      return NextResponse.next();
    } catch (e) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // 2. Skip internationalization for admin, login, and api routes
  if (path.startsWith('/admin') || path.startsWith('/login') || path.startsWith('/api')) {
    return NextResponse.next();
  }
  
  // 3. Handle internationalization routing (Redirects / to /en)
  return intlMiddleware(request);
}

export const config = {
  // Skip all paths that should not be internationalized.
  // This matches all paths except API routes, static files, and Next.js internals.
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
