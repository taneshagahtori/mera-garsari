"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Calendar, User, Heart, MessageSquare, Filter, Search } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { AppHeader } from "@/components/app-header"
import { BottomNavigation } from "@/components/bottom-navigation"

export function BlogsScreen() {
  const [activeTab, setActiveTab] = useState("blogs")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All" },
    { id: "travel", name: "Travel" },
    { id: "food", name: "Food" },
    { id: "culture", name: "Culture" },
    { id: "poetry", name: "Poetry" },
    { id: "photography", name: "Photography" },
  ]

  const blogs = [
    {
      id: 1,
      title: "The Hidden Trails of Garsari",
      excerpt: "Discover the secret hiking paths that locals have treasured for generations...",
      author: "Ramesh Joshi",
      date: "April 10, 2024",
      image: "/placeholder.svg?height=200&width=300",
      likes: 24,
      comments: 8,
      category: "travel",
    },
    {
      id: 2,
      title: "Traditional Recipes of Our Village",
      excerpt: "Learn how to prepare authentic Garsari dishes that have been passed down through generations...",
      author: "Sunita Rawat",
      date: "April 5, 2024",
      image: "/placeholder.svg?height=200&width=300",
      likes: 36,
      comments: 12,
      category: "food",
    },
    {
      id: 3,
      title: "The Legend of Garsari Temple",
      excerpt: "The fascinating story behind the ancient temple and its significance to our community...",
      author: "Mohan Bisht",
      date: "March 28, 2024",
      image: "/placeholder.svg?height=200&width=300",
      likes: 42,
      comments: 15,
      category: "culture",
    },
    {
      id: 4,
      title: "Spring Festival Preparations",
      excerpt: "How our community comes together to celebrate the arrival of spring with traditional customs...",
      author: "Geeta Negi",
      date: "March 20, 2024",
      image: "/placeholder.svg?height=200&width=300",
      likes: 31,
      comments: 9,
      category: "culture",
    },
  ]

  const poems = [
    {
      id: 1,
      title: "Himalayan Whispers",
      excerpt: "The mountains speak in silence, their wisdom carried by the wind...",
      author: "Kavita Joshi",
      date: "April 8, 2024",
      likes: 18,
      comments: 5,
      category: "poetry",
    },
    {
      id: 2,
      title: "Village Mornings",
      excerpt: "Dawn breaks over Garsari, painting the sky with hues of hope...",
      author: "Prakash Rawat",
      date: "April 2, 2024",
      likes: 22,
      comments: 7,
      category: "poetry",
    },
  ]

  const photos = [
    {
      id: 1,
      title: "Sunrise at Upper Garsari",
      author: "Vikram Negi",
      date: "April 12, 2024",
      image: "/placeholder.svg?height=300&width=300",
      likes: 45,
      comments: 12,
      category: "photography",
    },
    {
      id: 2,
      title: "Traditional Garsari Home",
      author: "Meera Bisht",
      date: "April 7, 2024",
      image: "/placeholder.svg?height=300&width=300",
      likes: 38,
      comments: 9,
      category: "photography",
    },
    {
      id: 3,
      title: "Valley View",
      author: "Rajesh Joshi",
      date: "April 3, 2024",
      image: "/placeholder.svg?height=300&width=300",
      likes: 29,
      comments: 6,
      category: "photography",
    },
  ]

  const filteredContent = {
    blogs: blogs.filter(item => 
      (selectedCategory === "all" || item.category === selectedCategory) &&
      (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    ),
    poems: poems.filter(item =>
      (selectedCategory === "all" || item.category === selectedCategory) &&
      (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    ),
    photos: photos.filter(item =>
      (selectedCategory === "all" || item.category === selectedCategory) &&
      (item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    ),
  }

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 bg-pattern-dots">
      <AppHeader />

      <main className="flex-1 overflow-auto pb-16">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-brand-secondary to-brand-accent text-white p-6 overflow-hidden">
          <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Link href="/" className="hover:bg-white/10 p-2 rounded-full transition-colors">
                  <ChevronLeft className="h-5 w-5" />
                </Link>
                <h1 className="text-2xl font-heading ml-2">Community Content</h1>
              </div>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Filter className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm opacity-90 font-body mb-6">
              Explore blogs, poems, photos, and more from the Garsari community
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
                placeholder="Search content..."
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
                    ? "bg-brand-secondary text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="blogs" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white p-1 mx-4 mt-4 rounded-lg border border-neutral-200">
            <TabsTrigger value="blogs" className="data-[state=active]:bg-brand-secondary data-[state=active]:text-white">
              Blogs
            </TabsTrigger>
            <TabsTrigger value="poems" className="data-[state=active]:bg-brand-secondary data-[state=active]:text-white">
              Poems
            </TabsTrigger>
            <TabsTrigger value="photos" className="data-[state=active]:bg-brand-secondary data-[state=active]:text-white">
              Photos
            </TabsTrigger>
          </TabsList>

          {/* Blogs Tab */}
          <TabsContent value="blogs" className="mt-4 px-4">
            <div className="space-y-4">
              {filteredContent.blogs.map((blog) => (
                <Link href={`/blogs/${blog.id}`} key={blog.id} className="block">
                  <Card className="overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                    <div className="relative h-48">
                      <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h2 className="text-white text-xl font-heading">{blog.title}</h2>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-neutral-600 mt-1 line-clamp-2">{blog.excerpt}</p>

                      <div className="flex items-center mt-3 text-xs text-neutral-500">
                        <User className="h-3 w-3 mr-1" />
                        <span>{blog.author}</span>
                        <span className="mx-2">•</span>
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{blog.date}</span>
                      </div>

                      <div className="flex items-center mt-2">
                        <div className="flex items-center text-xs text-neutral-500 mr-3">
                          <Heart className="h-3 w-3 mr-1 text-brand-error" />
                          <span>{blog.likes}</span>
                        </div>
                        <div className="flex items-center text-xs text-neutral-500">
                          <MessageSquare className="h-3 w-3 mr-1 text-brand-warning" />
                          <span>{blog.comments}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          {/* Poems Tab */}
          <TabsContent value="poems" className="mt-4 px-4">
            <div className="space-y-4">
              {filteredContent.poems.map((poem) => (
                <Link href={`/poems/${poem.id}`} key={poem.id} className="block">
                  <Card className="overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                    <CardContent className="p-4">
                      <h2 className="text-lg font-heading text-neutral-800">{poem.title}</h2>
                      <p className="text-sm text-neutral-600 mt-2 italic line-clamp-3">{poem.excerpt}</p>

                      <div className="flex items-center mt-3 text-xs text-neutral-500">
                        <User className="h-3 w-3 mr-1" />
                        <span>{poem.author}</span>
                        <span className="mx-2">•</span>
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{poem.date}</span>
                      </div>

                      <div className="flex items-center mt-2">
                        <div className="flex items-center text-xs text-neutral-500 mr-3">
                          <Heart className="h-3 w-3 mr-1 text-brand-error" />
                          <span>{poem.likes}</span>
                        </div>
                        <div className="flex items-center text-xs text-neutral-500">
                          <MessageSquare className="h-3 w-3 mr-1 text-brand-warning" />
                          <span>{poem.comments}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          {/* Photos Tab */}
          <TabsContent value="photos" className="mt-4 px-4">
            <div className="grid grid-cols-2 gap-3">
              {filteredContent.photos.map((photo) => (
                <Link href={`/photos/${photo.id}`} key={photo.id} className="block">
                  <Card className="overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                    <div className="relative aspect-square">
                      <Image src={photo.image || "/placeholder.svg"} alt={photo.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <h3 className="text-white text-sm font-heading line-clamp-1">{photo.title}</h3>
                          <div className="flex items-center mt-1 text-xs text-white/90">
                            <User className="h-3 w-3 mr-1" />
                            <span className="line-clamp-1">{photo.author}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-neutral-500">
                          <Heart className="h-3 w-3 mr-1 text-brand-error" />
                          <span>{photo.likes}</span>
                        </div>
                        <div className="flex items-center text-xs text-neutral-500">
                          <MessageSquare className="h-3 w-3 mr-1 text-brand-warning" />
                          <span>{photo.comments}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}
