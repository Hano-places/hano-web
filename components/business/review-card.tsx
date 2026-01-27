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
        <div className="bg-brand-dark-900 border border-brand-dark-700 rounded-3xl p-8 flex flex-col gap-6 min-w-[350px]">
            <div className="flex items-center justify-between">
                <span className="text-4xl font-bold text-white">{rating}</span>
                <button className="text-brand-dark-400 hover:text-white transition-colors">
                    <Flag className="w-5 h-5" />
                </button>
            </div>

            <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                        key={s}
                        className={`w-5 h-5 ${s <= rating ? "fill-amber-500 text-amber-500" : "text-brand-dark-700"}`}
                    />
                ))}
            </div>

            <p className="text-brand-dark-300 text-sm leading-relaxed">
                {text}
            </p>

            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-dark-700">
                    <img src={userAvatar} alt={userName} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <div className="text-sm font-semibold text-white">{userName}</div>
                    <div className="text-xs text-brand-dark-400">{userEmail}</div>
                </div>
                <div className="text-xs text-brand-dark-400">{timeAgo}</div>
            </div>

            <div className="bg-white/5 border border-brand-dark-700 rounded-2xl p-4 flex items-center gap-4">
                <div className="w-16 h-12 rounded-lg overflow-hidden border border-brand-dark-700">
                    <img src={itemImage} alt={itemName} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <div className="text-sm font-semibold text-white truncate">{itemName}</div>
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold">
                        <ArrowUpRight className="w-2.5 h-2.5" />
                        {itemTrend}
                    </div>
                </div>
            </div>
        </div>
    )
}
