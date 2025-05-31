"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  LayoutDashboard,
  SearchIcon,
  Briefcase,
  MessageSquare,
  FileText,
  Settings,
  Search,
  Bell,
  User,
  Zap,
  LogOut,
  HelpCircle,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

interface InfluencerLayoutProps {
  children: React.ReactNode
}

export function InfluencerLayout({ children }: InfluencerLayoutProps) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => {
      window.removeEventListener("resize", checkIsMobile)
    }
  }, [])

  const navigation = [
    { name: "Dashboard", href: "/influencer/dashboard", icon: LayoutDashboard },
    { name: "Browse Campaigns", href: "/influencer/campaigns", icon: SearchIcon },
    { name: "My Campaigns", href: "/influencer/my-campaigns", icon: Briefcase },
    { name: "Messages", href: "/influencer/messages", icon: MessageSquare },
    { name: "Deliverables", href: "/influencer/deliverables", icon: FileText },
    { name: "Settings", href: "/influencer/settings", icon: Settings },
  ]

  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <div className="flex min-h-screen bg-gray-50 w-full">
        <Sidebar className="border-r">
          <SidebarHeader className="border-b">
            <div className="flex items-center space-x-2 px-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">InfluencerFlow</span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarMenu>
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.href}>
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter className="border-t">
            <div className="p-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start">
                    <div className="flex items-center space-x-3">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="User avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1 min-w-0 text-left">
                        <p className="text-sm font-medium text-gray-900 truncate">Sarah Johnson</p>
                        <p className="text-xs text-gray-500 truncate">@sarahjohnson</p>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Help & Support
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Top navigation */}
          <header className="bg-white shadow-sm border-b sticky top-0 z-10">
            <div className="flex items-center justify-between h-16 px-4 sm:px-6">
              <div className="flex items-center space-x-4">
                <SidebarTrigger />

                <nav className="hidden sm:flex items-center space-x-2 text-sm text-gray-500">
                  <span>Influencer</span>
                  <span>/</span>
                  <span className="text-gray-900">
                    {pathname.split("/").pop()?.charAt(0).toUpperCase() + pathname.split("/").pop()?.slice(1) ||
                      "Dashboard"}
                  </span>
                </nav>
              </div>

              <div className="flex items-center space-x-4">
                <div className="hidden md:block">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input type="search" placeholder="Search campaigns..." className="pl-10 w-64" />
                  </div>
                </div>

                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="w-5 h-5" />
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs bg-red-500">
                    2
                  </Badge>
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <img
                        src="/placeholder.svg?height=32&width=32"
                        alt="User avatar"
                        className="w-8 h-8 rounded-full"
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <HelpCircle className="mr-2 h-4 w-4" />
                      Help & Support
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 p-4 sm:p-6 overflow-auto max-w-full">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
