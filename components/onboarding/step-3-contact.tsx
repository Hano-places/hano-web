"use client";

import { useOnboarding } from "@/contexts/onboarding-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Zap } from "lucide-react";

export function Step3Contact() {
    const { data, updateData, handleNext, handleBack } = useOnboarding();

    const isFormValid = data.phone && data.email; // Basic validation

    const handleDayChange = (
        day: string,
        field: "isOpen" | "open" | "close",
        value: boolean | string
    ) => {
        updateData({
            openingHours: {
                ...data.openingHours,
                [day]: {
                    ...data.openingHours[day],
                    [field]: value,
                },
            },
        });
    };

    const days = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-2">
                <div className="flex justify-center mb-6">
                    <div className="bg-white p-3 rounded-full">
                        <Zap className="w-6 h-6 text-black" fill="black" />
                    </div>
                </div>
                <h2 className="text-3xl font-medium text-white">Contact & Availability</h2>
                <p className="text-brand-dark-300 text-gray-400">
                    Let customers know how and when they can reach or visit you.
                </p>
            </div>

            <div className="space-y-8">
                {/* Contact Info */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label className="text-white">Contact Phone Number</Label>
                        <Input
                            placeholder="+250 788 123 456"
                            className="bg-[#1F1F1F] border-[#333] text-white h-12"
                            value={data.phone}
                            onChange={(e) => updateData({ phone: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-white">Contact Email</Label>
                        <Input
                            placeholder="business@example.com"
                            type="email"
                            className="bg-[#1F1F1F] border-[#333] text-white h-12"
                            value={data.email}
                            onChange={(e) => updateData({ email: e.target.value })}
                        />
                    </div>
                </div>

                {/* Operating Hours */}
                <div className="space-y-4">
                    <Label className="text-white text-lg font-medium">Operating Hours</Label>
                    <div className="space-y-3">
                        {days.map((day) => {
                            const info = data.openingHours[day];
                            return (
                                <div key={day} className="flex items-center gap-4">
                                    <Switch
                                        checked={info.isOpen}
                                        onCheckedChange={(checked) => handleDayChange(day, "isOpen", checked)}
                                        className="data-[state=checked]:bg-white"
                                    />
                                    <span className="text-white w-24 capitalize text-sm">{day}</span>

                                    <div className={`flex gap-2 items-center transition-opacity ${info.isOpen ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
                                        <Input
                                            type="time"
                                            className="bg-[#1F1F1F] border-[#333] text-white w-28 h-9 text-xs"
                                            value={info.open}
                                            onChange={(e) => handleDayChange(day, "open", e.target.value)}
                                        />
                                        <span className="text-gray-500">-</span>
                                        <Input
                                            type="time"
                                            className="bg-[#1F1F1F] border-[#333] text-white w-28 h-9 text-xs"
                                            value={info.close}
                                            onChange={(e) => handleDayChange(day, "close", e.target.value)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
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
                        onClick={handleNext}
                        disabled={!isFormValid}
                    >
                        Next
                    </Button>
                </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
                <div className="w-16 h-1 bg-white rounded-full" />
                <div className="w-16 h-1 bg-white rounded-full" />
                <div className="w-16 h-1 bg-white rounded-full" />
                <div className="w-16 h-1 bg-[#1F1F1F] rounded-full" />
            </div>
        </div>
    );
}
