"use client";

import { LoginForm } from "@/components/login-form";
import ProgressTable from "@/components/progress-table";
import ValueCard from '@/components/value-card';
import ActivityTrendChart from '@/components/ActivityTrendChart';
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import { Users } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#000000] flex">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Content Area */}
      <div className="flex-1 min-h-screen lg:ml-64 flex bg-[#0C0C0C] flex-col px-12 border-l border-[#1A1A1A]">
        {/* Navbar */}
        <Navbar onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />

        {/* Main Content with padding */}
        <main className="flex-1 px-6 py-6">
          <div className="max-w-7xl mx-auto">
            {/* Content goes here */}
            {/* <ActivityTrendChart /> */}

            {/* <ValueCard
              title="Visitors"
              value={4}
              unit="Users"
              description="1 hr ago"
              iconColor="text-green-500"
              icon={<Users />}
              className="w-80"
              label="Active"
            /> */}

            {/* <LoginForm /> */}
            {/* <ProgressTable /> */}
          </div>
        </main>
      </div>
    </div>
  );
}
