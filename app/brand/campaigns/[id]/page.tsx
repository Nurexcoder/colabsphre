"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Phone,
  ArrowUpRight,
  Clock,
  Paperclip,
  AlertCircle,
  Mic,
  ArrowDownLeft,
} from "lucide-react";
import Link from "next/link";
import { BrandLayout } from "@/components/brand-layout";
import { useParams } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axiosInstance from "@/lib/api";

export default function CampaignDetailsPage() {
  const params = useParams();
  const campaignId = params.id as string;
  const [aiMessage, setAiMessage] = useState("");
  const [selectedDeliverable, setSelectedDeliverable] = useState<any>(null);
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [showAddInfluencer, setShowAddInfluencer] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchDescription, setSearchDescription] = useState("");
  const [selectedInfluencers, setSelectedInfluencers] = useState<string[]>([]);
  const [campaign, setCampaign] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Example: You can update these arrays based on campaign details if needed
  const [availableInfluencers, setAvailableInfluencers] = useState<any[]>([]);
  const [influencers, setInfluencers] = useState<any[]>([]);
  const [deliverables, setDeliverables] = useState<any[]>([]);
  const [contracts, setContracts] = useState<any[]>([]);
  const [selectedInfluencerComm, setSelectedInfluencerComm] = useState<
    any | null
  >(null);

  useEffect(() => {
    const fetchCampaign = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get(`/api/campaign`, {
          params: { campaign_id: campaignId },
        });
        const data = res.data.data;
        setCampaign(data);

        // Example: update arrays based on campaign details if needed
        // setAvailableInfluencers(...), setInfluencers(...), etc.
      } catch (error) {
        setCampaign(null);
      } finally {
        setLoading(false);
      }
    };
    if (campaignId) fetchCampaign();
  }, [campaignId]);

  // Example static data (replace with dynamic logic if needed)
  useEffect(() => {
    setAvailableInfluencers([
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
        matchScore: 95,
        verified: true,
      },
      // ...other influencers
    ]);
    setInfluencers([
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
        communication: {
          emails: [
            {
              id: "e1",
              sender: "Brand",
              subject: "Welcome to the campaign!",
              preview: "Hi Sarah, we're excited to have you...",
              timestamp: "2025-06-01 10:00",
            },
            {
              id: "e2",
              sender: "Sarah Johnson",
              subject: "Re: Welcome",
              preview: "Thank you! Looking forward to collaborating.",
              timestamp: "2025-06-01 11:00",
            },
          ],
          voiceChats: [
            {
              id: "v1",
              summary:
                "Discussed campaign goals, deliverable expectations, and timeline. Sarah asked about creative freedom and deadlines. Brand clarified requirements and confirmed flexibility.",
              timestamp: "2025-06-02 14:30",
            },
          ],
        },
      },
      // ...other influencers
    ]);
    setDeliverables([
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
      // ...other deliverables
    ]);
    setContracts([
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
      // ...other contracts
    ]);
  }, []);

  const handleSendAIMessage = () => {
    if (aiMessage.trim()) {
      setAiMessage("");
    }
  };

  const handleApproveDeliverable = (deliverableId: string) => {
    setFeedback("");
    setRating(0);
  };

  const handleSearchInfluencers = () => {
    // In a real app, this would make an API call with the search description
  };

  const toggleInfluencerSelection = (id: string) => {
    setSelectedInfluencers((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleAddSelectedInfluencers = () => {
    setShowAddInfluencer(false);
    setSelectedInfluencers([]);
    setSearchDescription("");
    setSearchQuery("");
  };

  const InfluencerProfileBadge = ({
    influencer,
  }: {
    influencer: (typeof availableInfluencers)[0];
  }) => (
    <div
      className={`relative p-4 border-2 rounded-xl transition-all duration-200 cursor-pointer hover:shadow-lg ${
        selectedInfluencers.includes(influencer.id)
          ? "border-blue-500 bg-blue-50 shadow-md"
          : "border-gray-200 hover:border-gray-300"
      }`}
      onClick={() => toggleInfluencerSelection(influencer.id)}
    >
      <div className="absolute top-3 right-3">
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            selectedInfluencers.includes(influencer.id)
              ? "bg-blue-500 border-blue-500"
              : "border-gray-300 bg-white"
          }`}
        >
          {selectedInfluencers.includes(influencer.id) && (
            <CheckCircle className="w-3 h-3 text-white" />
          )}
        </div>
      </div>
      <div className="absolute top-3 left-3">
        <Badge
          variant="secondary"
          className="bg-green-100 text-green-700 text-xs"
        >
          {influencer.matchScore}% match
        </Badge>
      </div>
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
      <div className="flex items-center justify-center gap-2 mb-3 p-2 bg-gray-50 rounded-lg">
        <Mail className="w-3 h-3 text-gray-500" />
        <span className="text-xs text-gray-600 truncate">
          {influencer.email}
        </span>
      </div>
      <div className="space-y-2 mb-3">
        {influencer.platforms.map(
          (platform: {
            name: string;
            followers: string;
            icon: React.ComponentType<{ className?: string }>;
          }) => (
            <div
              key={platform.name}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-2">
                <platform.icon className="w-4 h-4" />
                <span>{platform.name}</span>
              </div>
              <span className="font-medium">{platform.followers}</span>
            </div>
          )
        )}
      </div>
      <div className="flex flex-wrap gap-1 mb-3">
        {(influencer.niche as string[]).slice(0, 3).map((tag: string) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 text-center text-sm">
        <div>
          <p className="text-gray-600">Engagement</p>
          <p className="font-semibold text-green-600">
            {influencer.engagementRate}%
          </p>
        </div>
        <div>
          <p className="text-gray-600">Avg. Likes</p>
          <p className="font-semibold">{influencer.avgLikes}</p>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <BrandLayout>
        <div className="flex justify-center items-center h-96">
          <span className="text-gray-500 text-lg">Loading campaign...</span>
        </div>
      </BrandLayout>
    );
  }

  if (!campaign) {
    return (
      <BrandLayout>
        <div className="flex justify-center items-center h-96">
          <span className="text-red-500 text-lg">Campaign not found.</span>
        </div>
      </BrandLayout>
    );
  }

  return (
    <BrandLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col space-y-4">
          <Link
            href="/brand/campaigns"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Campaigns
          </Link>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-gray-900">
                {campaign.campaign?.name || campaign.name}
              </h1>
              <Badge variant="secondary">Active</Badge>
            </div>
            <div className="flex gap-3">
              <Link href={`/brand/campaigns/${campaignId}/edit`}>
                <Button variant="outline" className="flex items-center gap-2">
                  <Edit className="w-4 h-4" />
                  Edit Campaign
                </Button>
              </Link>
              <Dialog
                open={showAddInfluencer}
                onOpenChange={setShowAddInfluencer}
              >
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
                      Search and select influencers that match your campaign
                      requirements
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 flex-1 overflow-hidden flex flex-col">
                    <div className="space-y-4">
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
                      <div className="flex gap-4">
                        <Select defaultValue="relevance">
                          <SelectTrigger className="w-40">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="relevance">Relevance</SelectItem>
                            <SelectItem value="followers">Followers</SelectItem>
                            <SelectItem value="engagement">
                              Engagement
                            </SelectItem>
                            <SelectItem value="rating">Rating</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm">
                          <Filter className="w-4 h-4 mr-2" />
                          More Filters
                        </Button>
                      </div>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-sm text-gray-600">
                          Found {availableInfluencers.length} matching
                          influencers
                        </p>
                        {selectedInfluencers.length > 0 && (
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="secondary"
                              className="bg-blue-100 text-blue-700"
                            >
                              {selectedInfluencers.length} selected
                            </Badge>
                          </div>
                        )}
                      </div>
                      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {availableInfluencers.map((influencer) => (
                          <InfluencerProfileBadge
                            key={influencer.id}
                            influencer={influencer}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setShowAddInfluencer(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleAddSelectedInfluencers}
                      disabled={selectedInfluencers.length === 0}
                      className="flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Add {selectedInfluencers.length} Influencer
                      {selectedInfluencers.length !== 1 ? "s" : ""} & Setup
                      Email Campaign
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Campaign Overview and AI Negotiator */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                Campaign Overview
              </CardTitle>
              <CardDescription>
                A professional summary of campaign details and performance
                metrics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Top summary cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 text-blue-600 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-semibold">Timeline</span>
                  </div>
                  <p className="text-base font-bold">
                    {campaign.campaign?.startDate || campaign.startDate} –{" "}
                    {campaign.campaign?.endDate || campaign.endDate}
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 text-green-600 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-semibold">Age Range</span>
                  </div>
                  <p className="text-base font-bold">
                    {campaign.campaign?.ageRange?.[0] || campaign.ageRange?.[0]}{" "}
                    –{" "}
                    {campaign.campaign?.ageRange?.[1] || campaign.ageRange?.[1]}
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 text-yellow-600 mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm font-semibold">Total Budget</span>
                  </div>
                  <p className="text-base font-bold">
                    ${campaign.campaign?.totalBudget || campaign.totalBudget}
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 text-purple-600 mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm font-semibold">
                      Budget/Influencer
                    </span>
                  </div>
                  <p className="text-base font-bold">
                    $
                    {(campaign.campaign?.budgetPerInfluencer?.[0] ||
                      campaign.budgetPerInfluencer?.[0]) ??
                      "-"}
                    {" – $"}
                    {(campaign.campaign?.budgetPerInfluencer?.[1] ||
                      campaign.budgetPerInfluencer?.[1]) ??
                      "-"}
                  </p>
                </div>
              </div>

              {/* Progress and metrics */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Engagement Rate</span>
                      <span>
                        {campaign.campaign?.engagementRate ||
                          campaign.engagementRate}
                        %
                      </span>
                    </div>
                    <Progress
                      value={
                        campaign.campaign?.engagementRate ||
                        campaign.engagementRate
                      }
                      className="h-2"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Follower Range</span>
                      <span>
                        {(
                          campaign.campaign?.followerRange?.[0] ||
                          campaign.followerRange?.[0]
                        )?.toLocaleString()}{" "}
                        –{" "}
                        {(
                          campaign.campaign?.followerRange?.[1] ||
                          campaign.followerRange?.[1]
                        )?.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Location</span>
                      <span>
                        {campaign.campaign?.location || campaign.location}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Type</span>
                      <span>
                        {campaign.campaign?.campaignType ||
                          campaign.campaignType}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Hashtags</span>
                      <span className="truncate max-w-[180px] text-right">
                        {(
                          campaign.campaign?.hashtags || campaign.hashtags
                        )?.join(", ") || "-"}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Interests</span>
                      <span className="truncate max-w-[180px] text-right">
                        {(
                          campaign.campaign?.interests || campaign.interests
                        )?.join(", ") || "-"}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Platforms</span>
                      <span className="truncate max-w-[180px] text-right">
                        {(
                          campaign.campaign?.platforms || campaign.platforms
                        )?.join(", ") || "-"}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Content Types</span>
                      <span className="truncate max-w-[180px] text-right">
                        {(
                          campaign.campaign?.contentTypes ||
                          campaign.contentTypes
                        )?.join(", ") || "-"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guidelines, deadline, description */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-xs text-gray-500 mb-1 font-semibold">
                    Brand Guidelines
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm min-h-[48px]">
                    {campaign.campaign?.brandGuidelines ||
                      campaign.brandGuidelines ||
                      "-"}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1 font-semibold">
                    Deliverable Deadline
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm min-h-[48px]">
                    {campaign.campaign?.deliverableDeadline ||
                      campaign.deliverableDeadline ||
                      "-"}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1 font-semibold">
                    Description
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm min-h-[48px]">
                    {campaign.campaign?.description ||
                      campaign.description ||
                      "-"}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-blue-600" />
                AI Negotiator
              </CardTitle>
              <CardDescription>
                {campaign.ai?.enabled
                  ? `Your personalized AI assistant: ${campaign.ai.name} (${campaign.ai.model})`
                  : "AI assistant is not enabled for this campaign."}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">
                    {campaign.ai?.name || "SavvyBot"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Personality: {campaign.ai?.personality || "techy"}
                  </p>
                  <Badge variant="outline" className="mt-1">
                    Model: {campaign.ai?.model || "nexus-pro"}
                  </Badge>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-600">Aggressiveness</p>
                  <p className="font-medium">
                    {campaign.ai?.aggressiveness ?? 4}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Specialization</p>
                  <p className="font-medium">
                    {campaign.ai?.specialization || "Smart Home Tech"}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <Button className="w-full">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat with {campaign.ai?.name || "SavvyBot"}
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
            <TabsTrigger
              value="influencers"
              className="flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              Influencers
            </TabsTrigger>
            <TabsTrigger
              value="deliverables"
              className="flex items-center gap-2"
            >
              <Upload className="w-4 h-4" />
              Deliverables
            </TabsTrigger>
            <TabsTrigger value="contracts" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Contracts
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Influencers Tab */}
          <TabsContent value="influencers">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Campaign Influencers</CardTitle>
                    <CardDescription>
                      Manage influencers for this campaign
                    </CardDescription>
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
                              <AvatarImage
                                src={influencer.avatar || "/placeholder.svg"}
                                alt={influencer.name}
                              />
                              <AvatarFallback>
                                {influencer.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{influencer.name}</p>
                              <p className="text-sm text-gray-500">
                                {influencer.handle}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{influencer.platform}</TableCell>
                        <TableCell>{influencer.followers}</TableCell>
                        <TableCell>
                          <Badge className={influencer.statusColor}>
                            {influencer.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Bot className="w-3 h-3 text-blue-600" />
                            <span className="text-sm">
                              {influencer.aiNegotiation}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>{influencer.payment}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              setSelectedInfluencerComm(influencer)
                            }
                          >
                            View Communication
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/* Communication Modal */}
                <Dialog
                  open={!!selectedInfluencerComm}
                  onOpenChange={() => setSelectedInfluencerComm(null)}
                >
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
                    <DialogHeader className="flex-shrink-0 pb-4 border-b border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg">
                          {selectedInfluencerComm?.name?.charAt(0)}
                        </div>
                        <div>
                          <DialogTitle className="text-xl font-bold text-gray-900">
                            Communication with {selectedInfluencerComm?.name}
                          </DialogTitle>
                          <DialogDescription className="text-gray-600">
                            Complete communication history including emails and
                            voice calls
                          </DialogDescription>
                        </div>
                      </div>
                    </DialogHeader>

                    <div className="flex-1 overflow-hidden">
                      <Tabs
                        defaultValue="emails"
                        className="h-full flex flex-col"
                      >
                        <TabsList className="grid w-full grid-cols-2 mb-4">
                          <TabsTrigger
                            value="emails"
                            className="flex items-center gap-2"
                          >
                            <Mail className="w-4 h-4" />
                            Emails (
                            {selectedInfluencerComm?.communication?.emails
                              ?.length || 0}
                            )
                          </TabsTrigger>
                          <TabsTrigger
                            value="voice"
                            className="flex items-center gap-2"
                          >
                            <Phone className="w-4 h-4" />
                            Voice Calls (
                            {selectedInfluencerComm?.communication?.voiceChats
                              ?.length || 0}
                            )
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent
                          value="emails"
                          className="flex-1 overflow-hidden"
                        >
                          <div className="h-full overflow-y-auto pr-2">
                            {selectedInfluencerComm?.communication?.emails
                              ?.length > 0 ? (
                              <div className="space-y-4">
                                {selectedInfluencerComm.communication.emails.map(
                                  (email: any, index: number) => (
                                    <div key={email.id} className="group">
                                      <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200 hover:border-gray-300">
                                        {/* Email Header */}
                                        <div className="flex items-start justify-between mb-3">
                                          <div className="flex items-center gap-3">
                                            <div
                                              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                                                email.direction === "sent"
                                                  ? "bg-blue-100 text-blue-700"
                                                  : "bg-green-100 text-green-700"
                                              }`}
                                            >
                                              {email.direction === "sent" ? (
                                                <ArrowUpRight className="w-4 h-4" />
                                              ) : (
                                                <ArrowDownLeft className="w-4 h-4" />
                                              )}
                                            </div>
                                            <div>
                                              <div className="font-semibold text-gray-900 text-sm">
                                                {email.subject}
                                              </div>
                                              <div className="text-xs text-gray-500 flex items-center gap-2">
                                                <Clock className="w-3 h-3" />
                                                {new Date(
                                                  email.timestamp
                                                ).toLocaleDateString()}{" "}
                                                at{" "}
                                                {new Date(
                                                  email.timestamp
                                                ).toLocaleTimeString()}
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                                              email.status === "read"
                                                ? "bg-green-50 text-green-700 border border-green-200"
                                                : email.status === "sent"
                                                ? "bg-blue-50 text-blue-700 border border-blue-200"
                                                : "bg-gray-50 text-gray-700 border border-gray-200"
                                            }`}
                                          >
                                            {email.status || "sent"}
                                          </div>
                                        </div>

                                        {/* Email Preview */}
                                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                                          <p className="text-sm text-gray-700 leading-relaxed">
                                            {email.preview}
                                          </p>
                                        </div>

                                        {/* Email Actions */}
                                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                                          <div className="flex items-center gap-4 text-xs text-gray-500">
                                            {email.attachments && (
                                              <div className="flex items-center gap-1">
                                                <Paperclip className="w-3 h-3" />
                                                {email.attachments}{" "}
                                                attachment(s)
                                              </div>
                                            )}
                                            {email.priority && (
                                              <div
                                                className={`flex items-center gap-1 ${
                                                  email.priority === "high"
                                                    ? "text-red-600"
                                                    : "text-yellow-600"
                                                }`}
                                              >
                                                <AlertCircle className="w-3 h-3" />
                                                {email.priority} priority
                                              </div>
                                            )}
                                          </div>
                                          <button className="text-xs text-blue-600 hover:text-blue-800 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                            View Full Email
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            ) : (
                              <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                                <Mail className="w-12 h-12 mb-3 text-gray-300" />
                                <p className="text-sm">
                                  No email communications yet
                                </p>
                              </div>
                            )}
                          </div>
                        </TabsContent>

                        <TabsContent
                          value="voice"
                          className="flex-1 overflow-hidden"
                        >
                          <div className="h-full overflow-y-auto pr-2">
                            {selectedInfluencerComm?.communication?.voiceChats
                              ?.length > 0 ? (
                              <div className="space-y-4">
                                {selectedInfluencerComm.communication.voiceChats.map(
                                  (vc: any, index: number) => (
                                    <div key={vc.id} className="group">
                                      <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200 hover:border-gray-300">
                                        {/* Call Header */}
                                        <div className="flex items-start justify-between mb-3">
                                          <div className="flex items-center gap-3">
                                            <div
                                              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                                vc.type === "outgoing"
                                                  ? "bg-blue-100 text-blue-700"
                                                  : "bg-green-100 text-green-700"
                                              }`}
                                            >
                                              <Phone className="w-4 h-4" />
                                            </div>
                                            <div>
                                              <div className="font-semibold text-gray-900 text-sm flex items-center gap-2">
                                                {vc.type === "outgoing"
                                                  ? "Outgoing Call"
                                                  : "Incoming Call"}
                                                <span className="text-xs text-gray-500">
                                                  (
                                                  {vc.duration ||
                                                    "Unknown duration"}
                                                  )
                                                </span>
                                              </div>
                                              <div className="text-xs text-gray-500 flex items-center gap-2">
                                                <Clock className="w-3 h-3" />
                                                {new Date(
                                                  vc.timestamp
                                                ).toLocaleDateString()}{" "}
                                                at{" "}
                                                {new Date(
                                                  vc.timestamp
                                                ).toLocaleTimeString()}
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                                              vc.outcome === "successful"
                                                ? "bg-green-50 text-green-700 border border-green-200"
                                                : vc.outcome === "missed"
                                                ? "bg-red-50 text-red-700 border border-red-200"
                                                : "bg-yellow-50 text-yellow-700 border border-yellow-200"
                                            }`}
                                          >
                                            {vc.outcome || "completed"}
                                          </div>
                                        </div>

                                        {/* Call Summary */}
                                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100">
                                          <div className="flex items-center gap-2 mb-2">
                                            <FileText className="w-4 h-4 text-purple-600" />
                                            <span className="text-sm font-medium text-purple-800">
                                              Call Summary
                                            </span>
                                          </div>
                                          <p className="text-sm text-gray-700 leading-relaxed">
                                            {vc.summary}
                                          </p>
                                        </div>

                                        {/* Call Details */}
                                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                                          <div className="flex items-center gap-4 text-xs text-gray-500">
                                            {vc.recordingAvailable && (
                                              <div className="flex items-center gap-1 text-green-600">
                                                <Mic className="w-3 h-3" />
                                                Recording available
                                              </div>
                                            )}
                                            {vc.followUpRequired && (
                                              <div className="flex items-center gap-1 text-orange-600">
                                                <Calendar className="w-3 h-3" />
                                                Follow-up required
                                              </div>
                                            )}
                                          </div>
                                          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            {vc.recordingAvailable && (
                                              <button className="text-xs text-green-600 hover:text-green-800 font-medium">
                                                Play Recording
                                              </button>
                                            )}
                                            <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                                              View Details
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            ) : (
                              <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                                <Phone className="w-12 h-12 mb-3 text-gray-300" />
                                <p className="text-sm">
                                  No voice communications yet
                                </p>
                              </div>
                            )}
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex-shrink-0 flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="text-xs text-gray-500">
                        Last updated: {new Date().toLocaleDateString()}
                      </div>
                      <div className="flex gap-2">
                        <button className="px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">
                          Send Email
                        </button>
                        <button className="px-3 py-1.5 text-sm bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors font-medium">
                          Schedule Call
                        </button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Deliverables Tab */}
          <TabsContent value="deliverables">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Campaign Deliverables</CardTitle>
                    <CardDescription>
                      Track and review content submissions
                    </CardDescription>
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
                    <div
                      key={deliverable.id}
                      className="p-4 border rounded-lg hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage
                              src={deliverable.avatar || "/placeholder.svg"}
                              alt={deliverable.influencer}
                            />
                            <AvatarFallback>
                              {deliverable.influencer.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {deliverable.type}
                            </h3>
                            <p className="text-sm text-gray-600">
                              by {deliverable.influencer}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {deliverable.rating && (
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-medium">
                                {deliverable.rating}
                              </span>
                            </div>
                          )}
                          <Badge className={deliverable.statusColor}>
                            {deliverable.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600">
                          {deliverable.description}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-600">Due Date:</span>
                          <span className="font-medium ml-1">
                            {deliverable.dueDate}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">Engagement:</span>
                          <span className="font-medium ml-1">
                            {deliverable.engagement}
                          </span>
                        </div>
                      </div>
                      {deliverable.brandFeedback && (
                        <div className="mb-4 p-3 bg-green-50 rounded-lg">
                          <p className="text-sm text-green-800">
                            <strong>Feedback:</strong>{" "}
                            {deliverable.brandFeedback}
                          </p>
                        </div>
                      )}
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                setSelectedDeliverable(deliverable)
                              }
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              Review Content
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[700px]">
                            <DialogHeader>
                              <DialogTitle>Review Deliverable</DialogTitle>
                              <DialogDescription>
                                Review and provide feedback for{" "}
                                {selectedDeliverable?.type}
                              </DialogDescription>
                            </DialogHeader>
                            {selectedDeliverable && (
                              <div className="space-y-4">
                                <div className="border rounded-lg p-4 bg-gray-50">
                                  <p className="text-sm font-medium mb-2">
                                    Content Preview
                                  </p>
                                  {selectedDeliverable.type.includes(
                                    "Video"
                                  ) ? (
                                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                                      <div className="text-center">
                                        <Play className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                                        <p className="text-gray-600">
                                          Video Content
                                        </p>
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          className="mt-2"
                                        >
                                          Play Video
                                        </Button>
                                      </div>
                                    </div>
                                  ) : (
                                    <img
                                      src={
                                        selectedDeliverable.contentUrl ||
                                        "/placeholder.svg"
                                      }
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
                                            i < rating
                                              ? "text-yellow-400 fill-current"
                                              : "text-gray-300"
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
                                    onChange={(e) =>
                                      setFeedback(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                            )}
                            <DialogFooter>
                              <Button
                                variant="outline"
                                disabled={!feedback.trim()}
                              >
                                <ThumbsDown className="w-4 h-4 mr-2" />
                                Request Revision
                              </Button>
                              <Button
                                onClick={() =>
                                  handleApproveDeliverable(
                                    selectedDeliverable?.id || ""
                                  )
                                }
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

          {/* Contracts Tab */}
          <TabsContent value="contracts">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Campaign Contracts</CardTitle>
                    <CardDescription>
                      AI-negotiated contracts and agreements
                    </CardDescription>
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
                    <div
                      key={contract.id}
                      className="p-4 border rounded-lg hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage
                              src={contract.avatar || "/placeholder.svg"}
                              alt={contract.influencer}
                            />
                            <AvatarFallback>
                              {contract.influencer.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {contract.influencer}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {contract.handle}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {contract.aiNegotiated && (
                            <Badge
                              variant="secondary"
                              className="bg-blue-100 text-blue-700"
                            >
                              <Bot className="w-3 h-3 mr-1" />
                              AI Negotiated
                            </Badge>
                          )}
                          <Badge className={contract.statusColor}>
                            {contract.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Final Amount</p>
                          <p className="font-medium text-green-600">
                            {contract.amount}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">
                            Original Quote
                          </p>
                          <p className="font-medium text-gray-500 line-through">
                            {contract.originalAmount}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">AI Savings</p>
                          <p className="font-medium text-green-600">
                            {contract.savings}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">
                            Negotiation Rounds
                          </p>
                          <p className="font-medium">
                            {contract.negotiationRounds}
                          </p>
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

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Analytics</CardTitle>
                <CardDescription>
                  Performance metrics and AI insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">AI Performance</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-600">Total Savings</p>
                        <p className="text-2xl font-bold text-green-700">
                          $2,400
                        </p>
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
                        <p className="text-sm text-purple-600">
                          Avg. Engagement
                        </p>
                        <p className="text-2xl font-bold text-purple-700">
                          5.2%
                        </p>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <p className="text-sm text-orange-600">ROI</p>
                        <p className="text-2xl font-bold text-orange-700">
                          340%
                        </p>
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
  );
}
