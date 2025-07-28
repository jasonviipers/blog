"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { useI18n } from "@/lib/i18n/provider"
import type { Locale } from "@/lib/i18n/config"
import { createLocalizedPath, formatDate } from "@/lib/utils"
import { Badge } from "./ui/badge"

interface BlogCardProps {
    post: {
        slug: string
        title: string
        description?: string
        date: string
        tags?: string[]
    }
    index: number
    locale: Locale
}

export function BlogCard({ post, index, locale }: BlogCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const { t } = useI18n()

    useEffect(() => {
        if (typeof window === 'undefined' || !cardRef.current) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("animate-slide-up")
                    }, index * 100)
                }
            },
            { threshold: 0.1 },
        )

        if (cardRef.current) {
            observer.observe(cardRef.current)
        }

        return () => observer.disconnect()
    }, [index])

    return (
        <article ref={cardRef} className="group translate-y-8 transition-all duration-700">
            <Link href={createLocalizedPath(`/blog/${post.slug}`, locale)} className="block">
                <div className="border-l-2 border-transparent hover:border-purple-600 transition-all duration-300 pl-6 py-4">
                    <div className="flex items-start justify-between mb-4">
                        <time dateTime={post.date} className="font-sans text-sm">
                            {formatDate(post.date, locale)}
                        </time>

                        {post.tags && (
                            <div className="flex gap-2">
                                {post.tags.slice(0, 2).map((tag) => (
                                    <Badge key={tag} variant="secondary" className="px-2 py-1 text-xs rounded-md">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl mb-4 group-hover:text-purple-600 transition-colors duration-300">
                        {post.title}
                    </h3>

                    {post.description && (
                        <p className="font-sans leading-relaxed mb-4">{post.description}</p>
                    )}

                    <div className="flex items-center text-gray-600 font-sans text-sm hover:text-purple-500 transition-colors duration-300">
                        {t.blog.readMore}
                        <svg
                            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </Link>
        </article>
    )
}
