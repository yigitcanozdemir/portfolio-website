'use client'

import { useState } from 'react'
import { Mail, Linkedin, Github, Send } from 'lucide-react'
import { contactLinks } from '@/data/externalLinks'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-secondary text-quaternary scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
        <p className="text-xl text-center mb-12 opacity-90 max-w-2xl mx-auto">
          Ready to start your AI project? Let's discuss how I can help transform your business with intelligent automation.
        </p>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-primary p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-secondary text-quaternary border border-tertiary/20 focus:border-tertiary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-secondary text-quaternary border border-tertiary/20 focus:border-tertiary focus:outline-none transition-colors"
                  placeholder={contactLinks.email}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-secondary text-quaternary border border-tertiary/20 focus:border-tertiary focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-secondary text-quaternary border border-tertiary/20 focus:border-tertiary focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-tertiary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-quaternary hover:text-primary transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-tertiary text-center">Opening your email client...</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <h3 className="text-2xl font-bold mb-2">Connect With Me</h3>
            <a
              href={`mailto:${contactLinks.email}`}
              className="flex items-center gap-4 bg-primary p-6 rounded-xl hover:bg-tertiary hover:text-primary transition-all group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-lg">Email</p>
                <p className="text-sm opacity-80">{contactLinks.email}</p>
              </div>
            </a>
            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-primary p-6 rounded-xl hover:bg-tertiary hover:text-primary transition-all group"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-lg">LinkedIn</p>
                <p className="text-sm opacity-80">Connect professionally</p>
              </div>
            </a>
            <a
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-primary p-6 rounded-xl hover:bg-tertiary hover:text-primary transition-all group"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-lg">GitHub</p>
                <p className="text-sm opacity-80">View my code</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
