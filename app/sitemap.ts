import type { MetadataRoute } from "next"

const baseUrl = "https://yigitcanozdemir.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString()

  const paths = ["/", "/resume"]

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "/" ? 1.0 : 0.8,
  }))
}
