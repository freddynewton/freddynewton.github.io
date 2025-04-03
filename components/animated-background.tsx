"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  alpha: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Create particles
    const particles: Particle[] = []
    const particleCount = Math.min(100, window.innerWidth / 15)

    // Get colors based on theme
    const getColors = () => {
      if (theme === "dark") {
        return ["#4D84FF", "#84ADFF", "#84A9FF", "#6690FF"]
      }
      return ["#4D84FF", "#2563EB", "#1E40AF", "#3B82F6"]
    }

    const colors = getColors()

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.1,
      })
    }

    // Animation loop
    const animate = () => {
      // Create a semi-transparent background to create trail effect
      ctx.fillStyle = theme === "dark" ? "rgba(18, 24, 38, 0.05)" : "rgba(255, 255, 255, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        // Move particles
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        const rgbaColor = particle.color.replace(")", `, ${particle.alpha})`).replace("rgb", "rgba")
        ctx.fillStyle = particle.color.startsWith("#")
          ? `${particle.color}${Math.floor(particle.alpha * 255)
              .toString(16)
              .padStart(2, "0")}`
          : rgbaColor
        ctx.fill()
      })

      // Draw connections
      particles.forEach((particleA, i) => {
        particles.slice(i + 1).forEach((particleB) => {
          const dx = particleA.x - particleB.x
          const dy = particleA.y - particleB.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particleA.x, particleA.y)
            ctx.lineTo(particleB.x, particleB.y)
            const alpha = 0.15 * (1 - distance / 120)
            ctx.strokeStyle = theme === "dark" ? `rgba(77, 132, 255, ${alpha})` : `rgba(37, 99, 235, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    // Handle theme changes
    const updateColors = () => {
      const newColors = getColors()
      particles.forEach((particle) => {
        particle.color = newColors[Math.floor(Math.random() * newColors.length)]
      })
    }

    const observer = new MutationObserver(() => {
      updateColors()
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
      observer.disconnect()
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" aria-hidden="true" />
}

