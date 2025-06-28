"use client"

import { useState, useEffect } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface StepperProps {
  steps: number
  currentStep: number
  onStepClick?: (step: number) => void
  className?: string
}

export function Stepper({ steps, currentStep, onStepClick, className }: StepperProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={cn("flex items-center justify-between w-full", className)}>
      {Array.from({ length: steps }).map((_, index) => {
        const stepNumber = index + 1
        const isActive = stepNumber === currentStep
        const isCompleted = stepNumber < currentStep
        const isClickable = isCompleted && onStepClick

        return (
          <div key={index} className="flex items-center w-full">
            {/* Step circle */}
            <button
              type="button"
              onClick={isClickable ? () => onStepClick(stepNumber) : undefined}
              disabled={!isClickable}
              className={cn(
                "relative z-10 flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-all",
                isActive
                  ? "bg-deep-saffron text-white"
                  : isCompleted
                    ? "bg-forest-green text-white cursor-pointer"
                    : "bg-muted text-muted-foreground",
                isClickable && "hover:bg-forest-green/90",
              )}
            >
              {isCompleted ? <Check className="h-4 w-4" /> : stepNumber}
            </button>

            {/* Connector line */}
            {index < steps - 1 && (
              <div
                className={cn(
                  "w-full h-1 transition-all",
                  stepNumber < currentStep
                    ? "bg-forest-green"
                    : stepNumber === currentStep
                      ? "bg-gradient-to-r from-forest-green to-muted"
                      : "bg-muted",
                )}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
