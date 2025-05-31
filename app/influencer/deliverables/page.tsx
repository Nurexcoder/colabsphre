"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Upload,
  Calendar,
  CheckCircle,
  Clock,
  AlertTriangle,
  FileText,
  ImageIcon,
  Video,
  Plus,
  Eye,
  Edit,
} from "lucide-react"
import { InfluencerLayout } from "@/components/influencer-layout"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DeliverablesPage() {
  const [selectedCampaign, setSelectedCampaign] = useState("")
  const [selectedDeliverable, setSelectedDeliverable] = useState("")
  const [uploadFile, setUploadFile] = useState<File | null>(null)
  const [description, setDescription] = useState("")
  const [deliverableType, setDeliverableType] = useState("")

  const campaigns = [
    { id: "1", name: "Summer Fashion Collection" },
    { id: "2", name: "Tech Product Launch" },
    { id: "3", name: "Fitness Challenge" },
  ]

  const deliverableOptions = {
    "1": [
      { id: "d1", name: "Instagram Post #1" },
      { id: "d2", name: "Instagram Stories" },
      { id: "d3", name: "Instagram Reel" },
    ],
    "2": [
      { id: "d4", name: "YouTube Review" },
      { id: "d5", name: "Instagram Post" },
    ],
    "3": [
      { id: "d6", name: "Workout Routine Post" },
      { id: "d7", name: "Progress Update" },
    ],
  }

  const deliverables = [
    {
      id: "1",
      campaign: "Summer Fashion Collection",
      title: "Instagram Post #1",
      type: "Image Post",
      status: "Completed",
      dueDate: "Jun 5, 2025",
      submittedDate: "Jun 4, 2025",
      description: "Summer outfit showcase with beach background",
      feedback: "Great work! Love the styling and natural lighting.",
      rating: 4.8,
      statusColor: "bg-green-100 text-green-700",
      progress: 100,
    },
    {
      id: "2",
      campaign: "Summer Fashion Collection",
      title: "Instagram Stories",
      type: "Story",
      status: "Completed",
      dueDate: "Jun 8, 2025",
      submittedDate: "Jun 7, 2025",
      description: "Behind-the-scenes content creation",
      feedback: "Perfect! Authentic and engaging stories.",
      rating: 4.9,
      statusColor: "bg-green-100 text-green-700",
      progress: 100,
    },
    {
      id: "3",
      campaign: "Summer Fashion Collection",
      title: "Instagram Reel",
      type: "Video",
      status: "In Progress",
      dueDate: "Jun 10, 2025",
      submittedDate: null,
      description: "Summer fashion transition video",
      feedback: null,
      rating: null,
      statusColor: "bg-blue-100 text-blue-700",
      progress: 60,
    },
    {
      id: "4",
      campaign: "Tech Product Launch",
      title: "YouTube Review",
      type: "Video",
      status: "Pending",
      dueDate: "Jun 15, 2025",
      submittedDate: null,
      description: "Comprehensive smartphone review",
      feedback: null,
      rating: null,
      statusColor: "bg-yellow-100 text-yellow-700",
      progress: 0,
    },
    {
      id: "5",
      campaign: "Fitness Challenge",
      title: "Workout Routine Post",
      type: "Image Post",
      status: "Needs Revision",
      dueDate: "Jun 12, 2025",
      submittedDate: "Jun 11, 2025",
      description: "30-day fitness transformation showcase",
      feedback: "Great content but please adjust the lighting and add brand hashtags.",
      rating: null,
      statusColor: "bg-red-100 text-red-700",
      progress: 80,
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="w-4 h-4" />
      case "In Progress":
        return <Clock className="w-4 h-4" />
      case "Pending":
        return <AlertTriangle className="w-4 h-4" />
      case "Needs Revision":
        return <AlertTriangle className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Video":
        return <Video className="w-4 h-4" />
      case "Image Post":
        return <ImageIcon className="w-4 h-4" />
      case "Story":
        return <ImageIcon className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadFile(file)
    }
  }

  const handleSubmitDeliverable = () => {
    if (uploadFile && description && (deliverableType || selectedDeliverable) && selectedCampaign) {
      console.log("Submitting deliverable:", {
        file: uploadFile.name,
        description,
        type: deliverableType || selectedDeliverable,
        campaign: selectedCampaign,
      })
      // Reset form
      setUploadFile(null)
      setDescription("")
      setDeliverableType("")
      setSelectedCampaign("")
      setSelectedDeliverable("")
    }
  }

  const handleCampaignChange = (value: string) => {
    setSelectedCampaign(value)
    setSelectedDeliverable("")
  }

  return (
    <InfluencerLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Deliverables</h1>
            <p className="text-gray-600">Manage and submit your campaign content</p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Upload Content
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Upload New Content</DialogTitle>
                <DialogDescription>Submit content for your campaign deliverables</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Campaign</Label>
                  <Select value={selectedCampaign} onValueChange={handleCampaignChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select campaign" />
                    </SelectTrigger>
                    <SelectContent>
                      {campaigns.map((campaign) => (
                        <SelectItem key={campaign.id} value={campaign.id}>
                          {campaign.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedCampaign && (
                  <div className="space-y-2">
                    <Label>Deliverable</Label>
                    <Select value={selectedDeliverable} onValueChange={setSelectedDeliverable}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select deliverable" />
                      </SelectTrigger>
                      <SelectContent>
                        {deliverableOptions[selectedCampaign as keyof typeof deliverableOptions]?.map((deliverable) => (
                          <SelectItem key={deliverable.id} value={deliverable.id}>
                            {deliverable.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="space-y-2">
                  <Label>Content Type</Label>
                  <Select value={deliverableType} onValueChange={setDeliverableType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="image-post">Image Post</SelectItem>
                      <SelectItem value="video">Video</SelectItem>
                      <SelectItem value="story">Story</SelectItem>
                      <SelectItem value="reel">Reel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Upload File</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Drag and drop or click to upload</p>
                    <input
                      type="file"
                      accept="image/*,video/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload">
                      <Button variant="outline" className="cursor-pointer">
                        Choose File
                      </Button>
                    </label>
                    {uploadFile && <p className="text-sm text-green-600 mt-2">Selected: {uploadFile.name}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your content and any relevant details..."
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Save as Draft</Button>
                <Button
                  onClick={handleSubmitDeliverable}
                  disabled={
                    !uploadFile || !description || (!deliverableType && !selectedDeliverable) || !selectedCampaign
                  }
                >
                  Submit Content
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-xl font-bold">{deliverables.filter((d) => d.status === "Completed").length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">In Progress</p>
              <p className="text-xl font-bold">{deliverables.filter((d) => d.status === "In Progress").length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-xl font-bold">{deliverables.filter((d) => d.status === "Pending").length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <AlertTriangle className="w-6 h-6 text-red-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Needs Revision</p>
              <p className="text-xl font-bold">{deliverables.filter((d) => d.status === "Needs Revision").length}</p>
            </CardContent>
          </Card>
        </div>

        {/* Deliverables List */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Deliverables</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="space-y-4">
              {deliverables.map((deliverable) => (
                <Card key={deliverable.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          {getTypeIcon(deliverable.type)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{deliverable.title}</h3>
                          <p className="text-sm text-gray-600">{deliverable.campaign}</p>
                        </div>
                      </div>
                      <Badge className={deliverable.statusColor}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(deliverable.status)}
                          {deliverable.status}
                        </div>
                      </Badge>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Due Date</p>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <p className="font-medium">{deliverable.dueDate}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Type</p>
                        <p className="font-medium">{deliverable.type}</p>
                      </div>
                      {deliverable.submittedDate && (
                        <div>
                          <p className="text-sm text-gray-600">Submitted</p>
                          <p className="font-medium">{deliverable.submittedDate}</p>
                        </div>
                      )}
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600">Description</p>
                      <p className="font-medium">{deliverable.description}</p>
                    </div>

                    {deliverable.status !== "Completed" && deliverable.status !== "Pending" && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium">{deliverable.progress}%</span>
                        </div>
                        <Progress value={deliverable.progress} className="h-2" />
                      </div>
                    )}

                    {deliverable.feedback && (
                      <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm font-medium text-blue-800 mb-1">Brand Feedback</p>
                        <p className="text-sm text-blue-700">"{deliverable.feedback}"</p>
                        {deliverable.rating && (
                          <div className="flex items-center mt-2">
                            <span className="text-sm text-blue-600 mr-2">Rating:</span>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-3 h-3 rounded-full mr-1 ${
                                    i < Math.floor(deliverable.rating) ? "bg-yellow-400" : "bg-gray-300"
                                  }`}
                                />
                              ))}
                              <span className="ml-1 text-sm font-medium">{deliverable.rating}/5</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      {deliverable.status === "Needs Revision" && (
                        <Button size="sm">
                          <Edit className="w-4 h-4 mr-2" />
                          Revise
                        </Button>
                      )}
                      {deliverable.status === "Pending" && (
                        <Button size="sm">
                          <Upload className="w-4 h-4 mr-2" />
                          Upload
                        </Button>
                      )}
                      {deliverable.status === "In Progress" && (
                        <Button size="sm">
                          <Edit className="w-4 h-4 mr-2" />
                          Continue
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pending">
            <div className="space-y-4">
              {deliverables
                .filter((d) => d.status === "Pending")
                .map((deliverable) => (
                  <Card key={deliverable.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      {/* Same card content structure as above */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                            {getTypeIcon(deliverable.type)}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{deliverable.title}</h3>
                            <p className="text-sm text-gray-600">{deliverable.campaign}</p>
                          </div>
                        </div>
                        <Badge className={deliverable.statusColor}>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(deliverable.status)}
                            {deliverable.status}
                          </div>
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">
                          <Upload className="w-4 h-4 mr-2" />
                          Upload Content
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="in-progress">
            <div className="space-y-4">
              {deliverables
                .filter((d) => d.status === "In Progress")
                .map((deliverable) => (
                  <Card key={deliverable.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      {/* Same card content structure */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                            {getTypeIcon(deliverable.type)}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{deliverable.title}</h3>
                            <p className="text-sm text-gray-600">{deliverable.campaign}</p>
                          </div>
                        </div>
                        <Badge className={deliverable.statusColor}>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(deliverable.status)}
                            {deliverable.status}
                          </div>
                        </Badge>
                      </div>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium">{deliverable.progress}%</span>
                        </div>
                        <Progress value={deliverable.progress} className="h-2" />
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">
                          <Edit className="w-4 h-4 mr-2" />
                          Continue Work
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="space-y-4">
              {deliverables
                .filter((d) => d.status === "Completed")
                .map((deliverable) => (
                  <Card key={deliverable.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      {/* Same card content structure with feedback */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                            {getTypeIcon(deliverable.type)}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{deliverable.title}</h3>
                            <p className="text-sm text-gray-600">{deliverable.campaign}</p>
                          </div>
                        </div>
                        <Badge className={deliverable.statusColor}>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(deliverable.status)}
                            {deliverable.status}
                          </div>
                        </Badge>
                      </div>
                      {deliverable.feedback && (
                        <div className="mb-4 p-3 bg-green-50 rounded-lg">
                          <p className="text-sm font-medium text-green-800 mb-1">Brand Feedback</p>
                          <p className="text-sm text-green-700">"{deliverable.feedback}"</p>
                          {deliverable.rating && (
                            <div className="flex items-center mt-2">
                              <span className="text-sm text-green-600 mr-2">Rating:</span>
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <div
                                    key={i}
                                    className={`w-3 h-3 rounded-full mr-1 ${
                                      i < Math.floor(deliverable.rating) ? "bg-yellow-400" : "bg-gray-300"
                                    }`}
                                  />
                                ))}
                                <span className="ml-1 text-sm font-medium">{deliverable.rating}/5</span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View Content
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </InfluencerLayout>
  )
}
