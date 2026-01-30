"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface SocialLinks {
    instagram: string;
    facebook: string;
    twitter: string;
    website: string;
}

interface OnboardingData {
    // Step 1: Business Profile
    name: string;
    description: string;
    categoryId: string;

    // Step 2: Location
    locationName: string; // For display
    address: string;
    coordinates?: { lat: number; lng: number };

    // Step 3: Contact & Availability
    phone: string;
    email: string;
    openingHours: Record<string, { open: string; close: string; isOpen: boolean }>;

    // Step 4: Socials
    socials: SocialLinks;

    // Files
    bannerUrl?: string;
    logoUrl?: string;
}

interface OnboardingContextType {
    step: number;
    setStep: (step: number) => void;
    data: OnboardingData;
    updateData: (data: Partial<OnboardingData>) => void;
    handleNext: () => void;
    handleBack: () => void;
    isSubmitting: boolean;
    setIsSubmitting: (isSubmitting: boolean) => void;
}

const defaultData: OnboardingData = {
    name: "",
    description: "",
    categoryId: "",
    locationName: "",
    address: "",
    phone: "",
    email: "",
    openingHours: {
        monday: { open: "09:00", close: "17:00", isOpen: true },
        tuesday: { open: "09:00", close: "17:00", isOpen: true },
        wednesday: { open: "09:00", close: "17:00", isOpen: true },
        thursday: { open: "09:00", close: "17:00", isOpen: true },
        friday: { open: "09:00", close: "17:00", isOpen: true },
        saturday: { open: "10:00", close: "14:00", isOpen: false },
        sunday: { open: "10:00", close: "14:00", isOpen: false },
    },
    socials: {
        instagram: "",
        facebook: "",
        twitter: "",
        website: "",
    },
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: ReactNode }) {
    const [step, setStep] = useState(1);
    const [data, setData] = useState<OnboardingData>(defaultData);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const updateData = (newData: Partial<OnboardingData>) => {
        setData((prev) => ({ ...prev, ...newData }));
    };

    const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
    const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

    return (
        <OnboardingContext.Provider
            value={{
                step,
                setStep,
                data,
                updateData,
                handleNext,
                handleBack,
                isSubmitting,
                setIsSubmitting,
            }}
        >
            {children}
        </OnboardingContext.Provider>
    );
}

export function useOnboarding() {
    const context = useContext(OnboardingContext);
    if (context === undefined) {
        throw new Error("useOnboarding must be used within an OnboardingProvider");
    }
    return context;
}
