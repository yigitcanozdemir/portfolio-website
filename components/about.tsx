'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { imagePaths } from "@/data/externalLinks"
import { sectionFadeProps, fadeInUp } from "@/lib/motionConfigs"

export default function About() {
  return (
    <section id="about" className="py-16 bg-primary text-quaternary scroll-mt-20">
      <motion.div {...sectionFadeProps} className="container mx-auto px-6">
        <motion.h2 className="text-3xl font-bold mb-12 text-center text-tertiary" {...fadeInUp()}>
          About Me
        </motion.h2>
        <div className="md:flex md:items-center">
          <motion.div className="md:w-1/3 mb-8 md:mb-0" {...fadeInUp()}>
            <Image
              src={imagePaths.profilePortrait}
              alt="Yiğit Can Özdemir"
              width={400}
              height={400}
              className="rounded-lg mx-auto object-cover"
            />
          </motion.div>
          <motion.div className="md:w-2/3 md:pl-12 space-y-4" {...fadeInUp(0.15)}>
            <p className="text-tertiary">
              I help startups and businesses turn their AI ideas into reliable, production-ready systems. My focus is on 
              practical, real-world solutions built with RAG pipelines, LLM integration, and agentic workflows that support 
              actual users and day-to-day operations.
            </p>

            <p className="text-tertiary">
              Over the past years, I’ve designed retrieval systems with PostgreSQL, Redis and pgvector, integrated LLMs like 
              OpenAI, Claude and open-source models into backend workflows, developed FastAPI services, deployed applications 
              on AWS with Docker and created clean interfaces with Next.js for end-to-end delivery.
            </p>

            <p className="text-tertiary">
              Before freelancing, I worked as an AI Engineer in industrial automation where I built predictive maintenance 
              models, computer vision tools and real-time monitoring dashboards for steel production lines. Working in this 
              environment taught me how to design AI systems that stay stable under noisy data, strict uptime requirements 
              and real operational constraints.
            </p>

            <p className="text-tertiary">
              My approach is straightforward: use LLMs where they bring real value, keep the core logic deterministic and 
              observable and ensure the system remains maintainable long after deployment.
            </p>

            <p className="text-tertiary">
              If you’re a business looking to bring AI into real operations, I’d be glad to talk. We can explore your 
              challenges and see how reliable RAG systems, LLMs or agentic workflows could help move your business forward.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
