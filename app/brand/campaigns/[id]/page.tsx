"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Calendar,
  DollarSign,
  Users,
  FileText,
  MessageSquare,
  BarChart3,
  Edit,
  Download,
  Plus,
  Instagram,
  Youtube,
  Twitter,
  Bot,
  Upload,
  Eye,
  ThumbsUp,
  ThumbsDown,
  Play,
  Send,
  Settings,
  Star,
  Search,
  Filter,
  MapPin,
  Mail,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { BrandLayout } from "@/components/brand-layout"
import { useParams } from "next/navigation"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CampaignDetailsPage() {
  const params = useParams()
  const campaignId = params.id as string
  const [aiMessage, setAiMessage] = useState("")
  const [selectedDeliverable, setSelectedDeliverable] = useState<any>(null)
  const [feedback, setFeedback] = useState("")
  const [rating, setRating] = useState(0)
  const [showAddInfluencer, setShowAddInfluencer] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchDescription, setSearchDescription] = useState("")
  const [selectedInfluencers, setSelectedInfluencers] = useState<string[]>([])

  // Campaign data with AI negotiator
  const campaign = {
    id: campaignId,
    name: "Summer Fashion Collection",
    status: "Active",
    startDate: "May 15, 2025",
    endDate: "Jul 15, 2025",
    influencers: 24,
    budget: "$15,000",
    spent: "$8,250",
    progress: 75,
    statusColor: "bg-green-100 text-green-700",
    description:
      "Promote our new summer fashion collection across Instagram and TikTok. Focus on beachwear, casual summer outfits, and accessories.",
    platforms: ["Instagram", "TikTok"],
    contentTypes: ["Posts", "Stories", "Reels"],
    targetAudience: "Fashion enthusiasts, 18-35 years old, primarily female",
    goals: "Increase brand awareness, drive traffic to summer collection page, generate user engagement",
    aiNegotiator: {
      name: "StyleFlow AI",
      avatar: "/placeholder.svg?height=60&width=60",
      personality: "Professional & Persuasive",
      conversations: 18,
      negotiations: 12,
      successRate: "85%",
      lastActive: "2 hours ago",
      totalSavings: "$2,400",
      avgNegotiationTime: "3.2 hours",
    },
  }

  // Available influencers for search
  const availableInfluencers = [
    {
      id: "inf1",
      name: "Maya Rodriguez",
      handle: "@maya_fashion",
      email: "maya.rodriguez@email.com",
      avatar: "/placeholder.svg?height=80&width=80",
      platforms: [
        { name: "Instagram", followers: "95K", icon: Instagram },
        { name: "TikTok", followers: "67K", icon: Twitter },
      ],
      engagementRate: 5.2,
      location: "Miami, FL",
      niche: ["Fashion", "Lifestyle", "Summer"],
      recentPost: "/placeholder.svg?height=200&width=200",
      avgLikes: "4.8K",
      rating: 4.7,
      rate: "$800-1200",
      matchScore: 95,
      verified: true,
    },
    {
      id: "inf2",
      name: "Alex Summer",
      handle: "@alex_style",
      email: "alex.summer@email.com",
      avatar: "/placeholder.svg?height=80&width=80",
      platforms: [
        { name: "Instagram", followers: "120K", icon: Instagram },
        { name: "YouTube", followers: "45K", icon: Youtube },
      ],
      engagementRate: 4.8,
      location: "Los Angeles, CA",
      niche: ["Fashion", "Beauty", "Beachwear"],
      recentPost: "/placeholder.svg?height=200&width=200",
      avgLikes: "5.9K",
      rating: 4.9,
      rate: "$1000-1500",
      matchScore: 92,
      verified: true,
    },
    {
      id: "inf3",
      name: "Jennifer Beach",
      handle: "@jen_beachvibes",
      email: "jennifer.beach@email.com",
      avatar: "/placeholder.svg?height=80&width=80",
      platforms: [
        { name: "Instagram", followers: "78K", icon: Instagram },
        { name: "TikTok", followers: "134K", icon: Twitter },
      ],
      engagementRate: 6.1,
      location: "San Diego, CA",
      niche: ["Beach", "Summer", "Lifestyle"],
      recentPost: "/placeholder.svg?height=200&width=200",
      avgLikes: "4.2K",
      rating: 4.6,
      rate: "$700-1000",
      matchScore: 88,
      verified: false,
    },
    {
      id: "inf4",
      name: "Sophie Casual",
      handle: "@sophie_casual",
      email: "sophie.casual@email.com",
      avatar: "/placeholder.svg?height=80&width=80",
      platforms: [
        { name: "Instagram", followers: "156K", icon: Instagram },
        { name: "TikTok", followers: "89K", icon: Twitter },
      ],
      engagementRate: 4.5,
      location: "New York, NY",
      niche: ["Casual", "Fashion", "Accessories"],
      recentPost: "/placeholder.svg?height=200&width=200",
      avgLikes: "6.8K",
      rating: 4.8,
      rate: "$1200-1800",
      matchScore: 85,
      verified: true,
    },
    {
      id: "inf5",
      name: "Emma Sunshine",
      handle: "@emma_sunshine",
      email: "emma.sunshine@email.com",
      avatar: "/placeholder.svg?height=80&width=80",
      platforms: [
        { name: "Instagram", followers: "203K", icon: Instagram },
        { name: "YouTube", followers: "89K", icon: Youtube },
      ],
      engagementRate: 5.8,
      location: "Austin, TX",
      niche: ["Summer", "Travel", "Fashion"],
      recentPost: "/placeholder.svg?height=200&width=200",
      avgLikes: "11.2K",
      rating: 4.9,
      rate: "$1500-2000",
      matchScore: 91,
      verified: true,
    },
    {
      id: "inf6",
      name: "Zoe Coastal",
      handle: "@zoe_coastal",
      email: "zoe.coastal@email.com",
      avatar: "/placeholder.svg?height=80&width=80",
      platforms: [
        { name: "Instagram", followers: "67K", icon: Instagram },
        { name: "TikTok", followers: "145K", icon: Twitter },
      ],
      engagementRate: 7.2,
      location: "Santa Monica, CA",
      niche: ["Beach", "Coastal", "Summer"],
      recentPost: "/placeholder.svg?height=200&width=200",
      avgLikes: "4.8K",
      rating: 4.5,
      rate: "$600-900",
      matchScore: 87,
      verified: false,
    },
  ]

  const influencers = [
    {
      id: "1",
      name: "Sarah Johnson",
      handle: "@sarahjohnson",
      avatar: "/placeholder.svg?height=40&width=40",
      platform: "Instagram",
      followers: "125K",
      engagement: "4.2%",
      status: "Active",
      deliverables: "2/3",
      payment: "$1,200",
      statusColor: "bg-green-100 text-green-700",
      aiNegotiation: "Completed - Saved $200",
    },
    {
      id: "2",
      name: "Mike Chen",
      handle: "@mikechentech",
      avatar: "/placeholder.svg?height=40&width=40",
      platform: "YouTube",
      followers: "245K",
      engagement: "6.1%",
      status: "Negotiating",
      deliverables: "0/2",
      payment: "$2,500",
      statusColor: "bg-yellow-100 text-yellow-700",
      aiNegotiation: "In Progress - 2 rounds",
    },
    {
      id: "3",
      name: "Emma Davis",
      handle: "@emmafitness",
      avatar: "/placeholder.svg?height=40&width=40",
      platform: "Instagram",
      followers: "89K",
      engagement: "5.8%",
      status: "Completed",
      deliverables: "3/3",
      payment: "$950",
      statusColor: "bg-blue-100 text-blue-700",
      aiNegotiation: "Completed - Saved $150",
    },
  ]

  const deliverables = [
    {
      id: "1",
      influencer: "Sarah Johnson",
      handle: "@sarahjohnson",
      avatar: "/placeholder.svg?height=40&width=40",
      type: "Instagram Post",
      dueDate: "Jun 5, 2025",
      status: "Completed",
      engagement: "5.2K likes, 234 comments",
      statusColor: "text-green-600",
      contentUrl: "/placeholder.svg?height=400&width=400",
      description: "Summer outfit showcase with beach background",
      submittedDate: "Jun 4, 2025",
      rating: 4.8,
      brandFeedback: "Excellent content! Perfect lighting and styling.",
    },
    {
      id: "2",
      influencer: "Sarah Johnson",
      handle: "@sarahjohnson",
      avatar: "/placeholder.svg?height=40&width=40",
      type: "Instagram Story",
      dueDate: "Jun 10, 2025",
      status: "In Review",
      engagement: "Pending",
      statusColor: "text-yellow-600",
      contentUrl: "/placeholder.svg?height=400&width=400",
      description: "Behind-the-scenes styling process",
      submittedDate: "Jun 9, 2025",
    },
    {
      id: "3",
      influencer: "Mike Chen",
      handle: "@mikechentech",
      avatar: "/placeholder.svg?height=40&width=40",
      type: "YouTube Video",
      dueDate: "Jun 15, 2025",
      status: "Not Started",
      engagement: "Pending",
      statusColor: "text-gray-600",
      contentUrl: "#",
      description: "Fashion haul and styling tips video",
    },
  ]

  const contracts = [
    {
      id: "1",
      influencer: "Sarah Johnson",
      handle: "@sarahjohnson",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "Signed",
      submittedDate: "May 20, 2025",
      amount: "$1,200",
      originalAmount: "$1,400",
      deliverables: "2 Posts, 3 Stories, 1 Reel",
      statusColor: "bg-green-100 text-green-700",
      aiNegotiated: true,
      savings: "$200",
      negotiationRounds: 2,
    },
    {
      id: "2",
      influencer: "Mike Chen",
      handle: "@mikechentech",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "Pending Review",
      submittedDate: "Jun 1, 2025",
      amount: "$2,500",
      originalAmount: "$2,800",
      deliverables: "1 YouTube Video, 2 Posts",
      statusColor: "bg-yellow-100 text-yellow-700",
      aiNegotiated: true,
      savings: "$300",
      negotiationRounds: 3,
    },
    {
      id: "3",
      influencer: "Emma Davis",
      handle: "@emmafitness",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "Signed",
      submittedDate: "May 15, 2025",
      amount: "$950",
      originalAmount: "$1,100",
      deliverables: "3 Posts, 2 Reels",
      statusColor: "bg-green-100 text-green-700",
      aiNegotiated: true,
      savings: "$150",
      negotiationRounds: 1,
    },
  ]

  const aiConversation = [
    {
      id: "1",
      sender: "StyleFlow AI",
      message:
        "Good morning! I've been analyzing the campaign performance. We're 15% above industry benchmarks for engagement. I've identified 3 new potential influencers that match your criteria perfectly. Should I initiate outreach?",
      timestamp: "9:30 AM",
      isAI: true,
    },
    {
      id: "2",
      sender: "You",
      message: "Yes, please reach out to them. What's their follower count and engagement rates?",
      timestamp: "9:35 AM",
      isAI: false,
    },
    {
      id: "3",
      sender: "StyleFlow AI",
      message:
        "Perfect! Here are the details:\n\n1. @fashionista_maya - 95K followers, 5.2% engagement\n2. @style_by_alex - 120K followers, 4.8% engagement\n3. @summer_vibes_jen - 78K followers, 6.1% engagement\n\nI'll start with personalized outreach messages and negotiate within your $800-$1,500 budget range. I'll also leverage our previous successful collaborations as social proof.",
      timestamp: "9:36 AM",
      isAI: true,
    },
    {
      id: "4",
      sender: "You",
      message: "Great! Also, can you follow up with Mike Chen about his video deliverable?",
      timestamp: "9:40 AM",
      isAI: false,
    },
    {
      id: "5",
      sender: "StyleFlow AI",
      message:
        "Already on it! I sent Mike a friendly reminder yesterday and he confirmed the video will be ready by June 14th. I also negotiated a bonus Instagram story for the same price due to the slight delay. Would you like me to send you the conversation transcript?",
      timestamp: "9:41 AM",
      isAI: true,
    },
  ]

  const platformIcons = {
    Instagram: Instagram,
    YouTube: Youtube,
    TikTok: Twitter,
  }

  const handleSendAIMessage = () => {
    if (aiMessage.trim()) {
      setAiMessage("")
    }
  }

  const handleApproveDeliverable = (deliverableId: string) => {
    console.log("Approving deliverable:", deliverableId, "with rating:", rating, "and feedback:", feedback)
    setFeedback("")
    setRating(0)
  }

  const handleSearchInfluencers = () => {
    // In a real app, this would make an API call with the search description
    console.log("Searching influencers with description:", searchDescription)
  }

  const toggleInfluencerSelection = (id: string) => {
    setSelectedInfluencers((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  const handleAddSelectedInfluencers = () => {
    console.log("Adding influencers to campaign:", selectedInfluencers)
    setShowAddInfluencer(false)
    setSelectedInfluencers([])
    setSearchDescription("")
    setSearchQuery("")
  }

  const InfluencerProfileBadge = ({ influencer }: { influencer: (typeof availableInfluencers)[0] }) => (
    <div
      className={`relative p-4 border-2 rounded-xl transition-all duration-200 cursor-pointer hover:shadow-lg ${
        selectedInfluencers.includes(influencer.id)
          ? "border-blue-500 bg-blue-50 shadow-md"
          : "border-gray-200 hover:border-gray-300"
      }`}
      onClick={() => toggleInfluencerSelection(influencer.id)}
    >
      {/* Selection Indicator */}
      <div className="absolute top-3 right-3">
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            selectedInfluencers.includes(influencer.id) ? "bg-blue-500 border-blue-500" : "border-gray-300 bg-white"
          }`}
        >
          {selectedInfluencers.includes(influencer.id) && <CheckCircle className="w-3 h-3 text-white" />}
        </div>
      </div>

      {/* Match Score Badge */}
      <div className="absolute top-3 left-3">
        <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
          {influencer.matchScore}% match
        </Badge>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center text-center mt-6 mb-4">
        <div className="relative">
          <img
            src={influencer.avatar || "/placeholder.svg"}
            alt={influencer.name}
            className="w-16 h-16 rounded-full border-3 border-white shadow-md"
          />
          {influencer.verified && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
          )}
        </div>
        <h3 className="font-semibold text-gray-900 mt-2">{influencer.name}</h3>
        <p className="text-sm text-gray-600">{influencer.handle}</p>
        <div className="flex items-center gap-1 mt-1">
          <MapPin className="w-3 h-3 text-gray-400" />
          <span className="text-xs text-gray-500">{influencer.location}</span>
        </div>
      </div>

      {/* Email Section */}
      <div className="flex items-center justify-center gap-2 mb-3 p-2 bg-gray-50 rounded-lg">
        <Mail className="w-3 h-3 text-gray-500" />
        <span className="text-xs text-gray-600 truncate">{influencer.email}</span>
      </div>

      {/* Platforms */}
      <div className="space-y-2 mb-3">
        {influencer.platforms.map((platform) => (
          <div key={platform.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <platform.icon className="w-4 h-4" />
              <span>{platform.name}</span>
            </div>
            <span className="font-medium">{platform.followers}</span>
          </div>
        ))}
      </div>

      {/* Niche Tags */}
      <div className="flex flex-wrap gap-1 mb-3">
        {influencer.niche.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 text-center text-sm">
        <div>
          <p className="text-gray-600">Engagement</p>
          <p className="font-semibold text-green-600">{influencer.engagementRate}%</p>
        </div>
        <div>
          <p className="text-gray-600">Avg. Likes</p>
          <p className="font-semibold">{influencer.avgLikes}</p>
        </div>
      </div>

      {/* Rating & Rate */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(influencer.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
            />
          ))}
          <span className="text-xs text-gray-600 ml-1">{influencer.rating}</span>
        </div>
        <span className="text-sm font-medium text-blue-600">{influencer.rate}</span>
      </div>
    </div>
  )

  return (
    <BrandLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col space-y-4">
          <Link href="/brand/campaigns" className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Campaigns
          </Link>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-gray-900">{campaign.name}</h1>
              <Badge className={campaign.statusColor}>{campaign.status}</Badge>
            </div>

            <div className="flex gap-3">
              <Link href={`/brand/campaigns/${campaignId}/edit`}>
                <Button variant="outline" className="flex items-center gap-2">
                  <Edit className="w-4 h-4" />
                  Edit Campaign
                </Button>
              </Link>
              <Dialog open={showAddInfluencer} onOpenChange={setShowAddInfluencer}>
                <DialogTrigger asChild>
                  <Button className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add Influencer
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[1000px] max-h-[85vh] overflow-hidden flex flex-col">
                  <DialogHeader>
                    <DialogTitle>Add Influencers to Campaign</DialogTitle>
                    <DialogDescription>
                      Search and select influencers that match your campaign requirements
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4 flex-1 overflow-hidden flex flex-col">
                    {/* Search Section */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="search-description">Search Description</Label>
                        <Textarea
                          id="search-description"
                          placeholder="Describe the type of influencers you're looking for (e.g., 'Fashion influencers with beach/summer content, 50K-200K followers, high engagement rates, located in California')"
                          value={searchDescription}
                          onChange={(e) => setSearchDescription(e.target.value)}
                          className="mt-1"
                          rows={3}
                        />
                        <p className="text-xs text-gray-500 mt-1">Based on campaign: {campaign.description}</p>
                      </div>

                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            placeholder="Search by name, handle, or keywords..."
                            className="pl-10"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                        </div>
                        <Button onClick={handleSearchInfluencers}>
                          <Search className="w-4 h-4 mr-2" />
                          Search
                        </Button>
                      </div>

                      {/* Filters */}
                      <div className="flex gap-4">
                        <Select defaultValue="relevance">
                          <SelectTrigger className="w-40">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="relevance">Relevance</SelectItem>
                            <SelectItem value="followers">Followers</SelectItem>
                            <SelectItem value="engagement">Engagement</SelectItem>
                            <SelectItem value="rating">Rating</SelectItem>
                          </SelectContent>
                        </Select>

                        <Button variant="outline" size="sm">
                          <Filter className="w-4 h-4 mr-2" />
                          More Filters
                        </Button>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="flex-1 overflow-y-auto">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-sm text-gray-600">
                          Found {availableInfluencers.length} matching influencers
                        </p>
                        {selectedInfluencers.length > 0 && (
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                              {selectedInfluencers.length} selected
                            </Badge>
                          </div>
                        )}
                      </div>

                      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {availableInfluencers.map((influencer) => (
                          <InfluencerProfileBadge key={influencer.id} influencer={influencer} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <DialogFooter>
                    <Button variant="outline" onClick={() => setShowAddInfluencer(false)}>
                      Cancel
                    </Button>
                    <Button
                      onClick={handleAddSelectedInfluencers}
                      disabled={selectedInfluencers.length === 0}
                      className="flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Add {selectedInfluencers.length} Influencer{selectedInfluencers.length !== 1 ? "s" : ""} & Setup
                      Email Campaign
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Campaign Overview with AI Negotiator */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Campaign Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Timeline</span>
                  </div>
                  <p className="text-sm font-medium">
                    {campaign.startDate} - {campaign.endDate}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Influencers</span>
                  </div>
                  <p className="text-sm font-medium">{campaign.influencers} creators</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm">Budget</span>
                  </div>
                  <p className="text-sm font-medium">{campaign.budget}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm">Spent</span>
                  </div>
                  <p className="text-sm font-medium">{campaign.spent}</p>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Overall Progress</span>
                  <span>{campaign.progress}%</span>
                </div>
                <Progress value={campaign.progress} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-blue-600" />
                AI Negotiator
              </CardTitle>
              <CardDescription>Your personalized AI assistant</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">{campaign.aiNegotiator.name}</h3>
                  <p className="text-sm text-gray-600">{campaign.aiNegotiator.personality}</p>
                  <Badge variant="outline" className="mt-1">
                    {campaign.aiNegotiator.status}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-600">Success Rate</p>
                  <p className="font-medium text-green-600">{campaign.aiNegotiator.successRate}</p>
                </div>
                <div>
                  <p className="text-gray-600">Total Savings</p>
                  <p className="font-medium text-green-600">{campaign.aiNegotiator.totalSavings}</p>
                </div>
                <div>
                  <p className="text-gray-600">Active Chats</p>
                  <p className="font-medium">{campaign.aiNegotiator.conversations}</p>
                </div>
                <div>
                  <p className="text-gray-600">Avg. Time</p>
                  <p className="font-medium">{campaign.aiNegotiator.avgNegotiationTime}</p>
                </div>
              </div>

              <div className="space-y-2">
                <Button className="w-full">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat with {campaign.aiNegotiator.name}
                </Button>
                <Button variant="outline" className="w-full">
                  <Settings className="w-4 h-4 mr-2" />
                  AI Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="influencers" className="space-y-6">
          <TabsList>
            <TabsTrigger value="influencers" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Influencers
            </TabsTrigger>
            <TabsTrigger value="deliverables" className="flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Deliverables
            </TabsTrigger>
            <TabsTrigger value="contracts" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Contracts
            </TabsTrigger>
            <TabsTrigger value="ai-assistant" className="flex items-center gap-2">
              <Bot className="w-4 h-4" />
              AI Assistant
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="influencers">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Campaign Influencers</CardTitle>
                    <CardDescription>Manage influencers for this campaign</CardDescription>
                  </div>
                  <Button onClick={() => setShowAddInfluencer(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Influencer
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Influencer</TableHead>
                      <TableHead>Platform</TableHead>
                      <TableHead>Followers</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>AI Negotiation</TableHead>
                      <TableHead>Payment</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {influencers.map((influencer) => (
                      <TableRow key={influencer.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={influencer.avatar || "/placeholder.svg"} alt={influencer.name} />
                              <AvatarFallback>{influencer.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{influencer.name}</p>
                              <p className="text-sm text-gray-500">{influencer.handle}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{influencer.platform}</TableCell>
                        <TableCell>{influencer.followers}</TableCell>
                        <TableCell>
                          <Badge className={influencer.statusColor}>{influencer.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Bot className="w-3 h-3 text-blue-600" />
                            <span className="text-sm">{influencer.aiNegotiation}</span>
                          </div>
                        </TableCell>
                        <TableCell>{influencer.payment}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deliverables">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Campaign Deliverables</CardTitle>
                    <CardDescription>Track and review content submissions</CardDescription>
                  </div>
                  <Button>
                    <Download className="w-4 h-4 mr-2" />
                    Export Report
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {deliverables.map((deliverable) => (
                    <div key={deliverable.id} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={deliverable.avatar || "/placeholder.svg"} alt={deliverable.influencer} />
                            <AvatarFallback>{deliverable.influencer.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-gray-900">{deliverable.type}</h3>
                            <p className="text-sm text-gray-600">by {deliverable.influencer}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {deliverable.rating && (
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-medium">{deliverable.rating}</span>
                            </div>
                          )}
                          <Badge className={deliverable.statusColor}>{deliverable.status}</Badge>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-gray-600">{deliverable.description}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-600">Due Date:</span>
                          <span className="font-medium ml-1">{deliverable.dueDate}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Engagement:</span>
                          <span className="font-medium ml-1">{deliverable.engagement}</span>
                        </div>
                      </div>

                      {deliverable.brandFeedback && (
                        <div className="mb-4 p-3 bg-green-50 rounded-lg">
                          <p className="text-sm text-green-800">
                            <strong>Feedback:</strong> {deliverable.brandFeedback}
                          </p>
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
                              <DialogTitle>Review Deliverable</DialogTitle>
                              <DialogDescription>
                                Review and provide feedback for {selectedDeliverable?.type}
                              </DialogDescription>
                            </DialogHeader>
                            {selectedDeliverable && (
                              <div className="space-y-4">
                                <div className="border rounded-lg p-4 bg-gray-50">
                                  <p className="text-sm font-medium mb-2">Content Preview</p>
                                  {selectedDeliverable.type.includes("Video") ? (
                                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                                      <div className="text-center">
                                        <Play className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                                        <p className="text-gray-600">Video Content</p>
                                        <Button variant="outline" size="sm" className="mt-2">
                                          Play Video
                                        </Button>
                                      </div>
                                    </div>
                                  ) : (
                                    <img
                                      src={selectedDeliverable.contentUrl || "/placeholder.svg"}
                                      alt="Content preview"
                                      className="w-full h-64 object-cover rounded-lg"
                                    />
                                  )}
                                </div>

                                <div>
                                  <Label>Rating (1-5 stars)</Label>
                                  <div className="flex items-center gap-1 mt-2">
                                    {[...Array(5)].map((_, i) => (
                                      <button
                                        key={i}
                                        type="button"
                                        onClick={() => setRating(i + 1)}
                                        className="focus:outline-none"
                                      >
                                        <Star
                                          className={`w-6 h-6 ${
                                            i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                          }`}
                                        />
                                      </button>
                                    ))}
                                  </div>
                                </div>

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
                              <Button variant="outline" disabled={!feedback.trim()}>
                                <ThumbsDown className="w-4 h-4 mr-2" />
                                Request Revision
                              </Button>
                              <Button
                                onClick={() => handleApproveDeliverable(selectedDeliverable?.id || "")}
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
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contracts">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Campaign Contracts</CardTitle>
                    <CardDescription>AI-negotiated contracts and agreements</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Total AI Savings</p>
                      <p className="text-lg font-bold text-green-600">$650</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contracts.map((contract) => (
                    <div key={contract.id} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={contract.avatar || "/placeholder.svg"} alt={contract.influencer} />
                            <AvatarFallback>{contract.influencer.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-gray-900">{contract.influencer}</h3>
                            <p className="text-sm text-gray-600">{contract.handle}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {contract.aiNegotiated && (
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                              <Bot className="w-3 h-3 mr-1" />
                              AI Negotiated
                            </Badge>
                          )}
                          <Badge className={contract.statusColor}>{contract.status}</Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Final Amount</p>
                          <p className="font-medium text-green-600">{contract.amount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Original Quote</p>
                          <p className="font-medium text-gray-500 line-through">{contract.originalAmount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">AI Savings</p>
                          <p className="font-medium text-green-600">{contract.savings}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Negotiation Rounds</p>
                          <p className="font-medium">{contract.negotiationRounds}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-gray-600">Deliverables</p>
                        <p className="font-medium">{contract.deliverables}</p>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View Contract
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          View AI Chat
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai-assistant">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-blue-600" />
                  Chat with {campaign.aiNegotiator.name}
                </CardTitle>
                <CardDescription>
                  Your AI negotiator handles outreach, follow-ups, and contract negotiations
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {aiConversation.map((message) => (
                    <div key={message.id} className={`flex ${message.isAI ? "justify-start" : "justify-end"}`}>
                      <div
                        className={`flex space-x-2 max-w-xs lg:max-w-md ${message.isAI ? "" : "flex-row-reverse space-x-reverse"}`}
                      >
                        <Avatar className="w-8 h-8">
                          {message.isAI ? (
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                              <Bot className="w-4 h-4 text-white" />
                            </div>
                          ) : (
                            <AvatarImage src="/placeholder.svg" alt="You" />
                          )}
                        </Avatar>
                        <div>
                          <div
                            className={`px-4 py-2 rounded-lg ${
                              message.isAI ? "bg-gray-100 text-gray-900" : "bg-blue-500 text-white"
                            }`}
                          >
                            <p className="text-sm whitespace-pre-line">{message.message}</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <Input
                    placeholder={`Ask ${campaign.aiNegotiator.name} anything about your campaign...`}
                    value={aiMessage}
                    onChange={(e) => setAiMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendAIMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendAIMessage} disabled={!aiMessage.trim()}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Analytics</CardTitle>
                <CardDescription>Performance metrics and AI insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">AI Performance</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-600">Total Savings</p>
                        <p className="text-2xl font-bold text-green-700">$2,400</p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-600">Success Rate</p>
                        <p className="text-2xl font-bold text-blue-700">85%</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold">Campaign Metrics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <p className="text-sm text-purple-600">Avg. Engagement</p>
                        <p className="text-2xl font-bold text-purple-700">5.2%</p>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <p className="text-sm text-orange-600">ROI</p>
                        <p className="text-2xl font-bold text-orange-700">340%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </BrandLayout>
  )
}
