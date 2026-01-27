"use client";

import PageHeader from "@/components/layout/page-header";
import ValueCard from "@/components/value-card";

export default function BusinessDashboardPage() {
    return (
        <div className="space-y-8">
            <PageHeader breadcrumbs={[{ label: "Business", href: "/dashboard" }, { label: "Dashboard" }]} />

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                <ValueCard title="Daily Sales" value={45000} unit="RWF" description="Today" label="↑ 12%" />
                <ValueCard title="Total Clients" value={150} unit="Clients" description="Active" label="↑ 5%" />
                <ValueCard title="Menu Items" value={24} unit="Items" description="Total" label="↑ 2 new" />
                <ValueCard title="Stock Alerts" value={3} unit="Alerts" description="Critical" label="↓ 1" />
            </div>

            <div className="bg-brand-dark-900 border border-gray-800 rounded-xl p-8">
                <h2 className="text-xl font-semibold text-white mb-4">Welcome to your Business Dashboard</h2>
                <p className="text-brand-dark-300">
                    This is where you can manage your business operations, track sales, and monitor your menu and stock.
                </p>
            </div>
        </div>
    );
}
