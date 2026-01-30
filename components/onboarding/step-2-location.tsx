"use client";

import { useOnboarding } from "@/contexts/onboarding-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Search, Zap } from "lucide-react";
import Image from "next/image";

export function Step2Location() {
    const { data, updateData, handleNext, handleBack } = useOnboarding();

    const isFormValid = data.locationName || data.address;

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-2">
                <div className="flex justify-center mb-6">
                    <div className="bg-white p-3 rounded-full">
                        <Zap className="w-6 h-6 text-black" fill="black" />
                    </div>
                </div>
                <h2 className="text-3xl font-medium text-white">Location & Visibility</h2>
                <p className="text-brand-dark-300 text-gray-400">
                    Help customers recognize and trust your business by providing accurate details.
                </p>
            </div>

            <div className="space-y-6">
                <div className="relative">
                    <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <Input
                        placeholder="Search here nearest locations..."
                        className="bg-[#1F1F1F] border-[#333] text-white h-12 pl-10"
                        value={data.locationName}
                        onChange={(e) => updateData({ locationName: e.target.value, address: e.target.value })}
                    />
                </div>

                {/* Map Placeholder */}
                <div className="relative w-full h-[300px] bg-[#1F1F1F] rounded-xl overflow-hidden border border-[#333] flex items-center justify-center group">
                    <div className="absolute inset-0 bg-[#2C2C2C] opacity-50" />
                    {/* Grid for map effect */}
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                            backgroundSize: '20px 20px'
                        }}
                    />

                    <div className="text-center z-10 p-4">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-500/20">
                            <MapPin className="text-black w-6 h-6" />
                        </div>
                        <p className="text-gray-400 text-sm">Map view placeholder</p>
                        <p className="text-xs text-gray-600 mt-1">(API Key required for live map)</p>
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
                <div className="w-16 h-1 bg-[#1F1F1F] rounded-full" />
                <div className="w-16 h-1 bg-[#1F1F1F] rounded-full" />
            </div>
        </div>
    );
}
