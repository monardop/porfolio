// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './src/config/i18n.config';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Evita redirigir si ya incluye un locale
  if (locales.some(locale => pathname.startsWith(`/${locale}`))) {
    return NextResponse.next();
  }

  // Redirige al idioma por defecto
  const locale = defaultLocale;
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|images|icons).*)'],
};
