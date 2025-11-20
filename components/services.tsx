'use client'

import { Brain, Code, Sparkles, Database, Zap, LineChart } from 'lucide-react'
import { motion } from 'framer-motion'
import { sectionFadeProps, fadeInUp } from '@/lib/motionConfigs'

export default function Services() {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "RAG & LLM Systems",
      description:
        "AI that works in the real world. I build robust retrieval and multi-model workflows that integrate reliably into production systems.",
      features: [
        "RAG pipelines using Redis, PostgreSQL & pgvector",
        "Multi-step agentic flows with structured control",
        "Custom evaluation & observability for LLM behavior",
        "LLM integration for internal workflows & automation"
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Agentic Automation",
      description:
        "End-to-end agent systems that coordinate multiple LLM calls, tools, APIs, and business logic with deterministic guardrails.",
      features: [
        "Multi-LLM orchestrations with fallbacks",
        "Tool-using agent architectures",
        "Task routing, memory & workflow management",
        "Error-handled, production-safe execution layers"
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend & API Engineering",
      description:
        "Fast, stable backend services engineered for AI workloads, designed to run reliably in production environments.",
      features: [
        "FastAPI microservices for AI workloads",
        "LLM-serving endpoints",
        "Authentication, rate limiting & monitoring",
        "AWS-ready Dockerized deployments"
      ]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Frontend Development",
      description:
        "Modern, clean Next.js interfaces for AI products, dashboards, internal tools, and end-user applications.",
      features: [
        "Next.js dashboards & admin panels",
        "Full-stack AI app delivery",
        "API integration with LLM/RAG systems",
        "Responsive UI with smooth UX"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI/ML Development",
      description:
        "ML models and pipelines tailored for real-world environments, using robust engineering and validation practices.",
      features: [
        "Predictive modeling (regression, classification, LSTM)",
        "Computer vision tools with OpenCV",
        "Real-world data preprocessing & cleaning",
        "Deployment-ready ML pipelines"
      ]
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Cloud Deployment",
      description:
        "Reliable production deployments built for performance, stability, and maintainability.",
      features: [
        "AWS deployment with Docker",
        "Container orchestration",
        "Load balancing & environment setup",
        "CI/CD with GitHub Actions"
      ]
    }
  ]

  return (
    <section id="services" className="py-16 bg-secondary text-quaternary scroll-mt-20">
      <motion.div {...sectionFadeProps} className="container mx-auto px-6">
        <motion.div className="text-center mb-12" {...fadeInUp()}>
          <h2 className="text-3xl font-bold mb-4 text-tertiary">Services</h2>
          <p className="text-xl text-tertiary">What I Offer</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-primary p-8 rounded-xl transition-all"
              {...fadeInUp(index * 0.1)}
            >
              <div className="flex flex-col gap-6">
                <div className="p-4 bg-tertiary/10 text-tertiary rounded-xl w-fit">
                  {service.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-tertiary">{service.title}</h3>
                  <p className="leading-relaxed text-white/90">{service.description}</p>
                  <ul className="pt-2 space-y-2 list-disc list-outside pl-5 text-sm text-white/80 leading-relaxed marker:text-tertiary marker:text-lg">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
