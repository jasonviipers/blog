"use client"

import type React from "react"
import { FeatureGate } from "./feature-gate"

interface ContentGateProps {
  children: React.ReactNode
  isPremium?: boolean
  isPro?: boolean
  showPreview?: boolean
  previewLines?: number
}

export function ContentGate({
  children,
  isPremium = false,
  isPro = false,
  showPreview = true,
  previewLines = 4,
}: ContentGateProps) {
  if (isPremium) {
    return (
      <FeatureGate
        feature="Premium content"
        requiredTier="premium"
        showPreview={showPreview}
        previewLines={previewLines}
        fallback="This premium content includes exclusive tutorials, advanced techniques, and insider insights available only to Premium subscribers."
      >
        {children}
      </FeatureGate>
    )
  }

  if (isPro) {
    return (
      <FeatureGate
        feature="Pro content"
        requiredTier="pro"
        showPreview={showPreview}
        previewLines={previewLines}
        fallback="This pro content includes detailed tutorials, code examples, and advanced development techniques available to Pro subscribers."
      >
        {children}
      </FeatureGate>
    )
  }

  return <>{children}</>
}
