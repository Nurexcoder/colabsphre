"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Save,
  X,
  Instagram,
  Youtube,
  Twitter,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { BrandLayout } from "@/components/brand-layout";
import { useParams, useRouter } from "next/navigation";
import axiosInstance from "@/lib/api";

export default function EditCampaignPage() {
  const params = useParams();
  const router = useRouter();
  const campaignId = params.id as string;

  const [formData, setFormData] = useState<{
    name: string;
    description: string;
    platforms: string[];
    campaignType: string;
    ageRange: [number, number];
    gender: string;
    location: string;
    interests: string[];
    followerRange: [number, number];
    engagementRate: number;
    contentTypes: string[];
    brandGuidelines: string;
    hashtags: string[];
    totalBudget: string;
    budgetPerInfluencer: [number, number];
    startDate: string;
    endDate: string;
    deliverableDeadline: string;
  }>({
    name: "",
    description: "",
    platforms: [],
    campaignType: "",
    ageRange: [18, 35],
    gender: "Any",
    location: "",
    interests: [],
    followerRange: [10000, 500000],
    engagementRate: 4,
    contentTypes: [],
    brandGuidelines: "",
    hashtags: [],
    totalBudget: "",
    budgetPerInfluencer: [500, 2000],
    startDate: "",
    endDate: "",
    deliverableDeadline: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaign = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get(`/api/campaign`, {
          params: { campaign_id: campaignId },
        });
        const data = res.data.data?.campaign || res.data.data;
        setFormData({
          name: data.name || "",
          description: data.description || "",
          platforms: data.platforms || [],
          campaignType: data.campaignType || "",
          ageRange: data.ageRange || [18, 35],
          gender: data.gender || "Any",
          location: data.location || "",
          interests: data.interests || [],
          followerRange: data.followerRange || [10000, 500000],
          engagementRate: data.engagementRate || 4,
          contentTypes: data.contentTypes || [],
          brandGuidelines: data.brandGuidelines || "",
          hashtags: data.hashtags || [],
          totalBudget: data.totalBudget || "",
          budgetPerInfluencer: data.budgetPerInfluencer || [500, 2000],
          startDate: data.startDate || "",
          endDate: data.endDate || "",
          deliverableDeadline: data.deliverableDeadline || "",
        });
      } catch (error) {
        // Optionally handle error
      } finally {
        setLoading(false);
      }
    };
    if (campaignId) fetchCampaign();
  }, [campaignId]);

  const platforms = [
    { id: "instagram", name: "Instagram", icon: Instagram },
    { id: "youtube", name: "YouTube", icon: Youtube },
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
    "YouTube Shorts",
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

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayItem = (array: string[], item: string) => {
    return array.includes(item)
      ? array.filter((i) => i !== item)
      : [...array, item];
  };

  const handleSave = () => {
    // Handle campaign update
    router.push(`/brand/campaigns/${campaignId}`);
  };

  if (loading) {
    return (
      <BrandLayout>
        <div className="flex justify-center items-center h-96">
          <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
          <span className="ml-3 text-gray-500 text-lg">
            Loading campaign...
          </span>
        </div>
      </BrandLayout>
    );
  }

  return (
    <BrandLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href={`/brand/campaigns/${campaignId}`}>
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Campaign
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Edit Campaign
              </h1>
              <p className="text-gray-600">Update your campaign details</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Link href={`/brand/campaigns/${campaignId}`}>
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button onClick={handleSave} className="flex items-center gap-2">
              <Save className="w-4 h-4" />
              Save Changes
            </Button>
          </div>
        </div>

        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Campaign Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => updateFormData("name", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="description">Campaign Description</Label>
              <Textarea
                id="description"
                rows={4}
                value={formData.description}
                onChange={(e) => updateFormData("description", e.target.value)}
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
          </CardContent>
        </Card>

        {/* Target Audience */}
        <Card>
          <CardHeader>
            <CardTitle>Target Audience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label>
                Age Range: {formData.ageRange[0]} - {formData.ageRange[1]} years
              </Label>
              <div className="mt-2">
                <input
                  type="range"
                  min="13"
                  max="65"
                  value={formData.ageRange[0]}
                  onChange={(e) =>
                    updateFormData("ageRange", [
                      Number.parseInt(e.target.value),
                      formData.ageRange[1],
                    ])
                  }
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
                value={formData.location}
                onChange={(e) => updateFormData("location", e.target.value)}
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
                <input
                  type="range"
                  min="1000"
                  max="10000000"
                  step="1000"
                  value={formData.followerRange[0]}
                  onChange={(e) =>
                    updateFormData("followerRange", [
                      Number.parseInt(e.target.value),
                      formData.followerRange[1],
                    ])
                  }
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <Label>Minimum Engagement Rate: {formData.engagementRate}%</Label>
              <div className="mt-2">
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.5"
                  value={formData.engagementRate}
                  onChange={(e) =>
                    updateFormData(
                      "engagementRate",
                      Number.parseFloat(e.target.value)
                    )
                  }
                  className="w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Brief */}
        <Card>
          <CardHeader>
            <CardTitle>Content Brief</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
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
                rows={4}
                value={formData.brandGuidelines}
                onChange={(e) =>
                  updateFormData("brandGuidelines", e.target.value)
                }
              />
            </div>

            <div>
              <Label>Required Hashtags</Label>
              <div className="flex flex-wrap gap-2 mt-2">
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
                placeholder="Add new hashtag and press Enter"
                className="mt-2"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    const value = (e.target as HTMLInputElement).value.trim();
                    if (value && !formData.hashtags.includes(value)) {
                      updateFormData("hashtags", [...formData.hashtags, value]);
                      (e.target as HTMLInputElement).value = "";
                    }
                  }
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Budget & Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Budget & Timeline</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="totalBudget">Total Campaign Budget</Label>
              <Input
                id="totalBudget"
                type="number"
                value={formData.totalBudget}
                onChange={(e) => updateFormData("totalBudget", e.target.value)}
              />
            </div>

            <div>
              <Label>
                Budget per Influencer: ${formData.budgetPerInfluencer[0]} - $
                {formData.budgetPerInfluencer[1]}
              </Label>
              <div className="mt-2 space-y-2">
                <input
                  type="range"
                  min="50"
                  max="10000"
                  step="50"
                  value={formData.budgetPerInfluencer[0]}
                  onChange={(e) =>
                    updateFormData("budgetPerInfluencer", [
                      Number.parseInt(e.target.value),
                      formData.budgetPerInfluencer[1],
                    ])
                  }
                  className="w-full"
                />
                <input
                  type="range"
                  min="50"
                  max="10000"
                  step="50"
                  value={formData.budgetPerInfluencer[1]}
                  onChange={(e) =>
                    updateFormData("budgetPerInfluencer", [
                      formData.budgetPerInfluencer[0],
                      Number.parseInt(e.target.value),
                    ])
                  }
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="startDate">Campaign Start Date</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => updateFormData("startDate", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="endDate">Campaign End Date</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => updateFormData("endDate", e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="deliverableDeadline">Deliverable Deadline</Label>
              <Input
                id="deliverableDeadline"
                type="date"
                value={formData.deliverableDeadline}
                onChange={(e) =>
                  updateFormData("deliverableDeadline", e.target.value)
                }
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </BrandLayout>
  );
}
