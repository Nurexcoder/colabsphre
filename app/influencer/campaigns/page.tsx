"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Star, MapPin, Calendar, DollarSign, Users, Eye, Heart, Send, Sparkles } from "lucide-react"
import { InfluencerLayout } from "@/components/influencer-layout"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
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

export default function CampaignsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("relevance")
  const [proposalText, setProposalText] = useState("")

  const campaigns = [
    {
      id: "1",
      title: "Summer Fashion Collection Launch",
      brand: "StyleCorp",
      brandLogo: "/placeholder.svg?height=40&width=40",
      description:
        "Looking for fashion influencers to showcase our new summer collection. Focus on beachwear, casual outfits, and accessories.",
      budget: "$800 - $1,500",
      deadline: "Apply by Jun 15, 2025",
      category: "Fashion",
      platforms: ["Instagram", "TikTok"],
      requirements: ["10K+ followers", "Fashion niche", "US-based"],
      deliverables: ["2 Instagram posts", "3 Stories", "1 Reel"],
      match: 95,
      applicants: 24,
      location: "United States",
      duration: "2 weeks",
    },
    {
      id: "2",
      title: "Tech Product Review Campaign",
      brand: "TechInnovate",
      brandLogo: "/placeholder.svg?height=40&width=40",
      description:
        "Seeking tech reviewers for our latest smartphone launch. Looking for authentic reviews and unboxing content.",
      budget: "$1,200 - $2,500",
      deadline: "Apply by Jun 20, 2025",
      category: "Technology",
      platforms: ["YouTube", "Instagram"],
      requirements: ["50K+ followers", "Tech content", "Global"],
      deliverables: ["1 YouTube video", "2 Instagram posts"],
      match: 88,
      applicants: 18,
      location: "Global",
      duration: "3 weeks",
    },
    {
      id: "3",
      title: "Fitness Challenge Partnership",
      brand: "FitLife",
      brandLogo: "/placeholder.svg?height=40&width=40",
      description:
        "30-day fitness challenge collaboration. Share your fitness journey and inspire others to join our community.",
      budget: "$600 - $1,000",
      deadline: "Apply by Jun 25, 2025",
      category: "Fitness",
      platforms: ["Instagram", "TikTok"],
      requirements: ["5K+ followers", "Fitness content", "Active lifestyle"],
      deliverables: ["Daily stories", "3 Posts", "2 Reels"],
      match: 92,
      applicants: 31,
      location: "North America",
      duration: "30 days",
    },
    {
      id: "4",
      title: "Food & Recipe Content",
      brand: "TasteMakers",
      brandLogo: "/placeholder.svg?height=40&width=40",
      description:
        "Create delicious recipe content featuring our organic ingredients. Perfect for food bloggers and cooking enthusiasts.",
      budget: "$400 - $800",
      deadline: "Apply by Jul 1, 2025",
      category: "Food",
      platforms: ["Instagram", "YouTube"],
      requirements: ["Food content", "Recipe creation", "High-quality photos"],
      deliverables: ["3 Recipe posts", "1 Cooking video"],
      match: 85,
      applicants: 42,
      location: "Europe",
      duration: "2 weeks",
    },
    {
      id: "5",
      title: "Travel Destination Showcase",
      brand: "WanderLust",
      brandLogo: "/placeholder.svg?height=40&width=40",
      description:
        "Showcase beautiful travel destinations and experiences. Looking for travel content creators with stunning photography skills.",
      budget: "$1,000 - $2,000",
      deadline: "Apply by Jul 5, 2025",
      category: "Travel",
      platforms: ["Instagram", "YouTube"],
      requirements: ["Travel content", "Photography skills", "Storytelling"],
      deliverables: ["5 Instagram posts", "1 Travel vlog"],
      match: 78,
      applicants: 15,
      location: "Global",
      duration: "1 week",
    },
    {
      id: "6",
      title: "Beauty Product Launch",
      brand: "GlowCorp",
      brandLogo: "/placeholder.svg?height=40&width=40",
      description:
        "Launch our new skincare line with authentic reviews and tutorials. Perfect for beauty enthusiasts and skincare lovers.",
      budget: "$700 - $1,300",
      deadline: "Apply by Jun 30, 2025",
      category: "Beauty",
      platforms: ["Instagram", "TikTok", "YouTube"],
      requirements: ["Beauty content", "Skincare focus", "Tutorial creation"],
      deliverables: ["2 Tutorial videos", "3 Instagram posts"],
      match: 90,
      applicants: 28,
      location: "United States",
      duration: "3 weeks",
    },
  ]

  const categories = ["all", "Fashion", "Technology", "Fitness", "Food", "Travel", "Beauty"]

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch =
      campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.category.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "all" || campaign.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const sortedCampaigns = [...filteredCampaigns].sort((a, b) => {
    switch (sortBy) {
      case "budget":
        return (
          Number.parseInt(b.budget.split(" - $")[1].replace(",", "")) -
          Number.parseInt(a.budget.split(" - $")[1].replace(",", ""))
        )
      case "deadline":
        return new Date(a.deadline.split("by ")[1]).getTime() - new Date(b.deadline.split("by ")[1]).getTime()
      case "match":
        return b.match - a.match
      case "relevance":
      default:
        return b.match - a.match
    }
  })

  const handleApply = (campaignId: string) => {
    console.log("Applied to campaign:", campaignId, "with proposal:", proposalText)
    setProposalText("")
  }

  return (
    <InfluencerLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Browse Campaigns</h1>
            <p className="text-gray-600">Discover and apply to campaigns that match your profile</p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search campaigns by title, brand, or description..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-3">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  <SelectValue placeholder="Category" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="match">Match Score</SelectItem>
                <SelectItem value="budget">Budget (High-Low)</SelectItem>
                <SelectItem value="deadline">Deadline</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing {filteredCampaigns.length} of {campaigns.length} campaigns
          </p>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-blue-600">AI-powered matching</span>
          </div>
        </div>

        {/* Campaign Cards */}
        <div className="grid gap-6">
          {sortedCampaigns.map((campaign) => (
            <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={campaign.brandLogo || "/placeholder.svg"} alt={campaign.brand} />
                      <AvatarFallback>{campaign.brand.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{campaign.title}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium text-gray-700">{campaign.match}% match</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-1">by {campaign.brand}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{campaign.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{campaign.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{campaign.applicants} applicants</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary">{campaign.category}</Badge>
                </div>

                <p className="text-gray-700 mb-4">{campaign.description}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                    <div className="flex flex-wrap gap-1">
                      {campaign.requirements.map((req, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Deliverables</h4>
                    <div className="flex flex-wrap gap-1">
                      {campaign.deliverables.map((deliverable, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {deliverable}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Platforms</h4>
                    <div className="flex flex-wrap gap-1">
                      {campaign.platforms.map((platform, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Budget & Deadline</h4>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-sm">
                        <DollarSign className="w-3 h-3 text-green-600" />
                        <span className="font-medium text-green-600">{campaign.budget}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Calendar className="w-3 h-3" />
                        <span>{campaign.deadline}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Heart className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="flex-1">
                        <Send className="w-4 h-4 mr-2" />
                        Apply Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[525px]">
                      <DialogHeader>
                        <DialogTitle>Apply to {campaign.title}</DialogTitle>
                        <DialogDescription>
                          Submit your proposal to {campaign.brand}. Explain why you're the perfect fit for this
                          campaign.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="proposal">Your Proposal</Label>
                          <Textarea
                            id="proposal"
                            placeholder="Tell the brand why you're perfect for this campaign. Include your ideas, relevant experience, and what makes you unique..."
                            rows={6}
                            value={proposalText}
                            onChange={(e) => setProposalText(e.target.value)}
                          />
                        </div>
                        <div className="text-sm text-gray-500">
                          <p>Your application will include:</p>
                          <ul className="list-disc list-inside mt-1 space-y-1">
                            <li>Your profile and portfolio</li>
                            <li>Recent performance metrics</li>
                            <li>This custom proposal</li>
                          </ul>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline">Save as Draft</Button>
                        <Button onClick={() => handleApply(campaign.id)} disabled={!proposalText.trim()}>
                          Submit Application
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredCampaigns.length > 0 && (
          <div className="text-center">
            <Button variant="outline">Load More Campaigns</Button>
          </div>
        )}

        {/* No Results */}
        {filteredCampaigns.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No campaigns found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search terms or filters to find more campaigns.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </InfluencerLayout>
  )
}
