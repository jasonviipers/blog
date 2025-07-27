import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { defaultLocale, locales } from "./lib/i18n/config"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // If locale is already in path, continue
  if (pathLocale) return NextResponse.next()

  // Skip API routes, static files, and other special paths
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.includes('.') ||
    pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next()
  }

  // Get the preferred locale
  const locale = getPreferredLocale(request) || defaultLocale

  // Redirect to locale-prefixed path
  const newUrl = new URL(`/${locale}${pathname}`, request.url)
  return NextResponse.redirect(newUrl)
}

function getPreferredLocale(request: NextRequest): string | undefined {
  // 1. Check cookie
  const cookieLocale = request.cookies.get('locale')?.value
  if (cookieLocale && locales.includes(cookieLocale as any)) {
    return cookieLocale
  }

  // 2. Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    for (const lang of acceptLanguage.split(',')) {
      const locale = lang.trim().split('-')[0]
      const fullLocale = locales.find((l) => l.startsWith(locale))
      if (fullLocale) return fullLocale
    }
  }

  return undefined
}

export const config = {
  matcher: [
    // Match all paths except:
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)'
  ]
}