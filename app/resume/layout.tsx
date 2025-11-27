import type { Metadata } from "next"
import type { ReactNode } from "react"

const baseUrl = "https://yigitcanozdemir.com"

export const metadata: Metadata = {
  title: "Resume | Yiğit Can Özdemir",
  description:
    "Download the resume of Yiğit Can Özdemir, AI Engineer focused on RAG pipelines, LLMs, and agentic workflows that ship.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    type: "article",
    url: `${baseUrl}/resume`,
    title: "Resume | Yiğit Can Özdemir",
    description:
      "Experience, projects, and skills of AI Engineer Yiğit Can Özdemir.",
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
    card: "summary_large_image",
    title: "Resume | Yiğit Can Özdemir",
    description:
      "Experience, projects, and skills of AI Engineer Yiğit Can Özdemir.",
    images: [`${baseUrl}/portrait.png`],
  },
}

export default function ResumeLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
