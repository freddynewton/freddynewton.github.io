"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useMobile()

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when switching from mobile to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false)
    }
  }, [isMobile])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/freddynewton", icon: <Github className="h-5 w-5" /> },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/fred-newton-akdogan-b6a775257/",
      icon: <Linkedin className="h-5 w-5" />,
    },
    { name: "Twitter", href: "https://x.com/endlessloop___", icon: <Twitter className="h-5 w-5" /> },
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        backgroundColor: isOpen 
          ? "hsl(var(--background))" 
          : scrolled 
            ? "hsla(var(--background), 0.9)" 
            : "hsla(var(--background), 0)",
        backdropFilter: !isOpen ? "blur(8px)" : "none",
        boxShadow: isOpen || scrolled ? "0 1px 3px rgba(0,0,0,0.1)" : "none"
      }}
      animate={{ 
        backgroundColor: isOpen 
          ? "hsl(var(--background))" 
          : scrolled 
            ? "hsla(var(--background), 0.9)" 
            : "hsla(var(--background), 0)",
      }}
      transition={{ duration: 0.3 }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold relative group">
          <span className="relative z-10">Fred Newton</span>
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></span>
        </Link>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="fixed inset-0 top-16 z-40 border-t border-border"
                  style={{ 
                    backgroundColor: "hsl(var(--background))",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
                    <nav className="flex flex-col space-y-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-lg font-medium px-4 py-2 rounded-md hover:bg-primary/10 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </nav>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex space-x-2">
                        {socialLinks.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                          >
                            {link.icon}
                            <span className="sr-only">{link.name}</span>
                          </Link>
                        ))}
                      </div>
                      <ModeToggle />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <div className="flex items-center space-x-4">
            <nav className="flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-primary/10 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-2 pl-4 border-l border-border">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                >
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
              <ModeToggle />
            </div>
          </div>
        )}
      </div>
    </motion.header>
  )
}

