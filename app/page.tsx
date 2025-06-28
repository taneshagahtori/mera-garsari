"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { HomeScreen } from "@/components/home-screen"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Check if onboarding has been completed
    const onboardingCompleted = localStorage.getItem("onboardingCompleted")

    // If not completed, redirect to onboarding
    if (!onboardingCompleted) {
      router.push("/onboarding")
    }
  }, [router])

  return <HomeScreen />
}
