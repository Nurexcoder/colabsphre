"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  ArrowRight,
  Save,
  X,
  Instagram,
  Youtube,
  Twitter,
  Bot,
  Zap,
  Brain,
  CheckCircle,
  Shuffle,
} from "lucide-react";
import Link from "next/link";
import { BrandLayout } from "@/components/brand-layout";
import { useRouter } from "next/navigation";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axiosInstance from "@/lib/api";

export default function CreateCampaignPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // AI Configuration
  const [aiEnabled, setAiEnabled] = useState(true);
  const [aiName, setAiName] = useState("");
  const [aiModel, setAiModel] = useState("nexus-pro");
  const [aiPersonality, setAiPersonality] = useState("balanced");
  const [aiAggressiveness, setAiAggressiveness] = useState([5]);
  const [aiSpecialization, setAiSpecialization] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    platforms: [] as string[],
    campaignType: "",
    ageRange: [18, 35],
    gender: "Any",
    location: "",
    interests: [] as string[],
    followerRange: [10000, 500000],
    engagementRate: 4,
    contentTypes: [] as string[],
    brandGuidelines: "",
    hashtags: [] as string[],
    totalBudget: "",
    budgetPerInfluencer: [500, 2000],
    startDate: "",
    endDate: "",
    deliverableDeadline: "",
  });

  const platforms = [
    { id: "instagram", name: "Instagram", icon: Instagram },
    { id: "youtube", name: "YouTube", icon: Youtube },
    { id: "tiktok", name: "TikTok", icon: Twitter },
    { id: "twitter", name: "Twitter", icon: Twitter },
  ];

  const campaignTypes = [
    "Product Launch",
    "Brand Awareness",
    "Event Promotion",
    "Seasonal Campaign",
    "User Generated Content",
    "Reviews & Testimonials",
  ];

  const contentTypes = [
    "Instagram Posts",
    "Instagram Stories",
    "Instagram Reels",
    "YouTube Videos",
    "TikTok Videos",
    "Blog Posts",
    "Unboxing Videos",
    "Tutorials",
  ];

  const interestOptions = [
    "Fashion",
    "Beauty",
    "Fitness",
    "Food",
    "Travel",
    "Technology",
    "Gaming",
    "Lifestyle",
    "Parenting",
    "Business",
    "Art",
    "Music",
  ];

  const aiModels = [
    {
      id: "nexus-standard",
      name: "Nexus Standard",
      description: "General purpose AI for basic campaign management",
      icon: Bot,
      features: [
        "Basic outreach",
        "Simple negotiations",
        "Standard follow-ups",
      ],
    },
    {
      id: "nexus-pro",
      name: "Nexus Pro",
      description: "Advanced AI with sophisticated negotiation capabilities",
      icon: Zap,
      features: [
        "Advanced negotiations",
        "Personalized outreach",
        "Contract analysis",
        "Performance optimization",
      ],
    },
    {
      id: "nexus-expert",
      name: "Nexus Expert",
      description: "Specialized AI with industry-specific knowledge",
      icon: Brain,
      features: [
        "Industry expertise",
        "Advanced analytics",
        "Predictive insights",
        "Custom strategies",
      ],
    },
  ];

  const aiPersonalities = [
    {
      id: "professional",
      name: "Professional",
      description: "Formal, business-oriented communication",
      traits: ["Formal tone", "Data-driven", "Respectful"],
    },
    {
      id: "friendly",
      name: "Friendly",
      description: "Casual, approachable communication style",
      traits: ["Casual tone", "Relationship-focused", "Warm"],
    },
    {
      id: "balanced",
      name: "Balanced",
      description: "Mix of professional and friendly",
      traits: ["Adaptive tone", "Versatile", "Diplomatic"],
    },
    {
      id: "direct",
      name: "Direct",
      description: "Straightforward, concise communication",
      traits: ["Clear", "Efficient", "Results-focused"],
    },
  ];

  const aiSpecializations = [
    "Fashion & Beauty",
    "Technology & Gaming",
    "Food & Lifestyle",
    "Fitness & Health",
    "Travel & Adventure",
    "Business & Finance",
    "Entertainment & Media",
    "General Purpose",
  ];

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayItem = (array: string[], item: string) => {
    return array.includes(item)
      ? array.filter((i) => i !== item)
      : [...array, item];
  };

  const generateAiName = () => {
    const prefixes = [
      "Flow",
      "Pulse",
      "Nova",
      "Echo",
      "Spark",
      "Wave",
      "Orbit",
      "Sync",
      "Boost",
      "Prime",
    ];
    const suffixes = [
      "AI",
      "Agent",
      "Mind",
      "Bot",
      "Genius",
      "Pro",
      "Flow",
      "Hub",
      "Core",
      "Max",
    ];

    let name = "";

    if (formData.campaignType) {
      const campaignTypeWords = formData.campaignType.split(" ");
      if (campaignTypeWords.length > 0) {
        const firstWord = campaignTypeWords[0].toLowerCase();
        if (firstWord === "product") name = "LaunchFlow AI";
        else if (firstWord === "brand") name = "BrandBoost AI";
        else if (firstWord === "event") name = "EventPulse AI";
        else if (firstWord === "seasonal") name = "SeasonSync AI";
        else if (firstWord === "user") name = "ContentFlow AI";
        else if (firstWord === "reviews") name = "ReviewPro AI";
        else
          name =
            firstWord.charAt(0).toUpperCase() + firstWord.slice(1) + "Flow AI";
      }
    } else if (formData.name) {
      const nameWords = formData.name.split(" ");
      if (nameWords.length > 0) {
        const firstChar = nameWords[0].charAt(0).toUpperCase();
        const randomSuffix =
          suffixes[Math.floor(Math.random() * suffixes.length)];
        name = firstChar + "Flow " + randomSuffix;
      }
    }

    if (!name) {
      const randomPrefix =
        prefixes[Math.floor(Math.random() * prefixes.length)];
      const randomSuffix =
        suffixes[Math.floor(Math.random() * suffixes.length)];
      name = randomPrefix + randomSuffix;
    }

    setAiName(name);
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    const payload = {
      campaign: formData,
      ai: {
        enabled: aiEnabled,
        name: aiName,
        model: aiModel,
        personality: aiPersonality,
        aggressiveness: aiAggressiveness[0],
        specialization: aiSpecialization,
      },
    };

    try {
      await axiosInstance.post("/api/campaign", payload);
      router.push("/brand/campaigns");
    } catch (error) {
      console.error("Failed to create campaign:", error);
      // Optionally show error to user
    } finally {
      setIsSaving(false);
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <BrandLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/brand/campaigns">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Campaigns
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Create Campaign
              </h1>
              <p className="text-gray-600">
                Set up your AI-powered influencer marketing campaign
              </p>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex  w-full items-center justify-between space-x-4 ">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="w-full flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step <= currentStep
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {step < currentStep ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        step
                      )}
                    </div>
                    {step < 4 && (
                      <div
                        className={`w-full h-1 mx-2 ${
                          step < currentStep ? "bg-blue-600" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Basic Info</span>
              <span>Target Audience</span>
              <span>Content Brief</span>
              <span>AI Setup</span>
              <span></span>
            </div>
          </CardContent>
        </Card>

        {/* Step Content */}
        <Card>
          <CardContent className="p-8">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Basic Information
                  </h2>
                  <p className="text-gray-600">
                    Enter the core details of your campaign
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Campaign Name</Label>
                    <Input
                      id="name"
                      placeholder="e.g., Summer Fashion Collection 2025"
                      value={formData.name}
                      onChange={(e) => updateFormData("name", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Campaign Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your campaign goals, target audience, and key messages..."
                      rows={4}
                      value={formData.description}
                      onChange={(e) =>
                        updateFormData("description", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label>Platforms</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                      {platforms.map((platform) => (
                        <div
                          key={platform.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                            formData.platforms.includes(platform.id)
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() =>
                            updateFormData(
                              "platforms",
                              toggleArrayItem(formData.platforms, platform.id)
                            )
                          }
                        >
                          <platform.icon className="w-6 h-6 mb-2" />
                          <p className="text-sm font-medium">{platform.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Campaign Type</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                      {campaignTypes.map((type) => (
                        <div
                          key={type}
                          className={`p-3 border rounded-lg cursor-pointer text-center transition-colors ${
                            formData.campaignType === type
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() => updateFormData("campaignType", type)}
                        >
                          <p className="text-sm font-medium">{type}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="startDate">Start Date</Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={(e) =>
                          updateFormData("startDate", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="endDate">End Date</Label>
                      <Input
                        id="endDate"
                        type="date"
                        value={formData.endDate}
                        onChange={(e) =>
                          updateFormData("endDate", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="totalBudget">Total Budget ($)</Label>
                    <Input
                      id="totalBudget"
                      type="number"
                      placeholder="15000"
                      value={formData.totalBudget}
                      onChange={(e) =>
                        updateFormData("totalBudget", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Target Audience
                  </h2>
                  <p className="text-gray-600">
                    Define your ideal influencer audience
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label>
                      Age Range: {formData.ageRange[0]} - {formData.ageRange[1]}{" "}
                      years
                    </Label>
                    <div className="mt-2">
                      <Slider
                        value={formData.ageRange}
                        onValueChange={(value) =>
                          updateFormData("ageRange", value)
                        }
                        max={65}
                        min={13}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Gender</Label>
                    <div className="flex gap-4 mt-2">
                      {["Any", "Male", "Female", "Non-binary"].map((gender) => (
                        <div
                          key={gender}
                          className={`px-4 py-2 border rounded-lg cursor-pointer ${
                            formData.gender === gender
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() => updateFormData("gender", gender)}
                        >
                          {gender}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="e.g., United States, Europe, Global"
                      value={formData.location}
                      onChange={(e) =>
                        updateFormData("location", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label>Interests & Niches</Label>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mt-2">
                      {interestOptions.map((interest) => (
                        <Badge
                          key={interest}
                          variant={
                            formData.interests.includes(interest)
                              ? "default"
                              : "outline"
                          }
                          className="cursor-pointer justify-center py-2"
                          onClick={() =>
                            updateFormData(
                              "interests",
                              toggleArrayItem(formData.interests, interest)
                            )
                          }
                        >
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>
                      Follower Count Range:{" "}
                      {formData.followerRange[0].toLocaleString()} -{" "}
                      {formData.followerRange[1].toLocaleString()}
                    </Label>
                    <div className="mt-2">
                      <Slider
                        value={formData.followerRange}
                        onValueChange={(value) =>
                          updateFormData("followerRange", value)
                        }
                        max={10000000}
                        min={1000}
                        step={1000}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>
                      Minimum Engagement Rate: {formData.engagementRate}%
                    </Label>
                    <div className="mt-2">
                      <Slider
                        value={[formData.engagementRate]}
                        onValueChange={(value) =>
                          updateFormData("engagementRate", value[0])
                        }
                        max={20}
                        min={1}
                        step={0.5}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Content Brief
                  </h2>
                  <p className="text-gray-600">
                    Specify content requirements and brand guidelines
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label>Content Types</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                      {contentTypes.map((type) => (
                        <div
                          key={type}
                          className={`p-3 border rounded-lg cursor-pointer text-center transition-colors ${
                            formData.contentTypes.includes(type)
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() =>
                            updateFormData(
                              "contentTypes",
                              toggleArrayItem(formData.contentTypes, type)
                            )
                          }
                        >
                          <p className="text-sm font-medium">{type}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="brandGuidelines">Brand Guidelines</Label>
                    <Textarea
                      id="brandGuidelines"
                      placeholder="Describe your brand voice, visual style, dos and don'ts, key messages..."
                      rows={4}
                      value={formData.brandGuidelines}
                      onChange={(e) =>
                        updateFormData("brandGuidelines", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label>Required Hashtags</Label>
                    <div className="flex flex-wrap gap-2 mt-2 mb-2">
                      {formData.hashtags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          {tag}
                          <X
                            className="w-3 h-3 cursor-pointer"
                            onClick={() =>
                              updateFormData(
                                "hashtags",
                                formData.hashtags.filter((_, i) => i !== index)
                              )
                            }
                          />
                        </Badge>
                      ))}
                    </div>
                    <Input
                      placeholder="Enter hashtags separated by commas (e.g., #brand, #campaign2025)"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          const value = (
                            e.target as HTMLInputElement
                          ).value.trim();
                          if (value) {
                            const newTags = value
                              .split(",")
                              .map((tag) => tag.trim());
                            updateFormData("hashtags", [
                              ...formData.hashtags,
                              ...newTags,
                            ]);
                            (e.target as HTMLInputElement).value = "";
                          }
                        }
                      }}
                    />
                  </div>

                  <div>
                    <Label>
                      Budget per Influencer: ${formData.budgetPerInfluencer[0]}{" "}
                      - ${formData.budgetPerInfluencer[1]}
                    </Label>
                    <div className="mt-2">
                      <Slider
                        value={formData.budgetPerInfluencer}
                        onValueChange={(value) =>
                          updateFormData("budgetPerInfluencer", value)
                        }
                        max={10000}
                        min={50}
                        step={50}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    AI Negotiator Setup
                  </h2>
                  <p className="text-gray-600">
                    Configure your personalized AI assistant for this campaign
                  </p>
                </div>

                <div className="space-y-6">
                  {/* AI Enable/Disable */}
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">Enable AI Negotiator</h3>
                      <p className="text-sm text-gray-600">
                        Let AI handle outreach, negotiations, and follow-ups
                        automatically
                      </p>
                    </div>
                    <Switch
                      checked={aiEnabled}
                      onCheckedChange={setAiEnabled}
                    />
                  </div>

                  {aiEnabled && (
                    <>
                      {/* AI Name */}
                      <div>
                        <Label htmlFor="aiName">AI Assistant Name</Label>
                        <div className="flex gap-2 mt-2">
                          <Input
                            id="aiName"
                            placeholder="Enter a name for your AI assistant"
                            value={aiName}
                            onChange={(e) => setAiName(e.target.value)}
                          />
                          <Button variant="outline" onClick={generateAiName}>
                            <Shuffle className="w-4 h-4 mr-2" />
                            Generate
                          </Button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          This name will be used when the AI communicates with
                          influencers
                        </p>
                      </div>

                      {/* AI Model Selection */}
                      <div>
                        <Label>AI Model</Label>
                        <div className="grid gap-4 mt-2">
                          {aiModels.map((model) => (
                            <div
                              key={model.id}
                              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                                aiModel === model.id
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 hover:border-gray-300"
                              }`}
                              onClick={() => setAiModel(model.id)}
                            >
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                  <model.icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold">
                                    {model.name}
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    {model.description}
                                  </p>
                                  <div className="flex flex-wrap gap-1 mt-2">
                                    {model.features.map((feature, index) => (
                                      <Badge
                                        key={index}
                                        variant="secondary"
                                        className="text-xs"
                                      >
                                        {feature}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* AI Personality */}
                      <div>
                        <Label>AI Personality</Label>
                        <div className="grid md:grid-cols-2 gap-4 mt-2">
                          {aiPersonalities.map((personality) => (
                            <div
                              key={personality.id}
                              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                                aiPersonality === personality.id
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 hover:border-gray-300"
                              }`}
                              onClick={() => setAiPersonality(personality.id)}
                            >
                              <h4 className="font-semibold">
                                {personality.name}
                              </h4>
                              <p className="text-sm text-gray-600 mb-2">
                                {personality.description}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {personality.traits.map((trait, index) => (
                                  <Badge
                                    key={index}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {trait}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* AI Specialization */}
                      <div>
                        <Label htmlFor="aiSpecialization">
                          Industry Specialization
                        </Label>
                        <Select
                          value={aiSpecialization}
                          onValueChange={setAiSpecialization}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select industry specialization" />
                          </SelectTrigger>
                          <SelectContent>
                            {aiSpecializations.map((spec) => (
                              <SelectItem key={spec} value={spec}>
                                {spec}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-gray-500 mt-1">
                          AI will use industry-specific knowledge and
                          terminology
                        </p>
                      </div>

                      {/* AI Aggressiveness */}
                      <div>
                        <Label>
                          Negotiation Aggressiveness: {aiAggressiveness[0]}/10
                        </Label>
                        <div className="mt-2">
                          <Slider
                            value={aiAggressiveness}
                            onValueChange={setAiAggressiveness}
                            max={10}
                            min={1}
                            step={1}
                            className="w-full"
                          />
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>Conservative</span>
                          <span>Balanced</span>
                          <span>Aggressive</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Higher values mean more assertive negotiations and
                          better deals
                        </p>
                      </div>

                      {/* AI Preview */}
                      <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <Bot className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold">
                              {aiName || "Your AI Assistant"} Preview
                            </h4>
                            <p className="text-sm text-gray-600">
                              {aiModels.find((m) => m.id === aiModel)?.name} •{" "}
                              {
                                aiPersonalities.find(
                                  (p) => p.id === aiPersonality
                                )?.name
                              }
                            </p>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <p className="text-sm">
                            "Hi! I'm {aiName || "your AI assistant"} and I'll be
                            handling outreach and negotiations for your{" "}
                            {formData.campaignType || "campaign"}. I specialize
                            in {aiSpecialization || "general marketing"} and
                            will work to get you the best deals while
                            maintaining{" "}
                            {aiPersonalities.find((p) => p.id === aiPersonality)
                              ?.description || "professional"}{" "}
                            communication with influencers."
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between pt-8 border-t">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button onClick={handleNext}>
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSave}
                  className="flex items-center gap-2"
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <>Creating...</>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Create Campaign
                    </>
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </BrandLayout>
  );
}
