"use client";

import dynamic from "next/dynamic";
import PageHeader from "@/components/layout/page-header";
import ValueCard from "@/components/value-card";
import { Users, Ticket, Building2, Star, BadgeCheck, Coins, QrCode } from "lucide-react";
import { Card } from "@/components/ui/card";
import RecentActivityTable, { type ActivityItem } from "@/components/business/recent-activity-table";

const ActivityTrendChart = dynamic(() => import("@/components/ActivityTrendChart"), {
    ssr: false,
});

export default function BusinessDashboardPage() {
    const chartData = [
        { day: "Sun", visits: 15, reservations: 10 },
        { day: "Mon", visits: 25, reservations: 15 },
        { day: "Tue", visits: 85, reservations: 60 },
        { day: "Wed", visits: 75, reservations: 65 },
        { day: "Thu", visits: 80, reservations: 70 },
        { day: "Fri", visits: 60, reservations: 50 },
        { day: "Sat", visits: 100, reservations: 90 },
    ];

    const chartDataKeys = [
        { key: "visits", label: "Visits", color: "#3b82f6", gradientId: "visitsGradient" },
        { key: "reservations", label: "Reservations", color: "rgb(156, 163, 175)", gradientId: "reservationsGradient" },
    ];

    const picks = [
        {
            id: "1",
            title: "Sky Dandelions Apartment",
            image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=640",
            price: 250,
            tag: "New Deal",
            logo: "/logo.png",
            description: "Get 10% of with Christmas Sales",
        },
        {
            id: "2",
            title: "Grand Hills Suite",
            image: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=640",
            price: 180,
            tag: "New Deal",
            logo: "/logo.png",
            description: "Exclusive Weekend Offer",
        }
    ];

    const recentActivity: ActivityItem[] = [
        {
            id: "1",
            name: "John Doe",
            email: "johndoe@gmail.com",
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
            date: "2, May, 2025",
            time: "2:04 pm",
            coins: 2300,
            visits: 2,
            rewards: 20,
        },
        {
            id: "2",
            name: "John Doe",
            email: "johndoe@gmail.com",
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
            date: "2, May, 2025",
            time: "2:04 pm",
            coins: 2300,
            visits: 2,
            rewards: 20,
        },
        {
            id: "3",
            name: "John Doe",
            email: "johndoe@gmail.com",
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
            date: "2, May, 2025",
            time: "2:04 pm",
            coins: 2300,
            visits: 2,
            rewards: 20,
        },
        {
            id: "4",
            name: "John Doe",
            email: "johndoe@gmail.com",
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
            date: "2, May, 2025",
            time: "2:04 pm",
            coins: 2300,
            visits: 2,
            rewards: "rewarded",
        },
        {
            id: "5",
            name: "John Doe",
            email: "johndoe@gmail.com",
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
            date: "2, May, 2025",
            time: "2:04 pm",
            coins: 2300,
            visits: 2,
            rewards: 20,
        }
    ];

    return (
        <div className="space-y-8">
            <PageHeader breadcrumbs={[{ label: "Home", href: "/dashboard" }, { label: "Overview" }]} />

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                <ValueCard
                    title="Clients"
                    value="234, 800"
                    unit="RWF"
                    description="2 Plans"
                    label="↑ 2.4%"
                    icon={<Users />}
                    iconColor="text-white"
                />
                <ValueCard
                    title="Rewards"
                    value={120}
                    unit="Events"
                    description="80 Registered"
                    label="↑ 2.4%"
                    icon={<Ticket />}
                    iconColor="text-blue-400"
                />
                <ValueCard
                    title="Total Picks"
                    value="4.6k"
                    unit="Businesses"
                    description="All time"
                    label="↑ 2.4%"
                    icon={<Building2 />}
                    iconColor="text-teal-400"
                />
                <ValueCard
                    title="Reviews & Ratings"
                    value=""
                    showStars
                    description="21 Reviews"
                    icon={<Star />}
                    iconColor="text-emerald-500"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <ActivityTrendChart
                        data={chartData}
                        title="Customer Engagement"
                        dataKeys={chartDataKeys}
                    />
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-brand-dark-50 font-semibold text-lg">Your Picks</h3>
                        <button className="text-sm text-brand-dark-300 hover:text-white flex items-center gap-1 transition-colors">
                            View All <span className="text-base">→</span>
                        </button>
                    </div>
                    <div className="space-y-4 max-h-[400px] overflow-y-auto no-scrollbar pr-2">
                        {picks.map((pick) => (
                            <Card key={pick.id} className="relative border border-brand-dark-800 overflow-hidden p-0 rounded-2xl group cursor-pointer transition-all hover:border-brand-dark-600">
                                <div className="relative aspect-[4/3] w-full">
                                    <img src={pick.image} alt={pick.title} className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500" />
                                    <div className="absolute top-4 right-4">
                                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/60 ring-1 ring-white/10 text-white text-xs font-medium backdrop-blur-sm">
                                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-600">
                                                <BadgeCheck className="w-3.5 h-3.5" />
                                            </span>
                                            {pick.tag}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                                    <div className="absolute inset-x-0 bottom-0 p-5">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-9 h-9 rounded-lg bg-black/60 ring-1 ring-white/15 flex items-center justify-center overflow-hidden backdrop-blur-sm">
                                                <img src={pick.logo} alt="logo" className="w-6 h-6 object-contain" />
                                            </div>
                                            <h4 className="text-white text-lg font-bold truncate">{pick.title}</h4>
                                        </div>
                                        <p className="text-white/70 text-sm mb-4">{pick.description}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 rounded-full bg-red-600/20 flex items-center justify-center">
                                                    <Coins className="w-3 h-3 text-red-500" />
                                                </div>
                                                <span className="text-white font-bold">+{pick.price}</span>
                                            </div>
                                            <button className="w-12 h-12 rounded-xl bg-white/10 ring-1 ring-white/20 text-white flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-colors">
                                                <QrCode className="w-6 h-6" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            <RecentActivityTable data={recentActivity} title="Recent Business Registration Requests" />
        </div>
    );
}
