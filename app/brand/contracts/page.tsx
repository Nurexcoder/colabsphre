"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Download, Eye, CheckCircle, Clock, AlertTriangle, FileText } from "lucide-react"
import { BrandLayout } from "@/components/brand-layout"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ContractsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedContract, setSelectedContract] = useState<any>(null)

  const contracts = [
    {
      id: "1",
      influencer: "Sarah Johnson",
      handle: "@sarahjohnson",
      avatar: "/placeholder.svg?height=40&width=40",
      campaign: "Summer Fashion Collection",
      status: "Pending Review",
      submittedDate: "Jun 1, 2025",
      amount: "$1,200",
      deliverables: "2 Posts, 3 Stories, 1 Reel",
      deadline: "Jun 15, 2025",
      statusColor: "bg-yellow-100 text-yellow-700",
      contractUrl: "#",
    },
    {
      id: "2",
      influencer: "Mike Chen",
      handle: "@mikechentech",
      avatar: "/placeholder.svg?height=40&width=40",
      campaign: "Tech Product Launch",
      status: "Approved",
      submittedDate: "May 28, 2025",
      amount: "$2,500",
      deliverables: "1 YouTube Video, 2 Posts",
      deadline: "Jul 1, 2025",
      statusColor: "bg-green-100 text-green-700",
      contractUrl: "#",
    },
    {
      id: "3",
      influencer: "Emma Davis",
      handle: "@emmafitness",
      avatar: "/placeholder.svg?height=40&width=40",
      campaign: "Fitness Challenge",
      status: "Needs Revision",
      submittedDate: "May 30, 2025",
      amount: "$950",
      deliverables: "Daily Stories, 3 Posts, 2 Reels",
      deadline: "Jun 30, 2025",
      statusColor: "bg-red-100 text-red-700",
      contractUrl: "#",
    },
    {
      id: "4",
      influencer: "Alex Rodriguez",
      handle: "@alexfoodie",
      avatar: "/placeholder.svg?height=40&width=40",
      campaign: "Food Campaign",
      status: "Signed",
      submittedDate: "May 25, 2025",
      amount: "$800",
      deliverables: "3 Recipe Posts, 1 Video",
      deadline: "Jun 20, 2025",
      statusColor: "bg-blue-100 text-blue-700",
      contractUrl: "#",
    },
  ]

  const filteredContracts = contracts.filter((contract) => {
    const matchesSearch =
      contract.influencer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contract.campaign.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contract.handle.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || contract.status.toLowerCase().replace(" ", "-") === statusFilter

    return matchesSearch && matchesStatus
  })

  const handleApproveContract = (contractId: string) => {
    console.log("Approving contract:", contractId)
  }

  const handleRejectContract = (contractId: string) => {
    console.log("Rejecting contract:", contractId)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Pending Review":
        return <Clock className="w-4 h-4" />
      case "Approved":
        return <CheckCircle className="w-4 h-4" />
      case "Needs Revision":
        return <AlertTriangle className="w-4 h-4" />
      case "Signed":
        return <FileText className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  return (
    <BrandLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Contract Management</h1>
            <p className="text-gray-600">Review and manage influencer contracts for your campaigns</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search by influencer, campaign, or handle..."
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
                <SelectItem value="pending-review">Pending Review</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="needs-revision">Needs Revision</SelectItem>
                <SelectItem value="signed">Signed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Pending Review</p>
              <p className="text-xl font-bold">{contracts.filter((c) => c.status === "Pending Review").length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Approved</p>
              <p className="text-xl font-bold">{contracts.filter((c) => c.status === "Approved").length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <AlertTriangle className="w-6 h-6 text-red-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Needs Revision</p>
              <p className="text-xl font-bold">{contracts.filter((c) => c.status === "Needs Revision").length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <FileText className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Signed</p>
              <p className="text-xl font-bold">{contracts.filter((c) => c.status === "Signed").length}</p>
            </CardContent>
          </Card>
        </div>

        {/* Contracts List */}
        <Card>
          <CardHeader>
            <CardTitle>Contract Submissions</CardTitle>
            <CardDescription>Review and approve contracts from influencers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredContracts.map((contract) => (
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
                    <Badge className={contract.statusColor}>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(contract.status)}
                        {contract.status}
                      </div>
                    </Badge>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Campaign</p>
                      <p className="font-medium">{contract.campaign}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Amount</p>
                      <p className="font-medium text-green-600">{contract.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Submitted</p>
                      <p className="font-medium">{contract.submittedDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Deadline</p>
                      <p className="font-medium">{contract.deadline}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600">Deliverables</p>
                    <p className="font-medium">{contract.deliverables}</p>
                  </div>

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" onClick={() => setSelectedContract(contract)}>
                          <Eye className="w-4 h-4 mr-2" />
                          Review
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle>Contract Review</DialogTitle>
                          <DialogDescription>
                            Review contract details for {selectedContract?.influencer}
                          </DialogDescription>
                        </DialogHeader>
                        {selectedContract && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium">Influencer</label>
                                <p>{selectedContract.influencer}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Campaign</label>
                                <p>{selectedContract.campaign}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Amount</label>
                                <p className="text-green-600 font-medium">{selectedContract.amount}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Deadline</label>
                                <p>{selectedContract.deadline}</p>
                              </div>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Deliverables</label>
                              <p>{selectedContract.deliverables}</p>
                            </div>
                            <div className="border rounded-lg p-4 bg-gray-50">
                              <p className="text-sm text-gray-600 mb-2">Contract Document</p>
                              <div className="flex items-center gap-2">
                                <FileText className="w-4 h-4" />
                                <span className="text-sm">contract_{selectedContract.id}.pdf</span>
                                <Button variant="outline" size="sm">
                                  <Download className="w-4 h-4 mr-2" />
                                  Download
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}
                        <DialogFooter>
                          <Button variant="outline" onClick={() => handleRejectContract(selectedContract?.id || "")}>
                            Request Revision
                          </Button>
                          <Button onClick={() => handleApproveContract(selectedContract?.id || "")}>
                            Approve Contract
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>

                    {contract.status === "Pending Review" && (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleRejectContract(contract.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          Request Revision
                        </Button>
                        <Button size="sm" onClick={() => handleApproveContract(contract.id)}>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                      </>
                    )}
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
