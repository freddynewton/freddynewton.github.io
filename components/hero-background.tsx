"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full size of container
    const handleResize = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.offsetWidth
        canvas.height = container.offsetHeight
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Draw gradient background with animation
    let gradientAngle = 0

    const drawGradient = () => {
      gradientAngle = (gradientAngle + 0.2) % 360

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = Math.max(canvas.width, canvas.height) / 1.5

      // Create a more dynamic gradient
      const gradient = ctx.createRadialGradient(
        centerX + Math.cos((gradientAngle * Math.PI) / 180) * 50,
        centerY + Math.sin((gradientAngle * Math.PI) / 180) * 50,
        0,
        centerX,
        centerY,
        radius,
      )

      if (theme === "dark") {
        gradient.addColorStop(0, "rgba(34, 197, 94, 0.15)")
        gradient.addColorStop(0.5, "rgba(34, 197, 94, 0.05)")
        gradient.addColorStop(1, "rgba(34, 197, 94, 0)")
      } else {
        gradient.addColorStop(0, "rgba(34, 197, 94, 0.08)")
        gradient.addColorStop(0.5, "rgba(34, 197, 94, 0.03)")
        gradient.addColorStop(1, "rgba(34, 197, 94, 0)")
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(drawGradient)
    }

    const animationId = requestAnimationFrame(drawGradient)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" aria-hidden="true" />
}

