"use client";

import PageHeader from "@/components/layout/page-header";

export default function SubscriptionPage() {
    return (
        <div className="space-y-8">
            <PageHeader breadcrumbs={[{ label: "Business", href: "/dashboard" }, { label: "Subscription" }]} />
            <div className="bg-brand-dark-900 border border-gray-800 rounded-xl p-8">
                <h2 className="text-xl font-semibold text-white mb-4">Subscription Plan</h2>
                <p className="text-brand-dark-300">View and manage your current subscription plan and billing.</p>
            </div>
        </div>
    );
}
