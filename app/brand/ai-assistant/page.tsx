"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bot,
  Send,
  Sparkles,
  Users,
  MessageSquare,
  TrendingUp,
  Settings,
  Zap,
  Brain,
  Target,
  BarChart3,
} from "lucide-react"
import { BrandLayout } from "@/components/brand-layout"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AIAssistantPage() {
  const [message, setMessage] = useState("")
  const [selectedCampaign, setSelectedCampaign] = useState("")

  const campaigns = [
    { id: "1", name: "Summer Fashion Collection" },
    { id: "2", name: "Tech Product Launch" },
    { id: "3", name: "Holiday Special" },
  ]

  const aiPersonalities = [
    {
      id: "nexus",
      name: "Nexus",
      description: "General AI assistant for overall platform management",
      icon: Brain,
      color: "bg-blue-100 text-blue-600",
      capabilities: ["Campaign optimization", "Platform insights", "General assistance"],
    },
    {
      id: "flowbot",
      name: "FlowBot",
      description: "Personalized AI for campaign-specific negotiations and outreach",
      icon: Zap,
      color: "bg-purple-100 text-purple-600",
      capabilities: ["Influencer matching", "Contract negotiation", "Outreach automation"],
    },
  ]

  const conversation = [
    {
      id: "1",
      sender: "Nexus",
      message:
        "Hello! I'm Nexus, your AI assistant. I can help you optimize campaigns, find insights, and manage your influencer marketing strategy. What would you like to work on today?",
      timestamp: "10:30 AM",
      isAI: true,
      aiType: "nexus",
    },
    {
      id: "2",
      sender: "You",
      message: "I need help finding the right influencers for my summer fashion campaign. What should I look for?",
      timestamp: "10:35 AM",
      isAI: false,
    },
    {
      id: "3",
      sender: "Nexus",
      message:
        "For your summer fashion campaign, I recommend focusing on influencers with: 1) High engagement rates (4%+), 2) Fashion/lifestyle content, 3) Audience aged 18-35, 4) Previous brand collaborations. I can also activate FlowBot to help with personalized outreach once you've selected candidates.",
      timestamp: "10:36 AM",
      isAI: true,
      aiType: "nexus",
    },
  ]

  const quickActions = [
    {
      title: "Find Influencers",
      description: "Get AI-powered influencer recommendations",
      icon: Users,
      action: "find-influencers",
    },
    {
      title: "Optimize Campaign",
      description: "Analyze and improve campaign performance",
      icon: TrendingUp,
      action: "optimize-campaign",
    },
    {
      title: "Draft Outreach",
      description: "Generate personalized outreach messages",
      icon: MessageSquare,
      action: "draft-outreach",
    },
    {
      title: "Analyze Performance",
      description: "Get insights on campaign metrics",
      icon: BarChart3,
      action: "analyze-performance",
    },
  ]

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending
      setMessage("")
    }
  }

  const handleQuickAction = (action: string) => {
    // Handle quick actions
    console.log("Quick action:", action)
  }

  return (
    <BrandLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">AI Assistant</h1>
            <p className="text-gray-600">Your intelligent partner for influencer marketing success</p>
          </div>

          <div className="flex gap-3">
            <Select value={selectedCampaign} onValueChange={setSelectedCampaign}>
              <SelectTrigger className="w-[200px]">
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
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              AI Settings
            </Button>
          </div>
        </div>

        {/* AI Personalities */}
        <div className="grid md:grid-cols-2 gap-6">
          {aiPersonalities.map((ai) => (
            <Card key={ai.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${ai.color}`}>
                    <ai.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {ai.name}
                      <Sparkles className="w-4 h-4 text-yellow-500" />
                    </CardTitle>
                    <CardDescription>{ai.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Capabilities:</h4>
                    <div className="flex flex-wrap gap-1">
                      {ai.capabilities.map((capability, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {capability}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full" variant={ai.id === "nexus" ? "default" : "outline"}>
                    Chat with {ai.name}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="chat" className="space-y-6">
          <TabsList>
            <TabsTrigger value="chat">AI Chat</TabsTrigger>
            <TabsTrigger value="quick-actions">Quick Actions</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="chat">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-blue-600" />
                  Chat with Nexus
                </CardTitle>
                <CardDescription>Ask questions, get recommendations, and optimize your campaigns</CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {conversation.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.isAI ? "justify-start" : "justify-end"}`}>
                      <div
                        className={`flex space-x-2 max-w-xs lg:max-w-md ${msg.isAI ? "" : "flex-row-reverse space-x-reverse"}`}
                      >
                        <Avatar className="w-8 h-8">
                          {msg.isAI ? (
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                msg.aiType === "nexus" ? "bg-blue-100" : "bg-purple-100"
                              }`}
                            >
                              {msg.aiType === "nexus" ? (
                                <Brain className="w-4 h-4 text-blue-600" />
                              ) : (
                                <Zap className="w-4 h-4 text-purple-600" />
                              )}
                            </div>
                          ) : (
                            <AvatarImage src="/placeholder.svg" alt="You" />
                          )}
                        </Avatar>
                        <div>
                          <div
                            className={`px-4 py-2 rounded-lg ${
                              msg.isAI ? "bg-gray-100 text-gray-900" : "bg-blue-500 text-white"
                            }`}
                          >
                            <p className="text-sm">{msg.message}</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Ask Nexus anything about your campaigns..."
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

          <TabsContent value="quick-actions">
            <div className="grid md:grid-cols-2 gap-6">
              {quickActions.map((action, index) => (
                <Card
                  key={index}
                  className="hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleQuickAction(action.action)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <action.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{action.title}</h3>
                        <p className="text-sm text-gray-600">{action.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="insights">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Performance Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="font-medium text-green-800">High Performing Content</span>
                      </div>
                      <p className="text-sm text-green-700">
                        Instagram Reels are generating 40% higher engagement than posts in your fashion campaigns.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-blue-800">Audience Insights</span>
                      </div>
                      <p className="text-sm text-blue-700">
                        Your target audience is most active on weekends between 2-6 PM.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-purple-600" />
                        <span className="font-medium">Optimize Budget Allocation</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Consider increasing budget for micro-influencers (10K-100K followers) as they show 25% better
                        ROI.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-orange-600" />
                        <span className="font-medium">Influencer Suggestions</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        3 new influencers matching your criteria have joined the platform this week.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </BrandLayout>
  )
}
