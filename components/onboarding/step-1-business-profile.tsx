"use client";

import { useOnboarding } from "@/contexts/onboarding-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Zap } from "lucide-react";

export function Step1BusinessProfile() {
    const { data, updateData, handleNext } = useOnboarding();

    const isFormValid = data.name && data.description;

    const categories = [
        { id: "restaurant", name: "Restaurant" },
        { id: "cafe", name: "Cafe" },
        { id: "bar", name: "Bar" },
        { id: "hotel", name: "Hotel" },
        { id: "gym", name: "Gym" },
        { id: "store", name: "Retail Store" },
        { id: "service", name: "Service" },
        { id: "other", name: "Other" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-2">
                <div className="flex justify-center mb-6">
                    <div className="bg-white p-3 rounded-full">
                        <Zap className="w-6 h-6 text-black" fill="black" />
                    </div>
                </div>
                <h2 className="text-3xl font-medium text-white">Create Your Business Profile</h2>
                <p className="text-brand-dark-300 text-gray-400">
                    Help customers recognize and trust your business by providing accurate details.
                </p>
            </div>

            <div className="space-y-6">
                <div className="space-y-2">
                    <Label className="text-white">Business Name</Label>
                    <Input
                        placeholder="e.g. Flour, Cheese, Chicken"
                        className="bg-[#1F1F1F] border-[#333] text-white h-12"
                        value={data.name}
                        onChange={(e) => updateData({ name: e.target.value })}
                    />
                </div>

                <div className="space-y-2">
                    <Label className="text-white">Business Category (Optional)</Label>
                    <Select
                        value={data.categoryId}
                        onValueChange={(value) => updateData({ categoryId: value })}
                    >
                        <SelectTrigger className="bg-[#1F1F1F] border-[#333] text-white h-12">
                            <SelectValue placeholder="Tap to select category (optional)..." />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1F1F1F] border-[#333] text-white">
                            {categories.map((cat) => (
                                <SelectItem key={cat.id} value={cat.id} className="focus:bg-[#333] focus:text-white">
                                    {cat.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label className="text-white">Short Bio</Label>
                    <Textarea
                        placeholder="Say something about your business..."
                        className="bg-[#1F1F1F] border-[#333] text-white min-h-[120px] resize-none"
                        value={data.description}
                        onChange={(e) => updateData({ description: e.target.value })}
                    />
                    <p className="text-xs text-gray-500">Appears on business page</p>
                </div>

                <Button
                    className="w-full h-12 text-base bg-white text-black hover:bg-gray-200"
                    onClick={handleNext}
                    disabled={!isFormValid}
                >
                    Next
                </Button>
            </div>

            <div className="flex justify-center gap-2 mt-8">
                <div className="w-16 h-1 bg-white rounded-full" />
                <div className="w-16 h-1 bg-[#1F1F1F] rounded-full" />
                <div className="w-16 h-1 bg-[#1F1F1F] rounded-full" />
                <div className="w-16 h-1 bg-[#1F1F1F] rounded-full" />
            </div>
        </div>
    );
}
