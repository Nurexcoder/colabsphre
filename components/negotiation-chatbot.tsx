"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Bot,
  Send,
  X,
  Sparkles,
  DollarSign,
  Calendar,
  Zap,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Info,
} from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface NegotiationChatbotProps {
  isOpen: boolean
  onClose: () => void
  campaign: {
    id: string
    name: string
    brand: string
    brandLogo: string
    aiNegotiator: {
      name: string
      personality: string
    }
  }
}

export function NegotiationChatbot({ isOpen, onClose, campaign }: NegotiationChatbotProps) {
  const [message, setMessage] = useState("")
  const [activeAI, setActiveAI] = useState<"brand" | "influencer">("brand")
  const [isTyping, setIsTyping] = useState(false)
  const [showQuickResponses, setShowQuickResponses] = useState(true)

  const brandAI = {
    name: campaign.aiNegotiator.name,
    personality: campaign.aiNegotiator.personality,
    color: "from-blue-500 to-purple-600",
    role: "Brand Negotiator",
  }

  const influencerAI = {
    name: "FlowAssist",
    personality: "Helpful & Professional",
    color: "from-green-500 to-teal-600",
    role: "Your Writing Assistant",
  }

  const [conversation, setConversation] = useState([
    {
      id: "1",
      sender: brandAI.name,
      message: `Hello! I'm ${brandAI.name}, representing ${campaign.brand} for the "${campaign.name}" campaign. I'm excited to discuss this collaboration opportunity with you. Based on your content and engagement rates, I believe this partnership could be mutually beneficial.`,
      timestamp: "Just now",
      isAI: true,
      aiType: "brand",
      type: "introduction",
    },
    {
      id: "2",
      sender: brandAI.name,
      message: `I'd like to offer you $1,200 for this campaign, which includes 2 Instagram posts, 3 stories, and 1 reel. The content should showcase our summer collection with your authentic style. What are your thoughts on this proposal?`,
      timestamp: "Just now",
      isAI: true,
      aiType: "brand",
      type: "offer",
    },
  ])

  const quickResponses = {
    brand: [
      "I'm interested! Can we discuss the timeline?",
      "The rate seems low for my engagement. Can we negotiate?",
      "I'd like to add an extra story for $200 more",
      "When do you need the content delivered?",
      "Can you provide more details about the campaign requirements?",
      "I'm available for this collaboration. Let's finalize the terms.",
    ],
    influencer: [
      "Make this more professional and persuasive",
      "Add negotiation points about my value",
      "Suggest a counter-offer with reasoning",
      "Improve the tone to be more confident",
      "Help me highlight my unique selling points",
      "Format this as a professional response",
    ],
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        sender: "You",
        message: message.trim(),
        timestamp: "Just now",
        isAI: false,
        aiType: null,
      }

      setConversation((prev) => [...prev, newMessage])
      setMessage("")
      setIsTyping(true)

      // Simulate AI response
      setTimeout(() => {
        setIsTyping(false)
        if (activeAI === "brand") {
          simulateBrandAIResponse(message.trim())
        } else {
          simulateInfluencerAIResponse(message.trim())
        }
      }, 2000)
    }
  }

  const simulateBrandAIResponse = (userMessage: string) => {
    let response = ""
    let type = "general"

    if (userMessage.toLowerCase().includes("rate") || userMessage.toLowerCase().includes("price")) {
      response = `I understand you'd like to discuss the rate. Your engagement rate of 5.2% is impressive! I can offer $1,400 for the full package. This includes usage rights for 6 months and cross-platform promotion. Would this work better for you?`
      type = "negotiation"
    } else if (userMessage.toLowerCase().includes("timeline") || userMessage.toLowerCase().includes("deadline")) {
      response = `Great question! We're flexible with timing. Ideally, we'd like the first post by June 15th, stories by June 20th, and the reel by June 25th. Does this timeline work with your content calendar?`
      type = "timeline"
    } else if (userMessage.toLowerCase().includes("story") || userMessage.toLowerCase().includes("extra")) {
      response = `I love your proactive approach! An additional story would be fantastic. I can approve an extra $150 for a bonus story featuring behind-the-scenes content. This brings the total to $1,550. Deal?`
      type = "bonus"
    } else if (userMessage.toLowerCase().includes("interested") || userMessage.toLowerCase().includes("available")) {
      response = `Fantastic! I'm thrilled you're interested. Let's move forward with the collaboration. I'll send over the contract details shortly. The total compensation will be $1,400 for the deliverables we discussed. Looking forward to working with you!`
      type = "agreement"
    } else {
      response = `Thank you for your response! I'm here to make this collaboration work for both of us. Is there anything specific about the campaign requirements or compensation that you'd like to discuss further?`
    }

    const aiResponse = {
      id: Date.now().toString(),
      sender: brandAI.name,
      message: response,
      timestamp: "Just now",
      isAI: true,
      aiType: "brand",
      type,
    }

    setConversation((prev) => [...prev, aiResponse])
  }

  const simulateInfluencerAIResponse = (userMessage: string) => {
    let response = ""

    if (userMessage.toLowerCase().includes("professional")) {
      response = `Here's a more professional version:\n\n"Thank you for the collaboration opportunity. I'm excited about the ${campaign.name} campaign. Based on my engagement rates (5.2%) and content quality, I believe $1,600 would be more appropriate for the deliverables requested. I consistently deliver high-quality content that drives engagement and conversions. I'm also happy to include additional value through cross-promotion on my stories. Looking forward to your thoughts."`
    } else if (userMessage.toLowerCase().includes("counter")) {
      response = `Here's a strategic counter-offer:\n\n"I appreciate the initial offer. After reviewing the scope, I'd like to propose $1,500 for the complete package. This reflects my 5.2% engagement rate and proven track record of successful brand partnerships. I can also add a bonus Instagram story featuring unboxing content at no extra cost. This package offers excellent ROI for your campaign goals."`
    } else if (userMessage.toLowerCase().includes("value") || userMessage.toLowerCase().includes("selling")) {
      response = `Here are your key value propositions to highlight:\n\n• 5.2% engagement rate (above industry average)\n• Authentic audience connection\n• Professional content creation\n• Proven brand partnership success\n• Cross-platform promotion capabilities\n• Quick turnaround and reliability\n\nUse these points to justify your rate and showcase your value.`
    } else {
      response = `I can help you improve that message! Try being more specific about your value proposition and include metrics like engagement rates or previous campaign successes. Would you like me to rewrite it for you?`
    }

    const aiResponse = {
      id: Date.now().toString(),
      sender: influencerAI.name,
      message: response,
      timestamp: "Just now",
      isAI: true,
      aiType: "influencer",
      type: "assistance",
    }

    setConversation((prev) => [...prev, aiResponse])
  }

  const handleQuickResponse = (response: string) => {
    if (activeAI === "influencer") {
      setMessage(response)
      setShowQuickResponses(false)
    } else {
      setMessage(response)
      setShowQuickResponses(false)
      // Auto-send for brand AI responses
      setTimeout(() => {
        handleSendMessage()
      }, 100)
    }
  }

  const getMessageTypeIcon = (type?: string) => {
    switch (type) {
      case "introduction":
        return <MessageSquare className="w-3 h-3 text-blue-600" />
      case "offer":
      case "negotiation":
        return <DollarSign className="w-3 h-3 text-green-600" />
      case "timeline":
        return <Calendar className="w-3 h-3 text-orange-600" />
      case "bonus":
      case "agreement":
        return <Zap className="w-3 h-3 text-purple-600" />
      case "assistance":
        return <Sparkles className="w-3 h-3 text-green-600" />
      default:
        return null
    }
  }

  if (!isOpen) return null

  return (
    <TooltipProvider>
      <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/20" onClick={onClose} />

        {/* Chatbot */}
        <Card className="relative w-96 h-[600px] bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <CardHeader className="pb-3 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={campaign.brandLogo || "/placeholder.svg"} alt={campaign.brand} />
                  <AvatarFallback>{campaign.brand.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-sm">{campaign.name}</CardTitle>
                  <p className="text-xs text-gray-600">with {campaign.brand}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Info className="w-3 h-3 text-gray-500" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="max-w-xs">
                    <p className="text-xs">
                      {activeAI === "brand"
                        ? "Negotiating with brand AI • Press Enter to send"
                        : "Getting writing assistance • Press Enter to send"}
                    </p>
                  </TooltipContent>
                </Tooltip>
                <Button variant="ghost" size="sm" onClick={onClose}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-2 mt-3">
              <Button
                variant={activeAI === "brand" ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setActiveAI("brand")
                  setShowQuickResponses(true)
                }}
                className="flex-1"
              >
                <Bot className="w-3 h-3 mr-1" />
                Brand AI
              </Button>
              <Button
                variant={activeAI === "influencer" ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setActiveAI("influencer")
                  setShowQuickResponses(true)
                }}
                className="flex-1"
              >
                <Sparkles className="w-3 h-3 mr-1" />
                Writing AI
              </Button>
            </div>
          </CardHeader>

          {/* AI Info */}
          <div className="p-3 bg-gradient-to-r from-gray-50 to-blue-50 border-b">
            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6">
                <div
                  className={`w-6 h-6 bg-gradient-to-br ${
                    activeAI === "brand" ? brandAI.color : influencerAI.color
                  } rounded-full flex items-center justify-center`}
                >
                  {activeAI === "brand" ? (
                    <Bot className="w-3 h-3 text-white" />
                  ) : (
                    <Sparkles className="w-3 h-3 text-white" />
                  )}
                </div>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{activeAI === "brand" ? brandAI.name : influencerAI.name}</p>
                <p className="text-xs text-gray-600">{activeAI === "brand" ? brandAI.role : influencerAI.role}</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {conversation
              .filter((msg) => activeAI === "brand" || msg.aiType !== "brand")
              .map((msg) => (
                <div key={msg.id} className={`flex ${msg.isAI ? "justify-start" : "justify-end"}`}>
                  <div className={`flex space-x-2 max-w-xs ${msg.isAI ? "" : "flex-row-reverse space-x-reverse"}`}>
                    <Avatar className="w-6 h-6">
                      {msg.isAI ? (
                        <div
                          className={`w-6 h-6 bg-gradient-to-br ${
                            msg.aiType === "brand" ? brandAI.color : influencerAI.color
                          } rounded-full flex items-center justify-center`}
                        >
                          {msg.aiType === "brand" ? (
                            <Bot className="w-3 h-3 text-white" />
                          ) : (
                            <Sparkles className="w-3 h-3 text-white" />
                          )}
                        </div>
                      ) : (
                        <AvatarImage src="/placeholder.svg" alt="You" />
                      )}
                    </Avatar>
                    <div>
                      <div
                        className={`px-3 py-2 rounded-lg text-sm ${
                          msg.isAI ? "bg-gray-100 text-gray-900" : "bg-blue-500 text-white"
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {msg.isAI && getMessageTypeIcon(msg.type)}
                          <p className="whitespace-pre-line">{msg.message}</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
                    </div>
                  </div>
                </div>
              ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex space-x-2 max-w-xs">
                  <Avatar className="w-6 h-6">
                    <div
                      className={`w-6 h-6 bg-gradient-to-br ${
                        activeAI === "brand" ? brandAI.color : influencerAI.color
                      } rounded-full flex items-center justify-center`}
                    >
                      {activeAI === "brand" ? (
                        <Bot className="w-3 h-3 text-white" />
                      ) : (
                        <Sparkles className="w-3 h-3 text-white" />
                      )}
                    </div>
                  </Avatar>
                  <div className="px-3 py-2 rounded-lg bg-gray-100">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>

          {/* Quick Responses */}
          {showQuickResponses && (
            <div className="border-t bg-gray-50">
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-gray-600 font-medium">
                    {activeAI === "brand" ? "Quick responses:" : "AI suggestions:"}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowQuickResponses(false)}
                    className="h-5 w-5 p-0"
                  >
                    <ChevronUp className="w-3 h-3" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {quickResponses[activeAI].map((response, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs h-8 justify-start text-left"
                      onClick={() => handleQuickResponse(response)}
                    >
                      {response}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {!showQuickResponses && (
            <div className="border-t bg-gray-50 p-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowQuickResponses(true)}
                className="w-full h-8 text-xs"
              >
                <ChevronDown className="w-3 h-3 mr-1" />
                Show {activeAI === "brand" ? "Quick Responses" : "AI Suggestions"}
              </Button>
            </div>
          )}

          {/* Message Input */}
          <div className="p-3 border-t">
            <div className="flex items-end space-x-2">
              <Textarea
                placeholder={
                  activeAI === "brand" ? `Message ${brandAI.name}...` : "Type your message for AI assistance..."
                }
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSendMessage())}
                className="flex-1 min-h-[40px] max-h-[100px] resize-none"
                rows={1}
              />
              <Button onClick={handleSendMessage} disabled={!message.trim()} size="sm">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </TooltipProvider>
  )
}
