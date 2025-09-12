"use client"

import React, { useState, useMemo } from "react"
import {
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
} from "lucide-react"

export interface RegistrationRequest {
  id: string
  name: string
  email: string
  avatar: string
  totalCoins: number
  places: number
  lastVisit: {
    location: string
    time: string
  }
  status: "pending" | "approved" | "rejected"
}

interface ProgressTableProps {
  data: RegistrationRequest[]
  title?: string
  onViewDetails?: (request: RegistrationRequest) => void
}

type SortField = "group" | "status" | null
type SortDirection = "asc" | "desc"

const ITEMS_PER_PAGE = 5

const ProgressTable: React.FC<ProgressTableProps> = ({
  data,
  title = "Recent Business Registration Requests",
  onViewDetails,
}) => {
  const [sortField, setSortField] = useState<SortField>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc")
  const [currentPage, setCurrentPage] = useState(1)

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const getStatusBadge = (status: string) => {
    const baseClasses =
      "inline-flex items-center px-3 py-1 rounded-md text-sm font-medium"
    switch (status) {
      case "pending":
        return `${baseClasses} bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300`
      case "approved":
        return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300`
      case "rejected":
        return `${baseClasses} bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300`
      default:
        return baseClasses
    }
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

  // ✅ Sorting logic
  const sortedData = useMemo(() => {
    let sorted = [...(data ?? [])]
    if (sortField) {
      sorted.sort((a, b) => {
        let valA, valB
        if (sortField === "group") {
          valA = a.name.toLowerCase()
          valB = b.name.toLowerCase()
        } else if (sortField === "status") {
          valA = a.status
          valB = b.status
        }
        if (valA! < valB!) return sortDirection === "asc" ? -1 : 1
        if (valA! > valB!) return sortDirection === "asc" ? 1 : -1
        return 0
      })
    }
    return sorted
  }, [sortField, sortDirection, data])

  // ✅ Compact page numbers
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

  // ✅ Pagination
  const totalPages = Math.ceil(sortedData.length / ITEMS_PER_PAGE)
  const paginatedData = sortedData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

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
              style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr" }}
            >
              <button
                className="flex items-center gap-2 text-left text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors"
                onClick={() => handleSort("group")}
              >
                Group
                <SortIcon field="group" />
              </button>
              <div className="text-sm font-medium text-gray-300">
                Total Hano Coins
              </div>
              <div className="text-sm font-medium text-gray-300">
                Last Visit
              </div>
              <button
                className="flex items-center gap-2 text-left text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors"
                onClick={() => handleSort("status")}
              >
                Account Status
                <SortIcon field="status" />
              </button>
              <div className="text-sm font-medium text-gray-300">Action</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-800">
              {paginatedData.map((request) => (
                <div
                  key={request.id}
                  className="grid grid-cols-1 gap-4 px-6 py-4 hover:bg-dark-800/50 transition-colors md:grid"
                  style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr" }}
                >
                  {/* Group */}
                  <div className="flex items-center gap-3">
                    <img
                      src={request.avatar}
                      alt={request.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-gray-100">
                        {request.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {request.email}
                      </div>
                    </div>
                  </div>

                  {/* Total Hano Coins */}
                  <div className="flex flex-col justify-center">
                    <div className="font-semibold text-gray-100">
                      {request.totalCoins.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">
                      {request.places} Places
                    </div>
                  </div>

                  {/* Last Visit */}
                  <div className="flex flex-col justify-center">
                    <div className="font-medium text-gray-100">
                      {request.lastVisit.location}
                    </div>
                    <div className="text-sm text-gray-400">
                      {request.lastVisit.time}
                    </div>
                  </div>

                  {/* Account Status */}
                  <div className="flex items-center">
                    <span className={getStatusBadge(request.status)}>
                      <span className="w-2 h-2 rounded-full bg-white mr-2"></span>
                      {request.status.charAt(0).toUpperCase() +
                        request.status.slice(1)}
                    </span>
                  </div>

                  {/* Action */}
                  <div className="flex items-center">
                    <button
                      onClick={() => onViewDetails?.(request)}
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
              Prev
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
              onClick={() =>
                setCurrentPage((p) => Math.min(totalPages, p + 1))
              }
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressTable
