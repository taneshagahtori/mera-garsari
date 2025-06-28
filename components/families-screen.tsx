"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Users, Home, Phone, Search, MapPin } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { AppHeader } from "@/components/app-header"
import { BottomNavigation } from "@/components/bottom-navigation"

export function FamiliesScreen() {
  const [activeTab, setActiveTab] = useState("families")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("all")

  const regions = [
    { id: "all", name: "All Regions" },
    { id: "upper", name: "Upper Garsari" },
    { id: "central", name: "Central Garsari" },
    { id: "lower", name: "Lower Garsari" },
    { id: "east", name: "East Garsari" },
    { id: "west", name: "West Garsari" },
    { id: "valley", name: "Garsari Valley" },
  ]

  // This would come from an API in a real app
  const families = [
    {
      id: 1,
      name: "Rawat Family",
      region: "Upper Garsari",
      regionId: "upper",
      address: "House No. 45, Upper Garsari",
      contact: "+91 98765 43210",
      members: 6,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Negi Family",
      region: "Upper Garsari",
      regionId: "upper",
      address: "House No. 23, Upper Garsari",
      contact: "+91 98765 12345",
      members: 4,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Bisht Family",
      region: "Central Garsari",
      regionId: "central",
      address: "House No. 78, Central Garsari",
      contact: "+91 98765 67890",
      members: 8,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Joshi Family",
      region: "Lower Garsari",
      regionId: "lower",
      address: "House No. 12, Lower Garsari",
      contact: "+91 98765 09876",
      members: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "Panwar Family",
      region: "East Garsari",
      regionId: "east",
      address: "House No. 34, East Garsari",
      contact: "+91 98765 23456",
      members: 7,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 6,
      name: "Rana Family",
      region: "West Garsari",
      regionId: "west",
      address: "House No. 56, West Garsari",
      contact: "+91 98765 34567",
      members: 6,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 7,
      name: "Chauhan Family",
      region: "Garsari Valley",
      regionId: "valley",
      address: "House No. 89, Garsari Valley",
      contact: "+91 98765 45678",
      members: 4,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 8,
      name: "Kandari Family",
      region: "Central Garsari",
      regionId: "central",
      address: "House No. 67, Central Garsari",
      contact: "+91 98765 56789",
      members: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const filteredFamilies = families.filter(family => {
    const matchesSearch = family.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         family.address.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRegion = selectedRegion === "all" || family.regionId === selectedRegion
    return matchesSearch && matchesRegion
  })

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 bg-pattern-dots">
      <AppHeader />

      <main className="flex-1 overflow-auto pb-16">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-brand-success to-brand-info text-white p-6 overflow-hidden">
          <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
          <div className="relative">
            <div className="flex items-center mb-4">
              <Link href="/" className="hover:bg-white/10 p-2 rounded-full transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-2xl font-heading ml-2">Families of Garsari</h1>
            </div>
            <p className="text-sm opacity-90 font-body mb-6">
              Browse all families across the different regions of Garsari
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
                placeholder="Search families..."
                className="w-full bg-white/10 backdrop-blur-md rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/70 border-none outline-none"
              />
            </div>
          </div>
        </div>

        {/* Regions Filter */}
        <div className="px-4 py-4 bg-white border-b border-neutral-200">
          <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedRegion === region.id
                    ? "bg-brand-success text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>
        </div>

        {/* Families List */}
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-heading text-neutral-800">
              {filteredFamilies.length} {filteredFamilies.length === 1 ? "Family" : "Families"}
            </h2>
            <button className="flex items-center text-sm text-brand-success hover:text-brand-info">
              <MapPin className="h-4 w-4 mr-1" />
              View Map
            </button>
          </div>

          <div className="grid gap-4">
            {filteredFamilies.map((family) => (
              <Link href={`/families/${family.id}`} key={family.id} className="block">
                <Card className="overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-brand-success/20">
                        <Image src={family.image || "/placeholder.svg"} alt={family.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-heading text-neutral-800">{family.name}</h3>
                        <p className="text-sm text-brand-success font-medium">{family.region}</p>

                        <div className="mt-3 space-y-2">
                          <div className="flex items-center text-sm text-neutral-600">
                            <Home className="h-4 w-4 mr-2 text-brand-success" />
                            <span>{family.address}</span>
                          </div>

                          <div className="flex items-center text-sm text-neutral-600">
                            <Phone className="h-4 w-4 mr-2 text-brand-success" />
                            <span>{family.contact}</span>
                          </div>

                          <div className="flex items-center text-sm text-neutral-600">
                            <Users className="h-4 w-4 mr-2 text-brand-success" />
                            <span>{family.members} family members</span>
                          </div>
                        </div>
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
