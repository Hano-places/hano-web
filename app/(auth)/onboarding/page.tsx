"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { apiClient } from "@/lib/api-client";
import { uploadFile } from "@/lib/upload";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { ChevronRight, ChevronLeft, Upload, CheckCircle2, Building2 } from "lucide-react";

export default function OnboardingPage() {
    const [step, setStep] = useState(1);
    const [places, setPlaces] = useState<any[]>([]);
    const [selectedPlaceId, setSelectedPlaceId] = useState("");
    const [phone, setPhone] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();
    const { refreshProfile } = useAuth();

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const response = await apiClient.get("/places");
                setPlaces(response.data.data || []);
            } catch (error) {
                console.error("Failed to fetch places:", error);
            }
        };
        fetchPlaces();
    }, []);

    const handleNext = () => setStep((s) => s + 1);
    const handleBack = () => setStep((s) => s - 1);

    const handleSubmit = async () => {
        if (!selectedPlaceId || !file || !phone) {
            toast.error("Please fill in all details and upload evidence.");
            return;
        }

        try {
            setIsSubmitting(true);

            // 1. Upload evidence to R2
            const publicUrl = await uploadFile(file, {
                fileName: file.name,
                contentType: file.type,
                uploadType: "document",
            });

            // 2. Submit claim
            await apiClient.post("/claims", {
                placeId: selectedPlaceId,
                method: "docs",
                evidence: {
                    fileUrl: publicUrl,
                    phone: phone,
                },
            });

            toast.success("Claim submitted successfully! A moderator will review it soon.");
            await refreshProfile();
            setStep(7); // Success step
        } catch (error) {
            console.error("Failed to submit claim:", error);
            toast.error("Failed to submit claim. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0C0C0C] flex items-center justify-center p-4">
            <Card className="max-w-md w-full bg-brand-dark-900 border-brand-dark-800 p-8 space-y-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-white">Claim Your Business</h1>
                    <span className="text-brand-dark-400 text-sm">Step {step} of 6</span>
                </div>

                {step === 1 && (
                    <div className="space-y-4">
                        <h2 className="text-xl text-white">Welcome! Let's get started.</h2>
                        <p className="text-brand-dark-300">Register or claim your business to start managing your profile and reviews.</p>
                        <Button className="w-full" onClick={handleNext}>Start Onboarding</Button>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4">
                        <Label className="text-white">Search and select your business</Label>
                        <select
                            className="w-full bg-brand-dark-800 border-brand-dark-700 text-white p-3 rounded-lg outline-none"
                            value={selectedPlaceId}
                            onChange={(e) => setSelectedPlaceId(e.target.value)}
                        >
                            <option value="">Select a place...</option>
                            {places.map((p) => (
                                <option key={p.id} value={p.id}>{p.name} - {p.category}</option>
                            ))}
                        </select>
                        <div className="flex gap-4">
                            <Button variant="ghost" className="flex-1 text-white" onClick={handleBack}>Back</Button>
                            <Button className="flex-1" onClick={handleNext} disabled={!selectedPlaceId}>Next</Button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-4">
                        <Label className="text-white">Business Category Confirmation</Label>
                        <div className="p-4 bg-brand-dark-800 rounded-lg text-brand-dark-200 flex items-center gap-3">
                            <Building2 className="text-blue-400" />
                            <span>{places.find(p => p.id === selectedPlaceId)?.category || "Selected Business"}</span>
                        </div>
                        <p className="text-sm text-brand-dark-400">Please confirm if this is the correct business you wish to claim.</p>
                        <div className="flex gap-4">
                            <Button variant="ghost" className="flex-1 text-white" onClick={handleBack}>Back</Button>
                            <Button className="flex-1" onClick={handleNext}>Yes, it's correct</Button>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="space-y-4">
                        <Label className="text-white">Contact Information</Label>
                        <Input
                            placeholder="Business Phone Number"
                            className="bg-brand-dark-800 border-brand-dark-700 text-white"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <p className="text-xs text-brand-dark-400">We'll use this to verify your ownership if needed.</p>
                        <div className="flex gap-4">
                            <Button variant="ghost" className="flex-1 text-white" onClick={handleBack}>Back</Button>
                            <Button className="flex-1" onClick={handleNext} disabled={!phone}>Next</Button>
                        </div>
                    </div>
                )}

                {step === 5 && (
                    <div className="space-y-4">
                        <Label className="text-white">Evidence of Ownership</Label>
                        <div
                            className="border-2 border-dashed border-brand-dark-700 rounded-xl p-8 flex flex-col items-center justify-center space-y-4 cursor-pointer hover:border-blue-500 transition-colors"
                            onClick={() => document.getElementById("file-upload")?.click()}
                        >
                            <Upload className="w-12 h-12 text-brand-dark-400" />
                            <span className="text-brand-dark-300">{file ? file.name : "Click to upload business doc (PDF/Image)"}</span>
                            <input
                                id="file-upload"
                                type="file"
                                className="hidden"
                                onChange={(e) => setFile(e.target.files?.[0] || null)}
                            />
                        </div>
                        <div className="flex gap-4">
                            <Button variant="ghost" className="flex-1 text-white" onClick={handleBack}>Back</Button>
                            <Button className="flex-1" onClick={handleNext} disabled={!file}>Next</Button>
                        </div>
                    </div>
                )}

                {step === 6 && (
                    <div className="space-y-4">
                        <h2 className="text-xl text-white">Review & Submit</h2>
                        <div className="space-y-2 text-sm text-brand-dark-300">
                            <p><strong>Business:</strong> {places.find(p => p.id === selectedPlaceId)?.name}</p>
                            <p><strong>Phone:</strong> {phone}</p>
                            <p><strong>Evidence:</strong> {file?.name}</p>
                        </div>
                        <div className="flex gap-4">
                            <Button variant="ghost" className="flex-1 text-white" onClick={handleBack}>Back</Button>
                            <Button className="flex-1 bg-blue-600 hover:bg-blue-700" onClick={handleSubmit} disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Submit Claim"}
                            </Button>
                        </div>
                    </div>
                )}

                {step === 7 && (
                    <div className="space-y-6 text-center">
                        <div className="flex justify-center">
                            <CheckCircle2 className="w-16 h-16 text-emerald-500" />
                        </div>
                        <h2 className="text-2xl text-white">Done!</h2>
                        <p className="text-brand-dark-300">Your claim has been submitted. You will be notified once it's reviewed.</p>
                        <Button className="w-full" onClick={() => router.push("/dashboard")}>Go to Dashboard</Button>
                    </div>
                )}
            </Card>
        </div>
    );
}
