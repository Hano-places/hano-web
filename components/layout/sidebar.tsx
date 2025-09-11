"use client";

import React from "react";
import { cn } from "@/lib/utils";
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

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const menuItems = [
  {
    section: "App Management",
    items: [
      { icon: ChartLine, label: "Dashboard", active: true, href: "/" },
      { icon: Users, label: "Users", href: "/users" },
      { icon: Building2, label: "Businesses", badge: 5, href: "/businesses" },
      { icon: CreditCard, label: "Subscriptions", href: "/subscriptions" },
      { icon: DollarSign, label: "Revenues", href: "/revenues" },
      { icon: ShoppingCart, label: "Reports", badge: 9, href: "/reports" },
    ],
  },
  {
    section: "Company Settings",
    items: [
      { icon: Shield, label: "Roles", href: "/roles" },
      { icon: UsersRound, label: "Members", href: "/members" },
    ],
  },
  {
    section: "Account",
    items: [{ icon: LogOut, label: "Sign Out", href: "/logout" }],
  },
];

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
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
          "fixed left-0 top-0 z-50 h-screen w-64 bg-[#060606] text-white transition-transform duration-300 ease-in-out",
          "lg:translate-x-0 lg:static lg:z-auto",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center p-1">
              <div className="w-8 h-8 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Hano Logo"
                  className="w-6 h-6 object-contain"
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
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Three dots separator */}
        <div className="flex justify-center py-2">
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-8 space-y-6 overflow-y-auto">
          {menuItems.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-xs font-medium text-gray-400 mb-3 px-3 uppercase tracking-wider">
                {section.section}
              </h3>
              <ul className="space-y-0.5">
                {section.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <li key={itemIndex}>
                      <a
  href={item.href}
  className={cn(
    "flex items-center justify-between px-4 py-3 text-sm font-medium transition-all duration-200 group relative",
    item.active
      ? "border-l-4 text-brand-dark-50 bg-transparent"
      : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
  )}
>

                        <div className="flex items-center space-x-3">
                          <Icon className={cn(
                            "h-5 w-5 transition-colors",
                            item.active ? "text-brand-dark-50" : "text-gray-400 group-hover:text-white"
                          )} />
                          <span className={cn(
                            "transition-colors",
                            item.active ? "text-brand-dark-50 font-semibold" : "group-hover:text-white"
                          )}>{item.label}</span>
                        </div>
                        {item.badge && (
                          <Badge
                            variant="destructive"
                            className={cn(
                              "h-5 w-5 p-0 text-xs flex items-center justify-center rounded-full",
                              item.active ? "bg-red-500 text-white" : "bg-red-500 hover:bg-red-600"
                            )}
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </a>
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
