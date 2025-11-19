'use client'

import { useState } from 'react'
import { Mail, Linkedin, Github, Send } from 'lucide-react'

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
      const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
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
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center text-tertiary">Get In Touch</h2>
        <p className="text-lg text-center mb-10 text-tertiary max-w-2xl mx-auto">
          Ready to start your AI project? Let&rsquo;s discuss how I can help transform your business with intelligent automation.
        </p>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-primary p-6 rounded-xl">
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
                  placeholder="your.email@example.com"
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
                  placeholder="What's this about?"
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
          </div>

          <div className="flex flex-col justify-center gap-4">
            <h3 className="text-xl font-bold mb-1 text-tertiary">Connect With Me</h3>
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-4 bg-primary p-4 rounded-xl hover:bg-tertiary hover:text-primary transition-all group"
            >
              <Mail className="w-6 h-6 text-tertiary group-hover:text-primary group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-tertiary group-hover:text-primary">Email</p>
                <p className="text-sm text-tertiary group-hover:text-primary">your.email@example.com</p>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-primary p-4 rounded-xl hover:bg-tertiary hover:text-primary transition-all group"
            >
              <Linkedin className="w-6 h-6 text-tertiary group-hover:text-primary group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-tertiary group-hover:text-primary">LinkedIn</p>
                <p className="text-sm text-tertiary group-hover:text-primary">Connect professionally</p>
              </div>
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-primary p-4 rounded-xl hover:bg-tertiary hover:text-primary transition-all group"
            >
              <Github className="w-6 h-6 text-tertiary group-hover:text-primary group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-tertiary group-hover:text-primary">GitHub</p>
                <p className="text-sm text-tertiary group-hover:text-primary">View my code</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
