"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Eye,
  MessageSquare,
  Calendar,
  DollarSign,
  CheckCircle,
  Clock,
  AlertTriangle,
  FileText,
  Star,
  Filter,
} from "lucide-react"
import Link from "next/link"
import { InfluencerLayout } from "@/components/influencer-layout"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MyCampaignsPage() {
  const [sortBy, setSortBy] = useState("deadline")

  const campaigns = {
    active: [
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
        description: "Showcase summer fashion pieces with authentic styling",
        nextDeliverable: "Instagram Reel due Jun 10",
        daysLeft: 3,
      },
      {
        id: "2",
        name: "Tech Product Launch",
        brand: "TechInnovate",
        brandLogo: "/placeholder.svg?height=40&width=40",
        status: "In Progress",
        progress: 40,
        payment: "$2,500",
        deadline: "Jul 1, 2025",
        deliverables: "1/2",
        statusColor: "bg-blue-100 text-blue-700",
        description: "Create authentic review content for new smartphone",
        nextDeliverable: "YouTube review video due Jun 20",
        daysLeft: 15,
      },
    ],
    negotiating: [
      {
        id: "3",
        name: "Fitness Challenge",
        brand: "FitLife",
        brandLogo: "/placeholder.svg?height=40&width=40",
        status: "Negotiating",
        progress: 10,
        payment: "$950",
        deadline: "Jun 30, 2025",
        deliverables: "0/3",
        statusColor: "bg-yellow-100 text-yellow-700",
        description: "30-day fitness journey documentation",
        nextDeliverable: "Contract review pending",
        daysLeft: 25,
      },
    ],
    completed: [
      {
        id: "4",
        name: "Beauty Product Review",
        brand: "GlowCorp",
        brandLogo: "/placeholder.svg?height=40&width=40",
        status: "Completed",
        progress: 100,
        payment: "$800",
        deadline: "May 30, 2025",
        deliverables: "3/3",
        statusColor: "bg-gray-100 text-gray-700",
        description: "Skincare routine featuring new product line",
        nextDeliverable: "All deliverables completed",
        daysLeft: 0,
        rating: 4.8,
        feedback: "Excellent work! Great engagement and authentic content.",
      },
      {
        id: "5",
        name: "Food Recipe Campaign",
        brand: "TasteMakers",
        brandLogo: "/placeholder.svg?height=40&width=40",
        status: "Completed",
        progress: 100,
        payment: "$600",
        deadline: "May 15, 2025",
        deliverables: "2/2",
        statusColor: "bg-gray-100 text-gray-700",
        description: "Create recipe content with organic ingredients",
        nextDeliverable: "All deliverables completed",
        daysLeft: 0,
        rating: 4.9,
        feedback: "Amazing recipe videos! Very professional quality.",
      },
    ],
  }

  const CampaignCard = ({ campaign, showRating = false }: { campaign: any; showRating?: boolean }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src={campaign.brandLogo || "/placeholder.svg"} alt={campaign.brand} />
              <AvatarFallback>{campaign.brand.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
                <Badge className={campaign.statusColor}>{campaign.status}</Badge>
              </div>
              <p className="text-gray-600 mb-1">by {campaign.brand}</p>
              <p className="text-sm text-gray-500">{campaign.description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <DollarSign className="w-4 h-4 text-green-600 mx-auto mb-1" />
            <p className="text-sm text-gray-600">Payment</p>
            <p className="font-semibold text-green-600">{campaign.payment}</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <Calendar className="w-4 h-4 text-blue-600 mx-auto mb-1" />
            <p className="text-sm text-gray-600">Deadline</p>
            <p className="font-semibold">{campaign.deadline}</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <FileText className="w-4 h-4 text-purple-600 mx-auto mb-1" />
            <p className="text-sm text-gray-600">Deliverables</p>
            <p className="font-semibold">{campaign.deliverables}</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <Clock className="w-4 h-4 text-orange-600 mx-auto mb-1" />
            <p className="text-sm text-gray-600">Days Left</p>
            <p className="font-semibold">{campaign.daysLeft || "Completed"}</p>
          </div>
        </div>

        {campaign.status !== "Completed" && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Progress</span>
              <span className="font-medium">{campaign.progress}%</span>
            </div>
            <Progress value={campaign.progress} className="h-2" />
          </div>
        )}

        <div className="mb-4 p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-2">
            {campaign.status === "Completed" ? (
              <CheckCircle className="w-4 h-4 text-green-600" />
            ) : campaign.daysLeft <= 3 ? (
              <AlertTriangle className="w-4 h-4 text-red-600" />
            ) : (
              <Clock className="w-4 h-4 text-blue-600" />
            )}
            <p className="text-sm font-medium">{campaign.nextDeliverable}</p>
          </div>
        </div>

        {showRating && campaign.rating && (
          <div className="mb-4 p-3 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(campaign.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm font-medium">{campaign.rating}/5</span>
              </div>
            </div>
            <p className="text-sm text-gray-700">"{campaign.feedback}"</p>
          </div>
        )}

        <div className="flex gap-2">
          <Link href={`/influencer/my-campaigns/${campaign.id}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full">
              <Eye className="w-4 h-4 mr-1" />
              View Details
            </Button>
          </Link>
          {campaign.status !== "Completed" && (
            <Link href={`/influencer/messages?campaign=${campaign.id}`} className="flex-1">
              <Button variant="outline" size="sm" className="w-full">
                <MessageSquare className="w-4 h-4 mr-1" />
                Message Brand
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <InfluencerLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Campaigns</h1>
            <p className="text-gray-600">Track and manage your active collaborations</p>
          </div>

          <div className="flex gap-3">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  <SelectValue placeholder="Sort by" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="deadline">Deadline</SelectItem>
                <SelectItem value="payment">Payment</SelectItem>
                <SelectItem value="progress">Progress</SelectItem>
                <SelectItem value="status">Status</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Campaign Tabs */}
        <Tabs defaultValue="active" className="space-y-6">
          <TabsList>
            <TabsTrigger value="active">Active ({campaigns.active.length})</TabsTrigger>
            <TabsTrigger value="negotiating">Negotiating ({campaigns.negotiating.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({campaigns.completed.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            <div className="space-y-6">
              {campaigns.active.map((campaign) => (
                <CampaignCard key={campaign.id} campaign={campaign} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="negotiating">
            <div className="space-y-6">
              {campaigns.negotiating.map((campaign) => (
                <CampaignCard key={campaign.id} campaign={campaign} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="space-y-6">
              {campaigns.completed.map((campaign) => (
                <CampaignCard key={campaign.id} campaign={campaign} showRating />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </InfluencerLayout>
  )
}
