"use client"

import Link from "next/link"
import { Home, Map, Users, Plus, Settings } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

interface BottomNavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function BottomNavigation({ activeTab, setActiveTab }: BottomNavigationProps) {
  const { t } = useLanguage()

  const tabs = [
    { id: "home", icon: <Home className="h-5 w-5" />, label: t("nav.home"), href: "/" },
    { id: "regions", icon: <Map className="h-5 w-5" />, label: t("nav.regions"), href: "/regions" },
    { id: "families", icon: <Users className="h-5 w-5" />, label: t("nav.families"), href: "/families" },
    { id: "add", icon: <Plus className="h-5 w-5" />, label: t("nav.add"), href: "/add-content" },
    { id: "more", icon: <Settings className="h-5 w-5" />, label: t("nav.more"), href: "/settings" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-around py-2 px-1">
      {tabs.map((tab) => (
        <Link key={tab.id} href={tab.href} className="flex flex-col items-center" onClick={() => setActiveTab(tab.id)}>
          <div
            className={`p-1.5 rounded-full ${activeTab === tab.id ? "text-white bg-deep-saffron" : "text-muted-foreground"}`}
          >
            {tab.icon}
          </div>
          <span
            className={`text-xs mt-1 ${activeTab === tab.id ? "text-deep-saffron font-medium" : "text-muted-foreground"}`}
          >
            {tab.label}
          </span>
        </Link>
      ))}
    </div>
  )
}
