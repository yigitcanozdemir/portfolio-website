import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yiğit Can Özdemir - Freelance AI Engineer",
  description:
    "Portfolio of Yiğit Can Özdemir, a professional Freelance AI Engineer specializing in AI/ML development, LLM integration, and intelligent automation systems.",
  keywords: ['AI Engineer', 'Machine Learning', 'LLM Integration', 'AI Automation', 'Freelance AI Developer'],
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
