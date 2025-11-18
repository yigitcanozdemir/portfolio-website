import Image from "next/image"
import { projectDemoLinks, imagePaths } from "@/data/externalLinks"

const projects = [
  {
    title: "E-Commerce AI Agent",
    description:
      "An AI-powered assistant that helps users find products, answer queries, and makes automatic order prcessing.",
    image: imagePaths.eCommerceAgent,
    demoUrl: projectDemoLinks.eCommerceAgent,
    tags: ["OpenAI", "Next.js", "TypeScript"],
  },
  {
    title: "CineSearch",
    description: "A movie search platform leveraging GPT to provide detailed movie information and recommendations based on user queries.",
    image: imagePaths.cinesearch,
    demoUrl: projectDemoLinks.cinesearch,
    tags: ["GPT", "Python"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-[#dff2f2] scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-44">
                <Image src={project.image || imagePaths.projectPlaceholder} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-tertiary text-white px-2.5 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-sm"
                >
                  View Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
