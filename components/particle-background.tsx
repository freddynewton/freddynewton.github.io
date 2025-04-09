"use client"

import { useEffect, useRef, useState } from "react"
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseInCanvas, setIsMouseInCanvas] = useState(false)

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

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsMouseInCanvas(true)
    }

    const handleMouseLeave = () => {
      setIsMouseInCanvas(false)
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)
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

        // Calculate distance to mouse for highlighting
        let distanceToMouse = Infinity
        if (isMouseInCanvas) {
          const dx = mousePosition.x - particle.x
          const dy = mousePosition.y - particle.y
          distanceToMouse = Math.sqrt(dx * dx + dy * dy)
        }
        const isHighlighted = distanceToMouse < 120

        // Draw particle
        ctx.beginPath()
        ctx.arc(
          particle.x, 
          particle.y, 
          isHighlighted ? particle.size * 1.5 : particle.size, 
          0, 
          Math.PI * 2
        )

        // Set color based on theme with gradient
        // Reduced transparency by 20% (multiplier 0.8)
        const color = theme === "dark" ? "144, 238, 144" : "0, 128, 0" // Light green or dark green
        const particleOpacity = isHighlighted 
          ? Math.min(1, particle.opacity * 2) // Brighter when highlighted
          : particle.opacity * 1.3 * 0.8 // Increased opacity but reduced by 20%
        
        ctx.fillStyle = `rgba(${color}, ${particleOpacity})`
        ctx.fill()
      }

      // Draw connections between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) { // Increased connection distance
            // Check if either particle is near mouse
            let isNearMouse = false
            if (isMouseInCanvas) {
              const d1 = Math.sqrt(
                Math.pow(mousePosition.x - particles[i].x, 2) + 
                Math.pow(mousePosition.y - particles[i].y, 2)
              )
              const d2 = Math.sqrt(
                Math.pow(mousePosition.x - particles[j].x, 2) + 
                Math.pow(mousePosition.y - particles[j].y, 2)
              )
              isNearMouse = d1 < 120 || d2 < 120
            }

            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)

            // Set line color based on theme with opacity based on distance
            // Reduced transparency by 20% (multiplier 0.8)
            const baseOpacity = 0.25 * (1 - distance / 150) * 0.8
            const opacity = isNearMouse ? baseOpacity * 2 : baseOpacity
            const color = theme === "dark" ? "144, 238, 144" : "0, 128, 0"
            
            ctx.strokeStyle = `rgba(${color}, ${opacity})`
            ctx.lineWidth = isNearMouse ? 1.2 : 0.8
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
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationId)
    }
  }, [theme, mousePosition, isMouseInCanvas])

  // pointer-events-none ensures it doesn't interfere with clicking
  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-9 opacity-68 pointer-events-none" aria-hidden="true" />
}

