"use client"

import React from "react"
import { BadgeCheck, MoreHorizontal, MoveUpRight, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import dynamic from "next/dynamic"

const ActivityTrendChart = dynamic(() => import("@/components/ActivityTrendChart"), {
    ssr: false,
})

interface ItemPerformanceCardProps {
    title: string
    itemName: string
    sells: string
    trend: string
    isPositive?: boolean
    subItemName: string
    subItemValue: string
    subItemUnit: string
    subItemImage: string
    chartData: any[]
}

export default function ItemPerformanceCard({
    title,
    itemName,
    sells,
    trend,
    isPositive = true,
    subItemName,
    subItemValue,
    subItemUnit,
    subItemImage,
    chartData,
}: ItemPerformanceCardProps) {
    return (
        <Card className="bg-brand-dark-900 border border-brand-dark-800 rounded-3xl p-8 space-y-8 flex flex-col h-full">
            <div className="flex items-center justify-between">
                <h3 className="text-brand-dark-400 font-medium">{title}</h3>
                <button className="px-5 py-2.5 rounded-xl border border-brand-dark-700 text-sm font-semibold text-white hover:bg-brand-dark-800 transition-colors">
                    View Details
                </button>
            </div>

            <div className="space-y-2">
                <h2 className="text-4xl font-bold text-white">{itemName}</h2>
                <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-green-500">{sells} <span className="text-sm font-medium">Sells</span></span>
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${isPositive ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                        }`}>
                        {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                        {trend}
                    </span>
                </div>
            </div>

            <div className="bg-white/5 border border-brand-dark-700 rounded-2xl p-4 relative group">
                <button className="absolute top-4 right-4 text-brand-dark-400 group-hover:text-white transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-dark-800 flex items-center justify-center text-brand-dark-400">
                        <MoveUpRight className="w-5 h-5" />
                    </div>
                </div>
                <h4 className="text-xs text-brand-dark-400 font-medium mb-3">Most Rated Item</h4>
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden border border-brand-dark-700">
                        <img src={subItemImage} alt={subItemName} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <div className="text-sm font-semibold text-white mb-1">{subItemName}</div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-green-500">{subItemValue}</span>
                            <span className="text-xs text-brand-dark-400">{subItemUnit}</span>
                        </div>
                    </div>
                </div>
                <div className="mt-4 w-full h-1.5 bg-brand-dark-700 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-dark-400 rounded-full opacity-30 w-3/4" />
                </div>
            </div>

            <div className="flex-1 pt-4">
                {/* Simple line chart would go here, using ActivityTrendChart as a placeholder or specific small one */}
                <div className="w-full h-32">
                    {/* In a real scenario, we'd use a simplified Sparkline component */}
                    <div className="w-full h-full flex items-end gap-1">
                        {chartData.map((d, i) => (
                            <div
                                key={i}
                                className="flex-1 bg-brand-dark-400/20 rounded-t-sm relative group cursor-pointer"
                                style={{ height: `${(d.value / 100) * 100}%` }}
                            >
                                <div className="absolute inset-0 bg-brand-dark-100 opacity-0 group-hover:opacity-20 transition-opacity" />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] text-brand-dark-400 uppercase font-medium">
                        <span>Jan</span>
                        <span>Mar</span>
                        <span>May</span>
                        <span>Jul</span>
                        <span>Sep</span>
                        <span>Nov</span>
                    </div>
                </div>
            </div>
        </Card>
    )
}
