"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, MapPin, Users, BookOpen, Calendar, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Stepper } from "@/components/onboarding/stepper"
import { useLanguage } from "@/lib/i18n/language-context"
import { useTheme } from "next-themes"

export function OnboardingScreen() {
  const [currentStep, setCurrentStep] = useState(1)
  const [answers, setAnswers] = useState({
    connection: "",
    interest: "",
    region: "",
    content: "",
    language: "english",
  })
  const router = useRouter()
  const { setLanguage } = useLanguage()
  const { setTheme } = useTheme()

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    } else {
      // Save preferences
      if (answers.language) {
        setLanguage(answers.language as "english" | "hindi")
      }

      // Save onboarding completion status
      localStorage.setItem("onboardingCompleted", "true")

      // Navigate to home
      router.push("/")
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleAnswerChange = (question: keyof typeof answers, value: string) => {
    setAnswers({ ...answers, [question]: value })
  }

  const isNextDisabled = () => {
    switch (currentStep) {
      case 1:
        return !answers.connection
      case 2:
        return !answers.interest
      case 3:
        return !answers.region
      case 4:
        return !answers.content
      case 5:
        return !answers.language
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-forest-green to-deep-saffron p-6 text-white text-center">
        <h1 className="text-2xl font-heading mb-1">Welcome to Mera Garsari</h1>
        <p className="text-sm font-accent">Let's personalize your experience</p>
      </div>

      {/* Stepper */}
      <div className="px-6 py-4">
        <Stepper steps={5} currentStep={currentStep} onStepClick={(step) => setCurrentStep(step)} />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md"
          >
            <Card className="w-full">
              <CardContent className="pt-6">
                {currentStep === 1 && (
                  <Question1 value={answers.connection} onChange={(value) => handleAnswerChange("connection", value)} />
                )}
                {currentStep === 2 && (
                  <Question2 value={answers.interest} onChange={(value) => handleAnswerChange("interest", value)} />
                )}
                {currentStep === 3 && (
                  <Question3 value={answers.region} onChange={(value) => handleAnswerChange("region", value)} />
                )}
                {currentStep === 4 && (
                  <Question4 value={answers.content} onChange={(value) => handleAnswerChange("content", value)} />
                )}
                {currentStep === 5 && (
                  <Question5 value={answers.language} onChange={(value) => handleAnswerChange("language", value)} />
                )}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="p-6 flex justify-between">
        <Button variant="outline" onClick={handleBack} disabled={currentStep === 1} className="flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={isNextDisabled()}
          className="bg-deep-saffron hover:bg-deep-saffron/90 flex items-center"
        >
          {currentStep === 5 ? "Get Started" : "Next"}
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  )
}

function Question1({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-deep-saffron/10 flex items-center justify-center">
          <Users className="h-8 w-8 text-deep-saffron" />
        </div>
      </div>
      <h2 className="text-xl font-heading text-center text-foreground">What brings you to Mera Garsari?</h2>
      <p className="text-sm text-center text-muted-foreground mb-4">
        We'd love to know your connection to our beautiful region
      </p>

      <RadioGroup value={value} onValueChange={onChange} className="space-y-3">
        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
          <RadioGroupItem value="resident" id="resident" />
          <Label htmlFor="resident" className="flex-1 cursor-pointer">
            I'm a resident of Garsari
          </Label>
        </div>
        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
          <RadioGroupItem value="former-resident" id="former-resident" />
          <Label htmlFor="former-resident" className="flex-1 cursor-pointer">
            I used to live in Garsari
          </Label>
        </div>
        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
          <RadioGroupItem value="family" id="family" />
          <Label htmlFor="family" className="flex-1 cursor-pointer">
            I have family roots in Garsari
          </Label>
        </div>
        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
          <RadioGroupItem value="visitor" id="visitor" />
          <Label htmlFor="visitor" className="flex-1 cursor-pointer">
            I'm a visitor/tourist
          </Label>
        </div>
        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
          <RadioGroupItem value="curious" id="curious" />
          <Label htmlFor="curious" className="flex-1 cursor-pointer">
            Just curious about Uttarakhand
          </Label>
        </div>
      </RadioGroup>
    </div>
  )
}

function Question2({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-deep-saffron/10 flex items-center justify-center">
          <Calendar className="h-8 w-8 text-deep-saffron" />
        </div>
      </div>
      <h2 className="text-xl font-heading text-center text-foreground">
        What aspect of Uttarakhand culture interests you most?
      </h2>
      <p className="text-sm text-center text-muted-foreground mb-4">This helps us show you content you'll love</p>

      <RadioGroup value={value} onValueChange={onChange} className="space-y-3">
        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
          <RadioGroupItem value="festivals" id="festivals" />
          <Label htmlFor="festivals" className="flex-1 cursor-pointer">
            Traditional festivals & celebrations
          </Label>
        </div>
        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
          <RadioGroupItem value="food" id="food" />
          <Label htmlFor="food" className="flex-1 cursor-pointer">
            Local cuisine & recipes
          </Label>
        </div>
        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
          <RadioGroupItem value="crafts" id="crafts" />
          <Label htmlFor="crafts" className="flex-1 cursor-pointer">
            Arts & crafts
          </Label>
        </div>
        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
          <RadioGroupItem value="music" id="music" />
          <Label htmlFor="music" className="flex-1 cursor-pointer">
            Folk music & dance
          </Label>
        </div>
        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
          <RadioGroupItem value="history" id="history" />
          <Label htmlFor="history" className="flex-1 cursor-pointer">
            History & heritage
          </Label>
        </div>
      </RadioGroup>
    </div>
  )
}

function Question3({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-deep-saffron/10 flex items-center justify-center">
          <MapPin className="h-8 w-8 text-deep-saffron" />
        </div>
      </div>
      <h2 className="text-xl font-heading text-center text-foreground">
        Which region of Garsari are you most interested in?
      </h2>
      <p className="text-sm text-center text-muted-foreground mb-4">We'll prioritize content from this area</p>

      <RadioGroup value={value} onValueChange={onChange} className="space-y-3">
        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
          <RadioGroupItem value="upper" id="upper" />
          <Label htmlFor="upper" className="flex-1 cursor-pointer">
            Upper Garsari
          </Label>
        </div>
        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
          <RadioGroupItem value="lower" id="lower" />
          <Label htmlFor="lower" className="flex-1 cursor-pointer">
            Lower Garsari
          </Label>
        </div>
        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
          <RadioGroupItem value="central" id="central" />
          <Label htmlFor="central" className="flex-1 cursor-pointer">
            Central Garsari
          </Label>
        </div>
        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
          <RadioGroupItem value="east" id="east" />
          <Label htmlFor="east" className="flex-1 cursor-pointer">
            East Garsari
          </Label>
        </div>
        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
          <RadioGroupItem value="all" id="all" />
          <Label htmlFor="all" className="flex-1 cursor-pointer">
            All regions equally
          </Label>
        </div>
      </RadioGroup>
    </div>
  )
}

function Question4({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-deep-saffron/10 flex items-center justify-center">
          <BookOpen className="h-8 w-8 text-deep-saffron" />
        </div>
      </div>
      <h2 className="text-xl font-heading text-center text-foreground">
        What content are you most excited to explore?
      </h2>
      <p className="text-sm text-center text-muted-foreground mb-4">We'll highlight these sections for you</p>

      <RadioGroup value={value} onValueChange={onChange} className="space-y-3">
        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
          <RadioGroupItem value="families" id="families" />
          <Label htmlFor="families" className="flex-1 cursor-pointer">
            Family histories & genealogy
          </Label>
        </div>
        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
          <RadioGroupItem value="places" id="places" />
          <Label htmlFor="places" className="flex-1 cursor-pointer">
            Places & landmarks
          </Label>
        </div>
        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
          <RadioGroupItem value="events" id="events" />
          <Label htmlFor="events" className="flex-1 cursor-pointer">
            Events & celebrations
          </Label>
        </div>
        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
          <RadioGroupItem value="blogs" id="blogs" />
          <Label htmlFor="blogs" className="flex-1 cursor-pointer">
            Community blogs & stories
          </Label>
        </div>
        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
          <RadioGroupItem value="photos" id="photos" />
          <Label htmlFor="photos" className="flex-1 cursor-pointer">
            Photos & visual content
          </Label>
        </div>
      </RadioGroup>
    </div>
  )
}

function Question5({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-deep-saffron/10 flex items-center justify-center">
          <Globe className="h-8 w-8 text-deep-saffron" />
        </div>
      </div>
      <h2 className="text-xl font-heading text-center text-foreground">Which language would you prefer?</h2>
      <p className="text-sm text-center text-muted-foreground mb-4">You can always change this later in settings</p>

      <RadioGroup value={value} onValueChange={onChange} className="space-y-3">
        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
          <RadioGroupItem value="english" id="english-lang" />
          <Label htmlFor="english-lang" className="flex-1 cursor-pointer">
            English
          </Label>
        </div>
        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted/50">
          <RadioGroupItem value="hindi" id="hindi-lang" />
          <Label htmlFor="hindi-lang" className="flex-1 cursor-pointer">
            हिंदी (Hindi)
          </Label>
        </div>
      </RadioGroup>
    </div>
  )
}
