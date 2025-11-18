import Image from "next/image"
import { imagePaths } from "@/data/externalLinks"

export default function About() {
  return (
    <section id="about" className="py-16 bg-primary text-quaternary scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src={imagePaths.profilePortrait}
              alt="Yiğit Can Özdemir"
              width={400}
              height={400}
              className="rounded-lg mx-auto object-cover"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="mb-4">
              Hi, I'm Yiğit Can Özdemir
            </p>
            <p className="mb-4">
              Freelance AI Engineer helping clients build AI systems that are reliable in real production environments.
              I focus on RAG pipelines, LLM integration, and cloud deployment so solutions can be used in day-to-day workflows instead of remaining prototypes.
            </p>
            <p>
              Recent work:
              • Designed retrieval-augmented generation (RAG) pipelines using Redis / PostgreSQL / pgvector
              • Integrated LLMs (OpenAI, Claude & open-source models) into existing backend logic and internal workflows
              • Built API services and internal tools with FastAPI
              • Containerized and deployed applications on AWS using Docker
              • Developed clean and functional UIs with Next.js for end-to-end delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
