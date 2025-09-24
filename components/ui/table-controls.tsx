"use client"

import React from "react"
import { Search, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface TableControlsProps {
  searchValue: string
  onSearchChange: (value: string) => void
  filterValue: string
  onFilterChange: (value: string) => void
  sortValue: string
  onSortChange: (value: string) => void
  filterOptions?: { value: string; label: string }[]
  sortOptions?: { value: string; label: string }[]
  searchPlaceholder?: string
  filterPlaceholder?: string
  sortPlaceholder?: string
}

const TableControls: React.FC<TableControlsProps> = ({
  searchValue,
  onSearchChange,
  filterValue,
  onFilterChange,
  sortValue,
  onSortChange,
  filterOptions = [],
  sortOptions = [],
  searchPlaceholder = "Search here...",
  filterPlaceholder = "Filter by",
  sortPlaceholder = "Sort by",
}) => {
  return (
    <div className="flex items-center justify-between gap-6 mb-6">
      {/* Search Input */}
      <div className="relative flex-1 max-w-lg">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-dark-400" />
        <Input
          type="text"
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 h-12 text-base bg-brand-dark-900 border-brand-dark-700 text-brand-dark-100 placeholder:text-brand-dark-400 focus:border-brand-dark-500 focus:ring-brand-dark-500/20"
        />
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-4">
        {/* Filter Dropdown */}
        <Select value={filterValue} onValueChange={onFilterChange}>
          <SelectTrigger className="min-w-[180px] data-[size=default]:h-14 data-[size=sm]:h-14 h-14 px-5 bg-brand-dark-900 border-brand-dark-700 text-brand-dark-100 hover:bg-brand-dark-700 focus:border-brand-dark-500 focus:ring-brand-dark-500/20 text-base">
            <Calendar className="w-5 h-5 text-brand-dark-400 mr-2" />
            <SelectValue placeholder={filterPlaceholder} />
          </SelectTrigger>
          <SelectContent className="bg-brand-dark-900 border-brand-dark-700">
            {filterOptions.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="text-brand-dark-100 hover:bg-brand-dark-700 focus:bg-brand-dark-700"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Sort Dropdown */}
        <Select value={sortValue} onValueChange={onSortChange}>
          <SelectTrigger className="min-w-[180px] data-[size=default]:h-14 data-[size=sm]:h-14 h-14 px-5 bg-brand-dark-900 border-brand-dark-700 text-brand-dark-100 hover:bg-brand-dark-700 focus:border-brand-dark-500 focus:ring-brand-dark-500/20 text-base">
            <Calendar className="w-5 h-5 text-brand-dark-400 mr-2" />
            <SelectValue placeholder={sortPlaceholder} />
          </SelectTrigger>
          <SelectContent className="bg-brand-dark-900 border-brand-dark-700">
            {sortOptions.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="text-brand-dark-100 hover:bg-brand-dark-700 focus:bg-brand-dark-700"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default TableControls
