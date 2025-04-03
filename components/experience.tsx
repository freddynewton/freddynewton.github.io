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
      period: "March 2024 - Present",
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
      ],
    },
    {
      title: "Virtual Engineer",
      company: "Technology and Strategy",
      period: "October 2021 - October 2023",
      description:
        "At Technology and Strategy, I worked with Mercedes-Benz Tech Motion as a Virtual Engineer, specializing in XR technologies for AR and VR solutions.",
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
      ],
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
      skills: ["C#", ".NET", "WPF", "Software feature development", "Software maintenance"],
    },
  ]

  const education = [
    {
      degree: "B.Sc. in Mobile Media (Computer Science)",
      institution: "Hochschule der Medien in Stuttgart",
      period: "September 2017 - February 2021",
      description: 'Switched to Media Informatics at the "Hochschule der Medien" in Stuttgart.',
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
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            My Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional career and academic background
          </p>
        </motion.div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-primary/10 text-primary rounded-full p-2">
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
                <Card className="border border-primary/10 overflow-hidden">
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
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-primary/10 text-primary rounded-full p-2">
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
                <Card className="border border-primary/10">
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

