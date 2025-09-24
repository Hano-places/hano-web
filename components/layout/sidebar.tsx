"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChartLine,
  Users,
  Building2,
  CreditCard,
  DollarSign,
  ShoppingCart,
  Shield,
  UsersRound,
  LogOut,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type MenuIcon = typeof ChartLine;

export interface SidebarMenuItem {
  icon: MenuIcon;
  label: string;
  href: string;
  active?: boolean;
  badge?: number;
}

export interface SidebarMenuSection {
  section: string;
  items: SidebarMenuItem[];
}

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  menu: SidebarMenuSection[];
}

export function Sidebar({ isOpen, onToggle, menu }: SidebarProps) {
  const pathname = usePathname();
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0  top-0 z-50 h-screen bg-[#060606] text-white transition-transform duration-300 ease-in-out border-r border-gray-800",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{ width: 'var(--sidebar-width, 15rem)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between py-4 pr-4 pl-6">
          <div className="flex items-center">
            <div className="w-14 h-14 flex items-center justify-center p-0.5">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Hano Logo"
                  className="w-11 h-11 object-contain"
                />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Hano</h1>
              <p className="text-xs text-gray-400 font-medium">Admin Portal</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:bg-gray-800/50"
            onClick={onToggle}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-5 space-y-5 overflow-y-auto no-scrollbar">
          {menu.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-xs font-semibold text-brand-dark-100 mb-4 pl-7 pr-3 tracking-wider">
                {section.section}
              </h3>
              <ul className="space-y-0.5">
                {section.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href || item.active;
                  return (
                    <li key={itemIndex}>
                      <Link
  href={item.href}
  className={cn(
    "flex items-center justify-between px-3 py-3 text-[13px] font-medium transition-all duration-200 group relative h-12",
    isActive
      ? "border-l-4 border-white bg-brand-dark-900 text-white"
      : "text-gray-300 hover:bg-brand-dark-900 hover:text-white"
  )}
>
  <div className="flex items-center px-4 space-x-4"> {/* ⬅️ slightly wider space between icon and text */}
    <Icon
      className={cn(
        "h-5 w-5 transition-colors",
        isActive ? "text-white" : "text-gray-400 group-hover:text-white"
      )}
    />
    <span
      className={cn(
        "transition-colors text-sm",
        isActive ? "text-white font-semibold" : "group-hover:text-white"
      )}
    >
      {item.label}
    </span>
  </div>

  {item.badge && (
    <Badge
      variant="destructive"
      className={cn(
        "h-5 w-5 p-0 text-[10px] flex items-center justify-center rounded-full",
        isActive ? "bg-red-500 text-white" : "bg-red-500 hover:bg-red-600"
      )}
    >
      {item.badge}
    </Badge>
  )}
</Link>

                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
