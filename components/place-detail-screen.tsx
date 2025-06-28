"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, MapPin, Calendar, Clock, Info } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppHeader } from "@/components/app-header"
import { BottomNavigation } from "@/components/bottom-navigation"

interface PlaceDetailScreenProps {
  placeId: string
}

export function PlaceDetailScreen({ placeId }: PlaceDetailScreenProps) {
  const [activeTab, setActiveTab] = useState("home")

  // This would come from an API in a real app
  const place = {
    id: placeId,
    name: placeId === "1" ? "Garsari Temple" : placeId === "2" ? "Government School" : "Himalayan Viewpoint",
    description:
      placeId === "1"
        ? "This ancient temple dates back to the 15th century and is dedicated to the local deity Nanda Devi. The temple architecture showcases traditional Uttarakhand wooden craftsmanship with intricate carvings. It is an important cultural and religious center for the Garsari community."
        : placeId === "2"
          ? "Established in 1965, the Government Primary School of Garsari has been providing education to local children for generations. The school has played a crucial role in improving literacy rates in the region and preserving local cultural knowledge."
          : "Located at the highest point of Garsari, this viewpoint offers breathtaking panoramic views of the Himalayan range. On clear days, visitors can see snow-capped peaks stretching across the horizon. It's a popular spot for photography and meditation.",
    address:
      placeId === "1"
        ? "Central Garsari, Near the Main Market"
        : placeId === "2"
          ? "Lower Garsari, Behind the Community Hall"
          : "Upper Garsari, End of the Mountain Trail",
    openingHours:
      placeId === "1" ? "5:00 AM - 8:00 PM" : placeId === "2" ? "8:00 AM - 3:00 PM (Weekdays)" : "Open 24 hours",
    specialEvents:
      placeId === "1"
        ? "Annual Temple Festival (June 15-17)"
        : placeId === "2"
          ? "Annual Day Celebration (December 10)"
          : "Sunrise Yoga Sessions (Every Sunday)",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    historicalInfo:
      placeId === "1"
        ? "The temple was built by the ruling Chand dynasty in the 15th century. It survived several earthquakes and has been renovated multiple times while preserving its original structure."
        : placeId === "2"
          ? "The school was established through community efforts led by village elders who donated land and resources. It started with just one room and 15 students."
          : "This viewpoint was discovered by British explorers in the early 1900s and was marked on their maps as 'Heaven's View'. Local shepherds had known about it for centuries before.",
  }

  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      <AppHeader />

      <main className="flex-1 overflow-auto pb-16">
        {/* Image Gallery */}
        <div className="relative h-64">
          <Image src={place.images[0] || "/placeholder.svg"} alt={place.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
            <Link href="/places" className="text-white mb-auto">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl font-heading text-white">{place.name}</h1>
          </div>
        </div>

        {/* Image Thumbnails */}
        <div className="flex gap-2 p-4 overflow-x-auto">
          {place.images.map((image, index) => (
            <div key={index} className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${place.name} - Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Place Information */}
        <div className="px-4">
          <Card className="mb-4">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-deep-saffron mr-2 mt-0.5" />
                <div>
                  <h3 className="font-medium text-sm">Address</h3>
                  <p className="text-sm text-gray-600">{place.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-deep-saffron mr-2 mt-0.5" />
                <div>
                  <h3 className="font-medium text-sm">Opening Hours</h3>
                  <p className="text-sm text-gray-600">{place.openingHours}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Calendar className="h-5 w-5 text-deep-saffron mr-2 mt-0.5" />
                <div>
                  <h3 className="font-medium text-sm">Special Events</h3>
                  <p className="text-sm text-gray-600">{place.specialEvents}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for Description and History */}
        <div className="px-4 pb-4">
          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="mt-4">
              <p className="text-sm text-gray-700">{place.description}</p>
            </TabsContent>
            <TabsContent value="history" className="mt-4">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-deep-saffron mr-2 mt-0.5" />
                <p className="text-sm text-gray-700">{place.historicalInfo}</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}
