"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Gamepad2, Code, Glasses, Brain } from "lucide-react"

export function About() {
  const services = [
    {
      icon: <Glasses className="h-10 w-10" />,
      title: "XR Development",
      description: "Specialized in creating immersive XR experiences for iOS and HoloLens platforms.",
    },
    {
      icon: <Gamepad2 className="h-10 w-10" />,
      title: "Unity Development",
      description: "Expert in Unity engine for game and application development across multiple platforms.",
    },
    {
      icon: <Brain className="h-10 w-10" />,
      title: "Game Development",
      description: "Passionate about creating engaging games and participating in Game Jams.",
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Software Engineering",
      description: "Experienced in C#, .NET, and various other technologies for robust software solutions.",
    },
  ]

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Child variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div id="about" className="min-h-screen flex flex-col justify-center py-16 md:py-24 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-primary/5 to-background opacity-40"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Unity Developer & XR Specialist</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating immersive experiences that blend virtual and physical worlds
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-6 mb-12 md:mb-16">
          {/* Text content stays the same */}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border border-primary/10 bg-background/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

