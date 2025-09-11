"use client";

import { LoginForm } from "@/components/login-form";
import ProgressTable, { type RegistrationRequest } from "@/components/progress-table";
import ValueCard from '@/components/value-card';
import ActivityTrendChart, { type ChartDataPoint } from '@/components/ActivityTrendChart';
import { Navbar } from "@/components/layout/navbar";
import { Sidebar, type SidebarMenuSection } from "@/components/layout/sidebar";
import { Users } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const user = {
    name: "Patrick Ihirwe",
    email: "user@gmail.com",
    avatarUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1",
  };

  const menu: SidebarMenuSection[] = [
    {
      section: "App Management",
      items: [
        { icon: Users, label: "Dashboard", active: true, href: "/" },
        { icon: Users, label: "Users", href: "/users" },
        { icon: Users, label: "Businesses", badge: 5, href: "/businesses" },
        { icon: Users, label: "Subscriptions", href: "/subscriptions" },
        { icon: Users, label: "Revenues", href: "/revenues" },
        { icon: Users, label: "Reports", badge: 9, href: "/reports" },
      ],
    },
    {
      section: "Company Settings",
      items: [
        { icon: Users, label: "Roles", href: "/roles" },
        { icon: Users, label: "Members", href: "/members" },
      ],
    },
    {
      section: "Account",
      items: [{ icon: Users, label: "Sign Out", href: "/logout" }],
    },
  ];

  const chartData: ChartDataPoint[] = [
    { day: 'Sun', registeredUsers: 45, visitors: 65 },
    { day: 'Mon', registeredUsers: 75, visitors: 85 },
    { day: 'Tue', registeredUsers: 55, visitors: 70 },
    { day: 'Wed', registeredUsers: 85, visitors: 35 },
    { day: 'Thu', registeredUsers: 70, visitors: 80 },
    { day: 'Fri', registeredUsers: 60, visitors: 75 },
    { day: 'Sat', registeredUsers: 80, visitors: 90 },
  ];

  const tableData: RegistrationRequest[] = [
    {
      id: "1",
      name: "John Doe",
      email: "johndoe@gmail.com",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 2300,
      places: 2,
      lastVisit: { location: "Grand Venue Hotel", time: "Today 2:00 pm" },
      status: "pending",
    },
    {
      id: "2",
      name: "Alice Smith",
      email: "alice@gmail.com",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 5000,
      places: 4,
      lastVisit: { location: "Luxury Inn", time: "Yesterday 5:30 pm" },
      status: "approved",
    },
    {
      id: "3",
      name: "Michael Lee",
      email: "michael@gmail.com",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 1200,
      places: 1,
      lastVisit: { location: "City Center", time: "Today 11:15 am" },
      status: "rejected",
    },
    {
      id: "4",
      name: "Emma Watson",
      email: "emma@gmail.com",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 3200,
      places: 3,
      lastVisit: { location: "Grand Venue Hotel", time: "Today 9:00 am" },
      status: "approved",
    },
    {
      id: "5",
      name: "David Brown",
      email: "david@gmail.com",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 450,
      places: 1,
      lastVisit: { location: "Downtown Plaza", time: "Yesterday 3:45 pm" },
      status: "pending",
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] flex pr-16">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} menu={menu} />

      {/* Main Content Area */}
      <div className="flex-1 flex bg-[#0C0C0C] flex-col px-12 lg:ml-[20rem]">
        {/* Navbar */}
        <Navbar onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} user={user} />

        {/* Main Content with padding */}
        <main className="flex-1 px-6 py-6">
          <div className="max-w-7xl mx-auto">
            {/* Content goes here */}
            <ActivityTrendChart data={chartData} />

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

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Table Preview</h2>
                <ProgressTable data={tableData} />
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
