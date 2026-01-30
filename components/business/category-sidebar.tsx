"use client"

import React from "react"
import { Search, Plus, ArrowRight, X } from "lucide-react"

interface Category {
    id: string
    name: string
    count: number
    icon?: string
}

export default function CategorySidebar() {
    const categories: Category[] = [
        { id: "1", name: "Drinks", count: 120 },
        { id: "2", name: "Desserts", count: 120 },
        { id: "3", name: "Specials", count: 120 },
        { id: "4", name: "Main Dishes", count: 120 },
    ]

    return (
        <div className="w-80 flex flex-col gap-10 pr-8 border-r border-[#222222]">
            {/* Selected Tags */}
            <div className="flex flex-wrap gap-3">
                {["All Items", "All Items", "All Items"].map((tag, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] border border-[#222222] rounded-full text-sm text-brand-dark-100 whitespace-nowrap"
                    >
                        {tag}
                        <X className="w-4 h-4 text-brand-dark-400 cursor-pointer" />
                    </div>
                ))}
            </div>

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-medium text-white">More Categories</h3>
                    <button className="text-sm font-medium text-orange-500 flex items-center gap-2 hover:text-orange-400 transition-colors">
                        Category Settings <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-dark-400" />
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="w-full bg-[#0A0A0A] border border-[#222222] rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-brand-dark-400 focus:outline-none focus:border-brand-dark-600 transition-colors"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className="bg-[#111111] border border-[#222222] rounded-2xl p-4 flex flex-col gap-4 group cursor-pointer hover:border-brand-dark-600 transition-all"
                        >
                            <div className="flex items-center justify-between">
                                <div className="px-2 py-1 bg-[#1A1A1A] rounded text-[10px] text-brand-dark-300 font-bold">
                                    {cat.count}
                                </div>
                                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-brand-dark-300 group-hover:bg-white group-hover:text-black transition-all">
                                    <Plus className="w-4 h-4" />
                                </div>
                            </div>
                            <span className="text-sm font-semibold text-white">{cat.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
