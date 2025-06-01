"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Mail, Send, Eye, Users, Clock, CheckCircle, Bot, Sparkles, RefreshCw, Download, BarChart3 } from "lucide-react"
import { BrandLayout } from "@/components/brand-layout"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OutreachPage() {
  const [selectedCampaign, setSelectedCampaign] = useState("")
  const [emailSubject, setEmailSubject] = useState("")
  const [emailContent, setEmailContent] = useState("")
  const [selectedTone, setSelectedTone] = useState("professional")
  const [platform, setPlatform] = useState("Instagram")
  const [followers, setFollowers] = useState(10000)

  const campaigns = [
    { id: "1", name: "Summer Fashion Collection", influencers: 24 },
    { id: "2", name: "Tech Product Launch", influencers: 8 },
    { id: "3", name: "Holiday Special", influencers: 12 },
  ]

  const emailTemplates = {
    professional: `Subject: Partnership Opportunity with [Brand Name]

Hi {{name}},

I hope this email finds you well. I'm reaching out from [Brand Name] because we've been following your content on {{platform}} and are impressed by your authentic voice and engaged community of {{followers}} followers.

We're launching our {{campaign}} and believe your audience would be genuinely interested in our products. We'd love to explore a partnership opportunity with you.

Here's what we're offering:
• Competitive compensation based on your rates
• Free products to keep and review
• Creative freedom with brand guidelines
• Long-term partnership potential

Would you be interested in learning more about this collaboration? I'd be happy to discuss the details and answer any questions you might have.

Looking forward to hearing from you!

Best regards,
[Your Name]
[Brand Name]`,

    casual: `Subject: Love your content! Collab opportunity 🌟

Hey {{name}}!

I've been following your {{platform}} and absolutely love your style! Your recent post about [specific content] really resonated with me.

I'm working with [Brand Name] and we're looking for authentic creators like you to partner with for our {{campaign}}. 

Quick details:
✨ Great compensation 
✨ Free products to keep
✨ Total creative freedom
✨ No complicated contracts

Interested in chatting more? Would love to send over the details!

Cheers,
[Your Name]`,

    friendly: `Subject: Exciting collaboration opportunity with [Brand Name]

Hello {{name}},

I hope you're having a wonderful day! I'm [Your Name] from [Brand Name], and I've been admiring your content on {{platform}}. Your authentic approach and the way you connect with your {{followers}} followers is truly inspiring.

We're excited to launch our {{campaign}} and would love to have you as part of our creator community. This collaboration would be a perfect fit for your audience and brand aesthetic.

What we're offering:
🎯 Fair compensation that values your work
🎁 Complimentary products for you to experience
🎨 Creative control with minimal guidelines
🤝 Opportunity for ongoing partnership

I'd love to share more details about this opportunity. Are you available for a quick chat this week?

Warm regards,
[Your Name]
[Brand Name]`,
  }

  const outreachStats = [
    { label: "Emails Sent", value: 156, icon: Mail },
    { label: "Delivered", value: 152, icon: CheckCircle },
    { label: "Opened", value: 89, icon: Eye },
    { label: "Responses", value: 34, icon: Users },
  ]

  const recentCampaigns = [
    {
      name: "Summer Fashion Collection",
      sent: 45,
      delivered: 44,
      opened: 28,
      responded: 12,
      status: "Active",
    },
    {
      name: "Tech Product Launch",
      sent: 32,
      delivered: 31,
      opened: 19,
      responded: 8,
      status: "Active",
    },
    {
      name: "Spring Collection",
      sent: 67,
      delivered: 65,
      opened: 42,
      responded: 18,
      status: "Completed",
    },
  ]

  const generateAIContent = () => {
    const template = emailTemplates[selectedTone as keyof typeof emailTemplates]
    setEmailContent(
      template
        .replace("{{name}}", "John Doe")
        .replace("{{platform}}", platform)
        .replace("{{followers}}", followers.toString()),
    )
    setEmailSubject(template.split("\n")[0].replace("Subject: ", ""))
  }

  return (
    <BrandLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Email Outreach</h1>
            <p className="text-gray-600">Create and send personalized campaigns to influencers</p>
          </div>
        </div>

        <Tabs defaultValue="compose" className="space-y-6">
          <TabsList>
            <TabsTrigger value="compose">Compose Campaign</TabsTrigger>
            <TabsTrigger value="tracking">Campaign Tracking</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="compose" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Email Composer */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Campaign Setup</CardTitle>
                    <CardDescription>Select campaign and configure your outreach</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Select Campaign</Label>
                      <Select value={selectedCampaign} onValueChange={setSelectedCampaign}>
                        <SelectTrigger className="mt-2">
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

                    {selectedCampaign && (
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-700">
                          Ready to send to {campaigns.find((c) => c.id === selectedCampaign)?.influencers} influencers
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bot className="w-5 h-5" />
                      AI Email Assistant
                    </CardTitle>
                    <CardDescription>Let AI help you craft the perfect outreach email</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Email Tone</Label>
                      <Select value={selectedTone} onValueChange={setSelectedTone}>
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="casual">Casual</SelectItem>
                          <SelectItem value="friendly">Friendly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button onClick={generateAIContent} className="w-full">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate Email with AI
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Email Content</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="subject">Subject Line</Label>
                      <Input
                        id="subject"
                        placeholder="Enter email subject..."
                        value={emailSubject}
                        onChange={(e) => setEmailSubject(e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="content">Email Body</Label>
                      <Textarea
                        id="content"
                        placeholder="Write your email content here..."
                        rows={12}
                        value={emailContent}
                        onChange={(e) => setEmailContent(e.target.value)}
                        className="mt-2"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Use {'{{name}}'}, {'{{platform}}'}, {'{{followers}}'} for personalization
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button variant="outline">Save Template</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Preview Panel */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Email Preview</CardTitle>
                    <CardDescription>How your email will look to influencers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border rounded-lg p-4 bg-white">
                      <div className="border-b pb-3 mb-3">
                        <p className="text-sm text-gray-600">To: sarah@example.com</p>
                        <p className="text-sm text-gray-600">From: you@brandname.com</p>
                        <p className="font-semibold">{emailSubject || "Subject line will appear here"}</p>
                      </div>
                      <div className="prose prose-sm max-w-none">
                        <pre className="whitespace-pre-wrap font-sans text-sm">
                          {emailContent || "Email content will appear here..."}
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Send Options</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Test Email</p>
                        <p className="text-sm text-gray-600">Send a test to yourself first</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Send className="w-4 h-4 mr-2" />
                        Send Test
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Schedule Send</p>
                        <p className="text-sm text-gray-600">Send at optimal time</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Clock className="w-4 h-4 mr-2" />
                        Schedule
                      </Button>
                    </div>

                    <Button className="w-full" size="lg" disabled={!selectedCampaign || !emailContent}>
                      <Send className="w-4 h-4 mr-2" />
                      Send to All Selected
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tracking" className="space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {outreachStats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Campaign Tracking */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Campaign Performance</CardTitle>
                    <CardDescription>Track your outreach campaign results</CardDescription>
                  </div>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export Report
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCampaigns.map((campaign, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">{campaign.name}</h3>
                        <Badge variant={campaign.status === "Active" ? "default" : "secondary"}>
                          {campaign.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-4 gap-4 mb-3">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-900">{campaign.sent}</p>
                          <p className="text-xs text-gray-600">Sent</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-green-600">{campaign.delivered}</p>
                          <p className="text-xs text-gray-600">Delivered</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-blue-600">{campaign.opened}</p>
                          <p className="text-xs text-gray-600">Opened</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-purple-600">{campaign.responded}</p>
                          <p className="text-xs text-gray-600">Responded</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Open Rate</span>
                          <span>{Math.round((campaign.opened / campaign.delivered) * 100)}%</span>
                        </div>
                        <Progress value={(campaign.opened / campaign.delivered) * 100} className="h-2" />

                        <div className="flex justify-between text-sm">
                          <span>Response Rate</span>
                          <span>{Math.round((campaign.responded / campaign.opened) * 100)}%</span>
                        </div>
                        <Progress value={(campaign.responded / campaign.opened) * 100} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Outreach Analytics</CardTitle>
                <CardDescription>Detailed insights into your email performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
                  <p className="text-gray-600 mb-4">Comprehensive analytics and insights coming soon</p>
                  <Button variant="outline">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Refresh Data
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </BrandLayout>
  )
}
