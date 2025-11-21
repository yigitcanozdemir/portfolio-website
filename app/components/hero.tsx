'use client'

import { Download } from 'lucide-react'
import Image from "next/image"
import { motion } from "framer-motion"
import { imagePaths } from "@/app/data/externalLinks"
import { sectionFadeProps, fadeInUp } from "@/lib/motionConfigs"

export default function Hero() {
  const heroSectionProps = {
    ...sectionFadeProps,
    viewport: { once: true, amount: 0.05 },
  }

  const heroFadeIn = (delay = 0) => ({
    ...fadeInUp(delay),
    viewport: { once: true, amount: 0.05 },
  })

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-primary text-quaternary pt-16 sm:pt-20 scroll-mt-20">
      <motion.div
        {...heroSectionProps}
        className="container mx-auto px-6 py-16 sm:py-20 flex flex-col-reverse gap-10 md:flex-row md:items-center md:gap-12"
      >
        <motion.div className="md:w-1/2 space-y-5 text-center md:text-left" {...heroFadeIn()}>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-tertiary">
            Yiğit Can Özdemir
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-tertiary font-semibold">AI Engineer</h2>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-tertiary">
            Building AI systems that work in the real world
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center bg-tertiary text-primary px-6 sm:px-7 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-secondary hover:text-tertiary transition-all hover:shadow-lg"
            >
              View my work
            </a>
            <a
              href="/resume"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-tertiary px-6 sm:px-7 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-tertiary hover:text-primary transition-all hover:shadow-lg border-2 border-tertiary"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </motion.div>
        <motion.div className="md:w-1/2 flex justify-center mt-10 md:mt-0" {...heroFadeIn(0.1)}>
          <Image
            src={imagePaths.profilePortrait}
            alt="Yiğit Can Özdemir"
            width={500}
            height={500}
            className="rounded-2xl mx-auto object-cover shadow-2xl w-full max-w-[260px] sm:max-w-[380px] md:max-w-[500px]"
            sizes="(min-width: 1024px) 500px, (min-width: 768px) 380px, 90vw"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
