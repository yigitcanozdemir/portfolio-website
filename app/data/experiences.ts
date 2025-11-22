export type Experience = {
  title: string
  company: string
  period: string
  location: string
  achievements: string[]
}

export const experiences: Experience[] = [
  {
    title: "Freelance AI Engineer",
    company: "Self-employed",
    period: "Nov 2025 - Present",
    location: "Remote",
    achievements: [
      "Designed and delivered production-ready RAG pipelines using Redis, PostgreSQL, and pgvector",
      "Built multi-step agentic workflows and orchestrated LLMs (OpenAI, Claude, and local models) within backend systems",
      "Developed FastAPI-based microservices and orchestration layers for AI-powered automation",
      "Containerized and deployed applications on AWS using Docker with strong observability and monitoring practices",
      "Created lightweight, functional Next.js interfaces for internal tools and end-to-end product delivery",
      "Engineered deterministic, maintainable system behavior to ensure reliability in real-world environments",
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
      "Awarded Honorable Mention and competed as the only solo high-school-level participant among university-level teams",
    ],
  },
  {
    title: "AI Engineer",
    company: "Tosçelik Profil ve Sac",
    period: "Sep 2022 - Feb 2024",
    location: "Osmaniye, Türkiye",
    achievements: [
      "Developed predictive maintenance models using TensorFlow (regression & LSTM) on vibration and time-series sensor data",
      "Built and deployed a Flask-based dashboard to visualize machine predictions vs actual performance",
      "Created OpenCV-based steel width measurement tooling for production-line monitoring and quality control",
      "Implemented deep learning pipelines using TensorFlow and Python for operational use cases in the rolling mill",
      "Collaborated closely with production engineers to validate results and align solutions with real-world operational constraints",
    ],
  },
] as const
