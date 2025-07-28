"use client"

import { useState, useRef, useEffect } from "react"
import { Globe, Check, ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"
import { useI18n } from "@/lib/i18n/provider"
import { 
  locales, 
  localeNames, 
  localeFlags, 
  rtlLocales,
  type Locale 
} from "@/lib/i18n/config"
import { createLocalizedPath, getLocaleFromPath } from "@/lib/utils"
import { cn } from "@/lib/utils"

interface LanguageOption {
  code: Locale
  name: string
  nativeName: string
  flag: string
  direction: 'ltr' | 'rtl'
}

// Create language options from your config
const createLanguageOptions = (): LanguageOption[] => {
  return locales.map(locale => ({
    code: locale,
    name: getEnglishName(locale),
    nativeName: localeNames[locale],
    flag: localeFlags[locale],
    direction: rtlLocales.includes(locale) ? 'rtl' : 'ltr'
  }))
}

// Helper to get English names for languages
function getEnglishName(locale: Locale): string {
  const englishNames: Record<Locale, string> = {
    'en': 'English',
    'es': 'Spanish', 
    'fr': 'French',
    'de': 'German',
    'ja': 'Japanese',
    'ar': 'Arabic',
    'zh': 'Chinese'
  }
  return englishNames[locale] || locale
}

interface LanguageSwitcherProps {
  variant?: "desktop" | "mobile"
  className?: string
}

export function LanguageSwitcher({ variant = "desktop", className = "" }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const dropdownRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const { locale, direction } = useI18n()

  const languages = createLanguageOptions()
  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

  // Filter languages based on search query
  const filteredLanguages = languages.filter(lang =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lang.nativeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lang.code.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSearchQuery("")
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current && variant === "desktop") {
      setTimeout(() => searchInputRef.current?.focus(), 100)
    }
  }, [isOpen, variant])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return

      if (event.key === 'Escape') {
        setIsOpen(false)
        setSearchQuery("")
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const handleLanguageSelect = (newLocale: Locale) => {
    setIsOpen(false)
    setSearchQuery("")
    
    if (newLocale === locale) return

    // Get current path and create new localized path
    const currentPath = window.location.pathname
    const { pathWithoutLocale } = getLocaleFromPath(currentPath)
    const newPath = createLocalizedPath(pathWithoutLocale, newLocale)
    
    // Navigate to new localized path
    router.push(newPath)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setSearchQuery("")
    }
  }

  // Mobile variant
  if (variant === "mobile") {
    return (
      <div className={cn("w-full", className)}>
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between w-full px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
        >
          <div className="flex items-center space-x-3">
            <Globe className="w-4 h-4" />
            <span className="text-sm">Language</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-muted-foreground">{currentLanguage.flag}</span>
            <span className="text-xs text-muted-foreground">{currentLanguage.nativeName}</span>
            <ChevronDown className={cn(
              "w-3 h-3 transition-transform duration-200",
              isOpen && "rotate-180"
            )} />
          </div>
        </button>

        {isOpen && (
          <div className="mt-2 ml-4 space-y-1 max-h-48 overflow-y-auto scrollbar">
            {filteredLanguages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language.code)}
                className={cn(
                  "flex items-center justify-between w-full px-4 py-2 text-left rounded-lg transition-all duration-150",
                  language.code === locale
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                )}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-sm">{language.flag}</span>
                  <div>
                    <div className="text-sm font-medium">{language.nativeName}</div>
                    <div className="text-xs text-muted-foreground">{language.name}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {language.direction === 'rtl' && (
                    <span className="text-xs px-1.5 py-0.5 bg-accent/50 rounded text-muted-foreground">
                      RTL
                    </span>
                  )}
                  {language.code === locale && (
                    <Check className="w-3 h-3 text-primary" />
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  // Desktop variant
  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="group flex items-center space-x-2 p-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
        title={`Current language: ${currentLanguage.nativeName}`}
        aria-label="Language switcher"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="w-4 h-4" />
        <span className="text-xs font-medium hidden sm:block">{currentLanguage.flag}</span>
        <ChevronDown className={cn(
          "w-3 h-3 transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </button>

      {/* Dropdown Menu */}
      <div
        className={cn(
          "absolute top-full mt-2 w-80 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-lg transition-all duration-200 z-50",
          direction === 'rtl' ? "left-0" : "right-0",
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-2"
        )}
        role="menu"
        aria-orientation="vertical"
      >
        {/* Search Header */}
        <div className="p-3 border-b border-border/50">
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search languages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-accent/30 border border-border/30 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-200"
              aria-label="Search languages"
            />
          </div>
        </div>

        {/* Language List */}
        <div className="max-h-64 overflow-y-auto scrollbar">
          <div className="p-2">
            {filteredLanguages.length > 0 ? (
              <>
                {/* Current Language */}
                {filteredLanguages.includes(currentLanguage) && (
                  <>
                    <div className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Current
                    </div>
                    <button
                      onClick={() => handleLanguageSelect(currentLanguage.code)}
                      className="flex items-center justify-between w-full px-3 py-2 mb-2 bg-primary/10 text-primary rounded-lg transition-all duration-150"
                      role="menuitem"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{currentLanguage.flag}</span>
                        <div className="text-left">
                          <div className="text-sm font-medium">{currentLanguage.nativeName}</div>
                          <div className="text-xs text-primary/70">{currentLanguage.name}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {currentLanguage.direction === 'rtl' && (
                          <span className="text-xs px-2 py-1 bg-primary/20 rounded text-primary/80">
                            RTL
                          </span>
                        )}
                        <Check className="w-4 h-4" />
                      </div>
                    </button>
                  </>
                )}

                {/* Other Languages */}
                {filteredLanguages.filter(lang => lang.code !== locale).length > 0 && (
                  <>
                    <div className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Available ({filteredLanguages.filter(lang => lang.code !== locale).length})
                    </div>
                    {filteredLanguages
                      .filter(lang => lang.code !== locale)
                      .map((language) => (
                        <button
                          key={language.code}
                          onClick={() => handleLanguageSelect(language.code)}
                          className="flex items-center justify-between w-full px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-150 group"
                          role="menuitem"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                              {language.flag}
                            </span>
                            <div className="text-left">
                              <div className="text-sm font-medium">{language.nativeName}</div>
                              <div className="text-xs text-muted-foreground">{language.name}</div>
                            </div>
                          </div>
                          {language.direction === 'rtl' && (
                            <span className="text-xs px-2 py-1 bg-accent/50 rounded text-muted-foreground">
                              RTL
                            </span>
                          )}
                        </button>
                      ))}
                  </>
                )}
              </>
            ) : (
              <div className="px-3 py-8 text-center text-muted-foreground">
                <Globe className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <div className="text-sm">No languages found</div>
                <div className="text-xs">Try a different search term</div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-border/50 bg-accent/20">
          <div className="text-xs text-muted-foreground text-center">
            {filteredLanguages.length} of {languages.length} languages
          </div>
        </div>
      </div>
    </div>
  )
}