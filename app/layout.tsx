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
    "AI Engineer building practical AI systems that actually work in the real world. I work with RAG pipelines, LLMs, and agentic workflows, helping businesses bring AI into real operations. Open to freelance projects.",
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
      { url: '/runic_y.svg', type: 'image/svg+xml' },
    ],
    apple: '/runic_y.svg',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning data-darkreader-ignore>
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body className={`${inter.className} bg-quaternary text-primary`} data-darkreader-ignore>
        <ThemeProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
