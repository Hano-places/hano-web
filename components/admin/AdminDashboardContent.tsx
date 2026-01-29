"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { apiClient } from "@/lib/api-client";
import { useAuth } from "@/contexts/auth-context";
import ValueCard from "@/components/value-card";
import ProgressTable, { type RegistrationRequest } from "@/components/users/progress-table";
import { LayoutDashboard, Users, Building2, CreditCard, DollarSign, BarChart3, LogOut, Coins, QrCode, BadgeCheck } from "lucide-react";
import { PieChart, Pie, Cell } from "recharts";
import { ChartContainer, type ChartConfig, ChartLegend, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Card } from "@/components/ui/card";
import { type SidebarMenuSection } from "@/components/layout/sidebar";
import { toast } from "sonner";
import AppShell from "@/components/layout/app-shell";
import PageHeader from "@/components/layout/page-header";

const ActivityTrendChart = dynamic(() => import("@/components/ActivityTrendChart"), {
    ssr: false,
});

export default function AdminDashboardContent() {
    const [currentPicksPage, setCurrentPicksPage] = useState(1);
    const [places, setPlaces] = useState<RegistrationRequest[]>([]);
    const [claims, setClaims] = useState<RegistrationRequest[]>([]);
    const [userCount, setUserCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const { user, logout } = useAuth();

    const displayUser = user || {
        id: "",
        name: "",
        email: "",
    };

    const menu: SidebarMenuSection[] = [
        {
            section: "App Management",
            items: [
                { icon: LayoutDashboard, label: "Dashboard", href: "/", active: true },
                { icon: Building2, label: "Businesses", badge: places.length, href: "/businesses" },
                { icon: Users, label: "Users", href: "/users" },
                { icon: CreditCard, label: "Subscriptions", href: "/subscriptions" },
                { icon: DollarSign, label: "Revenues", href: "/revenues" },
                { icon: BarChart3, label: "Reports", href: "/reports" },
            ],
        },
        {
            section: "Account",
            items: [{ icon: LogOut, label: "Sign Out", onClick: logout }],
        },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const [placesRes, claimsRes, usersRes] = await Promise.all([
                    apiClient.get("/places"),
                    apiClient.get("/claims?status=pending"),
                    apiClient.get("/users"),
                ]);

                const mappedPlaces: RegistrationRequest[] = (placesRes.data.data || []).map((p: any) => ({
                    id: p.id,
                    name: p.name,
                    email: p.email || "N/A",
                    avatar: p.logoUrl || "",
                    totalCoins: 0,
                    places: 1,
                    lastVisit: { location: p.category || "General", time: new Date(p.createdAt).toLocaleDateString() },
                    status: "approved",
                }));

                const mappedClaims: RegistrationRequest[] = (claimsRes.data.data || []).map((c: any) => ({
                    id: c.id,
                    name: c.place?.name || "Unknown",
                    email: c.user?.email || "N/A",
                    avatar: c.place?.logoUrl || "",
                    totalCoins: 0,
                    places: 1,
                    lastVisit: { location: "Pending Claim", time: new Date(c.createdAt).toLocaleDateString() },
                    status: "pending",
                }));

                setPlaces(mappedPlaces);
                setClaims(mappedClaims);
                setUserCount(usersRes.data.data?.length || 0);
            } catch (error) {
                console.error("Failed to fetch dashboard data:", error);
                toast.error("Failed to load dashboard data");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const chartData = [
        { day: "Sun", registeredUsers: 45, visitors: 65 },
        { day: "Mon", registeredUsers: 75, visitors: 85 },
        { day: "Tue", registeredUsers: 55, visitors: 70 },
        { day: "Wed", registeredUsers: 85, visitors: 35 },
        { day: "Thu", registeredUsers: 70, visitors: 80 },
        { day: "Fri", registeredUsers: 60, visitors: 75 },
        { day: "Sat", registeredUsers: 80, visitors: 90 },
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

    const latestPicks = [
        {
            title: "Sky Dandelions Apartment",
            image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=640",
            price: "250",
            tag: "New Deal",
            logo: "/logo.png",
        },
    ];

    const PICKS_PER_PAGE = 3;
    const paginatedPicks = latestPicks.slice(
        (currentPicksPage - 1) * PICKS_PER_PAGE,
        currentPicksPage * PICKS_PER_PAGE
    );

    return (
        <AppShell user={displayUser} menu={menu}>
            <PageHeader breadcrumbs={[{ label: "Home", href: "/" }, { label: "Dashboard" }]} />

            <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                    <ValueCard title="Total Users" value={userCount} unit="Users" description="+2.4%" label="All time" />
                    <ValueCard title="Active Businesses" value={places.length} unit="Groups" description="+2.4%" label="All time" />
                    <ValueCard title="Pending Claims" value={claims.length} unit="Requests" description="Action required" label="Now" />
                    <ValueCard title="Revenues" value={0} unit="RWF" description="0%" label="All time" />
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
                                    <ChartTooltip cursor={false} content={<ChartTooltipContent nameKey="name" />} />
                                    <ChartLegend verticalAlign="bottom" align="center" />
                                </PieChart>
                            </ChartContainer>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 ">
                        <ProgressTable data={claims} title="Pending Business Registration Requests" />
                    </div>
                    <div className="space-y-4 flex flex-col">
                        <div className="flex items-center justify-between px-1">
                            <h3 className="text-brand-dark-50 font-semibold">Latest Picks</h3>
                            <button className="text-sm text-brand-dark-300 hover:text-brand-dark-100">View All →</button>
                        </div>
                        <div className="space-y-4 flex-1 overflow-y-auto no-scrollbar pr-2">
                            {paginatedPicks.map((p, idx) => (
                                <Card key={`${p.title}-${idx}`} className="relative border border-gray-800 overflow-hidden p-0 rounded-2xl">
                                    <div className="relative aspect-[4/3] w-full">
                                        <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
                                        <div className="absolute top-4 right-4">
                                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/60 ring-1 ring-white/10 text-white text-sm font-medium">
                                                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-600">
                                                    <BadgeCheck className="w-3.5 h-3.5" />
                                                </span>
                                                {p.tag}
                                            </span>
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-black/85 via-black/55 to-transparent" />
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 p-4">
                                        <div className="mx-2 mb-2 rounded-xl  p-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-lg bg-black/60 ring-1 ring-white/15 flex items-center justify-center overflow-hidden">
                                                    <img src={p.logo} alt="logo" className="w-6 h-6 object-contain" />
                                                </div>
                                                <h4 className="text-white text-lg font-semibold drop-shadow-sm truncate">{p.title}</h4>
                                            </div>
                                            <div className="mt-2 text-white/90 text-sm">Get 10% off with Christmas Sales</div>
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
                    </div>
                </div>
            </div>
        </AppShell>
    );
}
