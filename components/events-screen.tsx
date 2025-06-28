"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Calendar, Clock, MapPin, Search } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { AppHeader } from "@/components/app-header"
import { BottomNavigation } from "@/components/bottom-navigation"

export function EventsScreen() {
  const [activeTab, setActiveTab] = useState("home")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedMonth, setSelectedMonth] = useState("all")

  const months = [
    { id: "all", name: "All Events" },
    { id: "feb", name: "February" },
    { id: "mar", name: "March" },
    { id: "jul", name: "July" },
    { id: "sep", name: "September" },
    { id: "oct", name: "October" },
    { id: "dec", name: "December" },
  ]

  const events = [
    {
      id: 1,
      name: "Basant Panchami",
      date: "February 14, 2025",
      time: "8:00 AM - 6:00 PM",
      location: "Garsari Temple",
      description:
        "Spring festival celebration with traditional music, dance, and food. The entire community gathers to welcome the spring season with prayers and cultural performances.",
      image: "/placeholder.svg?height=200&width=300",
      month: "feb",
    },
    {
      id: 2,
      name: "Garsari Folk Festival",
      date: "March 21, 2025",
      time: "10:00 AM - 10:00 PM",
      location: "Community Hall",
      description:
        "Annual cultural gathering featuring traditional folk music, dance performances, and handicraft exhibitions. Local artists showcase their talents and preserve cultural heritage.",
      image: "/placeholder.svg?height=200&width=300",
      month: "mar",
    },
    {
      id: 3,
      name: "Harvest Celebration",
      date: "September 15, 2024",
      time: "9:00 AM - 7:00 PM",
      location: "Central Garsari",
      description:
        "Traditional celebration marking the harvest season with rituals, feasting, and community activities. Farmers offer their first harvest to deities and share meals with the community.",
      image: "/placeholder.svg?height=200&width=300",
      month: "sep",
    },
    {
      id: 4,
      name: "Annual School Day",
      date: "December 10, 2024",
      time: "11:00 AM - 3:00 PM",
      location: "Government School",
      description:
        "Yearly celebration showcasing student performances, academic achievements, and cultural programs. Parents and community members attend to encourage the children.",
      image: "/placeholder.svg?height=200&width=300",
      month: "dec",
    },
    {
      id: 5,
      name: "Diwali Celebrations",
      date: "October 31, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Throughout Garsari",
      description:
        "Festival of lights celebrated with oil lamps, rangoli, fireworks, and community gatherings. Houses are decorated with lights and families exchange sweets and gifts.",
      image: "/placeholder.svg?height=200&width=300",
      month: "oct",
    },
    {
      id: 6,
      name: "Health Camp",
      date: "July 20, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Community Hall",
      description:
        "Free medical checkup camp organized with doctors from nearby towns. Specialists provide consultations and basic medicines to community members.",
      image: "/placeholder.svg?height=200&width=300",
      month: "jul",
    },
  ]

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesMonth = selectedMonth === "all" || event.month === selectedMonth
    return matchesSearch && matchesMonth
  })

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 bg-pattern-dots">
      <AppHeader />

      <main className="flex-1 overflow-auto pb-16">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-brand-accent to-brand-primary text-white p-6 overflow-hidden">
          <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
          <div className="relative">
            <div className="flex items-center mb-4">
              <Link href="/" className="hover:bg-white/10 p-2 rounded-full transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-2xl font-heading ml-2">Upcoming Events</h1>
            </div>
            <p className="text-sm opacity-90 font-body mb-6">
              Discover cultural celebrations, festivals, and community gatherings in Garsari
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
                placeholder="Search events..."
                className="w-full bg-white/10 backdrop-blur-md rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/70 border-none outline-none"
              />
            </div>
          </div>
        </div>

        {/* Month Filter */}
        <div className="px-4 py-4 bg-white border-b border-neutral-200">
          <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            {months.map((month) => (
              <button
                key={month.id}
                onClick={() => setSelectedMonth(month.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedMonth === month.id
                    ? "bg-brand-accent text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {month.name}
              </button>
            ))}
          </div>
        </div>

        {/* Events List */}
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-heading text-neutral-800">
              {filteredEvents.length} {filteredEvents.length === 1 ? "Event" : "Events"}
            </h2>
          </div>

          <div className="grid gap-4">
            {filteredEvents.map((event) => (
              <Link href={`/events/${event.id}`} key={event.id} className="block">
                <Card className="overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                  <div className="relative h-48">
                    <Image src={event.image || "/placeholder.svg"} alt={event.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h2 className="text-white text-xl font-heading">{event.name}</h2>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-2 mb-3">
                      <div className="flex items-center text-sm text-neutral-600">
                        <Calendar className="h-4 w-4 mr-2 text-brand-accent" />
                        <span>{event.date}</span>
                      </div>

                      <div className="flex items-center text-sm text-neutral-600">
                        <Clock className="h-4 w-4 mr-2 text-brand-accent" />
                        <span>{event.time}</span>
                      </div>

                      <div className="flex items-center text-sm text-neutral-600">
                        <MapPin className="h-4 w-4 mr-2 text-brand-accent" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className="text-sm text-neutral-600">{event.description}</p>
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
