'use client'

import { Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import { sectionFadeProps, fadeInUp } from '@/lib/motionConfigs'

const experiences = [
  {
    title: "Freelance AI Engineer",
    company: "Self-employed",
    period: "Nov 2025 - Present",
    location: "Remote",
    achievements: [
      "Designed and delivered production-ready RAG pipelines using Redis, PostgreSQL, and pgvector",
      "Built multi-step agentic workflows and integrated LLMs (OpenAI, Claude, and local models) into backend systems",
      "Developed FastAPI-based microservices and orchestration layers for AI-powered automation",
      "Containerized and deployed applications on AWS using Docker with strong observability and monitoring practices",
      "Created lightweight, functional Next.js interfaces for internal tools and end-to-end product delivery",
      "Engineered deterministic, maintainable system behavior to ensure reliability in real-world environments"
    ],
  },
  {
    title: "AI Engineer – Finalist (Competition)",
    company: "TEKNOFEST – AI in Transportation Competition",
    period: "Nov 2022 - May 2023",
    location: "Istanbul, Türkiye",
    achievements: [
      "Finalist in the TEKNOFEST 2023 Artificial Intelligence in Transportation challenge, a nationwide AI competition focused on aerial image analysis for next-generation transportation systems",
      "Built a real-time YOLO-based object detection pipeline for classifying multiple vehicle categories from drone imagery (land, marine, rail, UAV-related)",
      "Implemented logic to assess UAV ambulance landing zone feasibility using detected objects and spatial constraints",
      "Integrated the model with official competition APIs for real-time inference and scenario evaluation",
      "Advanced through multiple qualification stages and ranked 17th among 32 finalist teams nationwide",
      "Awarded Honorable Mention and competed as the only solo high-school-level participant among university-level teams"
    ]
  },
  {
    title: "AI Engineer",
    company: "Tosçelik Profil ve Sac",
    period: "Sep 2022 - Feb 2024",
    location: "Osmaniye, Türkiye",
    achievements: [
      "Developed predictive maintenance models using TensorFlow (regression & LSTM) on vibration and time-series sensor data",
      "Built and deployed a Flask-based dashboard to visualize real-time machine predictions vs actual performance",
      "Created OpenCV-based steel width measurement tooling for production-line monitoring and quality control",
      "Implemented deep learning pipelines using TensorFlow and Python for operational use cases in the rolling mill",
      "Collaborated closely with production engineers to validate results and align solutions with real-world operational constraints"
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-secondary scroll-mt-20">
      <motion.div {...sectionFadeProps} className="container mx-auto px-6">
        <motion.h2 className="text-3xl font-bold mb-12 text-center text-tertiary" {...fadeInUp()}>
          Experience
        </motion.h2>
        
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-tertiary/30 hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div key={index} className="relative" {...fadeInUp(index * 0.15)}>
                <div className="absolute left-3.5 top-8 w-5 h-5 rounded-full bg-tertiary border-4 border-secondary hidden md:block z-10" />
                
                <div className="md:ml-16 bg-primary rounded-xl p-6 border-l-4 border-tertiary">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-tertiary p-2 rounded-lg mt-1">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-tertiary">{exp.title}</h3>
                        <p className="text-tertiary font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <p className="text-sm font-semibold text-primary bg-tertiary px-3 py-1 rounded-full inline-block">
                        {exp.period}
                      </p>
                      <p className="text-sm text-tertiary mt-1">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-tertiary shrink-0"></span>
                        <span className="text-white text-sm leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
