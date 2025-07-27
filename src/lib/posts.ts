import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface Post {
  slug: string
  title: string
  description?: string
  date: string
  tags?: string[]
  content: string
}

const postsDirectory = path.join(process.cwd(), "src/content/posts")

export async function getAllPosts(): Promise<Post[]> {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((name) => name.endsWith(".md") || name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || slug,
        description: data.description,
        date: data.date || new Date().toISOString(),
        tags: data.tags || [],
        content,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const mdxPath = path.join(postsDirectory, `${slug}.mdx`)

    let filePath = ""
    if (fs.existsSync(fullPath)) {
      filePath = fullPath
    } else if (fs.existsSync(mdxPath)) {
      filePath = mdxPath
    } else {
      return null
    }

    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      description: data.description,
      date: data.date || new Date().toISOString(),
      tags: data.tags || [],
      content,
    }
  } catch (error) {
    return null
  }
}
