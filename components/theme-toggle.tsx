"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === "dark"

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {isDark ? <Moon className="h-5 w-5 text-deep-saffron" /> : <Sun className="h-5 w-5 text-deep-saffron" />}
        <span className="text-sm font-medium">Dark Mode</span>
      </div>
      <Switch id="dark-mode" checked={isDark} onCheckedChange={() => setTheme(isDark ? "light" : "dark")} />
    </div>
  )
}
