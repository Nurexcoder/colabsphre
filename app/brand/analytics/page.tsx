"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, Users, Eye, Heart, Download, Calendar, Filter, RefreshCw } from "lucide-react"
import { BrandLayout } from "@/components/brand-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AnalyticsPage() {
  const overviewStats = [
    {
      title: "Total Reach",
      value: "2.4M",
      change: "+12.5%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Engagement Rate",
      value: "4.8%",
      change: "+0.3%",
      trend: "up",
      icon: Heart,
    },
    {
      title: "Total Impressions",
      value: "5.2M",
      change: "+8.2%",
      trend: "up",
      icon: Eye,
    },
    {
      title: "Cost per Engagement",
      value: "$0.12",
      change: "-5.1%",
      trend: "down",
      icon: TrendingDown,
    },
  ]

  const campaignPerformance = [
    {
      id: "1",
      name: "Summer Fashion Collection",
      reach: "850K",
      engagement: "4.2%",
      impressions: "1.8M",
      cost: "$8,250",
      roi: "320%",
      status: "Active",
      influencers: 12,
      startDate: "May 15, 2025",
      endDate: "Jul 15, 2025",
    },
    {
      id: "2",
      name: "Tech Product Launch",
      reach: "620K",
      engagement: "6.1%",
      impressions: "1.2M",
      cost: "$12,500",
      roi: "280%",
      status: "Active",
      influencers: 8,
      startDate: "Jun 1, 2025",
      endDate: "Aug 1, 2025",
    },
    {
      id: "3",
      name: "Fitness Challenge",
      reach: "420K",
      engagement: "5.8%",
      impressions: "890K",
      cost: "$6,800",
      roi: "410%",
      status: "Completed",
      influencers: 15,
      startDate: "Apr 1, 2025",
      endDate: "May 30, 2025",
    },
    {
      id: "4",
      name: "Beauty Brand Collaboration",
      reach: "1.2M",
      engagement: "3.9%",
      impressions: "2.1M",
      cost: "$15,200",
      roi: "245%",
      status: "Active",
      influencers: 20,
      startDate: "May 20, 2025",
      endDate: "Jul 20, 2025",
    },
    {
      id: "5",
      name: "Holiday Collection",
      reach: "680K",
      engagement: "5.1%",
      impressions: "1.5M",
      cost: "$9,800",
      roi: "365%",
      status: "Completed",
      influencers: 10,
      startDate: "Nov 1, 2024",
      endDate: "Dec 31, 2024",
    },
  ]

  const topInfluencers = [
    {
      name: "Sarah Johnson",
      handle: "@sarahjohnson",
      avatar: "/placeholder.svg?height=40&width=40",
      reach: "125K",
      engagement: "4.2%",
      posts: 3,
      performance: 92,
    },
    {
      name: "Mike Chen",
      handle: "@mikechentech",
      avatar: "/placeholder.svg?height=40&width=40",
      reach: "245K",
      engagement: "6.1%",
      posts: 2,
      performance: 88,
    },
    {
      name: "Emma Davis",
      handle: "@emmafitness",
      avatar: "/placeholder.svg?height=40&width=40",
      reach: "89K",
      engagement: "5.8%",
      posts: 4,
      performance: 95,
    },
  ]

  const contentPerformance = [
    {
      type: "Instagram Posts",
      count: 24,
      avgEngagement: "4.2%",
      totalReach: "680K",
      performance: 85,
    },
    {
      type: "Instagram Stories",
      count: 18,
      avgEngagement: "3.8%",
      totalReach: "420K",
      performance: 78,
    },
    {
      type: "Instagram Reels",
      count: 12,
      avgEngagement: "7.1%",
      totalReach: "890K",
      performance: 92,
    },
    {
      type: "YouTube Videos",
      count: 6,
      avgEngagement: "8.5%",
      totalReach: "320K",
      performance: 88,
    },
  ]

  return (
    <BrandLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
            <p className="text-gray-600">Track performance and insights across all your campaigns</p>
          </div>

          <div className="flex gap-3">
            <Select defaultValue="30days">
              <SelectTrigger className="w-[180px]">
                <Calendar className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
                <SelectItem value="1year">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  {stat.trend === "up" ? (
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-green-500" />
                  )}
                  <span className="text-sm text-green-600 ml-1">{stat.change}</span>
                  <span className="text-sm text-gray-500 ml-2">vs last period</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="campaigns" className="space-y-6">
          <TabsList>
            <TabsTrigger value="campaigns">Campaign Performance</TabsTrigger>
            <TabsTrigger value="influencers">Top Influencers</TabsTrigger>
            <TabsTrigger value="content">Content Analysis</TabsTrigger>
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
          </TabsList>

          <TabsContent value="campaigns">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Performance</CardTitle>
                <CardDescription>Compare performance across all your campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-semibold">Campaign</TableHead>
                        <TableHead className="font-semibold">Status</TableHead>
                        <TableHead className="font-semibold">Reach</TableHead>
                        <TableHead className="font-semibold">Engagement</TableHead>
                        <TableHead className="font-semibold">Impressions</TableHead>
                        <TableHead className="font-semibold">Cost</TableHead>
                        <TableHead className="font-semibold">ROI</TableHead>
                        <TableHead className="font-semibold">Influencers</TableHead>
                        <TableHead className="font-semibold">Duration</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {campaignPerformance.map((campaign) => (
                        <TableRow key={campaign.id} className="hover:bg-gray-50">
                          <TableCell>
                            <div>
                              <p className="font-medium text-gray-900">{campaign.name}</p>
                              <p className="text-sm text-gray-500">ID: {campaign.id}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={campaign.status === "Active" ? "default" : "secondary"}
                              className={
                                campaign.status === "Active"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-gray-100 text-gray-700"
                              }
                            >
                              {campaign.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">{campaign.reach}</div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="font-medium">{campaign.engagement}</div>
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-blue-600 h-2 rounded-full"
                                  style={{ width: `${Number.parseFloat(campaign.engagement)}0%` }}
                                ></div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">{campaign.impressions}</div>
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">{campaign.cost}</div>
                          </TableCell>
                          <TableCell>
                            <div className="font-bold text-green-600">{campaign.roi}</div>
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">{campaign.influencers}</div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>{campaign.startDate}</div>
                              <div className="text-gray-500">to {campaign.endDate}</div>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="influencers">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Influencers</CardTitle>
                <CardDescription>Influencers driving the best results for your campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topInfluencers.map((influencer, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
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

                      <div className="flex items-center space-x-8">
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Reach</p>
                          <p className="font-semibold">{influencer.reach}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Engagement</p>
                          <p className="font-semibold">{influencer.engagement}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Posts</p>
                          <p className="font-semibold">{influencer.posts}</p>
                        </div>
                        <div className="text-center min-w-[100px]">
                          <p className="text-sm text-gray-600">Performance</p>
                          <div className="flex items-center space-x-2">
                            <Progress value={influencer.performance} className="w-16 h-2" />
                            <span className="text-sm font-semibold">{influencer.performance}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Content Performance Analysis</CardTitle>
                <CardDescription>Performance breakdown by content type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contentPerformance.map((content, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">{content.type}</h3>
                        <Badge variant="secondary">{content.count} posts</Badge>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-3">
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Avg. Engagement</p>
                          <p className="font-semibold">{content.avgEngagement}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Total Reach</p>
                          <p className="font-semibold">{content.totalReach}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Performance Score</p>
                          <p className="font-semibold">{content.performance}%</p>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Performance</span>
                          <span>{content.performance}%</span>
                        </div>
                        <Progress value={content.performance} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="demographics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Audience Demographics</CardTitle>
                  <CardDescription>Age and gender breakdown of your audience</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>18-24 years</span>
                        <span>32%</span>
                      </div>
                      <Progress value={32} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>25-34 years</span>
                        <span>45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>35-44 years</span>
                        <span>18%</span>
                      </div>
                      <Progress value={18} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>45+ years</span>
                        <span>5%</span>
                      </div>
                      <Progress value={5} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                  <CardDescription>Top locations of your audience</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>United States</span>
                        <span>42%</span>
                      </div>
                      <Progress value={42} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>United Kingdom</span>
                        <span>18%</span>
                      </div>
                      <Progress value={18} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Canada</span>
                        <span>12%</span>
                      </div>
                      <Progress value={12} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Australia</span>
                        <span>8%</span>
                      </div>
                      <Progress value={8} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Others</span>
                        <span>20%</span>
                      </div>
                      <Progress value={20} className="h-2" />
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
