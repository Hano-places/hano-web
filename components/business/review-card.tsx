"use client"

import React from "react"
import { Star, Flag, ArrowUpRight } from "lucide-react"

interface ClientReviewCardProps {
    rating: number
    text: string
    userName: string
    userEmail: string
    userAvatar: string
    timeAgo: string
    itemName: string
    itemImage: string
    itemTrend: string
}

export default function ClientReviewCard({
    rating,
    text,
    userName,
    userEmail,
    userAvatar,
    timeAgo,
    itemName,
    itemImage,
    itemTrend,
}: ClientReviewCardProps) {
    return (
        <div className="bg-[#111111] border border-[#222222] rounded-3xl p-8 flex flex-col gap-6 min-w-[380px]">
            <div className="flex items-start justify-between">
                <span className="text-5xl font-medium text-white">{rating}</span>
                <button className="text-brand-dark-400 hover:text-white transition-colors mt-1">
                    <Flag className="w-5 h-5" />
                </button>
            </div>

            <div className="flex items-center gap-1.5 -mt-2">
                {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                        key={s}
                        className={`w-6 h-6 ${s <= rating ? "fill-orange-500 text-orange-500" : "fill-white text-white"}`}
                    />
                ))}
            </div>

            <p className="text-brand-dark-300 text-base leading-relaxed font-normal">
                {text}
            </p>

            <div className="flex items-center gap-4 py-2">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src={userAvatar} alt={userName} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col">
                    <span className="text-base font-semibold text-white leading-tight">{userName}</span>
                    <span className="text-sm text-brand-dark-400">{userEmail}</span>
                </div>
                <span className="text-sm text-brand-dark-400 whitespace-nowrap">{timeAgo}</span>
            </div>

            <div className="bg-[#0A0A0A] rounded-2xl p-4 flex items-center gap-5 border border-white/5">
                <div className="w-24 h-16 rounded-xl overflow-hidden shadow-2xl">
                    <img src={itemImage} alt={itemName} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-lg font-bold text-white leading-tight">{itemName}</div>
                    <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-[12px] font-bold w-fit">
                        <ArrowUpRight className="w-4 h-4" />
                        {itemTrend}
                    </div>
                </div>
            </div>
        </div>
    )
}
