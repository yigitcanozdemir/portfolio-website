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
              Hi, I&rsquo;m Yiğit Can Özdemir, a passionate freelance AI engineer with extensive experience in
              creating intelligent, functional, and production-ready AI systems.
            </p>
            <p className="text-tertiary">
              I specialize in building AI-powered applications using modern technologies like LangChain,
              OpenAI, Anthropic, and cutting-edge ML frameworks. My background in both AI/ML and full-stack development allows me to bridge the gap between
              research and production, ensuring that the systems I create not only perform exceptionally but are also maintainable and scalable.
            </p>
            <p className="text-tertiary">
              When I&rsquo;m not building AI systems, you can find me exploring new AI models and frameworks,
              contributing to open-source projects, or sharing my knowledge through the tech community.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
