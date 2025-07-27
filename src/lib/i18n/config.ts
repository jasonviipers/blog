export const defaultLocale = "en" as const
export const locales = [
    "en",
    "es",
    "fr",
    "de",
    "ja",
    "ar",
    "zh",
] as const;

export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
    "en": "English",
    "es": "Español",
    "fr": "Français",
    "de": "Deutsch",
    "ja": "日本語",
    "ar": "العربية",
    "zh": "中文",
}

export const localeFlags: Record<Locale, string> = {
    "en": "🇺🇸",
    "es": "🇪🇸",
    "fr": "🇫🇷",
    "de": "🇩🇪",
    "ja": "🇯🇵",
    "ar": "🇸🇦",
    "zh": "🇨🇳",
}

// RTL languages
export const rtlLocales: Locale[] = ["ar"] as const;

// Date formatting locales
export const dateLocales: Record<Locale, string> = {
    "en": "en-US",
    "es": "es-ES",
    "fr": "fr-FR",
    "de": "de-DE",
    "ja": "ja-JP",
    "ar": "ar-SA",
    "zh": "zh-CN",
}

// Font configurations for different languages
export const fontConfigs: Record<Locale, { serif: string; sans: string }> = {
    "en": { serif: "var(--font-serif)", sans: "var(--font-sans)" },
    "es": { serif: "var(--font-serif)", sans: "var(--font-sans)" },
    "fr": { serif: "var(--font-serif)", sans: "var(--font-sans)" },
    "de": { serif: "var(--font-serif)", sans: "var(--font-sans)" },
    "ja": { serif: "var(--font-japanese)", sans: "var(--font-japanese)" },
    "ar": { serif: "var(--font-arabic)", sans: "var(--font-arabic)" },
    "zh": { serif: "var(--font-chinese)", sans: "var(--font-chinese)" },
}