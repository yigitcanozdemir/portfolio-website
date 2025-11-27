import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from "@/app/contexts/ThemeContext"
import './globals.css'
import type React from "react"

const inter = Inter({ subsets: ["latin"] })
const baseUrl = "https://www.yigitcanozdemir.com"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: { canonical: baseUrl },
  applicationName: "Yiğit Can Özdemir | AI Engineer",
  authors: [{ name: "Yiğit Can Özdemir", url: baseUrl }],
  title: "Yiğit Can Özdemir | AI Engineer",
  description:
    "AI engineer building AI systems that work in the real world—RAG, LLM, and agentic workflows that ship for businesses. Open to freelance projects.",
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
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: "website",
    url: baseUrl,
    siteName: "Yiğit Can Özdemir",
    title: "Yiğit Can Özdemir | AI Engineer",
    description:
      "AI engineer building AI systems that work in the real world—RAG, LLM, and agentic workflows that ship for businesses. Open to freelance projects.",
    images: [
      {
        url: `${baseUrl}/portrait.png`,
        width: 1024,
        height: 1024,
        alt: "Yiğit Can Özdemir portrait",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yiğit Can Özdemir | AI Engineer",
    description:
      "AI engineer building AI systems that work in the real world—RAG, LLM, and agentic workflows that ship for businesses. Open to freelance projects.",
    images: [`${baseUrl}/portrait.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning data-darkreader-ignore>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=sessionStorage.getItem('portfolio-theme')||'brown';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: baseUrl,
              name: "Yiğit Can Özdemir | AI Engineer",
              description:
                "AI engineer building AI systems that work in the real world—RAG, LLM, and agentic workflows that ship for businesses. Open to freelance projects.",
              inLanguage: "en",
              sameAs: [
                "https://github.com/yigitcanozdemir",
                "https://linkedin.com/in/yiğit-can-özdemir",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Yiğit Can Özdemir",
              jobTitle: "AI Engineer",
              url: baseUrl,
              image: `${baseUrl}/portrait.png`,
              sameAs: [
                "https://github.com/yigitcanozdemir",
                "https://linkedin.com/in/yiğit-can-özdemir",
                "https://www.yigitcanozdemir.com",
              ],
            }),
          }}
        />
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
