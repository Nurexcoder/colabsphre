"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  Filter,
  Download,
  Eye,
  CheckCircle,
  Clock,
  AlertTriangle,
  FileText,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Star,
  Play,
  ImageIcon,
} from "lucide-react"
import { BrandLayout } from "@/components/brand-layout"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export default function DeliverablesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [campaignFilter, setCampaignFilter] = useState("all")
  const [selectedDeliverable, setSelectedDeliverable] = useState<any>(null)
  const [feedback, setFeedback] = useState("")
  const [rating, setRating] = useState(0)

  const deliverables = [
    {
      id: "1",
      influencer: "Sarah Johnson",
      handle: "@sarahjohnson",
      avatar: "/placeholder.svg?height=40&width=40",
      campaign: "Summer Fashion Collection",
      deliverable: "Instagram Post #1",
      type: "Image Post",
      status: "Pending Review",
      submittedDate: "Jun 2, 2025",
      dueDate: "Jun 5, 2025",
      description: "Summer outfit showcase with beach background",
      contentUrl: "/placeholder.svg?height=400&width=400",
      statusColor: "bg-yellow-100 text-yellow-700",
      engagement: null,
      isOverdue: false,
    },
    {
      id: "2",
      influencer: "Mike Chen",
      handle: "@mikechentech",
      avatar: "/placeholder.svg?height=40&width=40",
      campaign: "Tech Product Launch",
      deliverable: "YouTube Review Video",
      type: "Video",
      status: "Approved",
      submittedDate: "May 30, 2025",
      dueDate: "Jun 1, 2025",
      description: "Comprehensive smartphone review and unboxing",
      contentUrl: "#",
      statusColor: "bg-green-100 text-green-700",
      engagement: { views: "12.5K", likes: "890", comments: "156" },
      isOverdue: false,
      rating: 4.8,
      feedback: "Excellent review! Very detailed and authentic. Great production quality.",
    },
    {
      id: "3",
      influencer: "Emma Davis",
      handle: "@emmafitness",
      avatar: "/placeholder.svg?height=40&width=40",
      campaign: "Fitness Challenge",
      deliverable: "Instagram Reel",
      type: "Video",
      status: "Needs Revision",
      submittedDate: "Jun 1, 2025",
      dueDate: "May 30, 2025",
      description: "30-day fitness transformation showcase",
      contentUrl: "#",
      statusColor: "bg-red-100 text-red-700",
      engagement: null,
      isOverdue: true,
      feedback: "Great content but please adjust the lighting and add brand hashtags.",
    },
    {
      id: "4",
      influencer: "Alex Rodriguez",
      handle: "@alexfoodie",
      avatar: "/placeholder.svg?height=40&width=40",
      campaign: "Food Campaign",
      deliverable: "Recipe Post",
      type: "Image Post",
      status: "Published",
      submittedDate: "May 28, 2025",
      dueDate: "May 30, 2025",
      description: "Organic ingredient recipe with step-by-step photos",
      contentUrl: "/placeholder.svg?height=400&width=400",
      statusColor: "bg-blue-100 text-blue-700",
      engagement: { views: "8.2K", likes: "654", comments: "89" },
      isOverdue: false,
      rating: 4.9,
      feedback: "Amazing recipe content! Perfect styling and very engaging.",
    },
    {
      id: "5",
      influencer: "Lisa Wang",
      handle: "@lisabeauty",
      avatar: "/placeholder.svg?height=40&width=40",
      campaign: "Beauty Product Launch",
      deliverable: "Tutorial Video",
      type: "Video",
      status: "In Review",
      submittedDate: "Jun 3, 2025",
      dueDate: "Jun 5, 2025",
      description: "Skincare routine tutorial featuring new products",
      contentUrl: "#",
      statusColor: "bg-purple-100 text-purple-700",
      engagement: null,
      isOverdue: false,
    },
  ]

  const campaigns = [
    "Summer Fashion Collection",
    "Tech Product Launch",
    "Fitness Challenge",
    "Food Campaign",
    "Beauty Product Launch",
  ]

  const filteredDeliverables = deliverables.filter((deliverable) => {
    const matchesSearch =
      deliverable.influencer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deliverable.campaign.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deliverable.deliverable.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || deliverable.status.toLowerCase().replace(" ", "-") === statusFilter
    const matchesCampaign = campaignFilter === "all" || deliverable.campaign === campaignFilter

    return matchesSearch && matchesStatus && matchesCampaign
  })

  const handleApprove = (deliverableId: string) => {
    console.log("Approving deliverable:", deliverableId, "with rating:", rating, "and feedback:", feedback)
    setFeedback("")
    setRating(0)
  }

  const handleReject = (deliverableId: string) => {
    console.log("Rejecting deliverable:", deliverableId, "with feedback:", feedback)
    setFeedback("")
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Pending Review":
        return <Clock className="w-4 h-4" />
      case "Approved":
        return <CheckCircle className="w-4 h-4" />
      case "Needs Revision":
        return <AlertTriangle className="w-4 h-4" />
      case "Published":
        return <CheckCircle className="w-4 h-4" />
      case "In Review":
        return <Eye className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Video":
        return <Play className="w-4 h-4" />
      case "Image Post":
        return <ImageIcon className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  return (
    <BrandLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Deliverables</h1>
            <p className="text-gray-600">Review and manage content submissions from influencers</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search by influencer, campaign, or deliverable..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-3">
            <Select value={campaignFilter} onValueChange={setCampaignFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by campaign" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Campaigns</SelectItem>
                {campaigns.map((campaign) => (
                  <SelectItem key={campaign} value={campaign}>
                    {campaign}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  <SelectValue placeholder="Filter by status" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending-review">Pending Review</SelectItem>
                <SelectItem value="in-review">In Review</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="needs-revision">Needs Revision</SelectItem>
                <SelectItem value="published">Published</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Pending Review</p>
              <p className="text-xl font-bold">{deliverables.filter((d) => d.status === "Pending Review").length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Eye className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">In Review</p>
              <p className="text-xl font-bold">{deliverables.filter((d) => d.status === "In Review").length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Approved</p>
              <p className="text-xl font-bold">{deliverables.filter((d) => d.status === "Approved").length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <AlertTriangle className="w-6 h-6 text-red-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Needs Revision</p>
              <p className="text-xl font-bold">{deliverables.filter((d) => d.status === "Needs Revision").length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Published</p>
              <p className="text-xl font-bold">{deliverables.filter((d) => d.status === "Published").length}</p>
            </CardContent>
          </Card>
        </div>

        {/* Deliverables List */}
        <Card>
          <CardHeader>
            <CardTitle>Content Submissions</CardTitle>
            <CardDescription>Review and provide feedback on influencer content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredDeliverables.map((deliverable) => (
                <div key={deliverable.id} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={deliverable.avatar || "/placeholder.svg"} alt={deliverable.influencer} />
                        <AvatarFallback>{deliverable.influencer.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-gray-900">{deliverable.influencer}</h3>
                        <p className="text-sm text-gray-600">{deliverable.handle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {deliverable.isOverdue && (
                        <Badge variant="destructive" className="text-xs">
                          Overdue
                        </Badge>
                      )}
                      <Badge className={deliverable.statusColor}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(deliverable.status)}
                          {deliverable.status}
                        </div>
                      </Badge>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Campaign</p>
                      <p className="font-medium">{deliverable.campaign}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Deliverable</p>
                      <div className="flex items-center gap-1">
                        {getTypeIcon(deliverable.type)}
                        <p className="font-medium">{deliverable.deliverable}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Submitted</p>
                      <p className="font-medium">{deliverable.submittedDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Due Date</p>
                      <p className={`font-medium ${deliverable.isOverdue ? "text-red-600" : ""}`}>
                        {deliverable.dueDate}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600">Description</p>
                    <p className="font-medium">{deliverable.description}</p>
                  </div>

                  {deliverable.engagement && (
                    <div className="mb-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-sm font-medium text-green-800 mb-2">Performance Metrics</p>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-green-600">Views:</span>
                          <span className="font-medium ml-1">{deliverable.engagement.views}</span>
                        </div>
                        <div>
                          <span className="text-green-600">Likes:</span>
                          <span className="font-medium ml-1">{deliverable.engagement.likes}</span>
                        </div>
                        <div>
                          <span className="text-green-600">Comments:</span>
                          <span className="font-medium ml-1">{deliverable.engagement.comments}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {deliverable.feedback && (
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-blue-800">Feedback</span>
                        {deliverable.rating && (
                          <div className="flex items-center ml-auto">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(deliverable.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                            <span className="ml-1 text-sm font-medium">{deliverable.rating}/5</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-blue-700">"{deliverable.feedback}"</p>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" onClick={() => setSelectedDeliverable(deliverable)}>
                          <Eye className="w-4 h-4 mr-2" />
                          Review Content
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[700px]">
                        <DialogHeader>
                          <DialogTitle>Review Content</DialogTitle>
                          <DialogDescription>
                            Review and provide feedback for {selectedDeliverable?.deliverable}
                          </DialogDescription>
                        </DialogHeader>
                        {selectedDeliverable && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium">Influencer</label>
                                <p>{selectedDeliverable.influencer}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Campaign</label>
                                <p>{selectedDeliverable.campaign}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Deliverable</label>
                                <p>{selectedDeliverable.deliverable}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Type</label>
                                <p>{selectedDeliverable.type}</p>
                              </div>
                            </div>

                            {/* Content Preview */}
                            <div className="border rounded-lg p-4 bg-gray-50">
                              <p className="text-sm font-medium mb-2">Content Preview</p>
                              {selectedDeliverable.type === "Image Post" ? (
                                <img
                                  src={selectedDeliverable.contentUrl || "/placeholder.svg"}
                                  alt="Content preview"
                                  className="w-full h-64 object-cover rounded-lg"
                                />
                              ) : (
                                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                                  <div className="text-center">
                                    <Play className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                                    <p className="text-gray-600">Video Content</p>
                                    <Button variant="outline" size="sm" className="mt-2">
                                      Play Video
                                    </Button>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Rating */}
                            <div>
                              <Label>Rating (1-5 stars)</Label>
                              <div className="flex items-center gap-1 mt-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-6 h-6 cursor-pointer ${
                                      i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                    }`}
                                    onClick={() => setRating(i + 1)}
                                  />
                                ))}
                              </div>
                            </div>

                            {/* Feedback */}
                            <div>
                              <Label htmlFor="feedback">Feedback</Label>
                              <Textarea
                                id="feedback"
                                placeholder="Provide feedback on the content..."
                                rows={4}
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                              />
                            </div>
                          </div>
                        )}
                        <DialogFooter>
                          <Button
                            variant="outline"
                            onClick={() => handleReject(selectedDeliverable?.id || "")}
                            disabled={!feedback.trim()}
                          >
                            <ThumbsDown className="w-4 h-4 mr-2" />
                            Request Revision
                          </Button>
                          <Button
                            onClick={() => handleApprove(selectedDeliverable?.id || "")}
                            disabled={!feedback.trim() || rating === 0}
                          >
                            <ThumbsUp className="w-4 h-4 mr-2" />
                            Approve
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>

                    {(deliverable.status === "Pending Review" || deliverable.status === "In Review") && (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                          onClick={() => handleReject(deliverable.id)}
                        >
                          <ThumbsDown className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                        <Button size="sm" onClick={() => handleApprove(deliverable.id)}>
                          <ThumbsUp className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </BrandLayout>
  )
}
