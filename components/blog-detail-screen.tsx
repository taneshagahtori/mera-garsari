"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Calendar, User, Heart, MessageSquare, Send } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AppHeader } from "@/components/app-header"
import { BottomNavigation } from "@/components/bottom-navigation"

interface BlogDetailScreenProps {
  blogId: string
}

export function BlogDetailScreen({ blogId }: BlogDetailScreenProps) {
  const [activeTab, setActiveTab] = useState("blogs")
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(24)
  const [commentText, setCommentText] = useState("")
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Mohan Bisht",
      text: "This is such a beautiful description of our trails! I've hiked these paths since childhood.",
      date: "April 11, 2024",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      author: "Geeta Negi",
      text: "Thank you for highlighting these hidden gems. More people should know about our beautiful region.",
      date: "April 12, 2024",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ])

  // This would come from an API in a real app
  const blog = {
    id: blogId,
    title: "The Hidden Trails of Garsari",
    content: `
      <p>Nestled in the heart of Uttarakhand, Garsari is home to some of the most breathtaking hiking trails that remain largely unknown to the outside world. These paths, carved through centuries of use by locals, offer a glimpse into the untouched natural beauty of the Himalayan foothills.</p>
      
      <p>The Eastern Ridge Trail begins near the ancient temple and winds its way through dense pine forests. The air here is filled with the scent of resin and wildflowers. After about an hour's hike, you reach a clearing that offers panoramic views of the valley below and the snow-capped peaks in the distance.</p>
      
      <p>For those seeking a more challenging adventure, the Shepherd's Path provides a steep climb to the upper meadows where local shepherds have grazed their flocks for generations. The trail is marked by small stone cairns, traditional navigational aids that have guided travelers for centuries.</p>
      
      <p>The most sacred of all paths is the Pilgrimage Trail, which connects the six main temples of the region. Walking this route is believed to bring blessings and is traditionally completed during the spring festival.</p>
      
      <p>What makes these trails special is not just their natural beauty but the stories they hold. Each bend in the path has a local legend, each distinctive rock formation has a name and a tale associated with it.</p>
      
      <p>As development reaches even the most remote corners of Uttarakhand, these traditional pathways face the risk of being forgotten. By documenting and sharing them, we hope to preserve not just the physical routes but the cultural heritage they represent.</p>
      
      <p>If you visit Garsari, ask a local guide to show you these hidden trails. Walk slowly, listen to the forest sounds, and connect with a way of life that has remained unchanged for centuries.</p>
    `,
    author: "Ramesh Joshi",
    date: "April 10, 2024",
    image: "/placeholder.svg?height=400&width=600",
    likes: likeCount,
    comments: comments.length,
    category: "travel",
  }

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1)
    } else {
      setLikeCount(likeCount + 1)
    }
    setLiked(!liked)
  }

  const handleAddComment = () => {
    if (commentText.trim()) {
      const newComment = {
        id: comments.length + 1,
        author: "You",
        text: commentText,
        date: "Just now",
        avatar: "/placeholder.svg?height=40&width=40",
      }
      setComments([newComment, ...comments])
      setCommentText("")
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      <AppHeader />

      <main className="flex-1 overflow-auto pb-16">
        {/* Header with Image */}
        <div className="relative h-48">
          <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
            <Link href="/blogs" className="text-white mb-auto">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl font-heading text-white">{blog.title}</h1>
            <div className="flex items-center text-white/90 text-sm mt-1">
              <User className="h-4 w-4 mr-1" />
              <span>{blog.author}</span>
              <span className="mx-2">•</span>
              <Calendar className="h-4 w-4 mr-1" />
              <span>{blog.date}</span>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="p-4">
          <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>

        {/* Interaction Bar */}
        <div className="px-4 py-2 border-t border-b border-gray-200 flex items-center justify-between">
          <Button variant="ghost" size="sm" className="flex items-center gap-1" onClick={handleLike}>
            <Heart className={`h-5 w-5 ${liked ? "fill-crimson-red text-crimson-red" : "text-gray-500"}`} />
            <span>{likeCount}</span>
          </Button>

          <div className="flex items-center gap-1 text-gray-500">
            <MessageSquare className="h-5 w-5" />
            <span>{comments.length} comments</span>
          </div>
        </div>

        {/* Add Comment */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Your avatar" />
              <AvatarFallback>YO</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="Add a comment..."
                className="resize-none min-h-[80px]"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <div className="flex justify-end mt-2">
                <Button size="sm" className="bg-deep-saffron hover:bg-deep-saffron/90" onClick={handleAddComment}>
                  <Send className="h-4 w-4 mr-1" />
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Comments */}
        <div className="p-4">
          <h2 className="text-lg font-heading text-charcoal-gray mb-3">Comments ({comments.length})</h2>

          <div className="space-y-4">
            {comments.map((comment) => (
              <Card key={comment.id}>
                <CardContent className="p-3">
                  <div className="flex gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={comment.avatar || "/placeholder.svg"} alt={`${comment.author}'s avatar`} />
                      <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">{comment.author}</h3>
                        <span className="text-xs text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-1">{comment.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}
