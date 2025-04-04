"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

export function Hero() {
  // Single state to track which image is currently showing
  const [showFirstImage, setShowFirstImage] = useState(true)
  
  // Typewriter effect states
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)
  
  const phrases = [
    "Fred Newton",
    "Freddy",
    "Father",
    "Frog Enthusiast 🐸"
  ]
  
  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[textIndex]
    
    const timeout = setTimeout(() => {
      // If deleting, remove the last character
      if (isDeleting) {
        setCurrentText(currentText.substring(0, currentText.length - 1))
        setTypingSpeed(50) // Faster deletion
      } else {
        // If typing, add the next character
        setCurrentText(currentPhrase.substring(0, currentText.length + 1))
        setTypingSpeed(100) // Normal typing speed
      }
      
      // If we've completed typing the current phrase
      if (!isDeleting && currentText === currentPhrase) {
        // Wait a bit at the end of the phrase
        setTypingSpeed(1500) // Pause at the end
        setIsDeleting(true)
      } 
      // If we've deleted all characters
      else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        // Move to the next phrase
        setTextIndex((textIndex + 1) % phrases.length)
        // Small pause before starting the next word
        setTypingSpeed(300)
      }
    }, typingSpeed)
    
    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, textIndex, typingSpeed, phrases])

  const scrollToNextSection = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  // Set up the interval to flip the image every 7 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowFirstImage(prev => !prev)
    }, 7000) // Flip every 7 seconds
    
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-block mb-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm"
            >
              Unity Developer & XR Specialist
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hey, I'm{" "}
              <span className="text-primary relative min-w-[200px] inline-block">
                {currentText}
                <span className="inline-block animate-pulse ml-0.5">{!isDeleting ? "|" : ""}</span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30"></span>
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              I build immersive XR experiences and games that blend the virtual and physical worlds. Specialized in
              Unity development for iOS and HoloLens platforms. <span className="font-medium text-primary">Currently open to new opportunities!</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link href="#projects">
                <Button className="w-full sm:w-auto" size="lg">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="#contact">
                <Button variant="outline" className="w-full sm:w-auto" size="lg">
                  Contact Me
                </Button>
              </Link>

              <Link href="/Fred-Newton-Akdogan-CV.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full sm:w-auto" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex-shrink-0 w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-primary/0 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 opacity-40"></div>

            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-primary/10 shadow-2xl shadow-primary/5">
              <div className="flip-card-inner w-full h-full transition-transform duration-1000" style={{
                transformStyle: "preserve-3d",
                transform: showFirstImage ? "rotateY(0deg)" : "rotateY(180deg)"
              }}>
                <div className="flip-card-front absolute w-full h-full" style={{ 
                  backfaceVisibility: "hidden",
                  position: "absolute"
                }}>
                  <Image
                    src="/images/profile.jpg"
                    alt="Fred Newton Akdogan"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) 300px, 250px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
                </div>

                <div className="flip-card-back absolute w-full h-full" style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  position: "absolute"
                }}>
                  <Image
                    src="/images/profile2.jpg"
                    alt="Fred Newton Akdogan - Alternative"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) 300px, 250px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={scrollToNextSection}
      >
        <span className="text-sm font-medium text-muted-foreground mb-2">Scroll Down</span>
        <div className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center">
          <motion.div
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
            }}
          >
            <ChevronDown className="h-5 w-5 text-primary" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

