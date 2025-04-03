"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

interface ImageWrapperProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function ImageWrapper({ src, alt, width, height, className, priority }: ImageWrapperProps) {
  const [imageSrc, setImageSrc] = useState<string>("/placeholder.svg")
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    try {
      // Handle external URLs directly
      if (src.startsWith("http")) {
        setImageSrc(src)
        return
      }

      // Handle placeholder image
      if (src.includes("placeholder.svg")) {
        setImageSrc("/placeholder.svg")
        return
      }

      // For local images, preserve relative paths
      let finalPath = src
      
      // Only add images/ prefix for plain filenames without any path structure
      if (!src.includes("/") && !src.includes("\\") && !src.startsWith(".")) {
        finalPath = `/images/${src}`
      } 
      // Don't modify relative paths starting with ./ or ../
      else if (src.startsWith("./") || src.startsWith("../")) {
        finalPath = src
      }
      // Ensure absolute paths start with /
      else if (!src.startsWith("/")) {
        finalPath = `/${src}`
      }
      
      setImageSrc(finalPath)
    } catch (error) {
      console.error("Error setting image source:", error)
      setImageError(true)
    }
  }, [src])

  const handleImageError = () => {
    console.error(`Failed to load image: ${imageSrc}`)
    setImageSrc("/placeholder.svg")
    setImageError(true)
  }

  return (
    <div className="relative w-full h-full">
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={className || ""}
        priority={priority}
        onError={handleImageError}
        suppressHydrationWarning
      />
      {imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-center text-sm p-2">
          Image not found
        </div>
      )}
    </div>
  )
}

