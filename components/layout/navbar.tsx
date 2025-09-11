"use client";

import React from "react";
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

interface NavbarProps {
  onSidebarToggle: () => void;
}

export function Navbar({ onSidebarToggle }: NavbarProps) {
  return (
    <header className="text-white py-12">
   <div className="flex items-center justify-between w-full gap-4">
    {/* Left section */}
    <div className="flex items-center flex-shrink-0 gap-3 ">
      <Button
        variant="ghost"
        size="sm"
        className="lg:hidden text-white rounded-lg"
        onClick={onSidebarToggle}
      >
        <Menu className="h-5 w-5" />
      </Button>
      <div className="hidden lg:block">
        <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
      </div>
    </div>

    {/* Center - Search */}
    <div className="flex-1 max-w-3xl px-4">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-300" />
        <Input
          type="search"
          placeholder="Search here..."
          className="pl-12 h-12 bg-brand-dark-800/40 border-gray-700 text-white
                     placeholder-gray-400 focus:bg-brand-dark-800/60
                     focus:border-gray-600 rounded-xl w-full"
        />
      </div>
    </div>

    {/* Right section */}
    <div className="flex items-center gap-12 flex-shrink-0">
      {/* User menu */}
      <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <button className="flex items-center text-white px-6 py-4 rounded-lg focus:outline-none">
      <Avatar className="h-9 w-9 mx-2">
        <AvatarImage src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1" />
        <AvatarFallback className="bg-brand-dark-600 text-white font-semibold">PI</AvatarFallback>
      </Avatar>
      <div className="text-left hidden md:block">
        <p className="text-base font-medium text-white leading-none">Patrick Ihirwe</p>
        <p className="text-xs text-gray-400">user@gmail.com</p>
      </div>
      <ChevronDown className="h-5 w-5 text-gray-400" />
    </button>
  </DropdownMenuTrigger>

  <DropdownMenuContent
    align="end"
    className="w-56 bg-brand-dark-800/95 border-gray-700 backdrop-blur-sm"
  >
    <DropdownMenuItem className="text-white bg-brand-dark-700/50 "> Profile </DropdownMenuItem> <DropdownMenuItem className="text-white bg-brand-dark-700/50 "> Account Settings </DropdownMenuItem> <DropdownMenuItem className="text-white bg-brand-dark-700/50 "> Preferences </DropdownMenuItem> <DropdownMenuSeparator className="bg-brand-dark-700" /> <DropdownMenuItem className="text-red-400 focus:bg-brand-dark-700/50"> Sign Out </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>


      {/* Settings */}
      <Button
        variant="ghost"
        size="sm"
        className="text-white bg-brand-dark-800 rounded-lg py-6 px-8"
      >
        <Settings className="h-6 w-6 m-2" />
      </Button>

      {/* Notifications */}
      <Button
        variant="ghost"
        size="sm"
        className="text-white bg-brand-dark-800  rounded-lg py-6 px-8"
      >
        <Bell className="h-6 w-6 m-2" />
        <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full ring-2 ring-[#0A0A0A]" />
      </Button>
    </div>
  </div>
</header>
  );
}
