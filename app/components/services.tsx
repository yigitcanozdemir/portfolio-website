'use client'

import { Brain, Bot, Workflow, Server, MonitorSmartphone, Cloud } from 'lucide-react'
import { motion } from 'framer-motion'
import { sectionFadeProps, fadeInUp } from '@/lib/motionConfigs'

export default function Services() {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "RAG & LLM Systems",
      description:
        "Production-ready retrieval and LLM workflows designed to behave predictably, scale reliably, and support real operational use.",
      features: [
        "RAG pipelines using Redis, PostgreSQL & pgvector",
        "Agentic, multi-step workflows with structured orchestration",
        "Custom evaluation and observability for LLM behavior",
        "LLM orchestration for internal tools and automation"
      ]
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Agentic Automation",
      description:
        "Agent systems that coordinate LLM calls, tools, APIs, and business logic with deterministic guardrails for reliable automation.",
      features: [
        "Multi-LLM orchestration with fallbacks",
        "Tool-using agent architectures",
        "Task routing, memory, and workflow management",
        "Error-handled, production-safe execution layers"
      ]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend & API Engineering",
      description:
        "Fast, stable backend services engineered for AI workloads and built to run reliably in production.",
      features: [
        "FastAPI microservices for AI and automation",
        "LLM-serving and orchestration endpoints",
        "Authentication, rate limiting, and monitoring",
        "AWS-ready Dockerized deployments"
      ]
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8" />,
      title: "Frontend Development",
      description:
        "Modern Next.js interfaces for AI products, dashboards, and internal tools.",
      features: [
        "Next.js dashboards and admin panels",
        "Full-stack AI application delivery",
        "API integration with LLM/RAG services",
        "Responsive UI with smooth UX"
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI / ML Development",
      description:
        "ML models and pipelines built for real-world conditions using solid engineering and validation practices.",
      features: [
        "Predictive modeling (regression, classification, LSTM)",
        "Computer vision tools using OpenCV",
        "Real-world data preprocessing and cleaning",
        "Deployment-ready ML pipelines"
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Deployment",
      description:
        "Production deployments designed for stability, observability, and smooth scaling.",
      features: [
        "AWS deployment with Docker",
        "Container orchestration and environment setup",
        "Load balancing and performance tuning",
        "CI/CD workflows with GitHub Actions"
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
