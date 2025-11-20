import { imagePaths, projectDemoLinks } from "./externalLinks"

export const projects = [
  {
    title: "E-Commerce AI Agent",
    description: "An AI assistant that helps customers find products, answer FAQs, check orders and handle store logic. Built as a reliable, production-ready AI system for online businesses.",
    image: imagePaths.eCommerceAgent,
    demoUrl: projectDemoLinks.eCommerceAgent,
    tags: [
    "OpenAI", 
    "FastAPI", 
    "Next.js", 
    "PostgreSQL", 
    "pgvector", 
    "Docker", 
    "AWS",
    "WebSockets",
    "Pydantic",
    "Grafana"],
  },
  {
    title: "CineSearch – Semantic Movie Search Engine",
    description: "A semantic search engine built on 500k cleaned IMDb entries using Qwen embeddings, OpenAI intent parsing and a multi-step ranking pipeline. It understands user preferences such as genre, theme, tone and region to return the most relevant titles.",
    image: imagePaths.cinesearch,
    demoUrl: projectDemoLinks.cinesearch,
    tags: [
      "OpenAI",
      "Qwen",
      "Hugging Face",
      "Python",
      "Pandas",
      "Parquet",
      "Pydantic",
      "Next.js",
      "Gradio",
      "Web Scraping"
    ],
  }
] as const
