import { Brain, Code, Sparkles, Database, Zap, LineChart } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML Development",
      description: "Build production-ready AI systems that solve real business problems with measurable impact.",
      features: [
        "Custom machine learning model development",
        "Computer vision and NLP solutions",
        "Model optimization and deployment",
        "MLOps pipeline implementation"
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "LLM Integration",
      description: "Integrate powerful language models into your applications with robust error handling and monitoring.",
      features: [
        "GPT, Claude, and Gemini integration",
        "Custom prompt engineering",
        "RAG system development",
        "Agent-based AI architectures"
      ]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI Automation",
      description: "Automate complex workflows and processes using cutting-edge AI to boost productivity and efficiency.",
      features: [
        "Workflow automation with AI agents",
        "Document processing and analysis",
        "Intelligent data extraction",
        "Process optimization consulting"
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      description: "Design and build scalable data infrastructure to power your AI and analytics initiatives.",
      features: [
        "Data pipeline architecture",
        "Vector database implementation",
        "Real-time data processing",
        "Data warehouse optimization"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI API Development",
      description: "Create fast, scalable APIs that serve AI models with high availability and low latency.",
      features: [
        "RESTful and GraphQL API design",
        "Microservices architecture",
        "Authentication and rate limiting",
        "API documentation and monitoring"
      ]
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "AI Consulting",
      description: "Strategic guidance on AI adoption, implementation strategies, and technology stack selection.",
      features: [
        "AI readiness assessment",
        "Technology stack recommendations",
        "Implementation roadmap planning",
        "Team training and knowledge transfer"
      ]
    }
  ]

  return (
    <section id="services" className="py-16 bg-secondary text-quaternary scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="text-xl text-quaternary/80">What I Offer</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-primary p-8 rounded-xl transition-all">
              <div className="flex flex-col gap-6">
                <div className="p-4 bg-tertiary/10 text-tertiary rounded-xl w-fit">
                  {service.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-tertiary">{service.title}</h3>
                  <p className="leading-relaxed text-white/90">{service.description}</p>
                  <ul className="space-y-2 pt-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-tertiary mt-1 shrink-0">●</span>
                        <span className="text-sm text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
