"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Mail, Globe, Info, ChevronRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { AppHeader } from "@/components/app-header"
import { BottomNavigation } from "@/components/bottom-navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/lib/i18n/language-context"
import type { Language } from "@/lib/i18n/translations"

export function SettingsScreen() {
  const [activeTab, setActiveTab] = useState("more")
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />

      <main className="flex-1 overflow-auto pb-16">
        {/* Header */}
        <div className="bg-charcoal-gray text-white p-4 dark:bg-gray-900">
          <div className="flex items-center mb-2">
            <Link href="/">
              <ChevronLeft className="h-5 w-5 mr-2" />
            </Link>
            <h1 className="text-xl font-heading">{t("settings.title")}</h1>
          </div>
          <p className="text-sm opacity-90 font-body">{t("settings.subtitle")}</p>
        </div>

        {/* Settings Sections */}
        <div className="p-4 space-y-6">
          {/* Appearance */}
          <div>
            <h2 className="text-lg font-heading text-foreground mb-3">{t("settings.appearance")}</h2>
            <Card>
              <CardContent className="p-4">
                <ThemeToggle />
              </CardContent>
            </Card>
          </div>

          {/* Language */}
          <div>
            <h2 className="text-lg font-heading text-foreground mb-3">{t("settings.language")}</h2>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="h-5 w-5 text-deep-saffron" />
                  <Label className="text-sm font-medium">{t("settings.selectLanguage")}</Label>
                </div>

                <RadioGroup value={language} onValueChange={(value) => setLanguage(value as Language)}>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="english" id="english" />
                    <Label htmlFor="english">English</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hindi" id="hindi" />
                    <Label htmlFor="hindi">हिंदी (Hindi)</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-lg font-heading text-foreground mb-3">{t("settings.contactUs")}</h2>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="h-5 w-5 text-deep-saffron" />
                  <span className="text-sm font-medium">{t("settings.contactUs")}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-3">{t("settings.contactUsDesc")}</p>

                <Link
                  href="mailto:iamtanesha13@gmail.com"
                  className="flex items-center justify-between text-sm text-deep-saffron"
                >
                  <span>iamtanesha13@gmail.com</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* About */}
          <div>
            <h2 className="text-lg font-heading text-foreground mb-3">{t("settings.about")}</h2>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="h-5 w-5 text-deep-saffron" />
                  <span className="text-sm font-medium">{t("settings.appInfo")}</span>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>{t("app.name")}</p>
                  <p>{t("settings.version")}</p>
                  <p>{t("settings.developer")}</p>
                  <p className="mt-3">{t("settings.appDesc")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}
