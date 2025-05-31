"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Calendar,
  DollarSign,
  TrendingUp,
  Users,
  MessageSquare,
  Star,
  CheckCircle,
  AlertTriangle,
  Bot,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { InfluencerLayout } from "@/components/influencer-layout"
import { NegotiationChatbot } from "@/components/negotiation-chatbot"

export default function InfluencerDashboard() {
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null)
  const [showChatbot, setShowChatbot] = useState(false)

  const stats = [
    {
      title: "Active Campaigns",
      value: "8",
      change: "+2 from last month",
      icon: Calendar,
      color: "text-blue-600",
    },
    {
      title: "Total Earnings",
      value: "$12,450",
      change: "+15% from last month",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Avg. Engagement",
      value: "5.2%",
      change: "+0.3% from last month",
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      title: "Followers",
      value: "125K",
      change: "+2.1K this month",
      icon: Users,
      color: "text-orange-600",
    },
  ]

  const campaigns = [
    {
      id: "1",
      name: "Summer Fashion Collection",
      brand: "StyleCorp",
      brandLogo: "/placeholder.svg?height=40&width=40",
      status: "Active",
      progress: 75,
      payment: "$1,200",
      deadline: "Jun 15, 2025",
      deliverables: "2/3",
      statusColor: "bg-green-100 text-green-700",
      aiNegotiator: {
        name: "StyleFlow AI",
        personality: "Professional & Persuasive",
      },
    },
    {
      id: "2",
      name: "Tech Product Launch",
      brand: "TechFlow",
      brandLogo: "/placeholder.svg?height=40&width=40",
      status: "Negotiating",
      progress: 25,
      payment: "$2,500",
      deadline: "Jul 1, 2025",
      deliverables: "0/4",
      statusColor: "bg-yellow-100 text-yellow-700",
      aiNegotiator: {
        name: "TechFlow AI",
        personality: "Data-Driven & Direct",
      },
    },
    {
      id: "3",
      name: "Fitness Challenge",
      brand: "FitLife",
      brandLogo: "/placeholder.svg?height=40&width=40",
      status: "Completed",
      progress: 100,
      payment: "$950",
      deadline: "May 30, 2025",
      deliverables: "3/3",
      statusColor: "bg-blue-100 text-blue-700",
      aiNegotiator: {
        name: "FitFlow AI",
        personality: "Motivational & Energetic",
      },
    },
    {
      id: "4",
      name: "Beauty Product Review",
      brand: "GlowCo",
      brandLogo: "/placeholder.svg?height=40&width=40",
      status: "Pending",
      progress: 0,
      payment: "$800",
      deadline: "Jun 20, 2025",
      deliverables: "0/2",
      statusColor: "bg-gray-100 text-gray-700",
      aiNegotiator: {
        name: "GlowBot AI",
        personality: "Creative & Inspiring",
      },
    },
  ]

  const recentActivities = [
    {
      id: "1",
      type: "payment",
      title: "Payment received from StyleCorp",
      description: "$1,200 for Summer Fashion Collection",
      time: "2 hours ago",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      id: "2",
      type: "deliverable",
      title: "Content approved by TechFlow",
      description: "Instagram post received 4.8/5 rating",
      time: "5 hours ago",
      icon: CheckCircle,
      color: "text-blue-600",
    },
    {
      id: "3",
      type: "negotiation",
      title: "AI negotiation completed",
      description: "GlowBot AI finalized contract terms",
      time: "1 day ago",
      icon: Bot,
      color: "text-purple-600",
    },
    {
      id: "4",
      type: "deadline",
      title: "Upcoming deadline reminder",
      description: "Instagram Reel due in 3 days",
      time: "1 day ago",
      icon: AlertTriangle,
      color: "text-orange-600",
    },
  ]

  const handleMessageBrand = (campaign: any) => {
    setSelectedCampaign(campaign)
    setShowChatbot(true)
  }

  return (
    <InfluencerLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your campaign overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Active Campaigns */}
        <Card>
          <CardHeader>
            <CardTitle>Active Campaigns</CardTitle>
            <CardDescription>Manage your ongoing collaborations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <div key={campaign.id} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={campaign.brandLogo || "/placeholder.svg"}
                        alt={campaign.brand}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{campaign.name}</h3>
                        <p className="text-sm text-gray-600">by {campaign.brand}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={campaign.statusColor}>{campaign.status}</Badge>
                      <div className="flex items-center gap-1">
                        <Bot className="w-3 h-3 text-blue-600" />
                        <span className="text-xs text-gray-600">AI Managed</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Payment</p>
                      <p className="font-medium text-green-600">{campaign.payment}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Deadline</p>
                      <p className="font-medium">{campaign.deadline}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Deliverables</p>
                      <p className="font-medium">{campaign.deliverables}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Progress</p>
                      <p className="font-medium">{campaign.progress}%</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{campaign.progress}%</span>
                    </div>
                    <Progress value={campaign.progress} className="h-2" />
                  </div>

                  {/* AI Negotiator Info */}
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">Managed by {campaign.aiNegotiator.name}</span>
                    </div>
                    <p className="text-xs text-blue-600 mt-1">{campaign.aiNegotiator.personality}</p>
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/influencer/my-campaigns/${campaign.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleMessageBrand(campaign)}
                      className="flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Message Brand
                    </Button>
                    {campaign.status === "Active" && <Button size="sm">Upload Content</Button>}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest campaign updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4">
                  <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center`}>
                    <activity.icon className={`w-4 h-4 ${activity.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity.title}</p>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Overview */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>This Month's Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Campaigns Completed</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Average Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">4.8</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">On-time Delivery</span>
                  <span className="font-medium text-green-600">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">AI Negotiations</span>
                  <span className="font-medium text-blue-600">5 successful</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Content Calendar
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Analytics Dashboard
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message Center
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Zap className="w-4 h-4 mr-2" />
                  AI Writing Assistant
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Negotiation Chatbot */}
      {selectedCampaign && (
        <NegotiationChatbot isOpen={showChatbot} onClose={() => setShowChatbot(false)} campaign={selectedCampaign} />
      )}
    </InfluencerLayout>
  )
}
