'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { imagePaths } from "@/app/data/externalLinks"
import { aboutParagraphs } from "@/app/data/about"
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
              sizes="(min-width: 1024px) 320px, (min-width: 768px) 260px, 80vw"
              loading="lazy"
            />
          </motion.div>
          <motion.div className="md:w-2/3 md:pl-12 space-y-4" {...fadeInUp(0.15)}>
            {aboutParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-tertiary">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
