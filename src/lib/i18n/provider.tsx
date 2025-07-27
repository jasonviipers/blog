"use client"

import { createContext, useContext, type ReactNode } from "react"
import type { Locale } from "./config"
import type { Translations } from "./translations"
import { getDirection, getTranslation, isRTL } from "../utils"

interface I18nContextType {
  locale: Locale
  t: Translations
  isRTL: boolean
  direction: "ltr" | "rtl"
}

const I18nContext = createContext<I18nContextType | null>(null)

interface I18nProviderProps {
  children: ReactNode
  locale: Locale
}

export function I18nProvider({ children, locale }: I18nProviderProps) {
  const t = getTranslation(locale)
  const rtl = isRTL(locale)
  const direction = getDirection(locale)

  return (
    <I18nContext.Provider
      value={{
        locale,
        t,
        isRTL: rtl,
        direction,
      }}
    >
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider")
  }
  return context
}

// Convenience hook for translations
export function useTranslations() {
  const { t } = useI18n()
  return t
}
