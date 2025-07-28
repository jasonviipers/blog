import { Metadata } from "next"
import { getAllPosts, getPostBySlug } from "@/lib/posts"
import { notFound } from "next/navigation"
import { compileMDXContent } from "@/lib/mdx"
import { formatDateString } from "@/lib/utils"
import { ContentGate } from "@/components/access-control/content-gate"
import { Badge } from "@/components/ui/badge"
import { DownloadGate } from "@/components/access-control/download-gate"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Your Name"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const frontmatter = post.content.match(/^---\n([\s\S]*?)\n---/)
  const isPremium = frontmatter?.[1]?.includes("premium: true") || false
  const isPro = frontmatter?.[1]?.includes('tier: "pro"') || false

  const { content } = await compileMDXContent(post.content)

  return (
    <article className="container mx-auto px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">{post.title}</h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <time dateTime={post.date} className="font-sans text-sm">
              {formatDateString(post.date)}
            </time>
            {post.tags && (
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="px-3 py-1 text-xs rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            {(isPremium || isPro) && (
              <span
                className={`px-3 py-1 text-xs rounded-full ${isPremium
                  ? "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                  : "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  }`}
              >
                {isPremium ? "Premium" : "Pro"} Content
              </span>
            )}
          </div>
          {post.description && (
            <p className="text-lg font-sans leading-relaxed">{post.description}</p>
          )}
        </header>
        <div className="prose prose-zen max-w-none">
          <ContentGate isPremium={isPremium} isPro={isPro}>
            {content}
          </ContentGate>
        </div>
      </div>
      {(isPro || isPremium) && (
        <div className="mt-12 space-y-4">
          <h3 className="font-serif text-xl text-ink dark:text-paper mb-4">Downloads & Resources</h3>

          <DownloadGate
            fileName="source-code.zip"
            fileSize="2.3 MB"
            requiredTier={isPremium ? "premium" : "pro"}
            downloadUrl="/downloads/source-code.zip"
          />

          <DownloadGate
            fileName="project-templates.zip"
            fileSize="1.8 MB"
            requiredTier={isPremium ? "premium" : "pro"}
            downloadUrl="/downloads/templates.zip"
          />

          {isPremium && (
            <DownloadGate
              fileName="exclusive-video-content.mp4"
              fileSize="156 MB"
              requiredTier="premium"
              downloadUrl="/downloads/video-content.mp4"
            />
          )}
        </div>
      )}

    </article>
  )
}
