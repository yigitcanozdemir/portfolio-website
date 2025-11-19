'use client'

import { useState } from 'react'
import { Mail, Linkedin, Github, Instagram, MapPin, Phone, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { contactLinks } from '@/data/externalLinks'
import { sectionFadeProps, fadeInUp } from '@/lib/motionConfigs'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const socialLinks = [
    {
      label: 'Email',
      sublabel: contactLinks.email,
      icon: Mail,
      href: `mailto:${contactLinks.email}`,
      external: false,
    },
    {
      label: 'LinkedIn',
      sublabel: 'Connect professionally',
      icon: Linkedin,
      href: contactLinks.linkedin,
      external: true,
    },
    {
      label: 'GitHub',
      sublabel: 'View my code',
      icon: Github,
      href: contactLinks.github,
      external: true,
    },
    {
      label: 'Instagram',
      sublabel: '@yigitcanozdemir',
      icon: Instagram,
      href: contactLinks.instagram,
      external: true,
    },
  ]

  const contactDetails = [
    {
      label: 'Location',
      sublabel: contactLinks.location.label,
      icon: MapPin,
      href: contactLinks.location.mapUrl,
      external: true,
    },
    {
      label: 'Phone',
      sublabel: contactLinks.phone.label,
      icon: Phone,
      href: contactLinks.phone.href,
      external: false,
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const mailtoLink = `mailto:${contactLinks.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      
      window.location.href = mailtoLink
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-secondary text-quaternary scroll-mt-20">
      <motion.div {...sectionFadeProps} className="container mx-auto px-6">
        <motion.h2 className="text-3xl font-bold mb-4 text-center text-tertiary" {...fadeInUp()}>
          Get In Touch
        </motion.h2>
        <motion.p className="text-lg text-center mb-10 text-tertiary max-w-2xl mx-auto" {...fadeInUp(0.1)}>
          Ready to start your AI project? Let&rsquo;s discuss how I can help transform your business with intelligent automation.
        </motion.p>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <motion.div className="bg-primary p-6 rounded-xl" {...fadeInUp()}>
            <h3 className="text-xl font-bold mb-4 text-tertiary">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-tertiary">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-secondary text-tertiary border border-tertiary/20 focus:border-tertiary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-tertiary">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-secondary text-tertiary border border-tertiary/20 focus:border-tertiary focus:outline-none transition-colors"
                  placeholder={contactLinks.email}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1 text-tertiary">Subject</label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-secondary text-tertiary border border-tertiary/20 focus:border-tertiary focus:outline-none transition-colors"
                  placeholder="What&rsquo;s this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-tertiary">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-secondary text-tertiary border border-tertiary/20 focus:border-tertiary focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-tertiary text-primary px-6 py-2.5 rounded-lg font-semibold hover:bg-tertiary/80 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-tertiary text-center text-sm">Opening your email client...</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-center text-sm">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>

          <motion.div className="h-full" {...fadeInUp(0.15)}>
            <div className="flex flex-col gap-6 h-full">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <h3 className="text-xl font-bold text-tertiary">Connect With Me</h3>
                  <p className="text-sm text-tertiary/80">Choose the channel that suits you</p>
                </div>
                <div className="grid gap-3 md:grid-cols-1">
                  {socialLinks.map(({ label, sublabel, icon: Icon, href, external }) => (
                    <a
                      key={label}
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="flex w-full items-center gap-4 bg-primary p-4 rounded-xl hover:bg-tertiary hover:text-primary transition-all group shadow-lg border border-white/5"
                    >
                      <Icon className="w-6 h-6 text-tertiary group-hover:text-primary transition-colors" />
                      <div className="flex w-full items-center justify-between gap-3">
                        <span className="font-semibold text-tertiary group-hover:text-primary">{label}</span>
                        <span
                          className="text-sm text-tertiary/80 group-hover:text-primary truncate text-right"
                          title={sublabel}
                        >
                          {sublabel}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <h3 className="text-xl font-bold text-tertiary">Location & Phone</h3>
                  <p className="text-sm text-tertiary/80">Let&rsquo;s sync details when you&rsquo;re ready</p>
                </div>
                <div className="grid gap-3 md:grid-cols-1">
                  {contactDetails.map(({ label, sublabel, icon: Icon, href, external }) => (
                    <a
                      key={label}
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="flex w-full items-center gap-4 bg-primary p-4 rounded-xl hover:bg-tertiary hover:text-primary transition-all group shadow-lg border border-white/5"
                    >
                      <Icon className="w-6 h-6 text-tertiary group-hover:text-primary transition-colors" />
                      <div className="flex w-full items-center justify-between gap-3">
                        <span className="font-semibold text-tertiary group-hover:text-primary">{label}</span>
                        <span
                          className="text-sm text-tertiary/80 group-hover:text-primary truncate text-right"
                          title={sublabel}
                        >
                          {sublabel}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
