import type { Metadata } from "next"
import type { ReactNode } from "react"

const baseUrl = "https://www.yigitcanozdemir.com"

export const metadata: Metadata = {
  title: "Resume | Yiğit Can Özdemir",
  description:
    "AI engineer building AI systems that work in the real world. RAG, LLM, and agentic workflows that power your businesses. Open to freelance projects.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    type: "article",
    url: `${baseUrl}/resume`,
    title: "Resume | Yiğit Can Özdemir",
    description:
      "AI engineer building AI systems that work in the real world. RAG, LLM, and agentic workflows that power your businesses. Open to freelance projects.",
    images: [
      {
        url: `${baseUrl}/portrait.png`,
        width: 1024,
        height: 1024,
        alt: "Yiğit Can Özdemir portrait",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Resume | Yiğit Can Özdemir",
    description:
      "AI engineer building AI systems that work in the real world. RAG, LLM, and agentic workflows that power your businesses. Open to freelance projects.",
    images: [`${baseUrl}/portrait.png`],
  },
}

export default function ResumeLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
