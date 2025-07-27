"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      pulsePhase: number
      pulseSpeed: number
    }> = []

    // Get theme colors
    const isDark = resolvedTheme === 'dark'
    const particleColor = isDark ? 'rgba(252, 251, 247, 0.4)' : 'rgba(28, 25, 23, 0.3)'
    const glowColor = isDark ? 'rgba(180, 83, 9, 0.2)' : 'rgba(154, 52, 18, 0.1)'

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      size: Math.random() * 3 + 1.5,
      opacity: Math.random() * 0.4 + 0.2,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
    })

    const initParticles = () => {
      particles.length = 0
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 35)
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle())
      }
    }

    let animationFrame: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges with slight randomness
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.9
          particle.vx += (Math.random() - 0.5) * 0.1
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.9
          particle.vy += (Math.random() - 0.5) * 0.1
        }

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        // Update pulse animation
        particle.pulsePhase += particle.pulseSpeed
        const pulseSize = particle.size + Math.sin(particle.pulsePhase) * 0.5

        // Draw particle with glow effect
        const currentOpacity = particle.opacity + Math.sin(particle.pulsePhase * 0.5) * 0.1

        // Draw glow
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulseSize * 2, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, pulseSize * 2
        )
        gradient.addColorStop(0, glowColor)
        gradient.addColorStop(1, 'transparent')
        ctx.fillStyle = gradient
        ctx.fill()

        // Draw main particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2)
        ctx.fillStyle = particleColor.replace(/[\d.]+\)$/, `${currentOpacity})`)
        ctx.fill()

        // Connect nearby particles
        for (let j = index + 1; j < particles.length; j++) {
          const other = particles[j]
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const connectionOpacity = (1 - distance / 120) * 0.1
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = particleColor.replace(/[\d.]+\)$/, `${connectionOpacity})`)
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })

      animationFrame = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      resizeCanvas()
      initParticles()
    }

    resizeCanvas()
    initParticles()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [resolvedTheme]) // Re-run when theme changes

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1] w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 2,
        ease: "easeOut"
      }}
      style={{
        background: 'transparent'
      }}
    />
  )
}