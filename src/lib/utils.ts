import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { dateLocales, defaultLocale, Locale, locales, rtlLocales } from "./i18n/config"
import { translations } from "./i18n/translations"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTranslation(locale: Locale) {
  return translations[locale] || translations[defaultLocale]
}

export function isRTL(locale: Locale): boolean {
  return rtlLocales.includes(locale)
}

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return isRTL(locale) ? "rtl" : "ltr"
}

export function formatDateString(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function formatDate(date: string | Date, locale: Locale): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  const dateLocale = dateLocales[locale] || dateLocales[defaultLocale]

  return dateObj.toLocaleDateString(dateLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function formatRelativeTime(date: string | Date, locale: Locale): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000)

  const t = getTranslation(locale)

  if (diffInSeconds < 60) {
    return `${diffInSeconds} ${t.time.seconds} ${t.time.ago}`
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60)
  if (diffInMinutes < 60) {
    return `${diffInMinutes} ${t.time.minutes} ${t.time.ago}`
  }

  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) {
    return `${diffInHours} ${t.time.hours} ${t.time.ago}`
  }

  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 7) {
    return `${diffInDays} ${t.time.days} ${t.time.ago}`
  }

  const diffInWeeks = Math.floor(diffInDays / 7)
  if (diffInWeeks < 4) {
    return `${diffInWeeks} ${t.time.weeks} ${t.time.ago}`
  }

  const diffInMonths = Math.floor(diffInDays / 30)
  if (diffInMonths < 12) {
    return `${diffInMonths} ${t.time.months} ${t.time.ago}`
  }

  const diffInYears = Math.floor(diffInDays / 365)
  return `${diffInYears} ${t.time.years} ${t.time.ago}`
}

export function getReadingTime(content: string, locale: Locale): string {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)

  const t = getTranslation(locale)
  return `${minutes} ${t.blog.minutes}`
}

export function validateLocale(locale: string): Locale {
  return locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale
}

export function getLocaleFromPath(pathname: string): { locale: Locale; pathWithoutLocale: string } {
  const segments = pathname.split("/").filter(Boolean)
  const maybeLocale = segments[0]

  if (locales.includes(maybeLocale as Locale)) {
    return {
      locale: maybeLocale as Locale,
      pathWithoutLocale: "/" + segments.slice(1).join("/"),
    }
  }

  return {
    locale: defaultLocale,
    pathWithoutLocale: pathname,
  }
}

export function createLocalizedPath(path: string, locale: Locale): string {
  if (locale === defaultLocale) {
    return path
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`
  return `/${locale}${cleanPath}`
}

export function getAlternateLanguages(currentPath: string, currentLocale: Locale) {
  const pathWithoutLocale = currentPath.replace(`/${currentLocale}`, "") || "/"

  return locales.map((locale) => ({
    locale,
    href: locale === defaultLocale ? pathWithoutLocale : `/${locale}${pathWithoutLocale}`,
  }))
}

// Number formatting
export function formatNumber(number: number, locale: Locale): string {
  const dateLocale = dateLocales[locale] || dateLocales[defaultLocale]
  return new Intl.NumberFormat(dateLocale).format(number)
}

// Currency formatting
export function formatCurrency(amount: number, locale: Locale, currency = "USD"): string {
  const dateLocale = dateLocales[locale] || dateLocales[defaultLocale]
  return new Intl.NumberFormat(dateLocale, {
    style: "currency",
    currency,
  }).format(amount)
}

// Pluralization helper
export function pluralize(count: number, singular: string, plural: string): string {
  return count === 1 ? singular : plural
}
