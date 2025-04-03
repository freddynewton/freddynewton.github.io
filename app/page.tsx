"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { HydrationFix } from "@/components/hydration-fix"

export default function Home() {
  // Additional fix for hydration errors from browser extensions like Dark Reader
  useEffect(() => {
    // Run immediately to remove Dark Reader attributes
    document
      .querySelectorAll(
        "[data-darkreader-inline-stroke], [data-darkreader-inline-color], [data-darkreader-inline-outline], [data-darkreader-inline-border]",
      )
      .forEach((el) => {
        Array.from(el.attributes)
          .filter((attr) => attr.name.startsWith("data-darkreader"))
          .forEach((attr) => el.removeAttribute(attr.name))

        if (el.hasAttribute("style") && el.getAttribute("style")?.includes("--darkreader")) {
          el.removeAttribute("style")
        }
      })
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Header />
      <main className="snap-container">
        <section id="hero" className="snap-section">
          <Hero />
        </section>
        <section id="about" className="snap-section">
          <About />
        </section>
        <section id="experience" className="snap-section">
          <Experience />
        </section>
        <section id="skills" className="snap-section">
          <Skills />
        </section>
        <section id="projects" className="snap-section">
          <Projects />
        </section>
        <section id="contact" className="snap-section">
          <Contact />
        </section>
        <Footer />
      </main>
      <HydrationFix />
    </div>
  )
}

