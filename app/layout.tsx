import type React from "react"
import { Mona_Sans as FontSans } from "next/font/google"
import localFont from "next/font/local"

import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/i18n/language-context"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = localFont({
  src: "../assets/fonts/Merriweather-Bold.woff2",
  variable: "--font-heading",
})

const fontBody = localFont({
  src: "../assets/fonts/OpenSans-Regular.woff2",
  variable: "--font-body",
})

const fontAccent = localFont({
  src: "../assets/fonts/Raleway-Medium.woff2",
  variable: "--font-accent",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`min-h-screen font-body ${fontSans.variable} ${fontHeading.variable} ${fontBody.variable} ${fontAccent.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
