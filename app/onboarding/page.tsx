"use client";

import { useOnboarding } from "@/contexts/onboarding-context";
import { Step1BusinessProfile } from "@/components/onboarding/step-1-business-profile";
import { Step2Location } from "@/components/onboarding/step-2-location";
import { Step3Contact } from "@/components/onboarding/step-3-contact";
import { Step4Socials } from "@/components/onboarding/step-4-socials";

export default function OnboardingPage() {
    const { step } = useOnboarding();

    return (
        <div className="w-full">
            {step === 1 && <Step1BusinessProfile />}
            {step === 2 && <Step2Location />}
            {step === 3 && <Step3Contact />}
            {step === 4 && <Step4Socials />}
        </div>
    );
}
