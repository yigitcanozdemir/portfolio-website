'use client'

import { Download } from 'lucide-react'
import Image from "next/image"
import { imagePaths } from "@/data/externalLinks"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-primary text-quaternary pt-20 scroll-mt-20">
      <div className="container mx-auto px-6 py-24 md:flex md:items-center md:gap-12">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Yiğit Can Özdemir</h1>
          <h2 className="text-2xl md:text-4xl mb-8 text-tertiary font-semibold">AI Engineer</h2>
          <p className="text-xl md:text-2xl mb-10 leading-relaxed opacity-90">Build AI systems that are reliable in real production environments</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center bg-tertiary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary hover:text-quaternary transition-all hover:shadow-lg"
            >
              View my work
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 bg-secondary text-quaternary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-tertiary hover:text-primary transition-all hover:shadow-lg border-2 border-tertiary"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <Image
            src={imagePaths.profilePortrait}
            alt="Yiğit Can Özdemir"
            width={500}
            height={500}
            className="rounded-2xl mx-auto object-cover shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  )
}
