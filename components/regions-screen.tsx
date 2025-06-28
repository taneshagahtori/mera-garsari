"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Users, MapPin, Search } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { AppHeader } from "@/components/app-header"
import { BottomNavigation } from "@/components/bottom-navigation"

export function RegionsScreen() {
  const [activeTab, setActiveTab] = useState("regions")
  const [searchQuery, setSearchQuery] = useState("")

  const regions = [
    {
      id: 1,
      name: "Upper Garsari",
      families: 24,
      description: "Located at the highest elevation with panoramic views",
      image: "/placeholder.svg?height=200&width=300",
      coordinates: "28.7041° N, 77.1025° E",
    },
    {
      id: 2,
      name: "Lower Garsari",
      families: 32,
      description: "Nestled near the river with lush vegetation",
      image: "/placeholder.svg?height=200&width=300",
      coordinates: "28.7041° N, 77.1025° E",
    },
    {
      id: 3,
      name: "Central Garsari",
      families: 45,
      description: "The main marketplace and community center",
      image: "/placeholder.svg?height=200&width=300",
      coordinates: "28.7041° N, 77.1025° E",
    },
    {
      id: 4,
      name: "East Garsari",
      families: 18,
      description: "Known for its traditional craftsmen",
      image: "/placeholder.svg?height=200&width=300",
      coordinates: "28.7041° N, 77.1025° E",
    },
    {
      id: 5,
      name: "West Garsari",
      families: 27,
      description: "Famous for agricultural practices",
      image: "/placeholder.svg?height=200&width=300",
      coordinates: "28.7041° N, 77.1025° E",
    },
    {
      id: 6,
      name: "Garsari Valley",
      families: 15,
      description: "Scenic location with traditional architecture",
      image: "/placeholder.svg?height=200&width=300",
      coordinates: "28.7041° N, 77.1025° E",
    },
  ]

  const filteredRegions = regions.filter(region =>
    region.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    region.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 bg-pattern-dots">
      <AppHeader />

      <main className="flex-1 overflow-auto pb-16">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-6 overflow-hidden">
          <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
          <div className="relative">
            <div className="flex items-center mb-4">
              <Link href="/" className="hover:bg-white/10 p-2 rounded-full transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-2xl font-heading ml-2">Regions of Garsari</h1>
            </div>
            <p className="text-sm opacity-90 font-body mb-6">
              Explore the 6 distinct regions that make up the beautiful Garsari area
            </p>

            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-white/70" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search regions..."
                className="w-full bg-white/10 backdrop-blur-md rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/70 border-none outline-none"
              />
            </div>
          </div>
        </div>

        {/* Map View Button */}
        <div className="px-4 py-3 bg-white border-b border-neutral-200">
          <button className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-brand-primary/5 text-brand-primary rounded-lg hover:bg-brand-primary/10 transition-colors">
            <MapPin className="h-5 w-5" />
            <span className="font-medium">View on Map</span>
          </button>
        </div>

        {/* Regions List */}
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-heading text-neutral-800">
              {filteredRegions.length} {filteredRegions.length === 1 ? "Region" : "Regions"}
            </h2>
            <div className="text-sm text-neutral-500">
              Total Families: {regions.reduce((sum, region) => sum + region.families, 0)}
            </div>
          </div>

          <div className="grid gap-4">
            {filteredRegions.map((region) => (
              <Link href={`/regions/${region.id}`} key={region.id} className="block">
                <Card className="overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                  <div className="relative h-48">
                    <Image 
                      src={region.image || "/placeholder.svg"} 
                      alt={region.name} 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                      <h2 className="text-white text-xl font-heading mb-1">{region.name}</h2>
                      <div className="flex items-center text-white/90 text-sm">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{region.families} families</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-neutral-600 mb-3">{region.description}</p>
                    <div className="flex items-center text-xs text-neutral-500">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{region.coordinates}</span>
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
