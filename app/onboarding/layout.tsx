"use client";

import { OnboardingProvider, useOnboarding } from "@/contexts/onboarding-context";
import { Check, Zap } from "lucide-react";
import Link from "next/link";

function Sidebar() {
    const { step } = useOnboarding();

    const steps = [
        {
            id: 1,
            title: "Create Your Business Profile",
            description: "Help customers recognize and trust your business by providing accurate details.",
        },
        {
            id: 2,
            title: "Location & Visibility",
            description: "Your location helps users find you and get directions easily.",
        },
        {
            id: 3,
            title: "Contact & Availability",
            description: "Let customers know how and when they can reach or visit you.",
        },
        {
            id: 4,
            title: "Business Social Links",
            description: "share your business social pages.",
        },
    ];

    return (
        <div className="hidden lg:flex flex-col w-[400px] bg-[#0C0C0C] border-r border-[#1F1F1F] p-8 h-screen sticky top-0">
            <div className="mb-12">
                <Link href="/" className="flex items-center gap-3">
                    <div className="bg-white text-black p-1 rounded-full">
                        <Zap size={20} fill="black" />
                    </div>
                    <div>
                        <h1 className="text-white font-bold text-lg">Hano</h1>
                        <p className="text-gray-400 text-xs">Turn Places Into Moments</p>
                    </div>
                </Link>
            </div>

            <div className="space-y-8 relative">
                {/* Vertical Line */}
                <div className="absolute left-[15px] top-4 bottom-4 w-[1px] bg-[#1F1F1F] -z-10" />

                {steps.map((s) => {
                    const isActive = step === s.id;
                    const isCompleted = step > s.id;

                    return (
                        <div key={s.id} className="flex gap-4 group">
                            <div
                                className={`
                            w-8 h-8 rounded-full flex items-center justify-center border-2 shrink-0 z-10 transition-colors
                            ${isActive ? 'border-white bg-white' : ''}
                            ${isCompleted ? 'border-white bg-white' : 'border-[#333] bg-[#0C0C0C]'}
                        `}
                            >
                                {isCompleted ? (
                                    <Check className="w-4 h-4 text-black" />
                                ) : isActive ? (
                                    <div className="w-3 h-3 bg-black rounded-full" />
                                ) : (
                                    <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-black' : 'bg-[#333]'}`} />
                                )}
                            </div>
                            <div className={`${isActive ? 'opacity-100' : 'opacity-50'} transition-opacity`}>
                                <h3 className="text-white font-medium text-sm mb-1">{s.title}</h3>
                                <p className="text-gray-400 text-xs leading-relaxed">{s.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="mt-auto">
                <p className="text-[#333] text-xs">© Hano.Places 2026</p>
                <p className="text-[#333] text-xs mt-1">help@hano.rw</p>
            </div>
        </div>
    );
}

export default function OnboardingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <OnboardingProvider>
            <div className="min-h-screen bg-black flex">
                <Sidebar />
                <div className="flex-1 flex flex-col relative w-full overflow-hidden">
                    {/* Background Grid Pattern */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-20"
                        style={{
                            backgroundImage: `linear-gradient(#1f1f1f 1px, transparent 1px), linear-gradient(90deg, #1f1f1f 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }}
                    />

                    <main className="flex-1 flex items-center justify-center p-8 relative z-10">
                        <div className="w-full max-w-xl">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </OnboardingProvider>
    );
}
