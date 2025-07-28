"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { defaultLocale, locales, type Locale } from "@/lib/i18n/config"
import { createLocalizedPath, getLocaleFromPath } from "@/lib/utils"

export function LocaleDetector() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const { locale: currentLocale } = getLocaleFromPath(pathname)

    // If we're already on a localized path, do nothing
    if (currentLocale !== defaultLocale) {
      return
    }

    // Check for stored language preference
    const storedLocale = localStorage.getItem("preferred-language") as Locale
    if (storedLocale && locales.includes(storedLocale) && storedLocale !== defaultLocale) {
      const newPath = createLocalizedPath(pathname, storedLocale)
      router.replace(newPath)
      return
    }

    // Check browser language
    const browserLocale = navigator.language.split("-")[0] as Locale
    if (locales.includes(browserLocale) && browserLocale !== defaultLocale) {
      const newPath = createLocalizedPath(pathname, browserLocale)
      router.replace(newPath)
      return
    }

    // Check Accept-Language header (for SSR)
    const acceptLanguage = document.documentElement.lang as Locale
    if (acceptLanguage && locales.includes(acceptLanguage) && acceptLanguage !== defaultLocale) {
      const newPath = createLocalizedPath(pathname, acceptLanguage)
      router.replace(newPath)
    }
  }, [pathname, router])

  return null
}
