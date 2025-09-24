"use client";

import { useState } from "react";
import ActivityTrendChart, { type ChartDataPoint } from "@/components/ActivityTrendChart";
import BusinessHistoryTable, { type BusinessVisit } from "@/components/businesses/business-history-table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ValueCard from "@/components/value-card";
import AppShell from "@/components/layout/app-shell";
import { type SidebarMenuSection } from "@/components/layout/sidebar";
import { LayoutDashboard, Users, Building2, CreditCard, DollarSign, BarChart3, LogOut } from "lucide-react";
import BusinessDetailsModal from "@/components/businesses/BusinessDetailsModal";
import PageHeader from "@/components/layout/page-header";

export default function BusinessesPage() {
  const [selected, setSelected] = useState<BusinessVisit | null>(null);

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
        { icon: LayoutDashboard, label: "Dashboard", href: "/" },
        { icon: Users, label: "Users", href: "/users" },
        { icon: Building2, label: "Businesses", badge: 5, href: "/businesses", active: true },
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

  const tableData: BusinessVisit[] = [
    {
      id: "1",
      businessName: "Grand Venue Hotels",
      email: "Mario.Koss@hotmail.com",
      avatar: "",
      category: "Hotel",
      subcategory: "Accommodation",
      clients: 240,
      coinsPerVisit: 20,
      currentPlan: "Free",
      time: { date: "2, May, 2025", clock: "2:04 pm" },
    },
    {
      id: "2",
      businessName: "Grand Venue Hotels",
      email: "Mario.Koss@hotmail.com",
      avatar: "",
      category: "Hotel",
      subcategory: "Accommodation",
      clients: 240,
      coinsPerVisit: 20,
      currentPlan: "Pending",
      time: { date: "2, May, 2025", clock: "2:04 pm" },
    },
    {
      id: "3",
      businessName: "Grand Venue Hotels",
      email: "Mario.Koss@hotmail.com",
      avatar: "",
      category: "Hotel",
      subcategory: "Accommodation",
      clients: 240,
      coinsPerVisit: 20,
      currentPlan: "Hotel",
      time: { date: "2, May, 2025", clock: "2:04 pm" },
    },
    {
      id: "4",
      businessName: "Grand Venue Hotels",
      email: "Mario.Koss@hotmail.com",
      avatar: "",
      category: "Hotel",
      subcategory: "Accommodation",
      clients: 240,
      coinsPerVisit: 20,
      currentPlan: "Rejected",
      time: { date: "2, May, 2025", clock: "2:04 pm" },
    },
    {
      id: "5",
      businessName: "Grand Venue Hotels",
      email: "Mario.Koss@hotmail.com",
      avatar: "",
      category: "Hotel",
      subcategory: "Accommodation",
      clients: 240,
      coinsPerVisit: 20,
      currentPlan: "Approved",
      time: { date: "2, May, 2025", clock: "2:04 pm" },
    },
  ];

  return (
    <AppShell user={user} menu={menu}>
      <PageHeader breadcrumbs={[{ label: "Home", href: "/" }, { label: "Businesses" }]} />
      <div className="space-y-8">
        {/* Top metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard title="All Businesses" value={1234} unit="Groups" description="+2.4%" label="All time" />
          <ValueCard title="Active" value={100} unit="Groups" description="+2.4%" label="Today" />
          <ValueCard title="Suspended" value={46} unit="Groups" description="-0.5%" label="All time" />
          <ValueCard title="Visitors" value={4} unit="Now" description="+1" label="Now" />
        </div>

        {/* Activity chart */}
        <ActivityTrendChart data={chartData} />

        {/* Tabs + Tables */}
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid grid-cols-3 w-full bg-brand-dark-900 border border-brand-dark-800">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="restricted">Restricted</TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="mt-4">
            <BusinessHistoryTable data={tableData} title="Recent Business Registration Requests" onViewDetails={(req) => setSelected(req)} />
          </TabsContent>
          <TabsContent value="pending" className="mt-4">
            <BusinessHistoryTable data={tableData} title="Recent Business Registration Requests" onViewDetails={(req) => setSelected(req)} variant="pending" />
          </TabsContent>
          <TabsContent value="restricted" className="mt-4">
            <div className="rounded-lg border border-brand-dark-800 p-6 text-brand-dark-300">Restricted view coming soon.</div>
          </TabsContent>
        </Tabs>
      </div>
      {/* External Modal */}
      <BusinessDetailsModal selected={selected} onClose={() => setSelected(null)} />
    </AppShell>
  );
}
