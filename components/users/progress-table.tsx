"use client"

import React, { useState, useMemo } from "react"
import {
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
} from "lucide-react"
import TableControls from "@/components/ui/table-controls"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
  const [searchValue, setSearchValue] = useState("")
  const [filterValue, setFilterValue] = useState("all")
  const [sortValue, setSortValue] = useState("default")

  // Filter and sort options
  const filterOptions = [
    { value: "all", label: "All Status" },
    { value: "pending", label: "Pending" },
    { value: "approved", label: "Approved" },
    { value: "rejected", label: "Rejected" },
  ]

  const sortOptions = [
    { value: "default", label: "Default" },
    { value: "group-asc", label: "Name A-Z" },
    { value: "group-desc", label: "Name Z-A" },
    { value: "status-asc", label: "Status A-Z" },
    { value: "status-desc", label: "Status Z-A" },
  ]

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const handleSortChange = (value: string) => {
    setSortValue(value)
    if (value === "default") {
      setSortField(null)
      setSortDirection("asc")
    } else {
      const [field, direction] = value.split("-")
      setSortField(field as SortField)
      setSortDirection(direction as SortDirection)
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

  // Filtering and sorting logic
  const filteredAndSortedData = useMemo(() => {
    let filtered = [...(data ?? [])]

    // Apply search filter
    if (searchValue) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.email.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.lastVisit.location.toLowerCase().includes(searchValue.toLowerCase())
      )
    }

    // Apply status filter
    if (filterValue && filterValue !== "all") {
      filtered = filtered.filter((item) => item.status === filterValue)
    }

    // Apply sorting
    if (sortField) {
      filtered.sort((a, b) => {
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

    return filtered
  }, [data, searchValue, filterValue, sortField, sortDirection])

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

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedData.length / ITEMS_PER_PAGE)
  const paginatedData = filteredAndSortedData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <div className="dark">
      <div className="min-h-screen">
        <div className="mx-auto">
          {/* Table Controls */}
          <TableControls
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            filterValue={filterValue}
            onFilterChange={setFilterValue}
            sortValue={sortValue}
            onSortChange={handleSortChange}
            filterOptions={filterOptions}
            sortOptions={sortOptions}
          />

          {/* Table */}
          <div className="bg-brand-dark-900 rounded-lg border border-brand-dark-800 overflow-hidden">
            <Table>
              <TableHeader>
                {/* Full-width title row */}
                <TableRow className="border-brand-dark-800 hover:bg-transparent">
                  <TableHead colSpan={5} className="h-[56px]">
                    <div className="flex items-center justify-between">
                      <h1 className="text-xl font-semibold text-brand-dark-100">{title}</h1>
                      <button className="p-2 hover:bg-brand-dark-800 rounded-lg transition-colors">
                        <MoreHorizontal className="w-5 h-5 text-brand-dark-400" />
                      </button>
                    </div>
                  </TableHead>
                </TableRow>
                <TableRow className="border-brand-dark-800 hover:bg-transparent">
                  <TableHead>
                    <button
                      className="flex items-center gap-2 text-left text-sm font-medium text-brand-dark-300 hover:text-brand-dark-100 transition-colors"
                      onClick={() => handleSort("group")}
                    >
                      Group
                      <SortIcon field="group" />
                    </button>
                  </TableHead>
                  <TableHead className="text-brand-dark-300">Total Hano Coins</TableHead>
                  <TableHead className="text-brand-dark-300">Last Visit</TableHead>
                  <TableHead>
                    <button
                      className="flex items-center gap-2 text-left text-sm font-medium text-brand-dark-300 hover:text-brand-dark-100 transition-colors"
                      onClick={() => handleSort("status")}
                    >
                      Account Status
                      <SortIcon field="status" />
                    </button>
                  </TableHead>
                  <TableHead className="text-brand-dark-300">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedData.map((request) => (
                  <TableRow key={request.id} className="border-brand-dark-800 hover:bg-brand-dark-800/50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <img
                          src={request.avatar}
                          alt={request.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-medium text-brand-dark-100">
                            {request.name}
                          </div>
                          <div className="text-sm text-brand-dark-400">
                            {request.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col justify-center">
                        <div className="font-semibold text-brand-dark-100">
                          {request.totalCoins.toLocaleString()}
                        </div>
                        <div className="text-sm text-brand-dark-400">
                          {request.places} Places
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col justify-center">
                        <div className="font-medium text-brand-dark-100">
                          {request.lastVisit.location}
                        </div>
                        <div className="text-sm text-brand-dark-400">
                          {request.lastVisit.time}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={getStatusBadge(request.status)}>
                        <span className="w-2 h-2 rounded-full bg-white mr-2"></span>
                        {request.status.charAt(0).toUpperCase() +
                          request.status.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <button
                        onClick={() => onViewDetails?.(request)}
                        className="px-4 py-2 bg-[#ffffff] text-brand-dark-800 rounded-lg text-sm font-medium transition-colors border border-brand-dark-700"
                      >
                        View Details
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              {/* Full-width pagination row inside body to avoid extra component import */}
              <TableRow className="hover:bg-transparent border-t border-brand-dark-800">
                <TableCell colSpan={5} className="p-3">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="px-3 py-2 text-sm text-brand-dark-400 hover:text-brand-dark-100 disabled:opacity-50"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    >
                      Prev
                    </button>

                    {getPageNumbers(totalPages, currentPage).map((page, index) =>
                      page === "..." ? (
                        <span key={`dots-${index}`} className="px-2 text-brand-dark-500">...</span>
                      ) : (
                        <button
                          key={`page-${page}`}
                          className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                            currentPage === page
                              ? "text-brand-dark-100"
                              : "text-brand-dark-400 hover:text-brand-dark-100"
                          }`}
                          onClick={() => setCurrentPage(Number(page))}
                        >
                          {page}
                        </button>
                      )
                    )}

                    <button
                      className="px-3 py-2 text-sm text-brand-dark-400 hover:text-brand-dark-100 disabled:opacity-50"
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    >
                      Next
                    </button>
                  </div>
                </TableCell>
              </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressTable
