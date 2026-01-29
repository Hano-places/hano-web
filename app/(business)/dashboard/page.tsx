"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { apiClient } from "@/lib/api-client";
import { useAuth } from "@/contexts/auth-context";
import PageHeader from "@/components/layout/page-header";
import ValueCard from "@/components/value-card";
import { Users, Ticket, Building2, Star, BadgeCheck, Coins, QrCode } from "lucide-react";
import { Card } from "@/components/ui/card";
import RecentActivityTable, { type ActivityItem } from "@/components/business/recent-activity-table";
import { toast } from "sonner";

const ActivityTrendChart = dynamic(() => import("@/components/ActivityTrendChart"), {
    ssr: false,
});

export default function BusinessDashboardPage() {
    const { managedPlaces } = useAuth();
    const [placeStats, setPlaceStats] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    const firstPlace = managedPlaces[0]?.place;

    useEffect(() => {
        if (!firstPlace) {
            setIsLoading(false);
            return;
        }

        const fetchStats = async () => {
            try {
                setIsLoading(true);
                const response = await apiClient.get(`/places/${firstPlace.id}`);
                setPlaceStats(response.data.data);
            } catch (error) {
                console.error("Failed to fetch place stats:", error);
                toast.error("Failed to load business stats");
            } finally {
                setIsLoading(false);
            }
        };

        fetchStats();
    }, [firstPlace]);

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

    // Mocked for now - backend doesn't have "picks" yet
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
    ];

    const recentActivity: ActivityItem[] = [];

    if (!firstPlace && !isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
                <h2 className="text-2xl font-bold text-white">No active business found</h2>
                <p className="text-brand-dark-300">You need to claim or register a business to see statistics.</p>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <PageHeader breadcrumbs={[{ label: "Home", href: "/dashboard" }, { label: "Overview" }]} />

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                <ValueCard
                    title="Business Name"
                    value={placeStats?.place?.name || "Loading..."}
                    unit=""
                    description={placeStats?.category?.name || "N/A"}
                    label="Active"
                    icon={<Building2 />}
                    iconColor="text-white"
                />
                <ValueCard
                    title="Total Reviews"
                    value={placeStats?.reviewStats?.totalReviews || 0}
                    unit="Reviews"
                    description="All time"
                    label="↑ 2.4%"
                    icon={<Users />}
                    iconColor="text-blue-400"
                />
                <ValueCard
                    title="Average Rating"
                    value={placeStats?.reviewStats?.averageRating || "0.0"}
                    showStars
                    description={`${placeStats?.reviewStats?.totalReviews || 0} Reviews`}
                    icon={<Star />}
                    iconColor="text-teal-400"
                />
                <ValueCard
                    title="Active Promotions"
                    value={0}
                    unit="Promos"
                    description="Live now"
                    label="0%"
                    icon={<Ticket />}
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

            <RecentActivityTable data={recentActivity} title="Recent Customer Activity" />
        </div>
    );
}
