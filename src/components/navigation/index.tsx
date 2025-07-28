"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Menu, X, Search, Globe, Sun, Moon, User, ChevronDown } from "lucide-react"
import { createLocalizedPath } from "@/lib/utils"
import { useI18n } from "@/lib/i18n/provider"
import { useSubscription } from "@/hooks/subscription-provider"
import { usePathname } from "next/navigation"
import { LanguageSwitcher } from "../i18n/language-switcher"


export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [showAuth, setShowAuth] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const { theme, setTheme } = useTheme() // Get current theme
    const { user } = useSubscription()
    const { locale, t, direction } = useI18n()
    const pathname = usePathname()

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 20)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const createNavLink = (path: string) => createLocalizedPath(path, locale)

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    const navItems = [
        { href: "/", label: t.nav.home, isActive: pathname === "/" },
        {
            href: "/products",
            label: t.nav.products,
            isActive: pathname.startsWith("/products"),
            hasDropdown: true,
            dropdownItems: [
                { href: "/products/web", label: "Web Development" },
                { href: "/products/mobile", label: "Mobile Apps" },
                { href: "/products/ai", label: "AI Solutions" }
            ]
        },
        { href: "/pricing", label: t.nav.pricing, isActive: pathname === "/pricing" },
        { href: "/about", label: t.nav.about, isActive: pathname === "/about" }
    ]

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
                    : "bg-transparent"
                    }`}
                dir={direction}
            >
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <a
                                href={createNavLink("/")}
                                className="group flex items-center space-x-2"
                            >
                                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                    <span className="text-primary-foreground font-bold text-sm">禅</span>
                                </div>
                                <span className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                                    Dev
                                </span>
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <div key={item.href} className="relative">
                                    {item.hasDropdown ? (
                                        <div
                                            className="group"
                                            onMouseEnter={() => setActiveDropdown(item.href)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            <button
                                                className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${item.isActive
                                                    ? "text-primary bg-primary/10"
                                                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                                                    }`}
                                            >
                                                <span>{item.label}</span>
                                                <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                                            </button>

                                            {/* Dropdown Menu */}
                                            <div
                                                className={`absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-lg transition-all duration-200 ${activeDropdown === item.href
                                                    ? "opacity-100 visible translate-y-0"
                                                    : "opacity-0 invisible translate-y-2"
                                                    }`}
                                            >
                                                <div className="p-2">
                                                    {item.dropdownItems?.map((dropdownItem) => (
                                                        <a
                                                            key={dropdownItem.href}
                                                            href={dropdownItem.href}
                                                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors duration-150"
                                                        >
                                                            {dropdownItem.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <a
                                            href={createNavLink(item.href)}
                                            className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${item.isActive
                                                ? "text-primary bg-primary/10"
                                                : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                                                }`}
                                        >
                                            {item.label}
                                            {item.isActive && (
                                                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                                            )}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center space-x-2">
                            {/* Search Button */}
                            <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200 hidden sm:flex">
                                <Search className="w-4 h-4" />
                            </button>

                            {/* Theme Toggle - Fixed */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200 hidden sm:flex"
                                title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                            >
                                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                            </button>

                            {/* Language Switcher */}
                            <LanguageSwitcher />

                            {/* Auth Button / User Menu */}
                            {user ? (
                                <div className="relative">
                                    <button className="flex items-center space-x-2 p-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200">
                                        <User className="w-4 h-4" />
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setShowAuth(true)}
                                    className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md"
                                >
                                    {t.nav.signIn}
                                </button>
                            )}

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200 md:hidden"
                            >
                                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="px-4 pb-4 bg-background/95 backdrop-blur-xl border-t border-border/50">
                        <div className="space-y-2 mt-4">
                            {navItems.map((item) => (
                                <div key={item.href}>
                                    <a
                                        href={createNavLink(item.href)}
                                        className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${item.isActive
                                            ? "text-primary bg-primary/10"
                                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                                            }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                    {item.hasDropdown && (
                                        <div className="ml-4 mt-2 space-y-1">
                                            {item.dropdownItems?.map((dropdownItem) => (
                                                <a
                                                    key={dropdownItem.href}
                                                    href={dropdownItem.href}
                                                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/30 rounded-lg transition-colors duration-150"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {dropdownItem.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Mobile Actions - Fixed */}
                            <div className="pt-4 mt-4 border-t border-border/50 space-y-2">
                                <button className="flex items-center space-x-3 w-full px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200">
                                    <Search className="w-4 h-4" />
                                    <span className="text-sm">Search</span>
                                </button>

                                <button
                                    onClick={toggleTheme}
                                    className="flex items-center space-x-3 w-full px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
                                >
                                    {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                                    <span className="text-sm">
                                        {theme === "dark" ? 'Light Mode' : 'Dark Mode'}
                                    </span>
                                </button>

                                <button className="flex items-center space-x-3 w-full px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200">
                                    <Globe className="w-4 h-4" />
                                    <span className="text-sm">Language</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Overlay for mobile menu */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-background/20 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    )
}