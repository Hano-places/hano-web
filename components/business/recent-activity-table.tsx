"use client"

import React, { useState, useMemo } from "react"
import { MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import TableControls from "@/components/ui/table-controls"

export interface ActivityItem {
    id: string
    name: string
    email: string
    avatar: string
    time: string
    date: string
    coins: number
    visits?: number
    rewards: number | "rewarded"
}

interface RecentActivityTableProps {
    data: ActivityItem[]
    title?: string
}

const ITEMS_PER_PAGE = 5

export default function RecentActivityTable({
    data,
    title = "Recent Activity",
}: RecentActivityTableProps) {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState("")
    const [filterValue, setFilterValue] = useState("all")
    const [sortValue, setSortValue] = useState("newest")

    const filterOptions = [
        { value: "all", label: "All Status" },
        { value: "rewarded", label: "Rewarded" },
    ]

    const sortOptions = [
        { value: "newest", label: "Newest" },
        { value: "oldest", label: "Oldest" },
    ]

    const filteredData = useMemo(() => {
        let filtered = [...data]

        if (searchValue) {
            filtered = filtered.filter(item =>
                item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                item.email.toLowerCase().includes(searchValue.toLowerCase())
            )
        }

        if (filterValue !== "all") {
            filtered = filtered.filter(item => item.rewards === filterValue)
        }

        if (sortValue === "newest") {
            // Mock sort as we don't have real timestamps, but assume they are in order
        }

        return filtered
    }, [data, searchValue, filterValue, sortValue])

    const paginatedData = filteredData.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    )

    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE)

    const getPageNumbers = () => {
        const pages = []
        for (let i = 1; i <= totalPages; i++) pages.push(i)
        return pages
    }

    return (
        <div className="space-y-6">
            <TableControls
                searchValue={searchValue}
                onSearchChange={setSearchValue}
                filterValue={filterValue}
                onFilterChange={setFilterValue}
                sortValue={sortValue}
                onSortChange={setSortValue}
                filterOptions={filterOptions}
                sortOptions={sortOptions}
            />

            {/* Table Content */}
            <div className="bg-brand-dark-900 rounded-2xl border border-brand-dark-800 overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow className="border-brand-dark-800 hover:bg-transparent">
                            <TableHead colSpan={5} className="py-6 px-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                                    <button className="p-2 hover:bg-brand-dark-800 rounded-lg transition-colors">
                                        <MoreHorizontal className="w-5 h-5 text-brand-dark-400" />
                                    </button>
                                </div>
                            </TableHead>
                        </TableRow>
                        <TableRow className="border-brand-dark-800 hover:bg-transparent text-brand-dark-400">
                            <TableHead className="px-6">Group ↓</TableHead>
                            <TableHead>Time</TableHead>
                            <TableHead>Hano Coins</TableHead>
                            <TableHead>Rewards</TableHead>
                            <TableHead className="text-right px-6">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedData.map((item) => (
                            <TableRow key={item.id} className="border-brand-dark-800 hover:bg-brand-dark-800/30 py-4">
                                <TableCell className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-brand-dark-800">
                                            <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="text-white font-medium">{item.name}</div>
                                            <div className="text-sm text-brand-dark-400">{item.email}</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="text-brand-dark-100">{item.date}</div>
                                    <div className="text-sm text-brand-dark-400">{item.time}</div>
                                </TableCell>
                                <TableCell>
                                    <div className="text-brand-dark-100 font-semibold">{item.coins.toLocaleString()}</div>
                                    <div className="text-sm text-brand-dark-400">{item.visits} visits</div>
                                </TableCell>
                                <TableCell>
                                    {item.rewards === "rewarded" ? (
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-500 gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                            Rewarded
                                        </span>
                                    ) : (
                                        <span className="text-orange-500 font-semibold">+{item.rewards}</span>
                                    )}
                                </TableCell>
                                <TableCell className="text-right px-6">
                                    <button className="bg-white text-brand-dark-900 px-6 py-2.5 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                                        View Details
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/* Pagination */}
                <div className="flex items-center justify-between px-6 py-6 border-t border-brand-dark-800">
                    <button
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="flex items-center gap-2 text-brand-dark-300 hover:text-white disabled:opacity-50 font-medium"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        Prev
                    </button>
                    <div className="flex items-center gap-2">
                        {getPageNumbers().map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-10 h-10 rounded-xl flex items-center justify-center font-medium transition-colors ${currentPage === page ? "bg-white text-brand-dark-900" : "text-brand-dark-400 hover:text-white"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="flex items-center gap-2 text-brand-dark-300 hover:text-white disabled:opacity-50 font-medium"
                    >
                        Next
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}
