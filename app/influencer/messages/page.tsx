"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  Filter,
  MessageSquare,
  Send,
  Paperclip,
  MoreVertical,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { InfluencerLayout } from "@/components/influencer-layout"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>("1")
  const [message, setMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const conversations = [
    {
      id: "1",
      brand: "StyleCorp",
      brandLogo: "/placeholder.svg?height=40&width=40",
      campaign: "Summer Fashion Collection",
      lastMessage: "Great! Looking forward to your content. The style guide has been sent to your email.",
      timestamp: "2 hours ago",
      unread: 0,
      status: "Active",
      priority: "High",
    },
    {
      id: "2",
      brand: "TechFlow",
      brandLogo: "/placeholder.svg?height=40&width=40",
      campaign: "Product Launch Campaign",
      lastMessage: "We'd like to discuss the timeline for the video content. Are you available for a call?",
      timestamp: "1 day ago",
      unread: 2,
      status: "Pending",
      priority: "Medium",
    },
    {
      id: "3",
      brand: "FitLife",
      brandLogo: "/placeholder.svg?height=40&width=40",
      campaign: "Fitness Challenge",
      lastMessage: "Thank you for the amazing content! The engagement has been fantastic.",
      timestamp: "3 days ago",
      unread: 0,
      status: "Completed",
      priority: "Low",
    },
    {
      id: "4",
      brand: "BeautyBrand",
      brandLogo: "/placeholder.svg?height=40&width=40",
      campaign: "Skincare Routine",
      lastMessage: "Hi! We're interested in collaborating with you for our new skincare line launch.",
      timestamp: "1 week ago",
      unread: 1,
      status: "New",
      priority: "High",
    },
  ]

  const messages = [
    {
      id: "1",
      sender: "StyleCorp",
      message: "Hi! We're excited to work with you on our Summer Fashion Collection campaign.",
      timestamp: "10:30 AM",
      isBrand: true,
      type: "text",
    },
    {
      id: "2",
      sender: "You",
      message: "Thank you! I'm excited about this collaboration. Can you tell me more about the requirements?",
      timestamp: "10:35 AM",
      isBrand: false,
      type: "text",
    },
    {
      id: "3",
      sender: "StyleCorp",
      message:
        "We're looking for 2 Instagram posts, 3 stories, and 1 reel showcasing our summer collection. The compensation is $1,200.",
      timestamp: "10:40 AM",
      isBrand: true,
      type: "text",
    },
    {
      id: "4",
      sender: "You",
      message: "That sounds great! When do you need the content delivered?",
      timestamp: "10:45 AM",
      isBrand: false,
      type: "text",
    },
    {
      id: "5",
      sender: "StyleCorp",
      message:
        "The first post should be ready by June 15th, stories by June 20th, and the reel by June 25th. Does this timeline work for you?",
      timestamp: "10:50 AM",
      isBrand: true,
      type: "text",
    },
    {
      id: "6",
      sender: "You",
      message:
        "Perfect! I can definitely work with that timeline. Could you send me the style guide and product details?",
      timestamp: "11:00 AM",
      isBrand: false,
      type: "text",
    },
    {
      id: "7",
      sender: "StyleCorp",
      message: "Great! Looking forward to your content. The style guide has been sent to your email.",
      timestamp: "2 hours ago",
      isBrand: true,
      type: "text",
    },
  ]

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage("")
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700"
      case "Pending":
        return "bg-yellow-100 text-yellow-700"
      case "Completed":
        return "bg-blue-100 text-blue-700"
      case "New":
        return "bg-purple-100 text-purple-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "High":
        return <AlertCircle className="w-3 h-3 text-red-500" />
      case "Medium":
        return <Clock className="w-3 h-3 text-yellow-500" />
      case "Low":
        return <CheckCircle className="w-3 h-3 text-green-500" />
      default:
        return null
    }
  }

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.campaign.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <InfluencerLayout>
      <div className="h-[calc(100vh-120px)] flex">
        {/* Conversations Sidebar */}
        <div className="w-80 border-r bg-white flex flex-col">
          {/* Header */}
          <div className="p-4 border-b">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Messages</h2>
              <Button variant="ghost" size="sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search conversations..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex gap-2 mt-3">
              <Select defaultValue="all">
                <SelectTrigger className="flex-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedConversation === conversation.id ? "bg-blue-50 border-blue-200" : ""
                }`}
                onClick={() => setSelectedConversation(conversation.id)}
              >
                <div className="flex items-start space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={conversation.brandLogo || "/placeholder.svg"} alt={conversation.brand} />
                    <AvatarFallback>{conversation.brand.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900 truncate">{conversation.brand}</h3>
                        {getPriorityIcon(conversation.priority)}
                      </div>
                      <div className="flex items-center gap-1">
                        {conversation.unread > 0 && (
                          <Badge variant="default" className="bg-blue-500 text-white text-xs">
                            {conversation.unread}
                          </Badge>
                        )}
                        <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{conversation.campaign}</p>
                    <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                    <div className="flex items-center justify-between mt-2">
                      <Badge variant="secondary" className={getStatusColor(conversation.status)}>
                        {conversation.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage
                        src={
                          conversations.find((c) => c.id === selectedConversation)?.brandLogo ||
                          "/placeholder.svg" ||
                          "/placeholder.svg"
                        }
                        alt="Brand"
                      />
                      <AvatarFallback>
                        {conversations.find((c) => c.id === selectedConversation)?.brand.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {conversations.find((c) => c.id === selectedConversation)?.brand}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {conversations.find((c) => c.id === selectedConversation)?.campaign}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className={getStatusColor(conversations.find((c) => c.id === selectedConversation)?.status || "")}
                    >
                      {conversations.find((c) => c.id === selectedConversation)?.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.isBrand ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`flex space-x-2 max-w-xs lg:max-w-md ${
                        msg.isBrand ? "" : "flex-row-reverse space-x-reverse"
                      }`}
                    >
                      <Avatar className="w-8 h-8">
                        {msg.isBrand ? (
                          <AvatarImage
                            src={
                              conversations.find((c) => c.id === selectedConversation)?.brandLogo ||
                              "/placeholder.svg" ||
                              "/placeholder.svg"
                            }
                            alt="Brand"
                          />
                        ) : (
                          <AvatarImage src="/placeholder.svg" alt="You" />
                        )}
                        <AvatarFallback>
                          {msg.isBrand
                            ? conversations.find((c) => c.id === selectedConversation)?.brand.charAt(0)
                            : "Y"}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div
                          className={`px-4 py-2 rounded-lg ${
                            msg.isBrand ? "bg-white text-gray-900 shadow-sm" : "bg-blue-500 text-white"
                          }`}
                        >
                          <p className="text-sm">{msg.message}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t bg-white">
                <div className="flex items-end space-x-2">
                  <Button variant="ghost" size="sm">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <Textarea
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSendMessage())}
                    className="flex-1 min-h-[40px] max-h-[120px] resize-none"
                    rows={1}
                  />
                  <Button onClick={handleSendMessage} disabled={!message.trim()}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">Press Enter to send, Shift+Enter for new line</p>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
                <p className="text-gray-600">Choose a conversation from the sidebar to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </InfluencerLayout>
  )
}
