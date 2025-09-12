"use client"

import React, { useState, useMemo } from "react"
import {
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
} from "lucide-react"

export interface BusinessVisitHistory {
  id: string
  businessName: string
  email: string
  avatar: string
  time: {
    date: string
    clock: string
  }
  category: string
  subcategory: string
  rewards: number
  rewarded?: boolean
}

interface BusinessProgressTableProps {
  data: BusinessVisitHistory[]
  title?: string
  onViewDetails?: (visit: BusinessVisitHistory) => void
}

type SortField = "group" | "rewards" | null
type SortDirection = "asc" | "desc"

const ITEMS_PER_PAGE = 5

const BusinessProgressTable: React.FC<BusinessProgressTableProps> = ({
  data,
  title = "Visit History",
  onViewDetails,
}) => {
  const [sortField, setSortField] = useState<SortField>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const getRewardBadge = (rewarded?: boolean) => {
    const baseClasses =
      "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium"
    return rewarded
      ? `${baseClasses} bg-green-900/30 text-green-300 border border-green-900`
      : `${baseClasses} hidden`
  }

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) {
      return <ChevronDown className="w-4 h-4 opacity-50" />
    }
    return sortDirection === "asc" ? (
      <ChevronUp className="w-4 h-4" />
    ) : (
      <ChevronDown className="w-4 h-4" />
    )
  }

  // Sorting logic
  const sortedData = useMemo(() => {
    let sorted = [...(data ?? [])]
    if (sortField) {
      sorted.sort((a, b) => {
        let valA, valB
        if (sortField === "group") {
          valA = a.businessName.toLowerCase()
          valB = b.businessName.toLowerCase()
        } else if (sortField === "rewards") {
          valA = a.rewards
          valB = b.rewards
        }
        if (valA! < valB!) return sortDirection === "asc" ? -1 : 1
        if (valA! > valB!) return sortDirection === "asc" ? 1 : -1
        return 0
      })
    }
    return sorted
  }, [sortField, sortDirection, data])

  // Page numbers with ellipsis
  const getPageNumbers = (totalPages: number, currentPage: number) => {
    const pages: (number | string)[] = []

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)

      if (currentPage > 3) {
        pages.push("...")
      }

      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i)
      }

      if (currentPage < totalPages - 2) {
        pages.push("...")
      }

      pages.push(totalPages)
    }

    return pages
  }

  // Pagination
  const totalPages = Math.ceil(sortedData.length / ITEMS_PER_PAGE)
  const paginatedData = sortedData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const allSelectedOnPage =
    paginatedData.length > 0 &&
    paginatedData.every((r) => selectedIds.has(r.id))
  const someSelectedOnPage =
    paginatedData.some((r) => selectedIds.has(r.id)) && !allSelectedOnPage

  const toggleSelectAllOnPage = () => {
    const next = new Set(selectedIds)
    if (allSelectedOnPage) {
      paginatedData.forEach((r) => next.delete(r.id))
    } else {
      paginatedData.forEach((r) => next.add(r.id))
    }
    setSelectedIds(next)
  }

  const toggleSelectOne = (id: string) => {
    const next = new Set(selectedIds)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    setSelectedIds(next)
  }

  return (
    <div className="dark">
      <div className="min-h-screen bg-dark-900">
        <div className="mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-semibold text-gray-100">{title}</h1>
            <button className="p-2 hover:bg-dark-800 rounded-lg transition-colors">
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Table */}
          <div className="bg-dark-900 rounded-lg border border-gray-800 overflow-hidden">
            {/* Table Header */}
            <div
              className="hidden md:grid gap-4 px-6 py-4 border-b border-gray-800 bg-dark-900/50"
              style={{
                gridTemplateColumns: "28px 2fr 1fr 1fr 1fr 1fr",
              }}
            >
              {/* Select all */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  aria-label="Select all"
                  checked={allSelectedOnPage}
                  onChange={toggleSelectAllOnPage}
                  ref={(el) => {
                    if (el) el.indeterminate = someSelectedOnPage
                  }}
                  className="h-4 w-4 rounded border-gray-600 bg-dark-800 text-blue-500 focus:ring-0"
                />
              </div>
              <button
                className="flex items-center gap-2 text-left text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors"
                onClick={() => handleSort("group")}
              >
                Group
                <SortIcon field="group" />
              </button>
              <div className="text-sm font-medium text-gray-300">Time</div>
              <div className="text-sm font-medium text-gray-300">Category</div>
              <button
                className="flex items-center gap-2 text-left text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors"
                onClick={() => handleSort("rewards")}
              >
                Rewards
                <SortIcon field="rewards" />
              </button>
              <div className="text-sm font-medium text-gray-300">Action</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-800">
              {paginatedData.map((visit) => (
                <div
                  key={visit.id}
                  className="grid grid-cols-1 gap-4 px-6 py-4 hover:bg-dark-800/50 transition-colors md:grid"
                  style={{
                    gridTemplateColumns: "28px 2fr 1fr 1fr 1fr 1fr",
                  }}
                >
                  {/* Row checkbox */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      aria-label={`Select ${visit.businessName}`}
                      checked={selectedIds.has(visit.id)}
                      onChange={() => toggleSelectOne(visit.id)}
                      className="h-4 w-4 rounded border-gray-600 bg-dark-800 text-blue-500 focus:ring-0"
                    />
                  </div>

                  {/* Group */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                      <div className="w-6 h-6 text-white font-bold text-xs">S</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-100">
                        {visit.businessName}
                      </div>
                      <div className="text-sm text-gray-400">
                        {visit.email}
                      </div>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex flex-col justify-center">
                    <div className="font-medium text-gray-100">
                      {visit.time.date}
                    </div>
                    <div className="text-sm text-gray-400">
                      {visit.time.clock}
                    </div>
                  </div>

                  {/* Category */}
                  <div className="flex flex-col justify-center">
                    <div className="font-medium text-gray-100">
                      {visit.category}
                    </div>
                    <div className="text-sm text-gray-400">
                      {visit.subcategory}
                    </div>
                  </div>

                  {/* Rewards */}
                  <div className="flex items-center gap-3">
                    {!visit.rewarded && (
                      <div className="font-semibold text-red-400">
                        {visit.rewards > 0
                          ? `+${visit.rewards}`
                          : `${visit.rewards}`}
                      </div>
                    )}
                    {visit.rewarded && (
                      <span className={getRewardBadge(true)}>
                        <span className="w-2 h-2 rounded-full bg-white mr-2"></span>
                        Rewarded
                      </span>
                    )}
                  </div>

                  {/* Action */}
                  <div className="flex items-center">
                    <button
                      onClick={() => onViewDetails?.(visit)}
                      className="px-4 py-2 bg-[#ffffff] text-brand-dark-800 rounded-lg text-sm font-medium transition-colors border border-gray-700"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center mt-6 gap-2">
            <button
              className="px-3 py-2 text-sm text-gray-400 hover:text-gray-100 disabled:opacity-50"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            >
              ← Prev
            </button>

            {getPageNumbers(totalPages, currentPage).map((page, index) =>
              page === "..." ? (
                <span key={`dots-${index}`} className="px-2 text-gray-500">
                  ...
                </span>
              ) : (
                <button
                  key={`page-${page}`}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === page
                      ? "bg-dark-700 text-gray-100"
                      : "text-gray-400 hover:text-gray-100 hover:bg-dark-800"
                  }`}
                  onClick={() => setCurrentPage(Number(page))}
                >
                  {page}
                </button>
              )
            )}

            <button
              className="px-3 py-2 text-sm text-gray-400 hover:text-gray-100 disabled:opacity-50"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessProgressTable
