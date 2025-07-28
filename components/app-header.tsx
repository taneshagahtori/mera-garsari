"use client"


import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/lib/i18n/language-context"
import logo from "@/public/mera-garsari.svg"
 
export function AppHeader() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const { t } = useLanguage()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="sticky top-0 z-10 bg-background border-b border-border p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 relative mr-2">
            <Image
              src={logo}
              alt="Mera Garsari Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
          </div>
          <h1 className="text-xl font-heading text-deep-saffron">{t("app.name")}</h1>
        </div>

        <form onSubmit={handleSearch} className="relative w-36">
          <Input
            type="text"
            placeholder="Search..."
            className="h-8 pl-8 text-sm rounded-full bg-muted border-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="absolute left-2 top-1/2 transform -translate-y-1/2">
            <Search className="h-4 w-4 text-muted-foreground" />
          </button>
        </form>
      </div>
    </header>
  )
}
