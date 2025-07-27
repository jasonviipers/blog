import { compileMDX } from "next-mdx-remote/rsc"
import rehypePrettyCode from "rehype-pretty-code"
import { mdxComponents } from "@/components/mdx-components"

const rehypePrettyCodeOptions = {
  theme: {
    dark: "github-dark-dimmed",
    light: "github-light",
  },
  keepBackground: false,
  defaultLang: "plaintext",
  transformers: [
    {
      name: "remove-pre-background",
      pre(node: any) {
        delete node.properties.style
      },
    },
  ],
}

export async function compileMDXContent(source: string) {
  return await compileMDX({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
      },
    },
  })
}
