"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Search,
  Filter,
  Grid3X3,
  List,
  MapPin,
  Heart,
  Eye,
  Plus,
  Star,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react"
import { BrandLayout } from "@/components/brand-layout"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function InfluencersPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedInfluencers, setSelectedInfluencers] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const influencers = [
    {
      id: "1",
      name: "Sarah Johnson",
      handle: "@sarahjohnson",
      avatar: "/placeholder.svg?height=80&width=80",
      platforms: [
        { name: "Instagram", followers: "125K", icon: Instagram },
        { name: "TikTok", followers: "89K", icon: Twitter },
      ],
      engagementRate: 4.2,
      location: "Los Angeles, CA",
      niche: ["Fashion", "Lifestyle"],
      recentPost: "/placeholder.svg?height=200&width=200",
      avgLikes: "5.2K",
      avgComments: "234",
      rating: 4.8,
    },
    {
      id: "2",
      name: "Mike Chen",
      handle: "@mikechentech",
      avatar: "/placeholder.svg?height=80&width=80",
      platforms: [
        { name: "YouTube", followers: "245K", icon: Youtube },
        { name: "Instagram", followers: "67K", icon: Instagram },
      ],
      engagementRate: 6.1,
      location: "San Francisco, CA",
      niche: ["Technology", "Gaming"],
      recentPost: "/placeholder.svg?height=200&width=200",
      avgLikes: "8.1K",
      avgComments: "456",
      rating: 4.9,
    },
    {
      id: "3",
      name: "Emma Davis",
      handle: "@emmafitness",
      avatar: "/placeholder.svg?height=80&width=80",
      platforms: [
        { name: "Instagram", followers: "89K", icon: Instagram },
        { name: "TikTok", followers: "156K", icon: Twitter },
      ],
      engagementRate: 5.8,
      location: "Miami, FL",
      niche: ["Fitness", "Health"],
      recentPost: "/placeholder.svg?height=200&width=200",
      avgLikes: "4.7K",
      avgComments: "189",
      rating: 4.7,
    },
    {
      id: "4",
      name: "Alex Rodriguez",
      handle: "@alexfoodie",
      avatar: "/placeholder.svg?height=80&width=80",
      platforms: [
        { name: "Instagram", followers: "178K", icon: Instagram },
        { name: "YouTube", followers: "92K", icon: Youtube },
      ],
      engagementRate: 4.9,
      location: "New York, NY",
      niche: ["Food", "Travel"],
      recentPost: "/placeholder.svg?height=200&width=200",
      avgLikes: "6.8K",
      avgComments: "312",
      rating: 4.6,
    },
    {
      id: "5",
      name: "Lisa Wang",
      handle: "@lisabeauty",
      avatar: "/placeholder.svg?height=80&width=80",
      platforms: [
        { name: "Instagram", followers: "234K", icon: Instagram },
        { name: "TikTok", followers: "189K", icon: Twitter },
      ],
      engagementRate: 7.2,
      location: "Chicago, IL",
      niche: ["Beauty", "Skincare"],
      recentPost: "/placeholder.svg?height=200&width=200",
      avgLikes: "9.1K",
      avgComments: "567",
      rating: 4.9,
    },
    {
      id: "6",
      name: "David Kim",
      handle: "@davidtravel",
      avatar: "/placeholder.svg?height=80&width=80",
      platforms: [
        { name: "Instagram", followers: "156K", icon: Instagram },
        { name: "YouTube", followers: "78K", icon: Youtube },
      ],
      engagementRate: 5.4,
      location: "Seattle, WA",
      niche: ["Travel", "Photography"],
      recentPost: "/placeholder.svg?height=200&width=200",
      avgLikes: "5.9K",
      avgComments: "278",
      rating: 4.5,
    },
  ]

  const toggleInfluencerSelection = (id: string) => {
    setSelectedInfluencers((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  const InfluencerCard = ({ influencer }: { influencer: (typeof influencers)[0] }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <img
              src={influencer.avatar || "/placeholder.svg"}
              alt={influencer.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{influencer.name}</h3>
              <p className="text-sm text-gray-600">{influencer.handle}</p>
            </div>
          </div>
          <Checkbox
            checked={selectedInfluencers.includes(influencer.id)}
            onCheckedChange={() => toggleInfluencerSelection(influencer.id)}
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{influencer.location}</span>
          </div>

          <div className="flex flex-wrap gap-1">
            {influencer.niche.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="space-y-2">
            {influencer.platforms.map((platform) => (
              <div key={platform.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <platform.icon className="w-4 h-4" />
                  <span className="text-sm">{platform.name}</span>
                </div>
                <span className="text-sm font-medium">{platform.followers}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1">
              <Heart className="w-4 h-4 text-red-500" />
              <span>{influencer.avgLikes}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>Engagement: {influencer.engagementRate}%</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(influencer.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                />
              ))}
              <span className="text-sm text-gray-600 ml-1">{influencer.rating}</span>
            </div>
          </div>

          <img
            src={influencer.recentPost || "/placeholder.svg"}
            alt="Recent post"
            className="w-full h-32 object-cover rounded-lg"
          />
        </div>

        <div className="flex gap-2 mt-4">
          <Button size="sm" className="flex-1">
            <Plus className="w-4 h-4 mr-1" />
            Add to Campaign
          </Button>
          <Button size="sm" variant="outline">
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <BrandLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Influencer Discovery</h1>
            <p className="text-gray-600">Find and connect with the perfect influencers for your campaigns</p>
          </div>

          {selectedInfluencers.length > 0 && (
            <Button className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add {selectedInfluencers.length} to Campaign
            </Button>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="lg:w-80 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>Platform</Label>
                  <div className="space-y-2 mt-2">
                    {["Instagram", "TikTok", "YouTube", "Twitter"].map((platform) => (
                      <div key={platform} className="flex items-center space-x-2">
                        <Checkbox id={platform} />
                        <Label htmlFor={platform} className="text-sm">
                          {platform}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Follower Count</Label>
                  <div className="mt-2">
                    <input type="range" min="1000" max="10000000" className="w-full" />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>1K</span>
                      <span>10M</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Engagement Rate</Label>
                  <div className="mt-2">
                    <input type="range" min="0" max="20" className="w-full" />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>0%</span>
                      <span>20%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="location">Location</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Niche/Category</Label>
                  <div className="space-y-2 mt-2">
                    {["Fashion", "Beauty", "Fitness", "Food", "Travel", "Technology"].map((niche) => (
                      <div key={niche} className="flex items-center space-x-2">
                        <Checkbox id={niche} />
                        <Label htmlFor={niche} className="text-sm">
                          {niche}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
                <Button variant="outline" className="w-full">
                  Clear All
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Area */}
          <div className="flex-1">
            {/* Search and Controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search influencers by name, handle, or niche..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2">
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

                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">Showing {influencers.length} influencers</p>
              {selectedInfluencers.length > 0 && (
                <p className="text-sm text-blue-600">{selectedInfluencers.length} selected</p>
              )}
            </div>

            {/* Influencer Grid */}
            <div className={`grid gap-6 ${viewMode === "grid" ? "md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
              {influencers.map((influencer) => (
                <InfluencerCard key={influencer.id} influencer={influencer} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline">Load More Influencers</Button>
            </div>
          </div>
        </div>
      </div>
    </BrandLayout>
  )
}
