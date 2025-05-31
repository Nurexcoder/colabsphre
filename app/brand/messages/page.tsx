"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  Send,
  Paperclip,
  Phone,
  Video,
  MoreVertical,
  Star,
  Archive,
  Trash2,
  Filter,
  MessageSquare,
  Bell,
} from "lucide-react"
import { BrandLayout } from "@/components/brand-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState("1")
  const [messageInput, setMessageInput] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const conversations = [
    {
      id: "1",
      name: "Sarah Johnson",
      handle: "@sarahjohnson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thanks for the campaign details! I'm excited to work with you.",
      timestamp: "2 min ago",
      unread: 2,
      campaign: "Summer Fashion Collection",
      status: "online",
    },
    {
      id: "2",
      name: "Mike Chen",
      handle: "@mikechentech",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "When do you need the YouTube video delivered?",
      timestamp: "1 hour ago",
      unread: 0,
      campaign: "Tech Product Launch",
      status: "offline",
    },
    {
      id: "3",
      name: "Emma Davis",
      handle: "@emmafitness",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "I've uploaded the content for review. Please check!",
      timestamp: "3 hours ago",
      unread: 1,
      campaign: "Fitness Challenge",
      status: "online",
    },
    {
      id: "4",
      name: "Alex Rodriguez",
      handle: "@alexfoodie",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "The contract looks good. Ready to proceed!",
      timestamp: "1 day ago",
      unread: 0,
      campaign: "Food Campaign",
      status: "offline",
    },
  ]

  const messages = [
    {
      id: "1",
      sender: "Sarah Johnson",
      content: "Hi! I received your campaign invitation and I'm really interested in collaborating.",
      timestamp: "10:30 AM",
      isOwn: false,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "2",
      sender: "You",
      content:
        "Great to hear from you! I've been following your content and think you'd be perfect for our summer collection campaign.",
      timestamp: "10:35 AM",
      isOwn: true,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "3",
      sender: "Sarah Johnson",
      content: "That sounds amazing! Could you share more details about the deliverables and timeline?",
      timestamp: "10:40 AM",
      isOwn: false,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "4",
      sender: "You",
      content:
        "Of course! We're looking for 2 Instagram posts and 3 stories featuring our summer pieces. The campaign runs from June 1-30.",
      timestamp: "10:45 AM",
      isOwn: true,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "5",
      sender: "Sarah Johnson",
      content: "Thanks for the campaign details! I'm excited to work with you.",
      timestamp: "10:50 AM",
      isOwn: false,
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ]

  const notifications = [
    {
      id: "1",
      type: "message",
      title: "New message from Sarah Johnson",
      description: "Thanks for the campaign details! I'm excited...",
      timestamp: "2 min ago",
      read: false,
    },
    {
      id: "2",
      type: "proposal",
      title: "New proposal received",
      description: "Alex Rodriguez submitted a proposal for Food Campaign",
      timestamp: "1 hour ago",
      read: false,
    },
    {
      id: "3",
      type: "deliverable",
      title: "Content submitted for review",
      description: "Emma Davis uploaded content for Fitness Challenge",
      timestamp: "3 hours ago",
      read: true,
    },
  ]

  const selectedConv = conversations.find((conv) => conv.id === selectedConversation)

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Handle sending message
      setMessageInput("")
    }
  }

  return (
    <BrandLayout>
      <div className="h-[calc(100vh-8rem)] flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600">Communicate with influencers and manage conversations</p>
        </div>

        <Tabs defaultValue="conversations" className="flex-1 flex flex-col">
          <TabsList className="mb-4">
            <TabsTrigger value="conversations" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Conversations
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Notifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="conversations" className="flex-1 flex gap-6">
            {/* Conversations List */}
            <div className="w-80 flex flex-col">
              <Card className="flex-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Conversations</CardTitle>
                    <Button variant="ghost" size="sm">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Search conversations..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-1">
                    {conversations.map((conversation) => (
                      <div
                        key={conversation.id}
                        className={`p-4 cursor-pointer hover:bg-gray-50 border-l-4 transition-colors ${
                          selectedConversation === conversation.id
                            ? "bg-blue-50 border-l-blue-500"
                            : "border-l-transparent"
                        }`}
                        onClick={() => setSelectedConversation(conversation.id)}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="relative">
                            <Avatar>
                              <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                              <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            {conversation.status === "online" && (
                              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-gray-900 truncate">{conversation.name}</p>
                              <p className="text-xs text-gray-500">{conversation.timestamp}</p>
                            </div>
                            <p className="text-xs text-gray-500 mb-1">{conversation.handle}</p>
                            <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                            <div className="flex items-center justify-between mt-2">
                              <Badge variant="secondary" className="text-xs">
                                {conversation.campaign}
                              </Badge>
                              {conversation.unread > 0 && (
                                <Badge className="bg-blue-500 text-white text-xs">{conversation.unread}</Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {selectedConv ? (
                <Card className="flex-1 flex flex-col">
                  {/* Chat Header */}
                  <CardHeader className="border-b">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <Avatar>
                            <AvatarImage src={selectedConv.avatar || "/placeholder.svg"} alt={selectedConv.name} />
                            <AvatarFallback>{selectedConv.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          {selectedConv.status === "online" && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{selectedConv.name}</h3>
                          <p className="text-sm text-gray-500">{selectedConv.handle}</p>
                        </div>
                        <Badge variant="secondary">{selectedConv.campaign}</Badge>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Video className="w-4 h-4" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Star className="mr-2 h-4 w-4" />
                              Star Conversation
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Archive className="mr-2 h-4 w-4" />
                              Archive
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </CardHeader>

                  {/* Messages */}
                  <CardContent className="flex-1 p-4 overflow-y-auto">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                          <div
                            className={`flex space-x-2 max-w-xs lg:max-w-md ${message.isOwn ? "flex-row-reverse space-x-reverse" : ""}`}
                          >
                            <Avatar className="w-8 h-8">
                              <AvatarImage src={message.avatar || "/placeholder.svg"} alt={message.sender} />
                              <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div
                                className={`px-4 py-2 rounded-lg ${
                                  message.isOwn ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
                                }`}
                              >
                                <p className="text-sm">{message.content}</p>
                              </div>
                              <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  {/* Message Input */}
                  <div className="border-t p-4">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Paperclip className="w-4 h-4" />
                      </Button>
                      <Input
                        placeholder="Type a message..."
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                        className="flex-1"
                      />
                      <Button onClick={handleSendMessage} disabled={!messageInput.trim()}>
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ) : (
                <Card className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No conversation selected</h3>
                    <p className="text-gray-600">Choose a conversation from the list to start messaging</p>
                  </div>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Stay updated with the latest activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 border rounded-lg ${
                        !notification.read ? "bg-blue-50 border-blue-200" : "bg-white"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{notification.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{notification.description}</p>
                          <p className="text-xs text-gray-500 mt-2">{notification.timestamp}</p>
                        </div>
                        {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </BrandLayout>
  )
}
