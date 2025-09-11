"use client";

import { useState } from "react";
import ActivityTrendChart, { type ChartDataPoint } from "@/components/ActivityTrendChart";
import ProgressTable, { type RegistrationRequest } from "@/components/progress-table";
import ValueCard from "@/components/value-card";
import AppShell from "@/components/layout/app-shell";
import { type SidebarMenuSection } from "@/components/layout/sidebar";
import { Users } from "lucide-react";
import BusinessDetailsModal from "@/components/BusinessDetailsModal";

export default function BusinessesPage() {
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
        { icon: Users, label: "Users", href: "/users" },
        { icon: Users, label: "Businesses", badge: 5, href: "/businesses", active: true },
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
      name: "Grand Venue Hotels",
      email: "info@grandvenue.com",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 2300,
      places: 2,
      lastVisit: { location: "Grand Venue Hotel", time: "Today 2:00 pm" },
      status: "pending",
    },
    {
      id: "2",
      name: "Luxury Inn",
      email: "contact@luxuryinn.com",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 5000,
      places: 4,
      lastVisit: { location: "Luxury Inn", time: "Yesterday 5:30 pm" },
      status: "approved",
    },
    {
      id: "3",
      name: "City Center Hotel",
      email: "hello@citycenter.com",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 1200,
      places: 1,
      lastVisit: { location: "City Center", time: "Today 11:15 am" },
      status: "rejected",
    },
    {
      id: "4",
      name: "Harbor View",
      email: "team@harborview.com",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 3200,
      places: 3,
      lastVisit: { location: "Harbor View", time: "Today 9:00 am" },
      status: "approved",
    },
    {
      id: "5",
      name: "Downtown Plaza",
      email: "support@downtownplaza.com",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 450,
      places: 1,
      lastVisit: { location: "Downtown Plaza", time: "Yesterday 3:45 pm" },
      status: "pending",
    },
  ];

  return (
    <AppShell user={user} menu={menu}>
      <div className="space-y-8">
        {/* Top metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValueCard title="All Businesses" value={1234} unit="Groups" description="+2.4%" label="All time" />
          <ValueCard title="Active" value={100} unit="Groups" description="+2.4%" label="Today" />
          <ValueCard title="Suspended" value={46} unit="Groups" description="-0.5%" label="All time" />
          <ValueCard title="Visitors" value={4} unit="Now" description="+1" label="Now" />
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
      {/* External Modal */}
      <BusinessDetailsModal selected={selected} onClose={() => setSelected(null)} />
    </AppShell>
  );
}
