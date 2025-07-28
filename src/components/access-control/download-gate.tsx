"use client"

import { useSubscription } from "@/hooks/subscription-provider"
import { Download, Lock } from "lucide-react"
import { useState } from "react"

interface DownloadGateProps {
  fileName: string
  fileSize: string
  requiredTier: "pro" | "premium"
  downloadUrl?: string
}

export function DownloadGate({ fileName, fileSize, requiredTier, downloadUrl }: DownloadGateProps) {
  const { hasAccess } = useSubscription()
  const [showPricing, setShowPricing] = useState(false)

  const hasDownloadAccess = hasAccess("Code templates") || hasAccess("Source code access")

  const handleDownload = () => {
    if (hasDownloadAccess && downloadUrl) {
      // In a real app, this would trigger the download
      window.open(downloadUrl, "_blank")
    } else {
      setShowPricing(true)
    }
  }

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-ink/5 dark:bg-paper/5 border border-ink/10 dark:border-paper/10 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent/10 dark:bg-accent/20 rounded-lg flex items-center justify-center">
            <Download className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h4 className="font-medium text-ink dark:text-paper">{fileName}</h4>
            <p className="text-sm text-ink-light dark:text-paper/70">{fileSize}</p>
          </div>
        </div>

        <button
          onClick={handleDownload}
          className={`px-4 py-2 rounded-md transition-colors duration-200 flex items-center gap-2 ${
            hasDownloadAccess
              ? "bg-accent hover:bg-accent-dark text-white"
              : "bg-ink/10 dark:bg-paper/10 text-ink-light dark:text-paper/70 hover:bg-ink/20 dark:hover:bg-paper/20"
          }`}
        >
          {hasDownloadAccess ? (
            <>
              <Download className="w-4 h-4" />
              Download
            </>
          ) : (
            <>
              <Lock className="w-4 h-4" />
              {requiredTier === "premium" ? "Premium" : "Pro"} Only
            </>
          )}
        </button>
      </div>

      {/* <PricingModal isOpen={showPricing} onClose={() => setShowPricing(false)} /> */}
    </>
  )
}
