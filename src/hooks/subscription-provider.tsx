"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface SubscriptionTier {
  id: string
  name: string
  price: number
  interval: "month" | "year"
  features: string[]
  popular?: boolean
}

interface User {
  id: string
  email: string
  name?: string
  subscription?: {
    tier: string
    status: "active" | "canceled" | "past_due"
    currentPeriodEnd: Date
  }
  usage?: {
    aiMessages: number
    searches: number
    downloads: number
    lastReset: Date
  }
}

interface SubscriptionContextType {
  user: User | null
  subscriptionTiers: SubscriptionTier[]
  isSubscribed: boolean
  isLoading: boolean
  hasAccess: (feature: string) => boolean
  canUseFeature: (feature: string, currentUsage?: number) => { allowed: boolean; limit?: number; remaining?: number }
  subscribe: (tierId: string) => Promise<void>
  cancelSubscription: () => Promise<void>
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  incrementUsage: (type: "aiMessages" | "searches" | "downloads") => void
}

const SubscriptionContext = createContext<SubscriptionContextType | null>(null)

const SUBSCRIPTION_TIERS: SubscriptionTier[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    interval: "month",
    features: [
      "Access to public posts",
      "Basic search functionality (10/day)",
      "AI chat (5 messages/day)",
      "Community access",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 9,
    interval: "month",
    features: [
      "All free features",
      "Premium posts & tutorials",
      "Unlimited AI chat",
      "Advanced search functionality",
      "Code templates & snippets",
      "Priority support",
      "Ad-free experience",
      "Download access",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: 19,
    interval: "month",
    features: [
      "All Pro features",
      "1-on-1 mentoring sessions",
      "Exclusive video content",
      "Source code access",
      "Private Discord community",
      "Monthly Q&A sessions",
      "Early access to new content",
      "Custom code reviews",
    ],
  },
]

// Feature access mapping
const FEATURE_ACCESS = {
  free: {
    "Access to public posts": true,
    "Basic search functionality": true,
    "AI chat": true,
    "Community access": true,
  },
  pro: {
    "Access to public posts": true,
    "Basic search functionality": true,
    "Advanced search functionality": true,
    "AI chat": true,
    "Unlimited AI chat": true,
    "Premium posts & tutorials": true,
    "Premium content": true,
    "Pro content": true,
    "Code templates": true,
    "Priority support": true,
    "Ad-free experience": true,
    "Download access": true,
  },
  premium: {
    "Access to public posts": true,
    "Basic search functionality": true,
    "Advanced search functionality": true,
    "AI chat": true,
    "Unlimited AI chat": true,
    "Premium posts & tutorials": true,
    "Premium content": true,
    "Pro content": true,
    "Code templates": true,
    "Priority support": true,
    "Ad-free experience": true,
    "Download access": true,
    "1-on-1 mentoring sessions": true,
    "Exclusive video content": true,
    "Source code access": true,
    "Private Discord community": true,
    "Monthly Q&A sessions": true,
    "Early access to new content": true,
    "Custom code reviews": true,
  },
}

// Usage limits
const USAGE_LIMITS = {
  free: {
    aiMessages: 5,
    searches: 10,
    downloads: 0,
  },
  pro: {
    aiMessages: -1, // unlimited
    searches: -1, // unlimited
    downloads: -1, // unlimited
  },
  premium: {
    aiMessages: -1, // unlimited
    searches: -1, // unlimited
    downloads: -1, // unlimited
  },
}

interface SubscriptionProviderProps {
  children: ReactNode
}

export function SubscriptionProvider({ children }: SubscriptionProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [initialLoad, setInitialLoad] = useState(true)

  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      const response = await fetch("/api/auth/me", {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        const userData = await response.json()
        if (userData.subscription?.currentPeriodEnd) {
          userData.subscription.currentPeriodEnd = new Date(userData.subscription.currentPeriodEnd)
        }
        if (userData.usage?.lastReset) {
          userData.usage.lastReset = new Date(userData.usage.lastReset)
        }
        setUser(userData)
      } else if (response.status === 401) {
        setUser(null)
      } else {
        console.error("Auth check failed with status:", response.status)
        setUser(null)
      }
    } catch (error) {
      console.error("Auth check failed:", error)
      setUser(null)
    } finally {
      setLoading(false)
      setTimeout(() => setInitialLoad(false), 1000)
    }
  }

  const isSubscribed = user?.subscription?.status === "active" && user?.subscription?.tier !== "free"

  const hasAccess = (feature: string): boolean => {
    if (!user) return (FEATURE_ACCESS.free as Record<string, boolean>)[feature] || false

    const userTier = user.subscription?.tier || "free"
    const tierAccess = FEATURE_ACCESS[userTier as keyof typeof FEATURE_ACCESS] || {}

    return (tierAccess as Record<string, boolean>)[feature] || false
  }

  const canUseFeature = (feature: string, currentUsage = 0) => {
    if (!user) {
      const limit = USAGE_LIMITS.free[feature as keyof typeof USAGE_LIMITS.free]
      return {
        allowed: currentUsage < limit,
        limit,
        remaining: Math.max(0, limit - currentUsage),
      }
    }

    const userTier = user.subscription?.tier || "free"
    const limits = USAGE_LIMITS[userTier as keyof typeof USAGE_LIMITS]
    const limit = limits[feature as keyof typeof limits]

    // -1 means unlimited
    if (limit === -1) {
      return { allowed: true }
    }

    // Check daily usage reset
    const today = new Date().toDateString()
    const lastReset = user.usage?.lastReset?.toDateString()
    const dailyUsage = today === lastReset ? (user.usage?.[feature as keyof typeof user.usage] as number) || 0 : 0

    return {
      allowed: dailyUsage < limit,
      limit,
      remaining: Math.max(0, limit - dailyUsage),
    }
  }

  const incrementUsage = async (type: "aiMessages" | "searches" | "downloads") => {
    if (!user) return

    try {
      const response = await fetch("/api/usage/increment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ type }),
      })

      if (response.ok) {
        const updatedUsage = await response.json()
        setUser((prev) => (prev ? { ...prev, usage: updatedUsage } : null))
      }
    } catch (error) {
      console.error("Failed to increment usage:", error)
    }
  }

  const subscribe = async (tierId: string) => {
    try {
      const response = await fetch("/api/subscriptions/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ tierId }),
      })

      if (response.ok) {
        const { checkoutUrl } = await response.json()
        window.location.href = checkoutUrl
      } else {
        throw new Error("Failed to create subscription")
      }
    } catch (error) {
      console.error("Subscription failed:", error)
      throw error
    }
  }

  const cancelSubscription = async () => {
    try {
      const response = await fetch("/api/subscriptions/cancel", {
        method: "POST",
        credentials: "include",
      })

      if (response.ok) {
        await checkAuthStatus()
      } else {
        throw new Error("Failed to cancel subscription")
      }
    } catch (error) {
      console.error("Cancellation failed:", error)
      throw error
    }
  }

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        await checkAuthStatus()
        return true
      } else {
        const error = await response.json()
        console.error("Login failed:", error.error)
        return false
      }
    } catch (error) {
      console.error("Login failed:", error)
      return false
    }
  }

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      })
      setUser(null)
    } catch (error) {
      console.error("Logout failed:", error)
      setUser(null)
    }
  }

  if (initialLoad) {
    // return <PageLoader isLoading={true} message="Preparing your zen experience" />
  }

  return (
    <SubscriptionContext.Provider
      value={{
        user,
        subscriptionTiers: SUBSCRIPTION_TIERS,
        isSubscribed,
        isLoading: loading,
        hasAccess,
        canUseFeature,
        subscribe,
        cancelSubscription,
        login,
        logout,
        incrementUsage,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  )
}

export function useSubscription() {
  const context = useContext(SubscriptionContext)
  if (!context) {
    throw new Error("useSubscription must be used within SubscriptionProvider")
  }
  return context
}
