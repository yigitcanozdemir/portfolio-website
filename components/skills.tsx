const skills = [
  { name: "Python", level: 95 },
  { name: "TensorFlow & PyTorch", level: 90 },
  { name: "LangChain & LlamaIndex", level: 85 },
  { name: "OpenAI & Anthropic APIs", level: 90 },
  { name: "Next.js & React", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "FastAPI & Node.js", level: 85 },
  { name: "PostgreSQL & Vector DBs", level: 80 },
]

const additionalSkills = [
  "Docker & Kubernetes",
  "AWS & Google Cloud",
  "Git & GitHub Actions",
  "Pinecone & Weaviate",
  "Hugging Face Transformers",
  "Scikit-learn & Pandas",
  "Redis & MongoDB",
  "Prompt Engineering",
  "RAG Systems",
  "MLOps & Model Deployment",
  "REST & GraphQL APIs",
  "Nginx & Load Balancing"
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-tertiary text-primary scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center">My Skills</h2>
        
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Core Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-primary/30 rounded-full h-3">
                  <div className="bg-primary h-3 rounded-full transition-all" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Additional Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-primary/10 px-4 py-3 rounded-lg text-center font-medium transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
