"use client";

import dynamic from "next/dynamic";
import PageHeader from "@/components/layout/page-header";
import ValueCard from "@/components/value-card";
import { ShoppingBasket, Package, AlertCircle, AlertTriangle, UtensilsCrossed, Warehouse, ChevronRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import StockMetricCard from "@/components/business/stock-metric-card";
import ItemPerformanceCard from "@/components/business/item-performance-card";
import ClientReviewCard from "@/components/business/review-card";

const ActivityTrendChart = dynamic(() => import("@/components/ActivityTrendChart"), {
    ssr: false,
});

export default function StockMenuPage() {
    const affordabilityData = [
        { day: "Jan", index: 85000 },
        { day: "Feb", index: 86000 },
        { day: "Mar", index: 88000 },
        { day: "Apr", index: 87000 },
        { day: "May", index: 92000 },
        { day: "Jun", index: 95000 },
        { day: "Jul", index: 94000 },
        { day: "Aug", index: 98000 },
        { day: "Sep", index: 100000 },
        { day: "Oct", index: 102000 },
        { day: "Nov", index: 105000 },
        { day: "Dec", index: 107843.82 },
    ];

    const chartKeys = [
        { key: "index", label: "Affordability Index", color: "#a855f7", gradientId: "affordabilityGradient" }
    ];

    const itemChartData = [
        { value: 40 }, { value: 35 }, { value: 45 }, { value: 60 }, { value: 55 }, { value: 70 },
        { value: 65 }, { value: 80 }, { value: 75 }, { value: 85 }, { value: 90 }, { value: 100 }
    ];

    const reviews = [
        {
            id: "1",
            rating: 3,
            text: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
            userName: "Caitlyn King",
            userEmail: "user@gmail.com",
            userAvatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100",
            timeAgo: "12 mins ago",
            itemName: "Large Pizza",
            itemImage: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=300",
            itemTrend: "7.2%"
        },
        {
            id: "2",
            rating: 4,
            text: "Clean interface and powerful tools. The stock alerts really helped us reduce waste.",
            userName: "Caitlyn King",
            userEmail: "user@gmail.com",
            userAvatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
            timeAgo: "2 hours ago",
            itemName: "Large Pizza",
            itemImage: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=300",
            itemTrend: "7.2%"
        },
        {
            id: "3",
            rating: 5,
            text: "The best dashboard we have used for our restaurant so far. Highly recommended!",
            userName: "Caitlyn King",
            userEmail: "user@gmail.com",
            userAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
            timeAgo: "5 hours ago",
            itemName: "Large Pizza",
            itemImage: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=300",
            itemTrend: "7.2%"
        }
    ];

    const headerActions = (
        <>
            <Button className="h-14 px-6 bg-white text-brand-dark-900 hover:bg-gray-100 font-bold rounded-xl gap-2">
                <UtensilsCrossed className="w-5 h-5" />
                Menu Management
            </Button>
            <Button className="h-14 px-6 bg-white text-brand-dark-900 hover:bg-gray-100 font-bold rounded-xl gap-2">
                <Warehouse className="w-5 h-5" />
                Stock Management
            </Button>
        </>
    );

    return (
        <div className="space-y-12 pb-12">
            <PageHeader
                breadcrumbs={[{ label: "Home", href: "/dashboard" }, { label: "Stock & Menu" }]}
                actions={headerActions}
                hideDefaultActions
            />

            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <ValueCard
                    title="Total Menu Items"
                    value={120}
                    unit=""
                    description="12 Categories"
                    label="↑ 2.4%"
                    icon={<ShoppingBasket />}
                    iconColor="text-blue-400"
                />
                <ValueCard
                    title="Available Today"
                    value={120}
                    unit=""
                    description="12 Unavailable"
                    label="↑ 2.4%"
                    icon={<Package />}
                    iconColor="text-green-500"
                />
                <ValueCard
                    title="Out of Stock"
                    value={32}
                    unit=""
                    description=""
                    label="↑ 2.4%"
                    icon={<AlertCircle />}
                    iconColor="text-red-500"
                />
                <ValueCard
                    title="Out of Stock"
                    value={120}
                    unit=""
                    description="All time"
                    label="↑ 2.4%"
                    icon={<AlertTriangle />}
                    iconColor="text-orange-500"
                />
            </div>

            {/* Affordability Index Section */}
            <div className="bg-brand-dark-900 border border-brand-dark-800 rounded-3xl p-8 space-y-8">
                <div className="flex items-start justify-between">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Menu Affordability Index</h3>
                        <div className="flex items-center gap-4">
                            <span className="text-4xl font-bold text-white">$107,843.82</span>
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-bold">
                                <TrendingUp className="w-4 h-4" />
                                7.2%
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="px-6 py-3 rounded-xl border border-brand-dark-700 text-brand-dark-100 font-medium hover:bg-white/5 transition-all">Learn more</button>
                        <button className="px-6 py-3 rounded-xl border border-brand-dark-700 text-brand-dark-100 font-medium hover:bg-white/5 transition-all">View report</button>
                    </div>
                </div>

                {/* Fixed chart overlap by giving enough height and removing internal card styling */}
                <div className="h-96 mt-8">
                    <ActivityTrendChart
                        data={affordabilityData}
                        title=""
                        dataKeys={chartKeys}
                        periods={[]}
                        showBorder={false}
                        showHeader={false}
                    />
                </div>
            </div>

            {/* Component Metrics Section - Now full width row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <StockMetricCard
                    title="Most Sold Component"
                    name="Baking Flour"
                    value={234}
                    unit="Kg"
                    image="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=150"
                    progress={75}
                    icon={<TrendingUp className="w-5 h-5" />}
                />
                <StockMetricCard
                    title="Recent Out Of Stock - Component"
                    name="Baking Flour"
                    value={0}
                    unit="Kg"
                    image="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=150"
                    progress={0}
                    icon={<AlertCircle className="w-5 h-5" />}
                />
                <StockMetricCard
                    title="Most Overstocked - Component"
                    name="Maize Flour"
                    value={234}
                    unit="Pcs"
                    image="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=150"
                    progress={90}
                    icon={<AlertTriangle className="w-5 h-5" />}
                />
            </div>

            {/* Item Performance Cards Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ItemPerformanceCard
                    title="Top Selling Menu Item"
                    itemName="Large Pizza"
                    sells="12,450"
                    trend="7.2%"
                    isPositive
                    subItemName="Large Pizza"
                    subItemValue="234"
                    subItemUnit="In Last Month"
                    subItemImage="https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=300"
                    chartData={itemChartData}
                />
                <ItemPerformanceCard
                    title="Least Selling Menu Item"
                    itemName="Large Pizza"
                    sells="12,450"
                    trend="7.2%"
                    isPositive={false}
                    subItemName="Large Pizza"
                    subItemValue="234"
                    subItemUnit="In Last Month"
                    subItemImage="https://images.pexels.com/photos/1239347/pexels-photo-1239347.jpeg?auto=compress&cs=tinysrgb&w=300"
                    chartData={itemChartData}
                />
            </div>

            {/* Client Reviews Section */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-white">Client reviews</h2>
                    <button className="text-sm font-medium text-brand-dark-300 hover:text-white transition-colors flex items-center gap-1">
                        View All <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
                <div className="flex gap-8 overflow-x-auto no-scrollbar pb-4 pr-4">
                    {reviews.map((review) => (
                        <ClientReviewCard key={review.id} {...review} />
                    ))}
                </div>
            </div>
        </div>
    );
}
