"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, User, Calendar, MapPin, Heart, MessageSquare } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppHeader } from "@/components/app-header"
import { BottomNavigation } from "@/components/bottom-navigation"
import { useLanguage } from "@/lib/i18n/language-context"

interface SearchResult {
  id: number
  type: "family" | "blog" | "place" | "event"
  title: string
  subtitle?: string
  image?: string
  date?: string
  author?: string
  likes?: number
  comments?: number
  address?: string
}

interface SearchScreenProps {
  query: string
}

export function SearchScreen({ query }: SearchScreenProps) {
  const [activeTab, setActiveTab] = useState("all")
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(true)
  const { t } = useLanguage()

  // Mock search function - in a real app, this would call an API
  useEffect(() => {
    setLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      // Mock data - in a real app, this would come from a backend search
      const mockResults: SearchResult[] = [
        // Families
        {
          id: 1,
          type: "family",
          title: "Rawat Family",
          subtitle: "Upper Garsari",
          address: "House No. 45, Upper Garsari",
          image: "/placeholder.svg?height=100&width=100",
        },
        {
          id: 2,
          type: "family",
          title: "Negi Family",
          subtitle: "Central Garsari",
          address: "House No. 12, Central Garsari",
          image: "/placeholder.svg?height=100&width=100",
        },

        // Blogs
        {
          id: 1,
          type: "blog",
          title: "The Hidden Trails of Garsari",
          subtitle: "Discover the secret hiking paths...",
          author: "Ramesh Joshi",
          date: "April 10, 2024",
          image: "/placeholder.svg?height=200&width=300",
          likes: 24,
          comments: 8,
        },

        // Places
        {
          id: 1,
          type: "place",
          title: "Garsari Temple",
          subtitle: "Ancient temple with historical significance",
          image: "/placeholder.svg?height=200&width=300",
        },

        // Events
        {
          id: 1,
          type: "event",
          title: "Basant Panchami",
          date: "February 14, 2025",
          subtitle: "Spring festival celebration",
        },
      ].filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          (item.subtitle && item.subtitle.toLowerCase().includes(query.toLowerCase())),
      )

      setResults(mockResults)
      setLoading(false)
    }, 500)
  }, [query])

  const filteredResults = (type: string) => {
    if (type === "all") return results
    return results.filter((result) => result.type === type)
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />

      <main className="flex-1 overflow-auto pb-16">
        {/* Header */}
        <div className="bg-deep-saffron text-white p-4">
          <div className="flex items-center mb-2">
            <Link href="/">
              <ChevronLeft className="h-5 w-5 mr-2" />
            </Link>
            <h1 className="text-xl font-heading">{t("search.title")}</h1>
          </div>
          <p className="text-sm opacity-90 font-body">
            {results.length} {t("search.results")} "{query}"
          </p>
        </div>

        {/* Results Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-muted/50 p-1 mx-4 mt-4 rounded-lg">
            <TabsTrigger value="all">{t("search.all")}</TabsTrigger>
            <TabsTrigger value="family">{t("search.families")}</TabsTrigger>
            <TabsTrigger value="blog">{t("search.blogs")}</TabsTrigger>
            <TabsTrigger value="place">{t("search.places")}</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-4 px-4">
            {loading ? (
              <div className="text-center py-8">{t("search.searching")}</div>
            ) : results.length === 0 ? (
              <div className="text-center py-8">
                {t("search.noResults")} "{query}"
              </div>
            ) : (
              <div className="space-y-4">
                {filteredResults("all").map((result) => (
                  <SearchResultCard key={`${result.type}-${result.id}`} result={result} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="family" className="mt-4 px-4">
            {loading ? (
              <div className="text-center py-8">{t("search.searching")}</div>
            ) : filteredResults("family").length === 0 ? (
              <div className="text-center py-8">
                {t("search.noResults")} "{query}"
              </div>
            ) : (
              <div className="space-y-4">
                {filteredResults("family").map((result) => (
                  <SearchResultCard key={`${result.type}-${result.id}`} result={result} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="blog" className="mt-4 px-4">
            {loading ? (
              <div className="text-center py-8">{t("search.searching")}</div>
            ) : filteredResults("blog").length === 0 ? (
              <div className="text-center py-8">
                {t("search.noResults")} "{query}"
              </div>
            ) : (
              <div className="space-y-4">
                {filteredResults("blog").map((result) => (
                  <SearchResultCard key={`${result.type}-${result.id}`} result={result} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="place" className="mt-4 px-4">
            {loading ? (
              <div className="text-center py-8">{t("search.searching")}</div>
            ) : filteredResults("place").length === 0 ? (
              <div className="text-center py-8">
                {t("search.noResults")} "{query}"
              </div>
            ) : (
              <div className="space-y-4">
                {filteredResults("place").map((result) => (
                  <SearchResultCard key={`${result.type}-${result.id}`} result={result} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>

      <BottomNavigation activeTab="home" setActiveTab={setActiveTab} />
    </div>
  )
}

function SearchResultCard({ result }: { result: SearchResult }) {
  const getLink = () => {
    switch (result.type) {
      case "family":
        return `/families/${result.id}`
      case "blog":
        return `/blogs/${result.id}`
      case "place":
        return `/places/${result.id}`
      case "event":
        return `/events/${result.id}`
      default:
        return "/"
    }
  }

  return (
    <Link href={getLink()}>
      <Card className="overflow-hidden">
        <CardContent className="p-3">
          <div className="flex gap-3">
            {result.image && (
              <div className="relative w-16 h-16 rounded-md overflow-hidden shrink-0">
                <Image src={result.image || "/placeholder.svg"} alt={result.title} fill className="object-cover" />
              </div>
            )}
            <div className="flex-1">
              <h3 className="text-base font-heading text-foreground">{result.title}</h3>
              {result.subtitle && <p className="text-sm text-muted-foreground mt-1">{result.subtitle}</p>}

              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                {result.author && (
                  <div className="flex items-center text-xs text-muted-foreground">
                    <User className="h-3 w-3 mr-1" />
                    <span>{result.author}</span>
                  </div>
                )}

                {result.date && (
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{result.date}</span>
                  </div>
                )}

                {result.address && (
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span className="truncate">{result.address}</span>
                  </div>
                )}

                {result.likes !== undefined && (
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Heart className="h-3 w-3 mr-1 text-crimson-red" />
                    <span>{result.likes}</span>
                  </div>
                )}

                {result.comments !== undefined && (
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MessageSquare className="h-3 w-3 mr-1 text-deep-saffron" />
                    <span>{result.comments}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
