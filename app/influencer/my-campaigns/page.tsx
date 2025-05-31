"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, DollarSign, FileText, Upload, Clock, CheckCircle, AlertCircle, Eye, Bot } from "lucide-react"
import Link from "next/link"
import { NegotiationChatbot } from "@/components/negotiation-chatbot"

export default function MyCampaignsPage() {
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null)
  const [showChatbot, setShowChatbot] = useState(false)

  const campaigns = [
    {
      id: "1",
      name: "Summer Fashion Collection",
      brand: "StyleCo",
      brandLogo: "/placeholder.svg?height=40&width=40",
      status: "Active",
      statusColor: "bg-green-100 text-green-700",
      startDate: "May 15, 2025",
      endDate: "Jul 15, 2025",
      totalPayment: "$1,200",
      paidAmount: "$600",
      progress: 65,
      deliverables: {
        total: 3,
        completed: 2,
        pending: 1,
      },
      nextDeadline: "Jun 15, 2025",
      description: "Promote summer fashion collection with authentic styling content",
      requirements: ["2 Instagram Posts", "3 Stories", "1 Reel"],
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
      statusColor: "bg-yellow-100 text-yellow-700",
      startDate: "Jun 1, 2025",
      endDate: "Aug 1, 2025",
      totalPayment: "$2,500",
      paidAmount: "$0",
      progress: 15,
      deliverables: {
        total: 4,
        completed: 0,
        pending: 4,
      },
      nextDeadline: "Jun 20, 2025",
      description: "Showcase new tech product with unboxing and review content",
      requirements: ["1 YouTube Video", "2 Instagram Posts", "5 Stories"],
      aiNegotiator: {
        name: "TechFlow AI",
        personality: "Data-Driven & Analytical",
      },
    },
    {
      id: "3",
      name: "Fitness Challenge",
      brand: "FitLife",
      brandLogo: "/placeholder.svg?height=40&width=40",
      status: "Completed",
      statusColor: "bg-blue-100 text-blue-700",
      startDate: "Mar 1, 2025",
      endDate: "Apr 30, 2025",
      totalPayment: "$950",
      paidAmount: "$950",
      progress: 100,
      deliverables: {
        total: 5,
        completed: 5,
        pending: 0,
      },
      nextDeadline: "Completed",
      description: "30-day fitness challenge with daily workout content",
      requirements: ["5 Instagram Posts", "10 Stories", "2 Reels"],
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
      statusColor: "bg-gray-100 text-gray-700",
      startDate: "Jul 1, 2025",
      endDate: "Jul 31, 2025",
      totalPayment: "$800",
      paidAmount: "$0",
      progress: 0,
      deliverables: {
        total: 3,
        completed: 0,
        pending: 3,
      },
      nextDeadline: "Jul 5, 2025",
      description: "Honest review of new skincare line with before/after content",
      requirements: ["3 Instagram Posts", "5 Stories"],
      aiNegotiator: {
        name: "GlowFlow AI",
        personality: "Beauty Expert & Authentic",
      },
    },
  ]

  const handleMessageBrand = (campaign: any) => {
    setSelectedCampaign(campaign)
    setShowChatbot(true)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "Negotiating":
        return <Clock className="w-4 h-4 text-yellow-600" />
      case "Completed":
        return <CheckCircle className="w-4 h-4 text-blue-600" />
      case "Pending":
        return <AlertCircle className="w-4 h-4 text-gray-600" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Campaigns</h1>
          <p className="text-gray-600">Manage your active and completed brand collaborations</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            View Contracts
          </Button>
          <Button>
            <Upload className="w-4 h-4 mr-2" />
            Upload Content
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Campaigns</p>
                <p className="text-2xl font-bold">2</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Earnings</p>
                <p className="text-2xl font-bold">$5,450</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Upload className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Deliverables</p>
                <p className="text-2xl font-bold">7/15</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Campaigns Grid */}
      <div className="grid gap-6">
        {campaigns.map((campaign) => (
          <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={campaign.brandLogo || "/placeholder.svg"} alt={campaign.brand} />
                    <AvatarFallback>{campaign.brand.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl">{campaign.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <span>by {campaign.brand}</span>
                      <Badge className={campaign.statusColor}>{campaign.status}</Badge>
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">{getStatusIcon(campaign.status)}</div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Campaign Description */}
              <p className="text-gray-600">{campaign.description}</p>

              {/* Progress */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Campaign Progress</span>
                  <span>{campaign.progress}%</span>
                </div>
                <Progress value={campaign.progress} className="h-2" />
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Timeline</span>
                  </div>
                  <p className="text-sm font-medium">
                    {campaign.startDate} - {campaign.endDate}
                  </p>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm">Payment</span>
                  </div>
                  <p className="text-sm font-medium">
                    {campaign.paidAmount} / {campaign.totalPayment}
                  </p>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Upload className="w-4 h-4" />
                    <span className="text-sm">Deliverables</span>
                  </div>
                  <p className="text-sm font-medium">
                    {campaign.deliverables.completed} / {campaign.deliverables.total}
                  </p>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Next Deadline</span>
                  </div>
                  <p className="text-sm font-medium">{campaign.nextDeadline}</p>
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                <div className="flex flex-wrap gap-2">
                  {campaign.requirements.map((req, index) => (
                    <Badge key={index} variant="secondary">
                      {req}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t">
                <Link href={`/influencer/my-campaigns/${campaign.id}`}>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    View Details
                  </Button>
                </Link>

                <Button
                  onClick={() => handleMessageBrand(campaign)}
                  className="flex items-center gap-2"
                  disabled={campaign.status === "Completed"}
                >
                  <Bot className="w-4 h-4" />
                  Message Brand
                </Button>

                {campaign.status === "Active" && (
                  <Button variant="outline" className="flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    Upload Content
                  </Button>
                )}

                <Button variant="outline" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  View Contract
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Negotiation Chatbot */}
      {selectedCampaign && (
        <NegotiationChatbot isOpen={showChatbot} onClose={() => setShowChatbot(false)} campaign={selectedCampaign} />
      )}
    </div>
  )
}
