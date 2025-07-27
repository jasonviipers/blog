"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

interface CopyButtonProps {
  text: string
}

export function CopyButton({ text }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <button
      onClick={copyToClipboard}
      className="copy-button absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-ink/10 dark:bg-paper/10 hover:bg-ink/20 dark:hover:bg-paper/20 text-ink-light dark:text-paper/70 hover:text-ink dark:hover:text-paper px-3 py-1.5 rounded-md text-xs font-sans flex items-center gap-1.5 backdrop-blur-sm border border-ink/10 dark:border-paper/10"
      title={isCopied ? "Copied!" : "Copy code"}
    >
      {isCopied ? (
        <>
          <Check className="w-3 h-3" />
          Copied
        </>
      ) : (
        <>
          <Copy className="w-3 h-3" />
          Copy
        </>
      )}
    </button>
  )
}
