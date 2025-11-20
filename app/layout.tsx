import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from "@/app/contexts/ThemeContext"
import './globals.css'
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yiğit Can Özdemir | AI Engineer",
  description:
    "AI Engineer specializing in RAG, LLM integration, and agentic workflows. I help businesses deploy AI systems that work reliably in the real world. Open for freelance work.",
  keywords: [
    "Freelance AI Engineer",
    "AI Engineer",
    "LLM Developer",
    "RAG Engineer",
    "AI Developer",
    "AI Solutions Developer",
    "LLM Integration",
    "Agentic AI Systems",
    "Retrieval-Augmented Generation",
    "Vector Databases",
    "FastAPI Developer",
    "Python AI Developer",
    "AI Automation",
    "AI for Business",
    "Cloud AI Systems",
  ],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-quaternary text-primary`}>
      <ThemeProvider>
        {children}
        <Analytics />
        <SpeedInsights />
      </ThemeProvider>
      </body>
    </html>
  )
}
