"use client"

import React from "react"
import { MoreVertical } from "lucide-react"

interface PerformanceMetricCardProps {
    title: string
    name: string
    value: string | number
    unit: string
    image: string
    progress: number
    icon: React.ReactNode
}

export default function PerformanceMetricCard({
    title,
    name,
    value,
    unit,
    image,
    progress,
    icon,
}: PerformanceMetricCardProps) {
    return (
        <div className="bg-[#111111] border border-[#222222] rounded-3xl p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] flex items-center justify-center text-brand-dark-300">
                    {icon}
                </div>
                <button className="text-brand-dark-400 hover:text-white transition-colors">
                    <MoreVertical className="w-5 h-5" />
                </button>
            </div>

            <div className="space-y-4">
                <div>
                    <h4 className="text-xs text-brand-dark-400 font-medium mb-3 uppercase tracking-wider">{title}</h4>
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-xl overflow-hidden bg-black border border-white/5">
                            <img src={image} alt={name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-xl font-bold text-white truncate mb-1">{name}</div>
                            <div className="flex items-baseline gap-1.5">
                                <span className="text-2xl font-bold text-green-500">{value}</span>
                                <span className="text-xs text-brand-dark-400 font-medium">{unit}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-1.5 bg-[#1A1A1A] rounded-full overflow-hidden">
                    <div
                        className="h-full bg-brand-dark-400 opacity-20 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    )
}
