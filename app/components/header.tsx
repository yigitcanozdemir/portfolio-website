'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Palette } from "lucide-react"
import { useTheme } from "@/app/contexts/ThemeContext"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { toggleTheme } = useTheme()

  useEffect(() => {
    const sections = ['home', 'services', 'projects', 'skills', 'experience', 'about', 'contact']

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120
      let current = 'home'

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue
        const offsetTop = element.offsetTop
        const offsetBottom = offsetTop + element.offsetHeight
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          current = section
          break
        }
      }

      const docHeight = document.body.scrollHeight
      const winHeight = window.innerHeight
      if (window.scrollY + winHeight >= docHeight - 50) {
        current = 'contact'
      }

      setActiveSection(current)
    }

    const smoothScroll = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement | null
      if (target?.hash) {
        e.preventDefault()
        const element = document.querySelector<HTMLElement>(target.hash)
        if (element) {
          const offset = 80
          const top = element.offsetTop - offset
          window.scrollTo({ top, behavior: 'smooth' })
          setActiveSection(target.hash.replace('#', ''))
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    links.forEach((link) => link.addEventListener("click", smoothScroll))

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      links.forEach((link) => link.removeEventListener("click", smoothScroll))
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
      setActiveSection(sectionId)
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Home', type: 'section' },
    { id: 'services', label: 'Services', type: 'section' },
    { id: 'projects', label: 'Projects', type: 'section' },
    { id: 'skills', label: 'Skills', type: 'section' },
    { id: 'experience', label: 'Experience', type: 'section' },
    { id: 'about', label: 'About', type: 'section' },
    { id: 'contact', label: 'Contact', type: 'section' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
      <nav className="container mx-auto px-6">
        <div className="flex justify-center items-center h-20 sm:h-24 relative">
           <button
            onClick={toggleTheme}
            className="absolute left-0 p-2 rounded-lg text-tertiary hover:bg-white/5 transition-colors"
            aria-label="Toggle theme"
          >
            <Palette className="w-5 h-5" />
          </button>
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              item.type === 'link' ? (
                <a
                  key={item.id}
                  href={item.href}
                  className="px-5 py-2 rounded-lg text-base font-medium text-tertiary/70 hover:text-tertiary hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-5 py-2 rounded-lg text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-tertiary bg-white/10'
                      : 'text-tertiary/70 hover:text-tertiary hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-tertiary"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-sm border-b border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              item.type === 'link' ? (
                <a
                  key={item.id}
                  href={item.href}
                  className="block w-full text-center px-4 py-3 rounded-lg text-base font-medium text-tertiary/70 hover:text-tertiary hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-center px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-tertiary bg-white/10'
                      : 'text-tertiary/70 hover:text-tertiary hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
