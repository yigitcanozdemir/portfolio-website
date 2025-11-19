'use client'

import { Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import { sectionFadeProps, fadeInUp } from '@/lib/motionConfigs'

const experiences = [
  {
    title: "Senior AI Engineer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    location: "Remote",
    achievements: [
      "Led development of enterprise AI chatbot serving 100K+ users with 95% satisfaction rate",
      "Architected scalable LLM integration pipeline reducing response time by 60%",
      "Implemented RAG systems for document analysis processing 10TB+ of data",
      "Mentored team of 5 engineers in AI/ML best practices and production deployment",
    ],
  },
  {
    title: "AI/ML Engineer",
    company: "Innovation Labs",
    period: "2021 - 2023",
    location: "Istanbul, Turkey",
    achievements: [
      "Built production-ready recommendation engine serving 50K+ daily active users",
      "Optimized model inference reducing cloud costs by 40% while improving accuracy",
      "Collaborated with cross-functional teams to deliver 8 major AI features",
      "Developed automated ML pipeline for continuous model training and deployment",
    ],
  },
  {
    title: "Software Engineer",
    company: "Digital Agency Co.",
    period: "2019 - 2021",
    location: "Istanbul, Turkey",
    achievements: [
      "Developed full-stack web applications using React, Node.js, and Python",
      "Integrated machine learning models into production web applications",
      "Improved application performance by 50% through optimization techniques",
      "Contributed to open-source AI projects with 1K+ GitHub stars",
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
