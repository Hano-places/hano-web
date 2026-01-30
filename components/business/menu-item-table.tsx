"use client"

import React from "react"
import { Search, ChevronLeft, ChevronRight, Maximize2, Trash2, Settings2, Star } from "lucide-react"

interface MenuItem {
    id: string
    name: string
    description: string
    price: string
    components: number
    rating: number
    ranking: string
    image: string
}

export default function MenuItemTable() {
    const items: MenuItem[] = [
        {
            id: "1",
            name: "Majestic Combo",
            description: "Juicy skewers of goat meat, marinated in local...",
            price: "2,300 RWF",
            components: 12,
            rating: 4.5,
            ranking: "24/120",
            image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=300",
        },
        {
            id: "2",
            name: "Majestic Combo",
            description: "Juicy skewers of goat meat, marinated in local...",
            price: "2,300 RWF",
            components: 12,
            rating: 4.5,
            ranking: "24/120",
            image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=300",
        },
        // Repeat for demo...
    ]

    const fullList = [...items, ...items, ...items]

    return (
        <div className="flex-1 flex flex-col gap-8">
            {/* Search */}
            <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-brand-dark-400" />
                <input
                    type="text"
                    placeholder="Search here..."
                    className="w-full bg-[#111111] border border-[#222222] rounded-2xl py-5 pl-16 pr-6 text-base text-white placeholder:text-brand-dark-400 focus:outline-none focus:border-brand-dark-600 transition-colors"
                />
            </div>

            <div className="bg-[#111111] border border-[#222222] rounded-3xl overflow-hidden">
                <div className="p-8 border-b border-[#222222]">
                    <h3 className="text-xl font-medium text-white">Showing 120 Items</h3>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#222222]">
                                <th className="px-8 py-6 text-left w-12">
                                    <input type="checkbox" className="w-5 h-5 rounded border-[#333333] bg-transparent" />
                                </th>
                                <th className="px-4 py-6 text-left text-sm font-medium text-brand-dark-400 uppercase tracking-wider">Items Details</th>
                                <th className="px-4 py-6 text-left text-sm font-medium text-brand-dark-400 uppercase tracking-wider">Price & Components</th>
                                <th className="px-4 py-6 text-left text-sm font-medium text-brand-dark-400 uppercase tracking-wider">Rating & Ranking</th>
                                <th className="px-8 py-6 text-right text-sm font-medium text-brand-dark-400 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#222222]">
                            {fullList.map((item, idx) => (
                                <tr key={idx} className="group hover:bg-white/5 transition-colors">
                                    <td className="px-8 py-6">
                                        <input type="checkbox" className="w-5 h-5 rounded border-[#333333] bg-transparent cursor-pointer" />
                                    </td>
                                    <td className="px-4 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-20 h-16 rounded-xl overflow-hidden shadow-lg border border-white/5">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex flex-col gap-1 max-w-[200px]">
                                                <span className="text-base font-bold text-white">{item.name}</span>
                                                <span className="text-xs text-brand-dark-400 line-clamp-2">{item.description}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-6">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-base font-bold text-white">{item.price}</span>
                                            <span className="text-sm text-brand-dark-400">{item.components} Components</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-6">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-1.5">
                                                <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                                                <span className="text-base font-bold text-white">{item.rating}</span>
                                            </div>
                                            <span className="text-sm text-brand-dark-400">{item.ranking}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center justify-end gap-6">
                                            <button className="text-brand-dark-100 hover:text-white transition-colors">
                                                <Maximize2 className="w-5 h-5" />
                                            </button>
                                            <button className="text-red-500 hover:text-red-400 transition-colors">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                            <button className="text-blue-500 hover:text-blue-400 transition-colors">
                                                <Settings2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-8 py-8 flex items-center justify-between border-t border-[#222222]">
                    <button className="flex items-center gap-2 text-sm font-medium text-brand-dark-100 hover:text-white transition-colors">
                        <ChevronLeft className="w-5 h-5" /> Prev
                    </button>

                    <div className="flex items-center gap-6">
                        {[1, 2, "...", 5, 6].map((p, i) => (
                            <button
                                key={i}
                                className={`text-sm font-bold ${p === 5 ? "text-white underline underline-offset-8 decoration-2" : "text-brand-dark-400 hover:text-white"} transition-colors`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>

                    <button className="flex items-center gap-2 text-sm font-medium text-brand-dark-100 hover:text-white transition-colors">
                        Next <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}
