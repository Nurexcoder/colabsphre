"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  TrendingUp,
  Users,
  Mail,
  Clock,
  Plus,
  Upload,
  Eye,
  Edit,
  Copy,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Bell,
} from "lucide-react"
import Link from "next/link"
import { BrandLayout } from "@/components/brand-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BrandDashboard() {
  const stats = [
    {
      title: "Active Campaigns",
      value: "12",
      change: "+2",
      trend: "up",
      icon: TrendingUp,
    },
    {
      title: "Total Influencers",
      value: "1,247",
      change: "+156",
      trend: "up",
      icon: Users,
    },
    {
      title: "Response Rate",
      value: "68%",
      change: "+5%",
      trend: "up",
      icon: Mail,
    },
    {
      title: "Avg. Time to Deal",
      value: "2.3 days",
      change: "-0.5",
      trend: "down",
      icon: Clock,
    },
  ]

  const recentActivity = [
    {
      type: "negotiation",
      message: "AI completed negotiation with @fashionista_jane",
      time: "2 minutes ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      type: "signup",
      message: "New influencer @lifestyle_mike joined Summer Campaign",
      time: "15 minutes ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      type: "completion",
      message: "Campaign 'Spring Collection' reached 100% completion",
      time: "1 hour ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      type: "response",
      message: "3 new responses to 'Tech Product Launch' outreach",
      time: "2 hours ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ]

  const activeCampaigns = [
    {
      name: "Summer Fashion Collection",
      status: "Active",
      influencers: 24,
      budget: "$15,000",
      progress: 75,
      statusColor: "bg-green-100 text-green-700",
    },
    {
      name: "Tech Product Launch",
      status: "Recruiting",
      influencers: 8,
      budget: "$25,000",
      progress: 30,
      statusColor: "bg-yellow-100 text-yellow-700",
    },
    {
      name: "Holiday Special",
      status: "Planning",
      influencers: 0,
      budget: "$10,000",
      progress: 10,
      statusColor: "bg-blue-100 text-blue-700",
    },
  ]

  const upcomingTasks = [
    {
      title: "Review influencer applications",
      campaign: "Tech Product Launch",
      dueDate: "Today",
      priority: "High",
    },
    {
      title: "Approve content drafts",
      campaign: "Summer Fashion Collection",
      dueDate: "Tomorrow",
      priority: "Medium",
    },
    {
      title: "Finalize campaign budget",
      campaign: "Holiday Special",
      dueDate: "Jun 5",
      priority: "Low",
    },
  ]

  return (
    <BrandLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your campaigns.</p>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Import List
            </Button>
            <Link href="/brand/campaigns/create">
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Create Campaign
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
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
                    <ArrowUpRight className="w-4 h-4 text-green-500" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-green-500" />
                  )}
                  <span className="text-sm text-green-600 ml-1">{stat.change}</span>
                  <span className="text-sm text-gray-500 ml-2">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="activity" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="activity">Recent Activity</TabsTrigger>
                <TabsTrigger value="tasks">Upcoming Tasks</TabsTrigger>
              </TabsList>

              <TabsContent value="activity">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest updates from your campaigns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                          <img
                            src={activity.avatar || "/placeholder.svg"}
                            alt="Avatar"
                            className="w-8 h-8 rounded-full"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-900">{activity.message}</p>
                            <p className="text-xs text-gray-500">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tasks">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Tasks</CardTitle>
                    <CardDescription>Tasks that need your attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingTasks.map((task, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              task.priority === "High"
                                ? "bg-red-100 text-red-600"
                                : task.priority === "Medium"
                                  ? "bg-yellow-100 text-yellow-600"
                                  : "bg-blue-100 text-blue-600"
                            }`}
                          >
                            {task.priority === "High" ? "!" : task.priority === "Medium" ? "•" : "○"}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">{task.title}</p>
                            <p className="text-xs text-gray-500">Campaign: {task.campaign}</p>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center space-x-1 text-xs bg-gray-100 px-2 py-1 rounded">
                              <Calendar className="w-3 h-3" />
                              <span>{task.dueDate}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Quick Actions */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/brand/campaigns/create">
                  <Button className="w-full justify-start" variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Campaign
                  </Button>
                </Link>
                <Link href="/brand/influencers">
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="w-4 h-4 mr-2" />
                    Browse Influencers
                  </Button>
                </Link>
                <Link href="/brand/outreach">
                  <Button className="w-full justify-start" variant="outline">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Outreach
                  </Button>
                </Link>
                <Button className="w-full justify-start" variant="outline">
                  <Upload className="w-4 h-4 mr-2" />
                  Import Influencer List
                </Button>
                <Link href="/brand/messages">
                  <Button className="w-full justify-start" variant="outline">
                    <Bell className="w-4 h-4 mr-2" />
                    View Notifications
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Active Campaigns */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Active Campaigns</CardTitle>
                <CardDescription>Manage your ongoing influencer campaigns</CardDescription>
              </div>
              <Link href="/brand/campaigns">
                <Button variant="outline">View All</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeCampaigns.map((campaign, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg hover:shadow-sm transition-shadow"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{campaign.name}</h3>
                      <Badge className={campaign.statusColor}>{campaign.status}</Badge>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <span>{campaign.influencers} influencers</span>
                      <span>{campaign.budget} budget</span>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="text-gray-900">{campaign.progress}%</span>
                      </div>
                      <Progress value={campaign.progress} className="h-2" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Link href={`/brand/campaigns/${index + 1}`}>
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href={`/brand/campaigns/${index + 1}/edit`}>
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button size="sm" variant="outline">
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
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
