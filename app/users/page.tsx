"use client";

import ActivityTrendChart, { type ChartDataPoint } from "@/components/ActivityTrendChart";
import ProgressTable, { type RegistrationRequest } from "@/components/progress-table";
import ValueCard from "@/components/value-card";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar, type SidebarMenuSection } from "@/components/layout/sidebar";
import { Users, X, BadgeCheck, MapPin, Link2, Phone } from "lucide-react";
import { useState } from "react";

export default function UsersPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selected, setSelected] = useState<RegistrationRequest | null>(null);

  const user = {
    name: "Patrick Ihirwe",
    email: "user@gmail.com",
    avatarUrl:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1",
  };

  const menu: SidebarMenuSection[] = [
    {
      section: "App Management",
      items: [
        { icon: Users, label: "Dashboard", href: "/" },
        { icon: Users, label: "Users", href: "/users", active: true },
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
    { day: "Sun", registeredUsers: 45, visitors: 65 },
    { day: "Mon", registeredUsers: 75, visitors: 85 },
    { day: "Tue", registeredUsers: 55, visitors: 70 },
    { day: "Wed", registeredUsers: 85, visitors: 35 },
    { day: "Thu", registeredUsers: 70, visitors: 80 },
    { day: "Fri", registeredUsers: 60, visitors: 75 },
    { day: "Sat", registeredUsers: 80, visitors: 90 },
  ];

  const tableData: RegistrationRequest[] = [
    {
      id: "1",
      name: "John Doe",
      email: "johndoe@gmail.com",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 2300,
      places: 2,
      lastVisit: { location: "Grand Venue Hotel", time: "Today 2:00 pm" },
      status: "pending",
    },
    {
      id: "2",
      name: "Alice Smith",
      email: "alice@gmail.com",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 5000,
      places: 4,
      lastVisit: { location: "Luxury Inn", time: "Yesterday 5:30 pm" },
      status: "approved",
    },
    {
      id: "3",
      name: "Michael Lee",
      email: "michael@gmail.com",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 1200,
      places: 1,
      lastVisit: { location: "City Center", time: "Today 11:15 am" },
      status: "rejected",
    },
    {
      id: "4",
      name: "Emma Watson",
      email: "emma@gmail.com",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 3200,
      places: 3,
      lastVisit: { location: "Grand Venue Hotel", time: "Today 9:00 am" },
      status: "approved",
    },
    {
      id: "5",
      name: "David Brown",
      email: "david@gmail.com",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
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

        {/* Main Content */}
        <main className="flex-1 px-6 py-6">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Top metric cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ValueCard title="All Users" value={234800} unit="Users" description="+2.4%" label="All time" />
              <ValueCard title="Active" value={100} unit="Users" description="+2.4%" label="Today" />
              <ValueCard title="Restricted" value={4600} unit="Users" description="-0.5%" label="All time" />
              <ValueCard title="Visitors" value={4} unit="Users" description="+1" label="Now" />
            </div>

            {/* Activity chart */}
            <ActivityTrendChart data={chartData} />

            {/* Table */}
            <ProgressTable
              data={tableData}
              title="Recent Business Registration Requests"
              onViewDetails={(req) => setSelected(req)}
            />
          </div>
        </main>
      </div>

      {/* Modal with backdrop blur */}
      {/* Modal with backdrop blur */}
{selected && (
  <div className="fixed inset-0 z-[60]">
    {/* Backdrop */}
    <div
      className="absolute inset-0 backdrop-blur-md bg-black/50"
      onClick={() => setSelected(null)}
    />

    {/* Centered Modal */}
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div
        className="relative w-[638px] h-[466px] rounded-3xl p-8 overflow-hidden"
        style={{
          backgroundImage: "url('/modal.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Close Button (top-right corner) */}
        <button
          className="absolute top-6 right-6 text-brand-dark-200"
          onClick={() => setSelected(null)}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-brand-dark-900 rounded-2xl mb-6 mt-6">
          {/* Left - Avatar and Info */}
          <div className="flex items-start gap-4">
            <img
              src={selected.avatar}
              alt={selected.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="text-lg font-semibold text-brand-dark-100">
                {selected.name}
              </div>
              <div className="text-sm text-brand-dark-100">{selected.email}</div>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-brand-dark-100">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {selected.lastVisit.location}, Rwanda
                </span>
                <a href="#" className="flex items-center gap-2 hover:underline">
                  <Link2 className="w-4 h-4" /> View Business Page
                </a>
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +250-791-234-567
                </span>
              </div>
            </div>
          </div>

          {/* Right - Verified badge */}
          <BadgeCheck className="w-6 h-6 text-blue-500" />
        </div>

        {/* Content - two value cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <ValueCard
            title="Total Visits"
            value={selected.totalCoins}
            unit="RWF"
            description={`${selected.places} Plans`}
            label="↑ 2.4%"}
          />
          <ValueCard
            title="Accumulated Coins"
            value={selected.totalCoins}
            unit="Hano coins"
            description={`${selected.places} Plans`}
            label="↑ 2.4%"}
          />
        </div>

        {/* Footer */}
        <div className="grid grid-cols-2 divide-x gap-6">
          <button
            className="w-full px-4 py-3 rounded-lg text-brand-dark-200 border border-brand-dark-700"
            onClick={() => setSelected(null)}
          >
            Back
          </button>
          <button className="w-full px-4 py-3 rounded-lg bg-white text-black font-medium">
            View Full Activity
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
