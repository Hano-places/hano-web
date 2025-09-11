"use client";

import React, { useState, type ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar, type SidebarMenuSection } from "@/components/layout/sidebar";

export interface AppShellUser {
  name: string;
  email: string;
  avatarUrl?: string;
}

interface AppShellProps {
  user: AppShellUser;
  menu: SidebarMenuSection[];
  children: ReactNode;
}

export default function AppShell({ user, menu, children }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Fixed sidebar (mobile slide-in). Reserve space on lg screens */}
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} menu={menu} />

      {/* Content area with left padding equal to sidebar width on lg */}
      <div className="pl-0 lg:pl-64">
        {/* Main column */}
        <div className="min-h-screen bg-[#0C0C0C] px-6 md:px-12">
          <Navbar onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} user={user} />

          <main className="pb-8 overflow-x-hidden">
            <div className=" mx-auto w-full">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
