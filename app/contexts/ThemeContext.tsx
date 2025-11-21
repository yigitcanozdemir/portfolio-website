"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Theme = "turquoise" | "brown"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "brown"
  try {
    const saved = sessionStorage.getItem("portfolio-theme") as Theme | null
    return saved || "brown"
  } catch {
    return "brown"
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    sessionStorage.setItem("portfolio-theme", theme)
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
