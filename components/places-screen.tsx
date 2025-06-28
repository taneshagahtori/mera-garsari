"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, MapPin, Clock, Search, Filter, Map } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { AppHeader } from "@/components/app-header"
import { BottomNavigation } from "@/components/bottom-navigation"

export function PlacesScreen() {
  const [activeTab, setActiveTab] = useState("home")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Places" },
    { id: "temples", name: "Temples" },
    { id: "schools", name: "Schools" },
    { id: "viewpoints", name: "Viewpoints" },
    { id: "community", name: "Community" },
  ]

  const places = [
    {
      id: 1,
      name: "Garsari Temple",
      description: "Ancient temple with historical significance",
      image: "/placeholder.svg?height=200&width=300",
      address: "Central Garsari, Near the Main Market",
      openingHours: "5:00 AM - 8:00 PM",
      category: "temples",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Government School",
      description: "Primary education center since 1965",
      image: "/placeholder.svg?height=200&width=300",
      address: "Lower Garsari, Behind the Community Hall",
      openingHours: "8:00 AM - 3:00 PM (Weekdays)",
      category: "schools",
      rating: 4.5,
      reviews: 89,
    },
    {
      id: 3,
      name: "Himalayan Viewpoint",
      description: "Panoramic views of the majestic Himalayas",
      image: "/placeholder.svg?height=200&width=300",
      address: "Upper Garsari, End of the Mountain Trail",
      openingHours: "Open 24 hours",
      category: "viewpoints",
      rating: 4.9,
      reviews: 256,
    },
    {
      id: 4,
      name: "Community Hall",
      description: "Venue for village gatherings and celebrations",
      image: "/placeholder.svg?height=200&width=300",
      address: "Central Garsari, Main Road",
      openingHours: "9:00 AM - 9:00 PM",
      category: "community",
      rating: 4.6,
      reviews: 78,
    },
    {
      id: 5,
      name: "Traditional Water Mill",
      description: "Ancient water-powered grain mill still in operation",
      image: "/placeholder.svg?height=200&width=300",
      address: "Lower Garsari, By the Stream",
      openingHours: "7:00 AM - 5:00 PM",
      category: "community",
      rating: 4.7,
      reviews: 92,
    },
    {
      id: 6,
      name: "Medicinal Herb Garden",
      description: "Collection of traditional healing plants",
      image: "/placeholder.svg?height=200&width=300",
      address: "East Garsari, Behind the Health Center",
      openingHours: "8:00 AM - 6:00 PM",
      category: "community",
      rating: 4.4,
      reviews: 65,
    },
  ]

  const filteredPlaces = places.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         place.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || place.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
              <h1 className="text-2xl font-heading ml-2">Places in Garsari</h1>
            </div>
            <p className="text-sm opacity-90 font-body mb-6">
              Explore the landmarks, natural wonders, and cultural sites of Garsari
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
                placeholder="Search places..."
                className="w-full bg-white/10 backdrop-blur-md rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/70 border-none outline-none"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="px-4 py-4 bg-white border-b border-neutral-200">
          <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? "bg-brand-primary text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Places List */}
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-heading text-neutral-800">
              {filteredPlaces.length} {filteredPlaces.length === 1 ? "Place" : "Places"}
            </h2>
            <button className="flex items-center text-sm text-brand-primary hover:text-brand-secondary">
              <Map className="h-4 w-4 mr-1" />
              View Map
            </button>
          </div>

          <div className="grid gap-4">
            {filteredPlaces.map((place) => (
              <Link href={`/places/${place.id}`} key={place.id} className="block">
                <Card className="overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                  <div className="relative h-48">
                    <Image src={place.image || "/placeholder.svg"} alt={place.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex justify-between items-end">
                        <h2 className="text-white text-xl font-heading">{place.name}</h2>
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                          <span className="text-brand-primary font-medium">{place.rating}</span>
                          <span className="text-neutral-500 text-xs ml-1">({place.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-neutral-600 mb-3">{place.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-neutral-600">
                        <MapPin className="h-4 w-4 mr-2 text-brand-primary" />
                        <span>{place.address}</span>
                      </div>

                      <div className="flex items-center text-sm text-neutral-600">
                        <Clock className="h-4 w-4 mr-2 text-brand-primary" />
                        <span>{place.openingHours}</span>
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
