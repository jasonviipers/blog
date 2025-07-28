"use client"

import type React from "react"
import { Lock, Crown, Zap } from "lucide-react"
import { useState } from "react"
import { useSubscription } from "@/hooks/subscription-provider"

interface FeatureGateProps {
  children: React.ReactNode
  feature: string
  requiredTier: "free" | "pro" | "premium"
  fallback?: React.ReactNode
  showPreview?: boolean
  previewLines?: number
}

export function FeatureGate({
  children,
  feature,
  requiredTier,
  fallback,
  showPreview = false,
  previewLines = 3,
}: FeatureGateProps) {
  const { user, hasAccess, subscriptionTiers } = useSubscription()
  const [showPricing, setShowPricing] = useState(false)
  const [showAuth, setShowAuth] = useState(false)

  // Check if user has access to this feature
  const hasFeatureAccess = hasAccess(feature)

  // If user has access, show the content
  if (hasFeatureAccess) {
    return <>{children}</>
  }

  // Get the required tier info
  const tier = subscriptionTiers.find((t) => t.id === requiredTier)
  const tierName = tier?.name || requiredTier

  // Get appropriate icon
  const getIcon = () => {
    switch (requiredTier) {
      case "pro":
        return <Zap className="w-6 h-6 text-blue-500" />
      case "premium":
        return <Crown className="w-6 h-6 text-purple-500" />
      default:
        return <Lock className="w-6 h-6 text-accent" />
    }
  }

  // Get tier color
  const getTierColor = () => {
    switch (requiredTier) {
      case "pro":
        return "border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20"
      case "premium":
        return "border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20"
      default:
        return "border-accent/20 bg-accent/5 dark:bg-accent/10"
    }
  }

  const getButtonColor = () => {
    switch (requiredTier) {
      case "pro":
        return "bg-blue-500 hover:bg-blue-600"
      case "premium":
        return "bg-purple-500 hover:bg-purple-600"
      default:
        return "bg-accent hover:bg-accent-dark"
    }
  }

  return (
    <>
      <div className="relative">
        {/* Preview content with blur effect */}
        {showPreview && (
          <div className="relative mb-4">
            <div
              className="blur-sm pointer-events-none select-none overflow-hidden"
              style={{
                maxHeight: `${previewLines * 1.5}rem`,
                WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
              }}
            >
              {children}
            </div>
          </div>
        )}

        {/* Access gate */}
        <div className={`border rounded-lg p-6 text-center ${getTierColor()}`}>
          <div className="w-16 h-16 mx-auto mb-4 bg-white dark:bg-ink rounded-full flex items-center justify-center shadow-sm">
            {getIcon()}
          </div>

          <h3 className="font-serif text-xl text-ink dark:text-paper mb-2">{tierName} Feature</h3>

          <p className="text-ink-light dark:text-paper/70 mb-4 max-w-md mx-auto">
            {fallback ||
              `This ${feature} is available to ${tierName} subscribers. Upgrade your plan to unlock this feature and many more.`}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {user ? (
              <button
                onClick={() => setShowPricing(true)}
                className={`px-6 py-3 ${getButtonColor()} text-white rounded-md transition-colors duration-200 flex items-center justify-center gap-2`}
              >
                {getIcon()}
                Upgrade to {tierName}
              </button>
            ) : (
              <>
                <button
                  onClick={() => setShowAuth(true)}
                  className={`px-6 py-3 ${getButtonColor()} text-white rounded-md transition-colors duration-200 flex items-center justify-center gap-2`}
                >
                  Sign In to Access
                </button>
                <button
                  onClick={() => setShowPricing(true)}
                  className="px-6 py-3 bg-ink/5 dark:bg-paper/5 hover:bg-ink/10 dark:hover:bg-paper/10 text-ink dark:text-paper rounded-md transition-colors duration-200"
                >
                  View Plans
                </button>
              </>
            )}
          </div>

          {tier && (
            <p className="text-xs text-ink-light dark:text-paper/70 mt-4">
              Starting at ${tier.price}/{tier.interval} • 30-day money-back guarantee
            </p>
          )}
        </div>
      </div>
{/* 
      <PricingModal isOpen={showPricing} onClose={() => setShowPricing(false)} />
      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} /> */}
    </>
  )
}
