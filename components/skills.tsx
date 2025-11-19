'use client'

import { motion } from "framer-motion"
import { sectionFadeProps, fadeInUp } from "@/lib/motionConfigs"

const skills = [
  { name: "Python", level: 95 },
  { name: "TensorFlow & PyTorch", level: 90 },
  { name: "LangChain & LlamaIndex", level: 85 },
  { name: "OpenAI & Anthropic APIs", level: 90 },
  { name: "Next.js & React", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "FastAPI & Node.js", level: 85 },
  { name: "PostgreSQL & Vector DBs", level: 80 },
]

const additionalSkills = [
  "Docker & Kubernetes",
  "AWS & Google Cloud",
  "Git & GitHub Actions",
  "Pinecone & Weaviate",
  "Hugging Face Transformers",
  "Scikit-learn & Pandas",
  "Redis & MongoDB",
  "Prompt Engineering",
  "RAG Systems",
  "MLOps & Model Deployment",
  "REST & GraphQL APIs",
  "Nginx & Load Balancing"
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-tertiary text-primary scroll-mt-20">
      <motion.div {...sectionFadeProps} className="container mx-auto px-6">
        <motion.h2 className="text-3xl font-bold mb-16 text-center" {...fadeInUp()}>
          My Skills
        </motion.h2>
        
        {/* Core Skills with Progress Bars */}
        <motion.div className="max-w-5xl mx-auto mb-16" {...fadeInUp(0.1)}>
          <h3 className="text-2xl font-bold mb-8 text-center">Core Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div key={index} className="mb-2" {...fadeInUp(index * 0.05)}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-primary/30 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="bg-primary h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.1, ease: "easeOut", delay: index * 0.05 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="max-w-5xl mx-auto" {...fadeInUp(0.2)}>
          <h3 className="text-2xl font-bold mb-8 text-center">Additional Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-primary/10 px-4 py-3 rounded-lg text-center font-medium transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
