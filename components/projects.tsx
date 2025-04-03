"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageWrapper } from "@/components/image-wrapper" // Added import

// Add this utility function to extract YouTube video ID
function getYoutubeVideoId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : null
}

const projects = [
  {
    title: "Bloody Mess with Broomstick Barry",
    date: "Feb, 2024",
    description:
      "After leaving his apprentice Dan to clean up the Mall on his own- Barry returns to find it overrun with zombies! Battle through the mall to rescue Dan- smashing your undead foes into a bloody pulp along the way!",
    image: "broomstickBarry.gif",
    link: "https://freddynewton.itch.io/bloody-mess-with-broomstick-barry",
    category: "Games",
    tags: ["Unity", "Game Development", "Game Jam"],
  },
  {
    title: "Mixed Reality Minigolf",
    date: "Jan, 2024",
    description:
      "This video showcases a Mixed Reality project currently in development. Stay tuned for updates as it will soon be available on Sidequest!",
    image: "https://img.youtube.com/vi/BdxIdlSNxIA/maxresdefault.jpg", // YouTube thumbnail
    link: "https://www.youtube.com/shorts/BdxIdlSNxIA",
    videoId: "BdxIdlSNxIA", // Extract this from the URL
    category: "Games",
    tags: ["Mixed Reality", "Unity", "XR Development"],
    wip: true,
  },
  {
    title: "Unity Code Patterns",
    date: "Dec, 2023",
    description: "A small repository to introduce the most common code design patterns for game development.",
    image: "Screenshot 2024-12-27 172238.png",
    link: "https://github.com/freddynewton/UnityCodePatterns",
    category: "Programming",
    tags: ["Unity", "C#", "Design Patterns"],
    wip: true,
  },
  {
    title: "Bachelor Thesis",
    date: "Oct, 2021",
    description: "An in-depth study on Tactical Game AI with Shared Knowledge based on Influence Maps",
    image: "Bild_2024-06-23_105613005.png",
    link: "https://github.com/freddynewton/BachelorarbeitLatex/blob/main/Latex/template_Article.pdf",
    category: "Publications",
    tags: ["Game AI", "Research", "Influence Maps"],
  },
  {
    title: "Bone Vault",
    date: "Jan, 2021",
    description: "An atmospheric 3D pixel art Roguelike game with FPS melee fighting and with a lot of Bones 💀!",
    image: "bonevault.png",
    link: "https://freddynewton.itch.io/bone-vault",
    category: "Games",
    tags: ["Unity", "Game Development", "Pixel Art", "3D"],
  },
  {
    title: "Flocking AI",
    date: "Dec, 2020",
    description:
      "Flocking AI is a behavioral model for simulating the coordinated motion of groups of entities, such as birds or fish, by applying simple rules of separation, alignment, and cohesion to each individual.",
    image:
      "68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6c775a577a30706d6776316d326d445550422f67697068792e676966.gif",
    link: "https://github.com/freddynewton/flockingAI",
    category: "Programming",
    tags: ["Unity", "C#", "AI", "Simulation"],
  },
]

export function Projects() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen flex items-center py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            My Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A showcase of my recent work and personal projects</p>
          <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
            <AlertCircle className="w-4 h-4 mr-2" />
            Projects marked with ⚠️ are currently work in progress
          </div>
        </motion.div>

        <Tabs defaultValue="All" className="mt-12">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-muted/50 w-full max-w-md flex">
              <TabsTrigger value="All" className="flex-1 px-2 sm:px-4">
                All
              </TabsTrigger>
              <TabsTrigger value="Games" className="flex-1 px-2 sm:px-4">
                Games
              </TabsTrigger>
              <TabsTrigger value="Programming" className="flex-1 px-1 text-xs sm:text-sm sm:px-2">
                Programming
              </TabsTrigger>
              <TabsTrigger value="Publications" className="flex-1 px-1 text-xs sm:text-sm sm:px-2">
                Publications
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="All" className="mt-0">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} variants={itemVariants} />
              ))}
            </motion.div>
          </TabsContent>

          {["Games", "Programming", "Publications"].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {projects
                  .filter((project) => project.category === category)
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} variants={itemVariants} />
                  ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

interface Project {
  title: string
  date: string
  description: string
  image: string
  link: string
  category: string
  tags: string[]
  wip?: boolean
  videoId?: string // Optional YouTube video ID
}

function ProjectCard({ project, variants }: { project: Project; variants: any }) {
  const isVideo = !!project.videoId || project.link.includes("youtube.com") || project.link.includes("youtu.be")
  const videoId = project.videoId || getYoutubeVideoId(project.link)

  return (
    <motion.div variants={variants}>
      <Card className="h-full overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl border-primary/10">
        <div className="relative aspect-video overflow-hidden">
          {isVideo ? (
            // Video thumbnail with play button
            <div className="relative w-full h-full">
              <ImageWrapper
                src={project.image || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={`${project.title} video thumbnail`}
                width={600}
                height={340}
                className="object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/90 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-white transform translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            // Regular image
            <ImageWrapper
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={340}
              className="object-cover transition-all duration-500 group-hover:scale-105"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="absolute bottom-4 left-4 right-4 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full shadow-lg gap-2">
                {isVideo ? "Watch Video" : "View Project"}
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <CardContent className="flex-grow p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
              {project.wip && "⚠️ "}
              {project.title}
            </h3>
            <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
              {project.date}
            </span>
          </div>
          <p className="text-muted-foreground mb-5 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, i) => (
              <Badge
                key={i}
                variant="outline"
                className="bg-primary/5 hover:bg-primary/10 transition-colors border-none"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

