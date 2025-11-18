'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'projects', 'skills', 'about', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    const smoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          })
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => link.addEventListener("click", smoothScroll as any))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      links.forEach((link) => link.removeEventListener("click", smoothScroll as any))
    }
  }, [])

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
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
      <nav className="container mx-auto px-6">
        <div className="flex justify-center items-center h-20 sm:h-24">
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-5 py-2 rounded-lg text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-tertiary bg-white/10'
                    : 'text-quaternary/80 hover:text-quaternary hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-quaternary"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-sm border-b border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-center px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-tertiary bg-white/10'
                    : 'text-quaternary/80 hover:text-quaternary hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
