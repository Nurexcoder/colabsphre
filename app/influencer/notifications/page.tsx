"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bell,
  CheckCircle,
  DollarSign,
  Calendar,
  MessageSquare,
  Star,
  AlertTriangle,
  Bot,
  Clock,
  Filter,
  MoreVertical,
  X,
} from "lucide-react"
import { InfluencerLayout } from "@/components/influencer-layout"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NotificationsPage() {
  const [selectedTab, setSelectedTab] = useState("all")
  const [readNotifications, setReadNotifications] = useState<string[]>([])

  const notifications = [
    {
      id: "1",
      type: "payment",
      title: "Payment Received",
      message: "You've received $1,200 for the Summer Fashion Collection campaign.",
      time: "2 hours ago",
      brand: "StyleCorp",
      brandLogo: "/placeholder.svg?height=40&width=40",
      priority: "high",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      id: "2",
      type: "deadline",
      title: "Upcoming Deadline",
      message: "Your Instagram Reel for Tech Product Launch is due in 3 days.",
      time: "5 hours ago",
      brand: "TechFlow",
      brandLogo: "/placeholder.svg?height=40&width=40",
      priority: "high",
      icon: Calendar,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      id: "3",
      type: "message",
      title: "New Message",
      message: "StyleCorp has sent you a message about your recent content submission.",
      time: "1 day ago",
      brand: "StyleCorp",
      brandLogo: "/placeholder.svg?height=40&width=40",
      priority: "medium",
      icon: MessageSquare,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      id: "4",
      type: "review",
      title: "Content Approved",
      message: "Your Instagram post for FitLife has been approved with a 4.8/5 rating.",
      time: "2 days ago",
      brand: "FitLife",
      brandLogo: "/placeholder.svg?height=40&width=40",
      priority: "medium",
      icon: Star,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      id: "5",
      type: "alert",
      title: "Revision Requested",
      message: "GlowCo has requested revisions on your product review video.",
      time: "3 days ago",
      brand: "GlowCo",
      brandLogo: "/placeholder.svg?height=40&width=40",
      priority: "high",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      id: "6",
      type: "ai",
      title: "AI Negotiation Complete",
      message: "StyleFlow AI has successfully negotiated a $200 increase in your payment.",
      time: "4 days ago",
      brand: "StyleCorp",
      brandLogo: "/placeholder.svg?height=40&width=40",
      priority: "low",
      icon: Bot,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
    },
    {
      id: "7",
      type: "campaign",
      title: "New Campaign Opportunity",
      message: "BeautyBrand is interested in collaborating with you for their new skincare line.",
      time: "5 days ago",
      brand: "BeautyBrand",
      brandLogo: "/placeholder.svg?height=40&width=40",
      priority: "medium",
      icon: Calendar,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
    },
    {
      id: "8",
      type: "reminder",
      title: "Content Calendar Reminder",
      message: "You have 3 content pieces scheduled for next week.",
      time: "1 week ago",
      brand: "System",
      brandLogo: "/placeholder.svg?height=40&width=40",
      priority: "low",
      icon: Clock,
      color: "text-gray-600",
      bgColor: "bg-gray-100",
    },
  ]

  const toggleReadStatus = (id: string) => {
    setReadNotifications((prev) => (prev.includes(id) ? prev.filter((notifId) => notifId !== id) : [...prev, id]))
  }

  const markAllAsRead = () => {
    setReadNotifications(notifications.map((notif) => notif.id))
  }

  const clearAllNotifications = () => {
    // In a real app, this would delete notifications
    // For now, we'll just mark them all as read
    markAllAsRead()
  }

  const filteredNotifications = notifications.filter((notif) => {
    if (selectedTab === "all") return true
    if (selectedTab === "unread") return !readNotifications.includes(notif.id)
    return notif.type === selectedTab
  })

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-100 text-red-700">High</Badge>
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-700">Medium</Badge>
      case "low":
        return <Badge className="bg-green-100 text-green-700">Low</Badge>
      default:
        return null
    }
  }

  return (
    <InfluencerLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <Bell className="w-8 h-8" />
              Notifications
            </h1>
            <p className="text-gray-600">Stay updated with your campaign activities and messages</p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" onClick={markAllAsRead}>
              <CheckCircle className="w-4 h-4 mr-2" />
              Mark All as Read
            </Button>
            <Button variant="outline" onClick={clearAllNotifications}>
              <X className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          </div>
        </div>

        {/* Filters and Tabs */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Tabs defaultValue="all" value={selectedTab} onValueChange={setSelectedTab} className="w-full sm:w-auto">
            <TabsList className="grid grid-cols-4 sm:grid-cols-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="payment">Payments</TabsTrigger>
              <TabsTrigger value="deadline">Deadlines</TabsTrigger>
              <TabsTrigger value="message">Messages</TabsTrigger>
              <TabsTrigger value="review">Reviews</TabsTrigger>
              <TabsTrigger value="alert">Alerts</TabsTrigger>
              <TabsTrigger value="ai">AI</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex gap-2">
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="priority">Priority</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Notifications List */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>
              {selectedTab === "all"
                ? "All Notifications"
                : selectedTab === "unread"
                  ? "Unread Notifications"
                  : `${selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)} Notifications`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {filteredNotifications.length > 0 ? (
                filteredNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg border transition-colors ${
                      readNotifications.includes(notification.id) ? "bg-white" : "bg-blue-50 border-blue-100"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`${notification.bgColor} p-2 rounded-full`}>
                        <notification.icon className={`w-5 h-5 ${notification.color}`} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                            {!readNotifications.includes(notification.id) && (
                              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            {getPriorityBadge(notification.priority)}
                            <span className="text-xs text-gray-500">{notification.time}</span>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-3">{notification.message}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="w-6 h-6">
                              <AvatarImage
                                src={notification.brandLogo || "/placeholder.svg"}
                                alt={notification.brand}
                              />
                              <AvatarFallback>{notification.brand.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-gray-600">{notification.brand}</span>
                          </div>

                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleReadStatus(notification.id)}
                              className="text-xs"
                            >
                              {readNotifications.includes(notification.id) ? "Mark as Unread" : "Mark as Read"}
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900">No notifications</h3>
                  <p className="text-gray-500">You're all caught up!</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </InfluencerLayout>
  )
}
