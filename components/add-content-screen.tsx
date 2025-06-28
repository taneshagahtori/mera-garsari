"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ImageIcon, FileText, Music } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { AppHeader } from "@/components/app-header"
import { BottomNavigation } from "@/components/bottom-navigation"

export function AddContentScreen() {
  const [activeTab, setActiveTab] = useState("add")

  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      <AppHeader />

      <main className="flex-1 overflow-auto pb-16">
        {/* Header */}
        <div className="bg-deep-saffron text-white p-4">
          <div className="flex items-center mb-2">
            <Link href="/">
              <ChevronLeft className="h-5 w-5 mr-2" />
            </Link>
            <h1 className="text-xl font-heading">Add New Content</h1>
          </div>
          <p className="text-sm opacity-90 font-body">
            Share your stories, poems, photos, and more with the Garsari community
          </p>
        </div>

        {/* Content Type Tabs */}
        <Tabs defaultValue="blog" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-muted/50 p-1 mx-4 mt-4 rounded-lg">
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="poem">Poem</TabsTrigger>
            <TabsTrigger value="photo">Photo</TabsTrigger>
            <TabsTrigger value="audio">Audio</TabsTrigger>
          </TabsList>

          {/* Blog Form */}
          <TabsContent value="blog" className="mt-4 px-4">
            <Card>
              <CardContent className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="blog-title">Title</Label>
                  <Input id="blog-title" placeholder="Enter blog title" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="blog-content">Content</Label>
                  <Textarea id="blog-content" placeholder="Write your blog post here..." rows={8} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="blog-image">Cover Image</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
                    <FileText className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500 mb-2">Click to upload or drag and drop</p>
                    <Input id="blog-image" type="file" className="hidden" />
                    <Button variant="outline" size="sm" onClick={() => document.getElementById("blog-image")?.click()}>
                      Select File
                    </Button>
                  </div>
                </div>

                <div className="pt-2">
                  <Button className="w-full bg-deep-saffron hover:bg-deep-saffron/90">Submit for Review</Button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Your content will be reviewed by an admin before being published
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Poem Form */}
          <TabsContent value="poem" className="mt-4 px-4">
            <Card>
              <CardContent className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="poem-title">Title</Label>
                  <Input id="poem-title" placeholder="Enter poem title" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="poem-content">Poem</Label>
                  <Textarea id="poem-content" placeholder="Write your poem here..." rows={10} />
                </div>

                <div className="pt-2">
                  <Button className="w-full bg-deep-saffron hover:bg-deep-saffron/90">Submit for Review</Button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Your content will be reviewed by an admin before being published
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Photo Form */}
          <TabsContent value="photo" className="mt-4 px-4">
            <Card>
              <CardContent className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="photo-title">Title</Label>
                  <Input id="photo-title" placeholder="Enter photo title" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photo-description">Description</Label>
                  <Textarea id="photo-description" placeholder="Describe your photo..." rows={3} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photo-upload">Photo</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
                    <ImageIcon className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500 mb-2">Click to upload or drag and drop</p>
                    <Input id="photo-upload" type="file" className="hidden" />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => document.getElementById("photo-upload")?.click()}
                    >
                      Select Photo
                    </Button>
                  </div>
                </div>

                <div className="pt-2">
                  <Button className="w-full bg-deep-saffron hover:bg-deep-saffron/90">Submit for Review</Button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Your content will be reviewed by an admin before being published
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Audio Form */}
          <TabsContent value="audio" className="mt-4 px-4">
            <Card>
              <CardContent className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="audio-title">Title</Label>
                  <Input id="audio-title" placeholder="Enter audio title" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="audio-description">Description</Label>
                  <Textarea id="audio-description" placeholder="Describe your audio..." rows={3} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="audio-upload">Audio File</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
                    <Music className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500 mb-2">Click to upload or drag and drop</p>
                    <Input id="audio-upload" type="file" className="hidden" />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => document.getElementById("audio-upload")?.click()}
                    >
                      Select Audio
                    </Button>
                  </div>
                </div>

                <div className="pt-2">
                  <Button className="w-full bg-deep-saffron hover:bg-deep-saffron/90">Submit for Review</Button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Your content will be reviewed by an admin before being published
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}
