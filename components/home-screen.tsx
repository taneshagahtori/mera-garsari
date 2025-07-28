"use client"

import { useRouter } from "next/navigation"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Map, Users, BookOpen, ChevronRight, Calendar, School, Building, Mountain, Search } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { AppHeader } from "@/components/app-header"
import { BottomNavigation } from "@/components/bottom-navigation"
import { useLanguage } from "@/lib/i18n/language-context"
import image from "@/public/placeholder.jpg"

import valley from "@/public/pexels-byrahul-1155084.jpg"
import temple from "@/public/pexels-gokul-gurang-224181659-16546692.jpg"
import mountains from "@/public/pexels-satyabrata-maiti-258455945-31770953.jpg"
import village from "@/public/pexels-shaurya-malik-322465-954646.jpg"


const backgroundImages = [valley, temple, mountains, village]



export function HomeScreen() {
  const [activeTab, setActiveTab] = useState("home")
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const featuredPlaces = [
    {
      id: 1,
      name: "Garsari Temple",
      description: "Ancient temple with historical significance",
      image: "/placeholder.svg?height=200&width=300",
      icon: <Building className="h-5 w-5" />,
    },
    {
      id: 2,
      name: "Government School",
      description: "Primary education center since 1965",
      image: "/placeholder.svg?height=200&width=300",
      icon: <School className="h-5 w-5" />,
    },
    {
      id: 3,
      name: "Himalayan Viewpoint",
      description: "Panoramic views of the majestic Himalayas",
      image: "/placeholder.svg?height=200&width=300",
      icon: <Mountain className="h-5 w-5" />,
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      name: "Basant Panchami",
      date: "February 14, 2025",
      description: "Spring festival celebration",
    },
    {
      id: 2,
      name: "Garsari Folk Festival",
      date: "March 21, 2025",
      description: "Annual cultural gathering",
    },
  ]

  const recentBlogs = [
    {
      id: 1,
      title: "The Hidden Trails of Garsari",
      author: "Ramesh Joshi",
      date: "April 10, 2024",
    },
    {
      id: 2,
      title: "Traditional Recipes of Our Village",
      author: "Sunita Rawat",
      date: "April 5, 2024",
    },
  ]

  
const router = useRouter()
const handleSearch = (e: React.FormEvent) => {
  e.preventDefault()
  const trimmed = searchQuery.trim()
  if (trimmed) {
    router.push(`/search?q=${encodeURIComponent(trimmed)}`)
  }
}

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 bg-pattern-dots">
      <AppHeader />

      <main className="flex-1 overflow-auto pb-16">
        {/* Hero Section with Search */}
        <div className="relative h-[80vh] sm:h-[70vh] md:h-[60vh] min-h-[500px] md:min-h-[600px]">
          {/* Background Images */}
          <div className="absolute inset-0">
            {backgroundImages.map((image, index) => (
              <div
                key={image.src}

                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image}
                  alt="Uttarakhand Landscape"
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute " />
                <div className="absolute inset-0 bg-pattern-grid opacity-10" />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center p-6 text-white">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading mb-4 md:mb-6 text-center drop-shadow-lg animate-fade-in px-4">
                {t("app.name")}
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-accent mb-8 md:mb-10 text-center drop-shadow-md animate-fade-in-delay px-4">
                {t("app.tagline")}
              </p>
              <form onSubmit={handleSearch} className="w-full max-w-xl mx-auto animate-fade-in-delay-2">
                <div className="relative bg-white/10 backdrop-blur-md rounded-full p-2 flex items-center">
                  <Search className="h-5 w-5 text-white/70 ml-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search places, events, or blogs..."
                    className="w-full bg-transparent border-none outline-none text-white placeholder-white/70 px-3"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="text-white/70 hover:text-white px-3"
                    >
                      ×
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Quick Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 px-2 sm:px-0">
            <Link href="/regions" className="group">
            <div className="h-full flex flex-col justify-between bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200 min-h-[160px]">

                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <Map className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-heading text-neutral-800 mb-1">{t("nav.regions")}</h3>
                <p className="text-sm text-neutral-500">Explore local areas</p>
              </div>
            </Link>
            <Link href="/families" className="group">
            <div className="h-full flex flex-col justify-between bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200 min-h-[160px]">

                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-success to-brand-info flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-heading text-neutral-800 mb-1">{t("nav.families")}</h3>
                <p className="text-sm text-neutral-500">Connect with community</p>
              </div>
            </Link>
            <Link href="/blogs" className="group">
            <div className="h-full flex flex-col justify-between bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200 min-h-[160px]">

                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-accent to-brand-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-heading text-neutral-800 mb-1">{t("blogs.title")}</h3>
                <p className="text-sm text-neutral-500">Read latest stories</p>
              </div>
            </Link>
            <Link href="/events" className="group">
            <div className="h-full flex flex-col justify-between bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200 min-h-[160px]">

                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-warning to-brand-error flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-heading text-neutral-800 mb-1">{t("home.upcomingEvents")}</h3>
                <p className="text-sm text-neutral-500">View all events</p>
              </div>
            </Link>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-6">
            {/* Left Column - Featured Places */}
            <div className="lg:col-span-2 mb-8 lg:mb-0">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h2 className="text-2xl font-heading text-neutral-800">{t("home.featuredPlaces")}</h2>
                <Link href="/places" className="text-sm text-brand-primary font-accent flex items-center hover:text-brand-secondary transition-colors">
                  {t("home.viewAll")} <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {featuredPlaces.map((place) => (
                  <Link href={`/places/${place.id}`} key={place.id} className="group">
                    <Card className="overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 h-full bg-white/80 backdrop-blur-sm">
                      <div className="relative h-40 sm:h-48">
                        <Image src={place.image || "/placeholder.svg"} alt={place.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-brand-primary/5 flex items-center justify-center mr-3">
                            {place.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-heading text-neutral-800">{place.name}</h3>
                            <p className="text-sm text-neutral-500 mt-1">{place.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column - Events & Blogs */}
            <div className="space-y-8">
              {/* Upcoming Events */}
              <div>
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <h2 className="text-xl font-heading text-neutral-800">{t("home.upcomingEvents")}</h2>
                  <Link href="/events" className="text-sm text-brand-primary font-accent flex items-center hover:text-brand-secondary transition-colors">
                    {t("home.viewAll")} <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-4">
                        <div className="flex">
                          <div className="w-12 h-12 rounded-lg bg-brand-warning/10 flex flex-col items-center justify-center mr-4">
                            <Calendar className="h-6 w-6 text-brand-warning mb-1" />
                          </div>
                          <div>
                            <h3 className="text-base font-heading text-neutral-800">{event.name}</h3>
                            <p className="text-sm text-brand-warning font-medium mt-0.5">{event.date}</p>
                            <p className="text-sm text-neutral-500 mt-1">{event.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Recent Blogs */}
              <div>
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <h2 className="text-xl font-heading text-neutral-800">{t("home.recentBlogs")}</h2>
                  <Link href="/blogs" className="text-sm text-brand-primary font-accent flex items-center hover:text-brand-secondary transition-colors">
                    {t("home.viewAll")} <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {recentBlogs.map((blog) => (
                    <Link href={`/blogs/${blog.id}`} key={blog.id} className="block">
                      <Card className="overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white/80 backdrop-blur-sm">
                        <CardContent className="p-4">
                          <h3 className="text-base font-heading text-neutral-800">{blog.title}</h3>
                          <div className="flex items-center mt-2">
                            <p className="text-sm text-neutral-500">By {blog.author}</p>
                            <span className="mx-2 text-neutral-200">•</span>
                            <p className="text-sm text-neutral-500">{blog.date}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}
