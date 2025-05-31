"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Calendar,
  DollarSign,
  FileText,
  MessageSquare,
  Upload,
  Download,
  Send,
  Paperclip,
  CheckCircle,
  Clock,
  AlertTriangle,
  Star,
} from "lucide-react"
import Link from "next/link"
import { InfluencerLayout } from "@/components/influencer-layout"
import { useParams } from "next/navigation"

export default function CampaignDetailsPage() {
  const params = useParams()
  const campaignId = params.id as string
  const [message, setMessage] = useState("")
  const [contractFile, setContractFile] = useState<File | null>(null)

  // Mock campaign data
  const campaign = {
    id: campaignId,
    name: "Summer Fashion Collection",
    brand: "StyleCorp",
    brandLogo: "/placeholder.svg?height=60&width=60",
    status: "Active",
    progress: 75,
    payment: "$1,200",
    originalQuote: "$1,400",
    deadline: "Jun 15, 2025",
    deliverables: "2/3",
    statusColor: "bg-green-100 text-green-700",
    description:
      "Showcase summer fashion pieces with authentic styling and create engaging content for our target audience.",
    requirements: ["2 Instagram posts", "3 Instagram stories", "1 Instagram Reel"],
    guidelines:
      "Focus on natural lighting, authentic poses, and summer vibes. Use provided hashtags and tag our brand.",
    nextDeliverable: "Instagram Reel due Jun 10",
    daysLeft: 3,
  }

  const deliverables = [
    {
      id: "1",
      title: "Instagram Post #1",
      description: "Summer outfit showcase",
      status: "Completed",
      dueDate: "May 25, 2025",
      submittedDate: "May 24, 2025",
      feedback: "Great work! Love the styling and natural lighting.",
      statusColor: "text-green-600",
      rating: 4.8,
    },
    {
      id: "2",
      title: "Instagram Stories",
      description: "Behind-the-scenes content",
      status: "Completed",
      dueDate: "May 30, 2025",
      submittedDate: "May 29, 2025",
      feedback: "Perfect! Authentic and engaging stories.",
      statusColor: "text-green-600",
      rating: 4.9,
    },
    {
      id: "3",
      title: "Instagram Reel",
      description: "Summer fashion transition video",
      status: "Pending",
      dueDate: "Jun 10, 2025",
      submittedDate: null,
      feedback: null,
      statusColor: "text-orange-600",
    },
  ]

  const conversation = [
    {
      id: "1",
      sender: "StyleCorp",
      message: `Hi! We're excited to work with you on this Summer Fashion Collection campaign. Looking forward to your creative content!`,
      timestamp: "2 days ago",
      isBrand: true,
    },
    {
      id: "2",
      sender: "You",
      message: "Thank you! I'm excited about this collaboration. When do you need the first deliverable?",
      timestamp: "2 days ago",
      isBrand: false,
    },
    {
      id: "3",
      sender: "StyleCorp",
      message: `Your first Instagram post is due May 25th. For this summer collection, we'd recommend outdoor settings with natural lighting. Would you like us to send you the brand's style guide and product details?`,
      timestamp: "2 days ago",
      isBrand: true,
    },
    {
      id: "4",
      sender: "You",
      message: "Yes, please send the style guide. Also, can we discuss the timeline for the Instagram Reel?",
      timestamp: "1 day ago",
      isBrand: false,
    },
    {
      id: "5",
      sender: "StyleCorp",
      message: `I've sent the style guide to your email. Regarding the Instagram Reel, the original deadline is June 10th, but we can offer a 3-day extension if needed. The reel should showcase 3-4 outfit transitions with trending audio. Would you like us to suggest some trending sounds that align with the brand's aesthetic?`,
      timestamp: "1 day ago",
      isBrand: true,
    },
    {
      id: "6",
      sender: "You",
      message:
        "That would be great! Also, I'm thinking of adding a bonus story series. Can you check if the brand would be interested?",
      timestamp: "1 hour ago",
      isBrand: false,
    },
    {
      id: "7",
      sender: "StyleCorp",
      message: `We'd definitely be interested in your bonus story series idea! We can offer additional compensation for the extra content. Let's discuss the details and proposed rate for the bonus content.`,
      timestamp: "45 minutes ago",
      isBrand: true,
    },
  ]

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage("")
    }
  }

  const handleContractUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setContractFile(file)
    }
  }

  return (
    <InfluencerLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/influencer/my-campaigns">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Campaigns
              </Button>
            </Link>
            <div className="flex items-center space-x-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={campaign.brandLogo || "/placeholder.svg"} alt={campaign.brand} />
                <AvatarFallback>{campaign.brand.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{campaign.name}</h1>
                <p className="text-gray-600">by {campaign.brand}</p>
              </div>
              <Badge className={campaign.statusColor}>{campaign.status}</Badge>
            </div>
          </div>

          <div className="flex gap-3">
            <Link href={`/influencer/messages?campaign=${campaignId}`}>
              <Button variant="outline">
                <MessageSquare className="w-4 h-4 mr-2" />
                Message Brand
              </Button>
            </Link>
            <Link href={`/influencer/deliverables?campaign=${campaignId}`}>
              <Button>
                <Upload className="w-4 h-4 mr-2" />
                Upload Content
              </Button>
            </Link>
          </div>
        </div>

        {/* Campaign Overview */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Final Payment</p>
              <p className="text-xl font-bold text-green-600">{campaign.payment}</p>
              {campaign.originalQuote && (
                <p className="text-xs text-gray-500">
                  Originally: <span className="line-through">{campaign.originalQuote}</span>
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Deadline</p>
              <p className="text-xl font-bold">{campaign.deadline}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <FileText className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Deliverables</p>
              <p className="text-xl font-bold">{campaign.deliverables}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Days Left</p>
              <p className="text-xl font-bold">{campaign.daysLeft}</p>
            </CardContent>
          </Card>
        </div>

        {/* Progress */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Campaign Progress</h3>
              <span className="text-lg font-bold">{campaign.progress}%</span>
            </div>
            <Progress value={campaign.progress} className="h-3" />
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600" />
                <p className="text-sm font-medium">{campaign.nextDeliverable}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="deliverables">Deliverables</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="contracts">Contracts</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{campaign.description}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {campaign.requirements.map((req, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Brand Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{campaign.guidelines}</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="deliverables">
            <Card>
              <CardHeader>
                <CardTitle>Deliverables Status</CardTitle>
                <CardDescription>Track your content submissions and feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {deliverables.map((deliverable) => (
                    <div key={deliverable.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold">{deliverable.title}</h4>
                          <p className="text-sm text-gray-600">{deliverable.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {deliverable.rating && (
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-medium">{deliverable.rating}</span>
                            </div>
                          )}
                          <Badge
                            variant={deliverable.status === "Completed" ? "default" : "secondary"}
                            className={deliverable.statusColor}
                          >
                            {deliverable.status}
                          </Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Due Date:</span>
                          <span className="font-medium ml-2">{deliverable.dueDate}</span>
                        </div>
                        {deliverable.submittedDate && (
                          <div>
                            <span className="text-gray-600">Submitted:</span>
                            <span className="font-medium ml-2">{deliverable.submittedDate}</span>
                          </div>
                        )}
                      </div>

                      {deliverable.feedback && (
                        <div className="mt-3 p-3 bg-green-50 rounded-lg">
                          <p className="text-sm text-green-800">
                            <strong>Feedback:</strong> {deliverable.feedback}
                          </p>
                        </div>
                      )}

                      {deliverable.status === "Pending" && (
                        <div className="mt-3">
                          <Link href={`/influencer/deliverables?campaign=${campaignId}&deliverable=${deliverable.id}`}>
                            <Button size="sm">
                              <Upload className="w-4 h-4 mr-2" />
                              Upload Content
                            </Button>
                          </Link>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  Chat with {campaign.brand}
                </CardTitle>
                <CardDescription>Communicate directly with {campaign.brand} for this campaign</CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {conversation.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.isBrand ? "justify-start" : "justify-end"}`}>
                      <div
                        className={`flex space-x-2 max-w-xs lg:max-w-md ${msg.isBrand ? "" : "flex-row-reverse space-x-reverse"}`}
                      >
                        <Avatar className="w-8 h-8">
                          {msg.isBrand ? (
                            <AvatarImage src={campaign.brandLogo || "/placeholder.svg"} alt={campaign.brand} />
                          ) : (
                            <AvatarImage src="/placeholder.svg" alt="You" />
                          )}
                          <AvatarFallback>{msg.isBrand ? campaign.brand.charAt(0) : "Y"}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div
                            className={`px-4 py-2 rounded-lg ${
                              msg.isBrand ? "bg-gray-100 text-gray-900" : "bg-blue-500 text-white"
                            }`}
                          >
                            <p className="text-sm whitespace-pre-line">{msg.message}</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <Input
                    placeholder={`Message ${campaign.brand} about this campaign...`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} disabled={!message.trim()}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contracts">
            <Card>
              <CardHeader>
                <CardTitle>Contract Management</CardTitle>
                <CardDescription>Upload and manage campaign contracts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contract Status */}
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-800">Contract Signed</span>
                  </div>
                  <p className="text-sm text-green-700">
                    Your contract has been signed and approved. Final rate: {campaign.payment}
                  </p>
                </div>

                {/* Upload Section */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Upload signed contract</p>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleContractUpload}
                    className="hidden"
                    id="contract-upload"
                  />
                  <label htmlFor="contract-upload">
                    <Button variant="outline" className="cursor-pointer">
                      Choose File
                    </Button>
                  </label>
                  {contractFile && <p className="text-sm text-green-600 mt-2">Selected: {contractFile.name}</p>}
                </div>

                {/* Existing Contracts */}
                <div className="space-y-3">
                  <h4 className="font-medium">Contract History</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Campaign Agreement v2.1</p>
                        <p className="text-sm text-gray-600">Uploaded on May 20, 2025</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        <Badge variant="default">Active</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </InfluencerLayout>
  )
}
