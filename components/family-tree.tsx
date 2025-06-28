"use client"

import { useEffect, useRef } from "react"

interface FamilyTreeProps {
  familyId: string
}

export function FamilyTree({ familyId }: FamilyTreeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // This would come from an API in a real app
  const familyTreeData = {
    id: familyId,
    generations: [
      {
        level: 1,
        members: [
          { id: 1, name: "Devi Singh Rawat", birth: "1845", death: "1920" },
          { id: 2, name: "Ganga Devi Rawat", birth: "1850", death: "1925" },
        ],
      },
      {
        level: 2,
        members: [
          { id: 3, name: "Govind Singh Rawat", birth: "1870", death: "1945" },
          { id: 4, name: "Parvati Devi Rawat", birth: "1875", death: "1950" },
        ],
      },
      {
        level: 3,
        members: [
          { id: 5, name: "Narayan Singh Rawat", birth: "1900", death: "1980" },
          { id: 6, name: "Saraswati Devi Rawat", birth: "1905", death: "1985" },
        ],
      },
      {
        level: 4,
        members: [
          { id: 7, name: "Mohan Singh Rawat", birth: "1955", death: "" },
          { id: 8, name: "Kamla Devi Rawat", birth: "1958", death: "" },
        ],
      },
      {
        level: 5,
        members: [
          { id: 9, name: "Rajesh Rawat", birth: "1982", death: "" },
          { id: 10, name: "Sunita Rawat", birth: "1985", death: "" },
        ],
      },
      {
        level: 6,
        members: [
          { id: 11, name: "Vikram Rawat", birth: "2009", death: "" },
          { id: 12, name: "Meera Rawat", birth: "2012", death: "" },
        ],
      },
    ],
  }

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth * window.devicePixelRatio
    canvas.height = 1200 * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw family tree
    const boxWidth = 150
    const boxHeight = 80
    const verticalGap = 100
    const startY = 20

    familyTreeData.generations.forEach((generation, genIndex) => {
      const y = startY + genIndex * (boxHeight + verticalGap)
      const totalWidth = generation.members.length * boxWidth
      const startX = (canvas.offsetWidth - totalWidth) / 2

      generation.members.forEach((member, memberIndex) => {
        const x = startX + memberIndex * boxWidth

        // Draw box
        ctx.fillStyle = "#FF9933" // Deep Saffron
        ctx.strokeStyle = "#228B22" // Forest Green
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.roundRect(x, y, boxWidth - 10, boxHeight, 8)
        ctx.stroke()
        ctx.fillStyle = "white"
        ctx.fill()

        // Draw text
        ctx.fillStyle = "#333333" // Charcoal Gray
        ctx.font = "bold 14px Merriweather, serif"
        ctx.textAlign = "center"
        ctx.fillText(member.name, x + (boxWidth - 10) / 2, y + 25)

        ctx.font = "12px Open Sans, sans-serif"
        const yearText = member.death ? `${member.birth} - ${member.death}` : `Born: ${member.birth}`
        ctx.fillText(yearText, x + (boxWidth - 10) / 2, y + 50)

        // Draw connecting lines
        if (genIndex > 0) {
          // Draw vertical line up from current box
          ctx.strokeStyle = "#228B22"
          ctx.beginPath()
          ctx.moveTo(x + (boxWidth - 10) / 2, y)
          ctx.lineTo(x + (boxWidth - 10) / 2, y - verticalGap / 2)
          ctx.stroke()

          // Draw horizontal line to connect siblings
          if (memberIndex > 0) {
            const prevX = startX + (memberIndex - 1) * boxWidth
            ctx.beginPath()
            ctx.moveTo(prevX + (boxWidth - 10) / 2, y - verticalGap / 2)
            ctx.lineTo(x + (boxWidth - 10) / 2, y - verticalGap / 2)
            ctx.stroke()
          }

          // Connect to parent (if first generation, connect to center)
          if (genIndex > 0 && memberIndex === 0) {
            const parentGeneration = familyTreeData.generations[genIndex - 1]
            const parentCount = parentGeneration.members.length
            const parentStartX = (canvas.offsetWidth - parentCount * boxWidth) / 2
            const parentCenterX = parentStartX + (parentCount * boxWidth - 10) / 2

            ctx.beginPath()
            ctx.moveTo(parentCenterX, y - verticalGap)
            ctx.lineTo(parentCenterX, y - verticalGap / 2)
            ctx.stroke()
          }
        }
      })
    })
  }, [familyId])

  return (
    <div className="family-tree-container">
      <h2 className="text-lg font-heading text-charcoal-gray mb-3">Rawat Family Lineage</h2>
      <p className="text-sm text-gray-600 mb-4">Tracing back to 1845</p>

      <div className="relative overflow-auto pb-4" style={{ height: "400px" }}>
        <canvas ref={canvasRef} style={{ width: "100%", height: "1200px" }} className="family-tree-canvas" />
      </div>
    </div>
  )
}
