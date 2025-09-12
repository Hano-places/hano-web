"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import AppShell from "@/components/layout/app-shell";
import { type SidebarMenuSection } from "@/components/layout/sidebar";
import { Users, BadgeCheck, MapPin, Link2, Phone, ClipboardCopy } from "lucide-react";
import ActivityTrendChart, { type ChartDataPoint } from "@/components/ActivityTrendChart";
import ValueCard from "@/components/value-card";
import HistoryTable, { type RegistrationRequest } from "@/components/users/history-table";
import PageHeader from "@/components/layout/page-header";

export default function UserActivityPage() {
  const params = useParams();
  const userName = decodeURIComponent(String(params?.userName ?? "User"));

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

  const chartData: ChartDataPoint[] = useMemo(
    () => [
      { day: "Sun", registeredUsers: 45, visitors: 65 },
      { day: "Mon", registeredUsers: 75, visitors: 85 },
      { day: "Tue", registeredUsers: 55, visitors: 70 },
      { day: "Wed", registeredUsers: 85, visitors: 35 },
      { day: "Thu", registeredUsers: 70, visitors: 80 },
      { day: "Fri", registeredUsers: 60, visitors: 75 },
      { day: "Sat", registeredUsers: 80, visitors: 90 },
    ],
    []
  );

  const tableData: RegistrationRequest[] = [
    {
      id: "1",
      name: "Grand Venue Hotels",
      email: "Mario.koss@hotmail.com",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      time: { date: "2, May, 2025", clock: "2:04 pm" },
      review: { date: "2, May, 2025", clock: "2:04 pm" },
      rewards: 20,
      rewarded: false,
    },
    {
      id: "2",
      name: "Grand Venue Hotels",
      email: "Mario.koss@hotmail.com",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      time: { date: "2, May, 2025", clock: "2:04 pm" },
      review: { date: "2, May, 2025", clock: "2:04 pm" },
      rewards: 20,
      rewarded: true,
    },
    {
      id: "3",
      name: "Grand Venue Hotels",
      email: "Mario.koss@hotmail.com",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      time: { date: "2, May, 2025", clock: "2:04 pm" },
      review: { date: "2, May, 2025", clock: "2:04 pm" },
      rewards: 20,
      rewarded: false,
    },
  ];

  return (
    <AppShell user={user} menu={menu}>
      <PageHeader breadcrumbs={[{ label: "Home", href: "/" }, { label: "Users", href: "/users" }, { label: userName }]} />
      <div className="space-y-8">
        {/* Header + Activity */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-3xl sm:p-8 border border-brand-dark-800 bg-cover bg-center w-full"
          style={{
            backgroundImage: "url('/modalDetails.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="">
            <div className="p-6 bg-brand-dark-900/80 rounded-2xl mb-8 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt={userName} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="text-lg font-semibold text-brand-dark-100">{userName}</div>
                    <div className="text-sm text-brand-dark-100">john@example.com</div>
                  </div>
                </div>
                <BadgeCheck className="w-8 h-8 text-blue-500" />
              </div>

              <div className="flex items-center justify-between text-xs text-brand-dark-100">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Kigali, Rwanda
                </span>
                <div className="flex items-center gap-6">
                  <a href="#" className="flex items-center gap-2 hover:underline">
                    <Link2 className="w-4 h-4" /> View Business Page
                  </a>
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4" /> +250-791-234-567
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <ValueCard title="Total Visits" value={234800} unit="RWF" description={`2 Plans`} label="↑ 2.4%" icon={<ClipboardCopy className="w-5 h-5 text-brand-dark-100" />} />
              <ValueCard title="All Users" value={234800} unit="usr" description={`2 Plans`} label="↑ 2.4%" icon={<ClipboardCopy className="w-5 h-5 text-brand-dark-100" />} />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <button className="px-4 py-3 rounded-lg text-brand-dark-200 border border-brand-dark-700">Back</button>
              <button className="px-4 py-3 rounded-lg bg-white text-black font-medium">Continue</button>
            </div>
          </div>
          {/* Activity trend */}
          <ActivityTrendChart data={chartData} />
        </div>

        {/* Visit History */}
        <HistoryTable data={tableData} title="Visit History" />
      </div>
    </AppShell>
  );
}
