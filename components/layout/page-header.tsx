"use client"

import React from "react"
import { Calendar, Upload } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Crumb {
  label: string
  href?: string
}

interface PageHeaderProps {
  breadcrumbs: Crumb[]
  onExport?: () => void
  actions?: React.ReactNode
}

export default function PageHeader({ breadcrumbs, onExport, actions }: PageHeaderProps) {
  const last = breadcrumbs[breadcrumbs.length - 1]
  const rest = breadcrumbs.slice(0, -1)

  return (
    <div className="flex items-center justify-between py-2 mb-4">
      <Breadcrumb>
        <BreadcrumbList>
          {rest.map((c, idx) => (
            <React.Fragment key={`${c.label}-${idx}`}>
              <BreadcrumbItem>
                {c.href ? (
                  <BreadcrumbLink href={c.href} className="text-brand-dark-400">
                    {c.label}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbLink className="text-brand-dark-400">{c.label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </React.Fragment>
          ))}
          <BreadcrumbItem>
            <BreadcrumbPage className="text-brand-dark-50">{last?.label}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center gap-4">
        {actions}
        <Select defaultValue="range">
          <SelectTrigger className="min-w-[180px] h-14 px-5 bg-brand-dark-900 border-brand-dark-700 text-brand-dark-100 *:data-[slot=select-value]:text-brand-dark-100 rounded-xl">
            <Calendar className="w-5 h-5 text-brand-dark-300" />
            <SelectValue placeholder="Select Dates" />
          </SelectTrigger>
          <SelectContent className="text-brand-dark-100 bg-brand-dark-900 border-brand-dark-700">
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="range">Select dates</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={onExport} className="h-14 px-5 text-base bg-white text-brand-dark-900 hover:bg-gray-100 font-bold rounded-xl">
          <Upload className="w-5 h-5 mr-2" />
          Generate Report
        </Button>
      </div>
    </div>
  )
}
