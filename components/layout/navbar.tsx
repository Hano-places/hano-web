"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Settings, Bell, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/auth-context";

interface NavbarUser {
  name: string;
  email: string;
  avatarUrl?: string;
}

interface NavbarProps {
  onSidebarToggle: () => void;
  user: NavbarUser;
}

export function Navbar({ onSidebarToggle, user }: NavbarProps) {
  const { logout } = useAuth();
  const pathname = usePathname();

  const isSuperAdmin = pathname?.startsWith("/super-admin");
  const settingsHref = isSuperAdmin ? "/super-admin/settings" : "/settings";
  const notificationsHref = isSuperAdmin ? "/super-admin/notifications" : "/notifications";

  return (
    <header className="text-white py-6 mb-8">
      <div className="grid grid-cols-[2fr_5fr_2fr] items-center w-full gap-3">
        {/* Left section */}
        <div className="flex items-center flex-shrink-0 gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white rounded-lg"
            onClick={onSidebarToggle}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-lg text-white">Dashboard</h1>
          </div>
        </div>

        {/* Center - Search */}
        <div className="px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white" />
            <Input
              type="search"
              placeholder="Search here..."
              className="pl-12 h-10 bg-brand-dark-900 border-brand-dark-900 text-white placeholder-brand-dark-400 focus:bg-brand-dark-900/60 focus:border-brand-dark-600 rounded-lg w-full"
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center justify-end gap-6 flex-shrink-0">
          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center text-white px-4 py-3 rounded-lg focus:outline-none">
                <Avatar className="h-9 w-9 mx-2">
                  <AvatarImage src={user.avatarUrl ?? ""} />
                  <AvatarFallback className="bg-brand-dark-900 text-white">
                    {(user.name || "").split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left hidden md:block">
                  <p className="text-sm text-white leading-none">{user.name}</p>
                  <p className="text-xs text-brand-dark-400">{user.email}</p>
                </div>
                <ChevronDown className="h-5 w-5 ml-2 text-brand-dark-400" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-56 bg-brand-dark-800/95 border-brand-dark-700 backdrop-blur-sm"
            >
              <Link href={settingsHref} className="w-full">
                <DropdownMenuItem className="text-white bg-brand-dark-700/50 cursor-pointer mb-1 w-full">
                  Profile
                </DropdownMenuItem>
              </Link>
              <Link href={settingsHref} className="w-full">
                <DropdownMenuItem className="text-white bg-brand-dark-700/50 cursor-pointer mb-1 w-full">
                  Account Settings
                </DropdownMenuItem>
              </Link>
              <Link href={settingsHref} className="w-full">
                <DropdownMenuItem className="text-white bg-brand-dark-700/50 cursor-pointer w-full">
                  Preferences
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator className="bg-brand-dark-700" />
              <DropdownMenuItem
                className="text-red-400 focus:text-brand-dark-100 focus:bg-red-400/50 cursor-pointer w-full"
                onClick={logout}
              >
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Settings */}
          <Link href={settingsHref}>
            <Button
              variant="ghost"
              size="sm"
              className="text-white bg-brand-dark-900 rounded-lg py-3 px-4"
            >
              <Settings className="h-6 w-6 m-2" />
            </Button>
          </Link>

          {/* Notifications */}
          <Link href={notificationsHref}>
            <Button
              variant="ghost"
              size="sm"
              className="text-white bg-brand-dark-900 rounded-lg py-3 px-4"
            >
              <Bell className="h-6 w-6 m-2" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
