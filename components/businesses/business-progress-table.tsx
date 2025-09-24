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
  const [searchValue, setSearchValue] = useState("")
  const [filterValue, setFilterValue] = useState("all")
  const [sortValue, setSortValue] = useState("default")

  // Filter and sort options
  const filterOptions = [
    { value: "all", label: "All Rewards" },
    { value: "rewarded", label: "Rewarded" },
    { value: "pending", label: "Pending" },
  ]

  const sortOptions = [
    { value: "default", label: "Default" },
    { value: "group-asc", label: "Name A-Z" },
    { value: "group-desc", label: "Name Z-A" },
    { value: "rewards-asc", label: "Rewards Low-High" },
    { value: "rewards-desc", label: "Rewards High-Low" },
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

  // Filtering and sorting logic
  const filteredAndSortedData = useMemo(() => {
    let filtered = [...(data ?? [])]

    // Apply search filter
    if (searchValue) {
      filtered = filtered.filter((item) =>
        item.businessName.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.email.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.category.toLowerCase().includes(searchValue.toLowerCase())
      )
    }

    // Apply reward filter
    if (filterValue === "rewarded") {
      filtered = filtered.filter((item) => item.rewarded === true)
    } else if (filterValue === "pending") {
      filtered = filtered.filter((item) => item.rewarded !== true)
    }

    // Apply sorting
    if (sortField) {
      filtered.sort((a, b) => {
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

    return filtered
  }, [data, searchValue, filterValue, sortField, sortDirection])

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
  const totalPages = Math.ceil(filteredAndSortedData.length / ITEMS_PER_PAGE)
  const paginatedData = filteredAndSortedData.slice(
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
                {/* Full-width title row with fixed height 49px */}
                <TableRow className="border-brand-dark-800 bg-brand-dark-900 hover:bg-transparent">
                  <TableHead colSpan={6} className="h-[49px]">
                    <div className="flex items-center justify-between">
                      <h1 className="text-xl font-semibold text-brand-dark-100">{title}</h1>
                      <button className="p-2 hover:bg-brand-dark-800 rounded-lg transition-colors">
                        <MoreHorizontal className="w-5 h-5 text-brand-dark-400" />
                      </button>
                    </div>
                  </TableHead>
                </TableRow>
                <TableRow className="border-brand-dark-800 bg-brand-dark-900 hover:bg-transparent">
                  <TableHead className="w-12">
                    <input
                      type="checkbox"
                      aria-label="Select all"
                      checked={allSelectedOnPage}
                      onChange={toggleSelectAllOnPage}
                      ref={(el) => {
                        if (el) el.indeterminate = someSelectedOnPage
                      }}
                      className="h-4 w-4 rounded border-brand-dark-600text-blue-500 focus:ring-0"
                    />
                  </TableHead>
                  <TableHead>
                    <button
                      className="flex items-center gap-2 text-left text-sm font-medium text-brand-dark-300 hover:text-brand-dark-100 transition-colors"
                      onClick={() => handleSort("group")}
                    >
                      Group
                      <SortIcon field="group" />
                    </button>
                  </TableHead>
                  <TableHead className="text-brand-dark-300">Time</TableHead>
                  <TableHead className="text-brand-dark-300">Category</TableHead>
                  <TableHead>
                    <button
                      className="flex items-center gap-2 text-left text-sm font-medium text-brand-dark-300 hover:text-brand-dark-100 transition-colors"
                      onClick={() => handleSort("rewards")}
                    >
                      Rewards
                      <SortIcon field="rewards" />
                    </button>
                  </TableHead>
                  <TableHead className="text-brand-dark-300">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedData.map((visit) => (
                  <TableRow key={visit.id} className="border-brand-dark-800 hover:bg-brand-dark-800/50">
                    <TableCell>
                      <input
                        type="checkbox"
                        aria-label={`Select ${visit.businessName}`}
                        checked={selectedIds.has(visit.id)}
                        onChange={() => toggleSelectOne(visit.id)}
                        className="h-4 w-4 rounded border-brand-dark-600 bg-brand-dark-800 text-blue-500 focus:ring-0"
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-dark-900 flex items-center justify-center">
                          <div className="w-6 h-6 text-white font-bold text-xs">S</div>
                        </div>
                        <div>
                          <div className="font-medium text-brand-dark-100">
                            {visit.businessName}
                          </div>
                          <div className="text-sm text-brand-dark-400">
                            {visit.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col justify-center">
                        <div className="font-medium text-brand-dark-100">
                          {visit.time.date}
                        </div>
                        <div className="text-sm text-brand-dark-400">
                          {visit.time.clock}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col justify-center">
                        <div className="font-medium text-brand-dark-100">
                          {visit.category}
                        </div>
                        <div className="text-sm text-brand-dark-400">
                          {visit.subcategory}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
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
                    </TableCell>
                    <TableCell>
                      <button
                        onClick={() => onViewDetails?.(visit)}
                        className="px-4 py-2 bg-[#ffffff] text-brand-dark-800 rounded-lg text-sm font-medium transition-colors border border-brand-dark-700"
                      >
                        View Details
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              {/* Full-width pagination row */}
              <TableRow className="hover:bg-transparent border-t border-brand-dark-800">
                <TableCell colSpan={6} className="p-3">
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
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessProgressTable
