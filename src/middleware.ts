import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from '@/lib/auth';

const locales = ['en', 'pt'];
const defaultLocale = 'en';

function getLocale(request: NextRequest) {
  // Check cookie first
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }
  
  // Then check accept-language header
  const acceptLang = request.headers.get('accept-language');
  if (acceptLang && acceptLang.toLowerCase().includes('pt')) return 'pt';
  
  return defaultLocale;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // 1. Handle Admin Authentication
  if (pathname.startsWith('/admin')) {
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

  // 2. Skip i18n routing for specific paths
  if (
    pathname.startsWith('/admin') ||
    pathname.startsWith('/login') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.match(/\.[^/]+$/) // Skip static files (images, css, xml, etc.)
  ) {
    return NextResponse.next();
  }

  // 3. Handle i18n Language Routing
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // If no locale in URL, redirect to the detected locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Match all request paths except for the ones starting with:
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
