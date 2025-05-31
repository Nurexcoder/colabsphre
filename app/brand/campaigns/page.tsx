"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import {
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Copy,
  MoreHorizontal,
  Calendar,
  DollarSign,
  Users,
  ArrowUpDown,
} from "lucide-react"
import Link from "next/link"
import { BrandLayout } from "@/components/brand-layout"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CampaignsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [sortBy, setSortBy] = useState("date")

  const campaigns = [
    {
      id: "1",
      name: "Summer Fashion Collection",
      status: "Active",
      startDate: "May 15, 2025",
      endDate: "Jul 15, 2025",
      influencers: 24,
      budget: "$15,000",
      progress: 75,
      statusColor: "bg-green-100 text-green-700",
    },
    {
      id: "2",
      name: "Tech Product Launch",
      status: "Recruiting",
      startDate: "Jun 1, 2025",
      endDate: "Aug 30, 2025",
      influencers: 8,
      budget: "$25,000",
      progress: 30,
      statusColor: "bg-yellow-100 text-yellow-700",
    },
    {
      id: "3",
      name: "Holiday Special",
      status: "Planning",
      startDate: "Oct 1, 2025",
      endDate: "Dec 25, 2025",
      influencers: 0,
      budget: "$10,000",
      progress: 10,
      statusColor: "bg-blue-100 text-blue-700",
    },
    {
      id: "4",
      name: "Spring Collection",
      status: "Completed",
      startDate: "Feb 1, 2025",
      endDate: "Apr 30, 2025",
      influencers: 18,
      budget: "$12,000",
      progress: 100,
      statusColor: "bg-gray-100 text-gray-700",
    },
    {
      id: "5",
      name: "Back to School",
      status: "Draft",
      startDate: "Jul 15, 2025",
      endDate: "Sep 15, 2025",
      influencers: 0,
      budget: "$8,000",
      progress: 0,
      statusColor: "bg-purple-100 text-purple-700",
    },
    {
      id: "6",
      name: "Fitness Challenge",
      status: "Active",
      startDate: "May 1, 2025",
      endDate: "Jun 30, 2025",
      influencers: 12,
      budget: "$18,000",
      progress: 45,
      statusColor: "bg-green-100 text-green-700",
    },
  ]

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || campaign.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesSearch && matchesStatus
  })

  const sortedCampaigns = [...filteredCampaigns].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name)
      case "status":
        return a.status.localeCompare(b.status)
      case "budget":
        return Number.parseInt(a.budget.replace(/[^0-9]/g, "")) - Number.parseInt(b.budget.replace(/[^0-9]/g, ""))
      case "progress":
        return a.progress - b.progress
      case "date":
      default:
        // Sort by start date (newest first)
        return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    }
  })

  return (
    <BrandLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Campaigns</h1>
            <p className="text-gray-600">Manage and track all your influencer marketing campaigns</p>
          </div>

          <Link href="/brand/campaigns/create">
            <Button className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Create Campaign
            </Button>
          </Link>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search campaigns..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-3">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  <SelectValue placeholder="Filter by status" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="recruiting">Recruiting</SelectItem>
                <SelectItem value="planning">Planning</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center gap-2">
                  <ArrowUpDown className="w-4 h-4" />
                  <SelectValue placeholder="Sort by" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date (Newest)</SelectItem>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="status">Status</SelectItem>
                <SelectItem value="budget">Budget (High-Low)</SelectItem>
                <SelectItem value="progress">Progress</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Campaign List */}
        <Tabs defaultValue="grid">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="table">Table View</TabsTrigger>
            </TabsList>
            <div className="text-sm text-gray-500">
              Showing {filteredCampaigns.length} of {campaigns.length} campaigns
            </div>
          </div>

          <TabsContent value="grid">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedCampaigns.map((campaign) => (
                <Card key={campaign.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge className={campaign.statusColor}>{campaign.status}</Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Link href={`/brand/campaigns/${campaign.id}`} className="flex w-full">
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link href={`/brand/campaigns/${campaign.id}/edit`} className="flex w-full">
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Campaign
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="mr-2 h-4 w-4" />
                            Duplicate
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <CardTitle className="text-lg">{campaign.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {campaign.startDate} - {campaign.endDate}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-gray-500" />
                          <span>{campaign.influencers} influencers</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4 text-gray-500" />
                          <span>{campaign.budget}</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium">{campaign.progress}%</span>
                        </div>
                        <Progress value={campaign.progress} className="h-2" />
                      </div>

                      <div className="pt-2 flex gap-2">
                        <Link href={`/brand/campaigns/${campaign.id}`} className="flex-1">
                          <Button variant="outline" size="sm" className="w-full">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                        </Link>
                        <Link href={`/brand/campaigns/${campaign.id}/edit`} className="flex-1">
                          <Button variant="outline" size="sm" className="w-full">
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="table">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Campaign Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Timeline</TableHead>
                      <TableHead>Influencers</TableHead>
                      <TableHead>Budget</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedCampaigns.map((campaign) => (
                      <TableRow key={campaign.id}>
                        <TableCell className="font-medium">{campaign.name}</TableCell>
                        <TableCell>
                          <Badge className={campaign.statusColor}>{campaign.status}</Badge>
                        </TableCell>
                        <TableCell className="text-sm">
                          {campaign.startDate} - {campaign.endDate}
                        </TableCell>
                        <TableCell>{campaign.influencers}</TableCell>
                        <TableCell>{campaign.budget}</TableCell>
                        <TableCell>
                          <div className="w-24">
                            <div className="flex justify-between text-xs mb-1">
                              <span>{campaign.progress}%</span>
                            </div>
                            <Progress value={campaign.progress} className="h-2" />
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Link href={`/brand/campaigns/${campaign.id}`}>
                              <Button size="sm" variant="ghost">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </Link>
                            <Link href={`/brand/campaigns/${campaign.id}/edit`}>
                              <Button size="sm" variant="ghost">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </Link>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Copy className="mr-2 h-4 w-4" />
                                  Duplicate
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">Archive Campaign</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </BrandLayout>
  )
}
