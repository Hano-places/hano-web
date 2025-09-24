"use client";

import dynamic from "next/dynamic";
import { useState, useMemo } from "react";
import type { ChartDataPoint } from "@/components/ActivityTrendChart";
import ProgressTable, { type RegistrationRequest } from "@/components/users/progress-table";
import ValueCard from "@/components/value-card";
import AppShell from "@/components/layout/app-shell";
import { type SidebarMenuSection } from "@/components/layout/sidebar";
import PageHeader from "@/components/layout/page-header";
import { LayoutDashboard, Users, Building2, CreditCard, DollarSign, BarChart3, LogOut, Coins, QrCode, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { PieChart, Pie, Cell } from "recharts";
import { ChartContainer, type ChartConfig, ChartLegend, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Card } from "@/components/ui/card";

const ActivityTrendChart = dynamic(() => import("@/components/ActivityTrendChart"), {
  ssr: false,
});

export default function HomePage() {
  const [currentPicksPage, setCurrentPicksPage] = useState(1);
  const PICKS_PER_PAGE = 3;
  const user = {
    name: "Patrick Ihirwe",
    email: "user@gmail.com",
    avatarUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1",
  };

  const menu: SidebarMenuSection[] = [
    {
      section: "App Management",
      items: [
        { icon: LayoutDashboard, label: "Dashboard", href: "/", active: true },
        { icon: Building2, label: "Businesses", badge: 5, href: "/businesses" },
        { icon: Users, label: "Users", href: "/users" },
        { icon: CreditCard, label: "Subscriptions", href: "/subscriptions" },
        { icon: DollarSign, label: "Revenues", href: "/revenues" },
        { icon: BarChart3, label: "Reports", badge: 9, href: "/reports" },
      ],
    },
    {
      section: "Account",
      items: [{ icon: LogOut, label: "Sign Out", href: "/logout" }],
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
      email: "mario.koss@hotma...",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 234800,
      places: 2,
      lastVisit: { location: "2, May, 2025", time: "2:04 pm" },
      status: "pending",
    },
    {
      id: "2",
      name: "Sky Dandelions",
      email: "mario.koss@hotma...",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 5000,
      places: 4,
      lastVisit: { location: "2, May, 2025", time: "2:04 pm" },
      status: "approved",
    },
    {
      id: "3",
      name: "City Center",
      email: "michael@gmail.com",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 1200,
      places: 1,
      lastVisit: { location: "2, May, 2025", time: "2:04 pm" },
      status: "rejected",
    },
    {
      id: "4",
      name: "River Park Suites",
      email: "riverpark@suites.com",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 2200,
      places: 2,
      lastVisit: { location: "Downtown Plaza", time: "Today 10:00 am" },
      status: "approved",
    },
    {
      id: "5",
      name: "Sunrise Motel",
      email: "contact@sunrise.io",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 900,
      places: 1,
      lastVisit: { location: "City Center", time: "Yesterday 7:30 pm" },
      status: "pending",
    },
    {
      id: "6",
      name: "Lakeside Resort",
      email: "lakeside@resort.com",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 5400,
      places: 5,
      lastVisit: { location: "Lake View", time: "Today 8:45 am" },
      status: "approved",
    },
    {
      id: "7",
      name: "City Business Hotel",
      email: "city@business.com",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 1800,
      places: 2,
      lastVisit: { location: "Airport Road", time: "Today 6:30 am" },
      status: "rejected",
    },
    {
      id: "8",
      name: "Grand Hills",
      email: "info@grandhills.com",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 7600,
      places: 6,
      lastVisit: { location: "Hillside Ave", time: "Yesterday 4:10 pm" },
      status: "approved",
    },
    {
      id: "9",
      name: "Forest Lodge",
      email: "forest@lodge.com",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      totalCoins: 1300,
      places: 1,
      lastVisit: { location: "Forest Road", time: "Today 12:20 pm" },
      status: "pending",
    },
  ];

  const categories = [
    { name: "Hotels", value: 35, color: "#3b82f6" },
    { name: "Motels", value: 15, color: "#10b981" },
    { name: "Bars", value: 12, color: "#f59e0b" },
    { name: "Cafes", value: 10, color: "#06b6d4" },
    { name: "Restaurants", value: 18, color: "#a855f7" },
    { name: "Lounges", value: 10, color: "#ef4444" },
  ];

  const categoryChartConfig: ChartConfig = {
    Hotels: { label: "Hotels", color: "#3b82f6" },
    Motels: { label: "Motels", color: "#10b981" },
    Bars: { label: "Bars", color: "#f59e0b" },
    Cafes: { label: "Cafes", color: "#06b6d4" },
    Restaurants: { label: "Restaurants", color: "#a855f7" },
    Lounges: { label: "Lounges", color: "#ef4444" },
  };

  const totalCategories = categories.reduce((sum, c) => sum + c.value, 0);

  function CategoryLegend(props: any) {
    const { payload } = props;
    if (!payload?.length) return null;
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-4 justify-items-start">
        {payload.map((item: any) => (
          <div key={item.value} className="flex items-center gap-2 text-sm">
            <span className="h-2 w-2 rounded-[2px]" style={{ backgroundColor: item.color }} />
            <span className="text-brand-dark-100">{item.value}</span>
          </div>
        ))}
      </div>
    );
  }

  const latestPicks = [
    {
      title: "Sky Dandelions Apartment",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=640",
      price: "250",
      tag: "New Deal",
      logo: "/logo.png",
    },
    {
      title: "Grand Venue Hotel Room",
      image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=640",
      price: "250",
      tag: "New Deal",
      logo: "/logo.png",
    },
    {
      title: "City Center Apartment",
      image: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=640",
      price: "250",
      tag: "New Deal",
      logo: "/logo.png",
      },

  ];

  // Pagination helpers
  const getPageNumbers = (totalPages: number, currentPage: number) => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) if (!pages.includes(i)) pages.push(i);
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  const totalPicksPages = Math.ceil(latestPicks.length / PICKS_PER_PAGE) || 1;
  const paginatedPicks = useMemo(
    () =>
      latestPicks.slice(
        (currentPicksPage - 1) * PICKS_PER_PAGE,
        currentPicksPage * PICKS_PER_PAGE
      ),
    [latestPicks, currentPicksPage]
  );

  return (
    <AppShell user={user} menu={menu}>
      <PageHeader breadcrumbs={[{ label: "Home", href: "/" }, { label: "Dashboard" }]} />

      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          <ValueCard title="Revenues" value={234800} unit="RWF" description="2 Plans" label="↑ 2.4%" />
          <ValueCard title="All users" value={120} unit="Users" description="80 Registered" label="↑ 2.4%" />
          <ValueCard title="Active Businesses" value={4600} unit="Businesses" description="All time" label="↑ 2.4%" />
          <ValueCard title="Pending Registrations" value={4} unit="Users" description="1 hr ago" label="↑ 2.4%" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ActivityTrendChart data={chartData} />
          </div>
          <div className="space-y-6">
            <div className="bg-brand-dark-900 border border-gray-800 rounded-xl p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-brand-dark-50 font-semibold">Businesses by Category</h3>
              </div>
              <ChartContainer config={categoryChartConfig} className="h-64">
                <PieChart>
                  <Pie data={categories} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90} stroke="none">
                    {categories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        nameKey="name"
                        formatter={(value, name) => (
                          <div className="flex w-full justify-between">
                            <span className="text-muted-foreground">{String(name)}</span>
                            <span className="font-mono">{((Number(value) / totalCategories) * 100).toFixed(1)}%</span>
                          </div>
                        )}
                      />
                    }
                  />
                  <ChartLegend verticalAlign="bottom" align="center" content={<CategoryLegend />} />
                </PieChart>
              </ChartContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProgressTable data={tableData} title="Recent Business Registration Requests" />
          </div>
          <div className="space-y-4 h-[87%] flex flex-col">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-brand-dark-50 font-semibold">Latest Picks</h3>
              <a href="#" className="text-sm text-brand-dark-300 hover:text-brand-dark-100">View All →</a>
            </div>
            <div className={"space-y-4 flex-1 overflow-y-auto no-scrollbar pr-2"}>
              {paginatedPicks.map((p, idx) => (
                <Card key={`${p.title}-${idx}`} className="relative bg-brand-dark-900 border border-gray-800 overflow-hidden p-0 rounded-2xl">
                  <div className="relative aspect-[4/3] w-full">
                    <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
                    {/* top-right new deal pill */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/60 ring-1 ring-white/10 text-white text-sm font-medium">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-600">
                          <BadgeCheck className="w-3.5 h-3.5" />
                        </span>
                        {p.tag}
                      </span>
                    </div>
                    {/* dark gradient bottom overlay for readability; keeps top visible */}
                    <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/85 via-black/55 to-transparent" />
                  </div>
                  {/* content overlay anchored to bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="mx-2 mb-2 rounded-xl bg-black/35 ring-1 ring-white/10 p-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-black/60 ring-1 ring-white/15 flex items-center justify-center overflow-hidden">
                          <img src={p.logo} alt="logo" className="w-6 h-6 object-contain" />
                        </div>
                        <h4 className="text-white text-lg font-semibold drop-shadow-sm truncate">{p.title}</h4>
                      </div>
                      <div className="mt-2 text-white/90 text-sm">Get 10% of with Christmas Sales</div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-white text-base">
                          <Coins className="w-4 h-4 text-white" />
                          <span className="font-semibold">+{p.price}</span>
                        </div>
                        <button className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-black/40 ring-1 ring-white/15 text-white">
                          <QrCode className="w-7 h-7" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex items-center justify-center mt-4 gap-2 px-1">
              <button
                className="px-2 py-2 rounded-lg bg-brand-dark-900 border border-gray-800 text-brand-dark-300 hover:text-brand-dark-100 disabled:opacity-50"
                disabled={currentPicksPage === 1}
                onClick={() => setCurrentPicksPage((p) => Math.max(1, p - 1))}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {getPageNumbers(totalPicksPages, currentPicksPage).map((page, index) =>
                page === "..." ? (
                  <span key={`dots-${index}`} className="px-2 text-brand-dark-500">
                    ...
                  </span>
                ) : (
                  <button
                    key={`page-${page}`}
                    className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                      currentPicksPage === page
                        ? "text-brand-dark-100"
                        : "text-brand-dark-400 hover:text-brand-dark-100"
                    }`}
                    onClick={() => setCurrentPicksPage(Number(page))}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                className="px-2 py-2 rounded-lg bg-brand-dark-900 border border-gray-800 text-brand-dark-300 hover:text-brand-dark-100 disabled:opacity-50"
                disabled={currentPicksPage === totalPicksPages}
                onClick={() => setCurrentPicksPage((p) => Math.min(totalPicksPages, p + 1))}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
