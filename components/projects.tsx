'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { projectDemoLinks, imagePaths } from "@/data/externalLinks"
import { sectionFadeProps, fadeInUp } from "@/lib/motionConfigs"

const projects = [
  {
    title: "AI Chat Assistant",
    description:
      "Enterprise-grade conversational AI platform with multi-modal capabilities and real-time streaming.",
    image: imagePaths.eCommerceAgent,
    demoUrl: projectDemoLinks.eCommerceAgent,
    tags: ["OpenAI", "Next.js", "TypeScript", "Vercel AI SDK"],
  },
  {
    title: "Document Intelligence System",
    description: "Automated document processing and analysis using vision models and natural language understanding.",
    image: imagePaths.cinesearch,
    demoUrl: projectDemoLinks.cinesearch,
    tags: ["GPT-4V", "Python", "FastAPI", "PostgreSQL"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-[#dff2f2] scroll-mt-20">
      <motion.div {...sectionFadeProps} className="container mx-auto px-6">
        <motion.h2 className="text-3xl font-bold mb-12 text-center text-primary" {...fadeInUp()}>
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              {...fadeInUp(index * 0.1)}
            >
              <div className="relative h-44">
                <Image src={project.image || imagePaths.projectPlaceholder} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-tertiary text-white px-2.5 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-sm"
                >
                  View Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
