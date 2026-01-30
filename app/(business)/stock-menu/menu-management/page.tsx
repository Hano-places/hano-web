"use client"

import React, { useState } from "react"
import Link from "next/link"
import { UtensilsCrossed, Plus, Download, Rocket, TrendingDown, Star, PlusCircle } from "lucide-react"
import PageHeader from "@/components/layout/page-header"
import { Button } from "@/components/ui/button"
import PerformanceMetricCard from "@/components/business/performance-metric-card"
import CategorySidebar from "@/components/business/category-sidebar"
import MenuItemTable from "@/components/business/menu-item-table"
import TableControls from "@/components/ui/table-controls"

export default function MenuManagementPage() {
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("")
    const [sort, setSort] = useState("")

    const headerActions = (
        <>
            <Button className="h-14 px-6 bg-white text-brand-dark-900 hover:bg-gray-100 font-bold rounded-xl gap-3">
                <PlusCircle className="w-6 h-6" />
                Add Item
            </Button>
            <Button className="h-14 px-6 bg-white text-brand-dark-900 hover:bg-gray-100 font-bold rounded-xl gap-3">
                <Plus className="w-6 h-6" />
                New Menu
            </Button>
            <Button className="h-14 px-6 bg-white text-brand-dark-900 hover:bg-gray-100 font-bold rounded-xl gap-3">
                <Download className="w-6 h-6" />
                Export Menu
            </Button>
        </>
    )

    return (
        <div className="space-y-12 pb-12">
            <PageHeader
                breadcrumbs={[
                    { label: "Home", href: "/dashboard" },
                    { label: "Stock & Menu", href: "/stock-menu" },
                    { label: "Menu Management" }
                ]}
                actions={headerActions}
                hideDefaultActions
            />

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PerformanceMetricCard
                    title="Most Rated Item"
                    name="Large Pizza"
                    value={234}
                    unit="In Last Month"
                    image="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=300"
                    progress={75}
                    icon={<Rocket className="w-6 h-6" />}
                />
                <PerformanceMetricCard
                    title="Least Selling Item"
                    name="Least Selling Item"
                    value={234}
                    unit="In Last Month"
                    image="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=300"
                    progress={30}
                    icon={<TrendingDown className="w-6 h-6" />}
                />
                <PerformanceMetricCard
                    title="Most Rated Item"
                    name="Large Pizza"
                    value={234}
                    unit="In Last Month"
                    image="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=300"
                    progress={75}
                    icon={<Star className="w-6 h-6" />}
                />
            </div>

            {/* Selected Items & Filters Bar */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <h3 className="text-xl font-bold text-white">Selected</h3>
                    <button className="w-10 h-10 rounded-xl bg-[#111111] border border-[#222222] flex items-center justify-center text-white hover:bg-white/5 transition-all">
                        <Plus className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <button className="h-14 px-5 bg-[#111111] border border-[#222222] rounded-xl flex items-center gap-3 text-brand-dark-100 hover:bg-white/5 transition-all min-w-[180px]">
                                <div className="w-5 h-5 flex items-center justify-center border border-brand-dark-400 rounded-sm">
                                    <div className="w-2.5 h-0.5 bg-brand-dark-400" />
                                </div>
                                <span className="text-base font-medium">Filter by</span>
                                <Plus className="w-4 h-4 ml-auto text-brand-dark-400" />
                            </button>
                        </div>
                        <div className="relative group">
                            <button className="h-14 px-5 bg-[#111111] border border-[#222222] rounded-xl flex items-center gap-3 text-brand-dark-100 hover:bg-white/5 transition-all min-w-[180px]">
                                <div className="w-5 h-5 flex items-center justify-center border border-brand-dark-400 rounded-sm">
                                    <div className="w-3 h-3 border-t-2 border-r-2 border-brand-dark-400 rotate-45" />
                                </div>
                                <span className="text-base font-medium">Sort by</span>
                                <Plus className="w-4 h-4 ml-auto text-brand-dark-400" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content: Sidebar + Table */}
            <div className="flex gap-4">
                <CategorySidebar />
                <MenuItemTable />
            </div>
        </div>
    )
}
