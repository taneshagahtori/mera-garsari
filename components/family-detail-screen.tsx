"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Phone, MapPin, Mail, Calendar } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppHeader } from "@/components/app-header"
import { BottomNavigation } from "@/components/bottom-navigation"
import { FamilyTree } from "@/components/family-tree"

interface FamilyDetailScreenProps {
  familyId: string
}

export function FamilyDetailScreen({ familyId }: FamilyDetailScreenProps) {
  const [activeTab, setActiveTab] = useState("families")

  // This would come from an API in a real app
  const family = {
    id: familyId,
    name: "Rawat Family",
    image: "/placeholder.svg?height=200&width=300",
    address: "House No. 45, Upper Garsari, Uttarakhand",
    contact: "+91 98765 43210",
    email: "rawatfamily@example.com",
    since: "1892",
    description:
      "The Rawat family has been living in Upper Garsari for over 130 years. They are known for their contributions to local agriculture and traditional crafts. The family has maintained many of the cultural traditions of the region.",
    members: [
      { id: 1, name: "Mohan Rawat", role: "Head of Family", age: 68, image: "/placeholder.svg?height=100&width=100" },
      { id: 2, name: "Kamla Rawat", role: "Wife", age: 65, image: "/placeholder.svg?height=100&width=100" },
      { id: 3, name: "Rajesh Rawat", role: "Son", age: 42, image: "/placeholder.svg?height=100&width=100" },
      { id: 4, name: "Sunita Rawat", role: "Daughter-in-law", age: 38, image: "/placeholder.svg?height=100&width=100" },
      { id: 5, name: "Vikram Rawat", role: "Grandson", age: 15, image: "/placeholder.svg?height=100&width=100" },
      { id: 6, name: "Meera Rawat", role: "Granddaughter", age: 12, image: "/placeholder.svg?height=100&width=100" },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      <AppHeader />

      <main className="flex-1 overflow-auto pb-16">
        {/* Header with Image */}
        <div className="relative h-40">
          <Image src={family.image || "/placeholder.svg"} alt={family.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
            <Link href="/regions/1" className="text-white mb-auto">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl font-heading text-white">{family.name}</h1>
            <div className="flex items-center text-white/90 text-sm mt-1">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Established {family.since}</span>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <Card className="mx-4 -mt-5 relative z-10 bg-white shadow-md">
          <CardContent className="p-4">
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-deep-saffron" />
                <span className="text-gray-700">{family.address}</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 text-deep-saffron" />
                <span className="text-gray-700">{family.contact}</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-deep-saffron" />
                <span className="text-gray-700">{family.email}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for Info and Family Tree */}
        <div className="p-4 mt-3">
          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="tree">Family Tree</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="mt-4">
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-heading text-charcoal-gray mb-2">About {family.name}</h2>
                  <p className="text-sm text-gray-700">{family.description}</p>
                </div>

                <div>
                  <h2 className="text-lg font-heading text-charcoal-gray mb-2">Family Members</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {family.members.map((member) => (
                      <Card key={member.id} className="overflow-hidden">
                        <div className="flex p-2">
                          <div className="relative w-14 h-14 rounded-full overflow-hidden mr-2">
                            <Image
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-sm font-medium">{member.name}</h3>
                            <p className="text-xs text-gray-500">{member.role}</p>
                            <p className="text-xs text-gray-500">{member.age} years</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="tree" className="mt-4">
              <FamilyTree familyId={familyId} />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}
