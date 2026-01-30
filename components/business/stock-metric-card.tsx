"use client"

import React from "react"
import { MoreVertical } from "lucide-react"

interface StockMetricCardProps {
    title: string
    name: string
    value: string | number
    unit: string
    image: string
    progress: number
    icon?: React.ReactNode
}

export default function StockMetricCard({
    title,
    name,
    value,
    unit,
    image,
    progress,
    icon,
}: StockMetricCardProps) {
    return (
        <div className="bg-brand-dark-900 border border-brand-dark-800 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-brand-dark-800 flex items-center justify-center text-brand-dark-400">
                    {icon}
                </div>
                <button className="text-brand-dark-400 hover:text-white transition-colors">
                    <MoreVertical className="w-5 h-5" />
                </button>
            </div>

            <div>
                <h4 className="text-xs text-brand-dark-400 font-medium mb-3">{title}</h4>
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/5 border border-brand-dark-700">
                        <img src={image} alt={name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-white mb-1">{name}</div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-green-500">{value}</span>
                            <span className="text-xs text-brand-dark-400">{unit}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-1.5 bg-brand-dark-700 rounded-full overflow-hidden">
                <div
                    className="h-full bg-brand-dark-400 rounded-full opacity-30 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    )
}
