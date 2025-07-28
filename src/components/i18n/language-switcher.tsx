"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Globe, Check, ChevronDown } from "lucide-react"
import { locales, localeNames, localeFlags, type Locale } from "@/lib/i18n/config"
import { useI18n } from "@/lib/i18n/provider"
import { createLocalizedPath, getLocaleFromPath } from "@/lib/utils"

export function LanguageSwitcher({ variant = "desktop", className = "" }) {
    const [isOpen, setIsOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const dropdownRef = useRef<HTMLDivElement>(null)
    const searchInputRef = useRef<HTMLInputElement>(null)
    const { locale, direction } = useI18n()
    const router = useRouter()
    const pathname = usePathname()

    // Prepare languages data
    const languages = locales.map((code) => ({
        code,
        name: localeNames[code],
        nativeName: code === "zh" ? "简体中文" : 
                   code === "ja" ? "日本語" : 
                   code === "ar" ? "العربية" : 
                   localeNames[code],
        flag: localeFlags[code],
        direction: direction === "rtl" ? "rtl" : "ltr"
    }))

    // Filter languages based on search query
    const filteredLanguages = languages.filter((language) => {
        const searchTerm = searchQuery.toLowerCase()
        return (
            language.name.toLowerCase().includes(searchTerm) ||
            language.nativeName.toLowerCase().includes(searchTerm) ||
            language.code.toLowerCase().includes(searchTerm)
        )
    })

    // Get current language details
    const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0]

    // Toggle dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
        if (!isOpen && searchInputRef.current) {
            setTimeout(() => searchInputRef.current?.focus(), 0)
        }
    }

    // Handle language selection
    const handleLanguageSelect = (selectedLocale: Locale) => {
        if (selectedLocale !== locale) {
            const newPath = createLocalizedPath(pathname, selectedLocale)
            router.push(newPath)
        }
        setIsOpen(false)
        setSearchQuery("")
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
                setSearchQuery("")
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    // Mobile variant
    if (variant === "mobile") {
        return (
            <div className={`w-full ${className}`}>
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
                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                </button>

                {isOpen && (
                    <div className="mt-2 ml-4 space-y-1 max-h-48 overflow-y-auto scrollbar">
                        {filteredLanguages.map((language) => (
                            <button
                                key={language.code}
                                onClick={() => handleLanguageSelect(language.code)}
                                className={`flex items-center justify-between w-full px-4 py-2 text-left rounded-lg transition-all duration-150 ${
                                    language.code === locale
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/30'
                                }`}
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-sm">{language.flag}</span>
                                    <div>
                                        <div className="text-sm font-medium">{language.nativeName}</div>
                                        <div className="text-xs text-muted-foreground">{language.name}</div>
                                    </div>
                                </div>
                                {language.code === locale && (
                                    <Check className="w-3 h-3 text-primary" />
                                )}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        )
    }

    // Desktop variant
    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="group flex items-center space-x-2 p-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
                title={`Current language: ${currentLanguage.nativeName}`}
            >
                <Globe className="w-4 h-4" />
                <span className="text-xs font-medium hidden sm:block">{currentLanguage.flag}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <div
                className={`absolute top-full ${direction === 'rtl' ? 'left-0' : 'right-0'} mt-2 w-80 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-lg transition-all duration-200 ${
                    isOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-2"
                }`}
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
                                        >
                                            <div className="flex items-center space-x-3">
                                                <span className="text-lg">{currentLanguage.flag}</span>
                                                <div className="text-left">
                                                    <div className="text-sm font-medium">{currentLanguage.nativeName}</div>
                                                    <div className="text-xs text-primary/70">{currentLanguage.name}</div>
                                                </div>
                                            </div>
                                            <Check className="w-4 h-4" />
                                        </button>
                                    </>
                                )}

                                {/* Other Languages */}
                                {filteredLanguages.filter(lang => lang.code !== locale).length > 0 && (
                                    <>
                                        <div className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                            Available
                                        </div>
                                        {filteredLanguages
                                            .filter(lang => lang.code !== locale)
                                            .map((language) => (
                                                <button
                                                    key={language.code}
                                                    onClick={() => handleLanguageSelect(language.code)}
                                                    className="flex items-center justify-between w-full px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-150 group"
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