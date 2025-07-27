"use client"

import type { ReactNode } from "react"
import { CopyButton } from "./copy-button"

interface CodeBlockProps {
  children: ReactNode
  className?: string
  raw?: string
}

export function CodeBlock({ children, className, raw, ...props }: CodeBlockProps) {
  const getTextContent = (node: ReactNode): string => {
    if (typeof node === "string") return node
    if (typeof node === "number") return node.toString()
    if (Array.isArray(node)) return node.map(getTextContent).join("")
    if (node && typeof node === "object" && "props" in node) {
      return getTextContent((node as { props: { children: ReactNode } }).props.children)
    }
    return ""
  }

  const textContent = raw || getTextContent(children)

  return (
    <div className="relative group">
      <pre
        className="bg-ink/5 p-6 rounded-lg overflow-x-auto mb-6 border border-ink/10 [&>code]:bg-transparent [&>code]:p-0 font-mono text-sm leading-relaxed"
        {...props}
      >
        {children}
      </pre>
      <CopyButton text={textContent} />
    </div>
  )
}
