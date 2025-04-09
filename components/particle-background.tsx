"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full window size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Create particles
    const particles: Particle[] = []
    const particleCount = Math.min(window.innerWidth / 6, 180) // More particles for better visibility

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1.2, // Larger particles for better visibility
        speedX: (Math.random() - 0.5) * 0.7 * 0.7, // 30% slower
        speedY: (Math.random() - 0.5) * 0.7 * 0.7, // 30% slower
        opacity: Math.random() * 0.7 + 0.2, // Higher opacity for better visibility
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (const particle of particles) {
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
        ctx.arc(
          particle.x, 
          particle.y, 
          particle.size,
          0, 
          Math.PI * 2
        )

        // Set color based on theme
        // Reduced transparency by 20% (multiplier 0.8)
        const color = theme === "dark" ? "144, 238, 144" : "0, 128, 0" // Light green or dark green
        const particleOpacity = particle.opacity * 0.8 // Base opacity reduced by 20%
        
        ctx.fillStyle = `rgba(${color}, ${particleOpacity})`
        ctx.fill()
      }

      // Draw connections between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) { // Connection distance
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)

            // Set line color based on theme with opacity based on distance
            // Reduced transparency by 20% (multiplier 0.8)
            const baseOpacity = 0.25 * (1 - distance / 150) * 0.8
            const color = theme === "dark" ? "144, 238, 144" : "0, 128, 0"
            
            ctx.strokeStyle = `rgba(${color}, ${baseOpacity})`
            ctx.lineWidth = 0.8 // Consistent line width
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [theme])

  // pointer-events-none ensures it doesn't interfere with clicking
  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-9 opacity-68 pointer-events-none" aria-hidden="true" />
}

