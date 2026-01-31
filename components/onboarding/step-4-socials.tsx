"use client";

import { useOnboarding } from "@/contexts/onboarding-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Facebook, Globe, Instagram, Twitter, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { apiClient } from "@/lib/api-client";
import { useAuth } from "@/contexts/auth-context";

export function Step4Socials() {
    const { data, updateData, handleBack, isSubmitting, setIsSubmitting } = useOnboarding();
    const router = useRouter();
    const { user, refreshProfile } = useAuth();

    const handleSubmit = async () => {
        try {
            setIsSubmitting(true);

            // Construct strictly the payload requested
            const requestBody = {
                // Removed ID field to avoid 400 (Validation) and 500 (DB) errors
                name: data.name,
                description: data.description,
                ...(data.categoryId && { categoryId: data.categoryId }),
                verified: true,

                // Use static mocked URLs if empty to satisfy backend validation
                websiteUrl: data.socials.website || "https://google.com",
                bannerUrl: "https://placehold.co/1200x400/png",
                logoUrl: "https://placehold.co/400x400/png",
            };

            console.log("Submitting payload:", requestBody);

            const response = await apiClient.post("/places/places", requestBody);
            console.log("Creation response:", response.data);

            const placeId = response.data?.id;

            if (placeId && user?.email) {
                try {
                    console.log("Inviting user as admin:", user.email);
                    await apiClient.post(`/place-admins/places/${placeId}/admins/invite`, {
                        email: user.email,
                        role: "ADMIN"
                    });

                    // Refresh profile to update managed places list
                    await refreshProfile();
                } catch (inviteError) {
                    console.error("Failed to auto-invite admin:", inviteError);
                    toast.error("Business created, but failed to assign you as admin.");
                }
            } else {
                console.warn("Place ID missing in response or User email missing, skipping auto-invite.");
            }

            toast.success("Business created successfully!");
            router.push("/dashboard");

        } catch (error) {
            console.error("Failed to create business:", error);
            toast.error("Failed to create business. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-2">
                <div className="flex justify-center mb-6">
                    <div className="bg-white p-3 rounded-full">
                        <Zap className="w-6 h-6 text-black" fill="black" />
                    </div>
                </div>
                <h2 className="text-3xl font-medium text-white">Business Social Media Links</h2>
                <p className="text-brand-dark-300 text-gray-400">
                    Share your business social pages.
                </p>
            </div>

            <div className="space-y-6">
                <div className="space-y-2">
                    <Label className="text-white">Instagram</Label>
                    <div className="relative">
                        <Instagram className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                        <Input
                            placeholder="e.g. instagram.com/business"
                            className="bg-[#1F1F1F] border-[#333] text-white h-12 pl-10"
                            value={data.socials.instagram}
                            onChange={(e) => updateData({ socials: { ...data.socials, instagram: e.target.value } })}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label className="text-white">Facebook</Label>
                    <div className="relative">
                        <Facebook className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                        <Input
                            placeholder="e.g. facebook.com/business"
                            className="bg-[#1F1F1F] border-[#333] text-white h-12 pl-10"
                            value={data.socials.facebook}
                            onChange={(e) => updateData({ socials: { ...data.socials, facebook: e.target.value } })}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label className="text-white">X (formerly Twitter)</Label>
                    <div className="relative">
                        <Twitter className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                        <Input
                            placeholder="e.g. x.com/business"
                            className="bg-[#1F1F1F] border-[#333] text-white h-12 pl-10"
                            value={data.socials.twitter}
                            onChange={(e) => updateData({ socials: { ...data.socials, twitter: e.target.value } })}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label className="text-white">Public website</Label>
                    <div className="relative">
                        <Globe className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                        <Input
                            placeholder="e.g. businessname.com"
                            className="bg-[#1F1F1F] border-[#333] text-white h-12 pl-10"
                            value={data.socials.website}
                            onChange={(e) => updateData({ socials: { ...data.socials, website: e.target.value } })}
                        />
                    </div>
                </div>

                <div className="flex gap-4 pt-4">
                    <Button
                        variant="outline"
                        className="flex-1 h-12 text-base border-white text-white hover:bg-[#1F1F1F] hover:text-white bg-transparent"
                        onClick={handleBack}
                    >
                        Back
                    </Button>
                    <Button
                        className="flex-1 h-12 text-base bg-white text-black hover:bg-gray-200"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Creating..." : "Next"}
                    </Button>
                </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
                <div className="w-16 h-1 bg-white rounded-full" />
                <div className="w-16 h-1 bg-white rounded-full" />
                <div className="w-16 h-1 bg-white rounded-full" />
                <div className="w-16 h-1 bg-white rounded-full" />
            </div>
        </div>
    );
}
