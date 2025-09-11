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
    <div className="min-h-screen px-16 bg-[#000000] flex lgml-64">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Content Area */}
      <div className="flex-1 flex bg-[#0C0C0C] flex-col px-12">
        {/* Navbar */}
        <Navbar onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />

        {/* Main Content with padding */}
        <main className="flex-1 px-6 py-6">
          <div className="max-w-7xl mx-auto">
            {/* Content goes here */}
            <ActivityTrendChart />

            <ValueCard
              title="Visitors"
              value={4}
              unit="Users"
              description="1 hr ago"
              iconColor="text-green-500"
              icon={<Users />}
              className="w-80"
              label="Active"
            />
            <div className="mt-10 space-y-12">
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Login Form Preview</h2>
                <LoginForm />
              </section>

<<<<<<< HEAD
            {/* <LoginForm /> */}
            <ProgressTable />
=======
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Table Preview</h2>
                <ProgressTable />
              </section>
            </div>
>>>>>>> 2dbaec8feed2cd7faf1f88027e7f8f36327136d1
          </div>
        </main>
      </div>
    </div>
  );
}
