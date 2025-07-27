import { BlogCard } from "@/components/blog-card";
import { FloatingParticles } from "@/components/floating-particles";
import { Hero } from "@/components/hero";
import { getAllPosts } from "@/lib/posts";
import { getTranslation, validateLocale } from "@/lib/utils";

interface Props {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  const validLocale = validateLocale(locale)
  const posts = await getAllPosts()
  const t = getTranslation(validLocale)

  return (
    <div className="relative">
      <FloatingParticles />
      <Hero />
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center"> {t.blog.recentWritings}</h2>
          <div className="grid gap-8 md:gap-12">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} locale={validLocale} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}