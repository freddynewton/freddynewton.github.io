"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"

export function Experience() {
  const workExperience = [
    {
      title: "Unity Game Developer",
      company: "superswipe.games",
      period: "March 2025 - Present",
      description: "Working as a Unity Game Developer in a part-time remote position.",
      responsibilities: [
        "Developing mobile games utilizing Unity Cloud Services",
        "Implementing interactive gameplay features and optimizing game performance",
        "Collaborating with cross-functional teams to design and implement game mechanics",
        "Conducting testing and debugging to ensure smooth gameplay experience",
        "Managing project timelines and milestones to deliver high-quality games on schedule",
      ],
      skills: [
        "Unity",
        "C#",
        "Unity Cloud Services",
        "Game Development",
        "Performance Optimization",
        "Cross-functional Collaboration",
        "Debugging",
        "Agile Development",
        "Legacy Code Maintenance",
        "Git",
      ],
    },
    {
      title: "Virtual Engineer | Augmented Reality Developer",
      company: "Technology and Strategy",
      period: "October 2021 - October 2024",
      description:
        "At Technology and Strategy, I worked at Mercedes-Benz Tech Motion as a Virtual Engineer | Augmented Reality Developer, specializing in XR technologies for AR and VR solutions.",
      responsibilities: [
        "Implemented localization solutions for XR platforms, integrating modular localization with backend systems",
        "Enhanced performance and minimized memory usage on HoloLens and iOS platforms",
        "Built and deployed robust applications for HoloLens and iOS",
        "Integrated and maintained MRTK 3.0 for HoloLens applications",
        "Optimized model tracking functionality on HoloLens and iOS with the VisionLib SDK",
        "Managed custom client projects, handling requirement gathering and roadmap creation",
        "Removed technical debt to improve codebase quality and maintainability",
      ],
      skills: [
        "Unity",
        "C#",
        "VisionLib SDK",
        "MRTK 3.0",
        "Zenject",
        "UniRx",
        "Microsoft HoloLens",
        "AR/VR",
        "iOS development",
        "xCode",
        "Software architecture",
        "Clean Code",
        "Performance optimization",
        "Git",
        "NuGet",
        "Visual Studio",
        "Agile/Scrum",
        "JIRA",
        "Confluence",
        "Localization",
        "Modular localization",
        "Backend integration",
        "Memory optimization",
        "Model tracking",
        "Client project management",
        "Requirement gathering",
      ],
      projects: [
        {
          title: "Mercedes-Benz Tech Motion XR Projects",
          url: "https://www.mercedes-benz-tech-motion.com/PROJECTS-PRODUCTS/"
        },
        {
          title: "Mercedes-Benz Tech Motion Demo Video",
          url: "https://youtu.be/4wiog1XajxE?si=-02LXj5p3AB-yFc2&t=276"
        }
      ]
    },
    {
      title: "Unity Developer - Student Trainee",
      company: "FRIDIE",
      period: "February 2021 - September 2021",
      description: "Developed Unity prototypes and delivered final products for clients as a student assistant.",
      responsibilities: [
        "Created an interactive advertising experience for an automotive manufacturer using the Wii Fit Board",
        "Generated Point Clouds and developed prototypes using Azure Kinect",
        "Developed WebXR applications for both iOS and Android using the WebXR Unity SDK, Three.js and Aframe.js",
      ],
      skills: [
        "Unity",
        "Wii Fit Board",
        "Azure Kinect",
        "Point Cloud generation",
        "WebXR Unity SDK",
        "Three.js",
        "Aframe.js",
        "iOS and Android development",
        "Prototyping",
        "Interactive Advertising",
        "Client project development",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Bosch",
      period: "September 2019 - March 2020",
      description: "Contributed to software development using C# .NET and WPF during my mandatory internship.",
      responsibilities: [
        "Added new features to existing software solutions",
        "Maintained and improved the software to ensure optimal performance and functionality",
      ],
      skills: ["C#", ".NET", "WPF", "Software feature development", "Software maintenance", "Code Generation"],
    },
  ]

  const education = [
    {
      degree: "B.Sc. in Media Informatics",
      institution: "Hochschule der Medien in Stuttgart",
      period: "September 2017 - February 2021",
      description: "Started in Mobile Media and switched to Media Informatics. Graduated with a final grade of 1.8. Focused on Game Development, VR Development, and AI throughout my studies.",
    },
    {
      degree: "University Entrance Qualification in Business Administration",
      institution: "Andreas-Schneider-Schule in Sontheim",
      period: "September 2016 - August 2017",
      description: "Obtained the university entrance qualification at the Andreas-Schneider-Schule in Sontheim.",
    },
    {
      degree: "Intermediate Secondary School Leaving Certificate",
      institution: "Heinrich-von-Kleist-Realschule in Heilbronn",
      period: "September 2007 - August 2013",
      description:
        "Completed the Intermediate Secondary School Leaving Certificate at the Heinrich-von-Kleist-Realschule in Heilbronn.",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30 relative">
      {/* Remove the overall blur and keep the semi-transparent background */}
      <div className="absolute inset-0 bg-background/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3 backdrop-blur-md">
            My Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional career and academic background
          </p>
        </motion.div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-primary/10 text-primary rounded-full p-2 backdrop-blur-md">
              <Briefcase className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Work Experience</h3>
          </div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {workExperience.map((job, index) => (
              <motion.div key={index} variants={itemVariants}>
                {/* Apply the backdrop blur only to the card */}
                <Card className="border border-primary/10 overflow-hidden backdrop-blur-md bg-background/50">
                  <CardHeader className="bg-primary/5 pb-4">
                    <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
                      <div>
                        <CardTitle className="text-xl font-bold">{job.title}</CardTitle>
                        <p className="text-primary font-medium mt-1">{job.company}</p>
                      </div>
                      <Badge variant="outline" className="w-fit flex items-center gap-1.5 px-3 py-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {job.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <p className="text-muted-foreground">{job.description}</p>

                    {job.responsibilities && (
                      <div>
                        <h4 className="font-semibold mb-2 text-lg">Key Responsibilities:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          {job.responsibilities.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {job.skills && (
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Skills & Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, i) => (
                            <Badge key={i} variant="secondary" className="bg-secondary/50 text-secondary-foreground">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {job.projects && (
                      <div className="mt-6">
                        <h4 className="font-semibold mb-3 text-lg">Project Links:</h4>
                        <div className="flex flex-wrap gap-4">
                          {job.projects.map((project, i) => (
                            <a 
                              href={project.url} 
                              key={i}
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="group transition-all hover:opacity-90"
                            >
                              <div className="w-full max-w-[200px] overflow-hidden rounded-md border border-primary/10">
                                <div className="relative aspect-video bg-muted/50">
                                  {project.url.includes('youtu') ? (
                                    <img 
                                      src={`https://img.youtube.com/vi/${project.url.split('v=')[1]?.split('&')[0]}/mqdefault.jpg`}
                                      alt={project.title} 
                                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                                      loading="lazy"
                                    />
                                  ) : (
                                    <div className="w-full h-full flex items-center justify-center p-4 bg-primary/5">
                                      <div className="text-primary text-sm text-center font-medium">
                                        {project.title}
                                      </div>
                                    </div>
                                  )}
                                </div>
                                <div className="p-2 bg-secondary/30 text-xs font-medium text-center truncate">
                                  {project.title}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-primary/10 text-primary rounded-full p-2 backdrop-blur-md">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Education</h3>
          </div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                {/* Apply the backdrop blur only to the card */}
                <Card className="border border-primary/10 backdrop-blur-md bg-background/50">
                  <CardHeader className="bg-primary/5 pb-4">
                    <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
                      <div>
                        <CardTitle className="text-xl font-bold">{edu.degree}</CardTitle>
                        <p className="text-primary font-medium mt-1">{edu.institution}</p>
                      </div>
                      <Badge variant="outline" className="w-fit flex items-center gap-1.5 px-3 py-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {edu.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

