"use client"

import { useEffect, useRef } from "react"
import { useI18n } from "@/lib/i18n/provider"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { t } = useI18n()

  useEffect(() => {
    if (typeof window === 'undefined' || !heroRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(heroRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
          {t.hero.title.split(" ")[0]}
          <span className="block text-purple-600">{t.hero.title.split(" ").slice(1).join(" ")}</span>
        </h1>

        <p className="font-sans text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
          {t.hero.description}
        </p>

        <div className="w-24 h-0.5 bg-purple-600 mx-auto rounded-full" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500/30 rounded-full animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-500/20 rounded-full animate-float-delayed" />
    </section>
  )
}