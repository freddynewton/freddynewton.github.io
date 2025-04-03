"use client"

import { motion } from "framer-motion"

export function Skills() {
  const skills = [
    { name: "Unity", level: 90 },
    { name: "C#", level: 90 },
    { name: "Game Development", level: 90 },
    { name: "Agile Software Development", level: 90 },
    { name: "WebXR", level: 80 },
    { name: "Mixed Reality Development", level: 75 },
    { name: "Shadergraph", level: 70 },
    { name: "Blender", level: 70 },
    { name: "Pixelart", level: 60 },
    { name: "Python", level: 60 },
    { name: "Unreal Engine", level: 50 },
    { name: "Godot", level: 40 },
  ]

  // Group skills into categories for better organization
  const skillCategories = [
    {
      name: "Development",
      skills: skills.filter((s) => ["Unity", "C#", "WebXR", "Python", "Unreal Engine", "Godot"].includes(s.name)),
    },
    {
      name: "Graphics & Design",
      skills: skills.filter((s) => ["Shadergraph", "Blender", "Pixelart"].includes(s.name)),
    },
    {
      name: "Specializations",
      skills: skills.filter((s) =>
        ["Game Development", "Mixed Reality Development", "Agile Software Development"].includes(s.name),
      ),
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            My Skills
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.name}>
              <h3 className="text-xl font-bold mb-6 border-b pb-2">{category.name}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 * (index + categoryIndex * 6) }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium">{skill.name}</h4>
                      <span className="text-sm font-medium text-primary">{skill.level}%</span>
                    </div>

                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.1 * (index + categoryIndex * 6) }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className="mt-20 p-8 border border-primary/10 rounded-lg bg-primary/5 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-4 text-center">Additional Skills & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git",
              "JIRA",
              "Visual Studio",
              "VSCode",
              "AR Foundation",
              "ARKit",
              "ARCore",
              "XR Interaction Toolkit",
              "MRTK",
              "Zenject",
              "UniRx",
              "DOTween",
              "Shader Programming",
              "CI/CD",
              "Performance Optimization",
              "Memory Profiling",
            ].map((skill, i) => (
              <div
                key={i}
                className="px-3 py-1.5 bg-muted rounded-md text-sm font-medium transition-colors hover:bg-primary/20 hover:text-primary-foreground cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

