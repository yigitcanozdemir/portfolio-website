"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Theme = "turquoise" | "brown"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "brown"
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme
    return savedTheme ?? "brown"
  })

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("portfolio-theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "turquoise" ? "brown" : "turquoise"))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}
