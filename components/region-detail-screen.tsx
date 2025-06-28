"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Users, Home, Phone } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { AppHeader } from "@/components/app-header"
import { BottomNavigation } from "@/components/bottom-navigation"

interface RegionDetailScreenProps {
  regionId: string
}

export function RegionDetailScreen({ regionId }: RegionDetailScreenProps) {
  const [activeTab, setActiveTab] = useState("regions")

  // This would come from an API in a real app
  const region = {
    id: regionId,
    name: "Upper Garsari",
    description:
      "Located at the highest elevation with panoramic views of the Himalayas. Upper Garsari is known for its traditional houses and the ancient temple dedicated to the local deity.",
    image: "/placeholder.svg?height=300&width=500",
    families: [
      {
        id: 1,
        name: "Rawat Family",
        address: "House No. 45, Upper Garsari",
        contact: "+91 98765 43210",
        members: 6,
      },
      {
        id: 2,
        name: "Negi Family",
        address: "House No. 23, Upper Garsari",
        contact: "+91 98765 12345",
        members: 4,
      },
      {
        id: 3,
        name: "Bisht Family",
        address: "House No. 78, Upper Garsari",
        contact: "+91 98765 67890",
        members: 8,
      },
      {
        id: 4,
        name: "Joshi Family",
        address: "House No. 12, Upper Garsari",
        contact: "+91 98765 09876",
        members: 5,
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      <AppHeader />

      <main className="flex-1 overflow-auto pb-16">
        {/* Header with Image */}
        <div className="relative h-48">
          <Image src={region.image || "/placeholder.svg"} alt={region.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
            <Link href="/regions" className="text-white mb-auto">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl font-heading text-white">{region.name}</h1>
            <div className="flex items-center text-white/90 text-sm mt-1">
              <Users className="h-4 w-4 mr-1" />
              <span>{region.families.length} families</span>
            </div>
          </div>
        </div>

        {/* Region Description */}
        <div className="p-4">
          <h2 className="text-lg font-heading text-charcoal-gray mb-2">About this Region</h2>
          <p className="text-sm text-gray-700">{region.description}</p>
        </div>

        {/* Families List */}
        <div className="px-4 mt-2">
          <h2 className="text-lg font-heading text-charcoal-gray mb-3">Families in {region.name}</h2>

          <div className="space-y-3">
            {region.families.map((family) => (
              <Link href={`/families/${family.id}`} key={family.id}>
                <Card className="overflow-hidden">
                  <CardContent className="p-3">
                    <h3 className="text-base font-heading text-charcoal-gray">{family.name}</h3>

                    <div className="mt-2 space-y-1.5">
                      <div className="flex items-center text-sm text-gray-600">
                        <Home className="h-4 w-4 mr-2 text-deep-saffron" />
                        <span>{family.address}</span>
                      </div>

                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="h-4 w-4 mr-2 text-deep-saffron" />
                        <span>{family.contact}</span>
                      </div>

                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-deep-saffron" />
                        <span>{family.members} family members</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}
