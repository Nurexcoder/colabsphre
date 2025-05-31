"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Search,
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
  MessageSquare,
  X,
  SlidersHorizontal,
} from "lucide-react"
import { BrandLayout } from "@/components/brand-layout"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { NegotiationChatbot } from "@/components/negotiation-chatbot"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function InfluencersPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")
  const [selectedInfluencers, setSelectedInfluencers] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [showChatbot, setShowChatbot] = useState(false)
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [showAddInfluencer, setShowAddInfluencer] = useState(false)
  const [emailList, setEmailList] = useState("")
  const [selectedCampaignForEmail, setSelectedCampaignForEmail] = useState("")

  const influencers = [
    {
      id: "1",
      name: "Sarah Johnson",
      handle: "@sarahjohnson",
      email: "sarah.johnson@email.com",
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
      status: "Available",
      lastActive: "2 hours ago",
      responseRate: "95%",
      avgResponseTime: "2 hours",
    },
    {
      id: "2",
      name: "Mike Chen",
      handle: "@mikechentech",
      email: "mike.chen@email.com",
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
      status: "Busy",
      lastActive: "1 day ago",
      responseRate: "88%",
      avgResponseTime: "4 hours",
    },
    {
      id: "3",
      name: "Emma Davis",
      handle: "@emmafitness",
      email: "emma.davis@email.com",
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
      status: "Available",
      lastActive: "30 minutes ago",
      responseRate: "92%",
      avgResponseTime: "1 hour",
    },
    {
      id: "4",
      name: "Alex Rodriguez",
      handle: "@alexfoodie",
      email: "alex.rodriguez@email.com",
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
      status: "Available",
      lastActive: "1 hour ago",
      responseRate: "90%",
      avgResponseTime: "3 hours",
    },
    {
      id: "5",
      name: "Lisa Wang",
      handle: "@lisabeauty",
      email: "lisa.wang@email.com",
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
      status: "Available",
      lastActive: "15 minutes ago",
      responseRate: "97%",
      avgResponseTime: "30 minutes",
    },
    {
      id: "6",
      name: "David Kim",
      handle: "@davidtravel",
      email: "david.kim@email.com",
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
      status: "Busy",
      lastActive: "3 hours ago",
      responseRate: "85%",
      avgResponseTime: "6 hours",
    },
  ]

  const campaigns = [
    { id: "1", name: "Summer Fashion Collection", influencers: 24 },
    { id: "2", name: "Tech Product Launch", influencers: 8 },
    { id: "3", name: "Holiday Special", influencers: 12 },
  ]

  const toggleInfluencerSelection = (id: string) => {
    setSelectedInfluencers((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  const handleMessageInfluencer = (influencer: any) => {
    setSelectedCampaign({
      id: "demo-campaign",
      name: "Demo Campaign",
      brand: "Your Brand",
      brandLogo: "/placeholder.svg?height=60&width=60",
      aiNegotiator: {
        name: "StyleFlow AI",
        personality: "Professional & Persuasive",
      },
    })
    setShowChatbot(true)
  }

  const handleAddSelectedInfluencers = () => {
    console.log("Adding influencers to campaign:", selectedInfluencers)
    setShowAddInfluencer(false)
    setSelectedInfluencers([])
  }

  const handleSendOutreachEmails = () => {
    console.log(
      "Sending outreach emails to:",
      emailList.split("\n").filter((email) => email.trim()),
    )
    console.log("For campaign:", selectedCampaignForEmail)
    // Close the dialog after sending
    setEmailList("")
    setSelectedCampaignForEmail("")
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
          <Button size="sm" variant="outline" onClick={() => handleMessageInfluencer(influencer)}>
            <MessageSquare className="w-4 h-4" />
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

          <div className="flex flex-wrap gap-2">
            {selectedInfluencers.length > 0 && (
              <Button className="flex items-center gap-2" onClick={() => setShowAddInfluencer(true)}>
                <Plus className="w-4 h-4" />
                Add {selectedInfluencers.length} to Campaign
              </Button>
            )}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Email Outreach
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Send Email Outreach</DialogTitle>
                  <DialogDescription>Add email addresses of influencers you want to reach out to</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="campaign">Select Campaign</Label>
                    <Select value={selectedCampaignForEmail} onValueChange={setSelectedCampaignForEmail}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a campaign" />
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
                  <div className="space-y-2">
                    <Label htmlFor="emails">Email Addresses</Label>
                    <textarea
                      id="emails"
                      className="w-full min-h-[150px] p-3 border rounded-md"
                      placeholder="Enter email addresses (one per line)"
                      value={emailList}
                      onChange={(e) => setEmailList(e.target.value)}
                    />
                    <p className="text-xs text-gray-500">Enter one email address per line</p>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setEmailList("")}>
                    Cancel
                  </Button>
                  <Button onClick={handleSendOutreachEmails} disabled={!emailList.trim() || !selectedCampaignForEmail}>
                    Send Outreach
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          {/* Search and Controls */}
          <div className="flex flex-col sm:flex-row gap-4">
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

              <Sheet open={showFilters} onOpenChange={setShowFilters}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <SlidersHorizontal className="w-4 h-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="space-y-6 py-4">
                    <div>
                      <Label>Platform</Label>
                      <div className="space-y-2 mt-2">
                        {["Instagram", "TikTok", "YouTube", "Twitter"].map((platform) => (
                          <div key={platform} className="flex items-center space-x-2">
                            <Checkbox id={`platform-${platform}`} />
                            <Label htmlFor={`platform-${platform}`} className="text-sm">
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
                            <Checkbox id={`niche-${niche}`} />
                            <Label htmlFor={`niche-${niche}`} className="text-sm">
                              {niche}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1">Apply Filters</Button>
                      <Button variant="outline" className="flex-1">
                        Clear All
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

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
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">Showing {influencers.length} influencers</p>
            {selectedInfluencers.length > 0 && (
              <p className="text-sm text-blue-600">{selectedInfluencers.length} selected</p>
            )}
          </div>

          {/* Influencer Results */}
          <div className="overflow-x-auto">
            {viewMode === "grid" ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {influencers.map((influencer) => (
                  <InfluencerCard key={influencer.id} influencer={influencer} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border overflow-hidden">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="w-12">
                          <Checkbox />
                        </TableHead>
                        <TableHead className="font-semibold">Influencer</TableHead>
                        <TableHead className="font-semibold">Platforms</TableHead>
                        <TableHead className="font-semibold">Engagement</TableHead>
                        <TableHead className="font-semibold">Location</TableHead>
                        <TableHead className="font-semibold">Status</TableHead>
                        <TableHead className="font-semibold">Response Rate</TableHead>
                        <TableHead className="font-semibold">Rating</TableHead>
                        <TableHead className="font-semibold text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {influencers.map((influencer) => (
                        <TableRow key={influencer.id} className="hover:bg-gray-50">
                          <TableCell>
                            <Checkbox
                              checked={selectedInfluencers.includes(influencer.id)}
                              onCheckedChange={() => toggleInfluencerSelection(influencer.id)}
                            />
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={influencer.avatar || "/placeholder.svg"} alt={influencer.name} />
                                <AvatarFallback>{influencer.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium text-gray-900">{influencer.name}</p>
                                <p className="text-sm text-gray-500">{influencer.handle}</p>
                                <p className="text-xs text-gray-400">{influencer.email}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              {influencer.platforms.map((platform) => (
                                <div key={platform.name} className="flex items-center gap-2 text-sm">
                                  <platform.icon className="w-3 h-3" />
                                  <span>{platform.followers}</span>
                                </div>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="font-medium">{influencer.engagementRate}%</div>
                              <div className="w-12 bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-green-600 h-2 rounded-full"
                                  style={{ width: `${influencer.engagementRate * 10}%` }}
                                ></div>
                              </div>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">{influencer.avgLikes} avg likes</div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">{influencer.location}</div>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {influencer.niche.slice(0, 2).map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={influencer.status === "Available" ? "default" : "secondary"}
                              className={
                                influencer.status === "Available"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-yellow-100 text-yellow-700"
                              }
                            >
                              {influencer.status}
                            </Badge>
                            <div className="text-xs text-gray-500 mt-1">Last active: {influencer.lastActive}</div>
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">{influencer.responseRate}</div>
                            <div className="text-xs text-gray-500">Avg: {influencer.avgResponseTime}</div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${i < Math.floor(influencer.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                                />
                              ))}
                              <span className="text-xs text-gray-600 ml-1">{influencer.rating}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex gap-1 justify-end">
                              <Button size="sm" variant="outline">
                                <Plus className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => handleMessageInfluencer(influencer)}>
                                <MessageSquare className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Eye className="w-3 h-3" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline">Load More Influencers</Button>
          </div>
        </div>

        {/* Add to Campaign Dialog */}
        <Dialog open={showAddInfluencer} onOpenChange={setShowAddInfluencer}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Add Influencers to Campaign</DialogTitle>
              <DialogDescription>
                Select a campaign to add {selectedInfluencers.length} influencer
                {selectedInfluencers.length !== 1 ? "s" : ""}
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="campaign">Select Campaign</Label>
                  <Select>
                    <SelectTrigger className="w-full mt-2">
                      <SelectValue placeholder="Choose a campaign" />
                    </SelectTrigger>
                    <SelectContent>
                      {campaigns.map((campaign) => (
                        <SelectItem key={campaign.id} value={campaign.id}>
                          {campaign.name} ({campaign.influencers} influencers)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Selected Influencers</Label>
                  <ScrollArea className="h-[200px] border rounded-md p-2 mt-2">
                    <div className="space-y-2">
                      {selectedInfluencers.map((id) => {
                        const influencer = influencers.find((inf) => inf.id === id)
                        if (!influencer) return null
                        return (
                          <div key={id} className="flex items-center justify-between p-2 border rounded-md">
                            <div className="flex items-center gap-2">
                              <Avatar className="w-8 h-8">
                                <AvatarImage src={influencer.avatar || "/placeholder.svg"} alt={influencer.name} />
                                <AvatarFallback>{influencer.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium">{influencer.name}</p>
                                <p className="text-xs text-gray-500">{influencer.email}</p>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleInfluencerSelection(id)}
                              className="h-8 w-8 p-0"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        )
                      })}
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowAddInfluencer(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddSelectedInfluencers}>Add to Campaign</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Negotiation Chatbot */}
        {selectedCampaign && (
          <NegotiationChatbot isOpen={showChatbot} onClose={() => setShowChatbot(false)} campaign={selectedCampaign} />
        )}
      </div>
    </BrandLayout>
  )
}
