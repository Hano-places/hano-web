"use client";

import PageHeader from "@/components/layout/page-header";

export default function BusinessNotificationsPage() {
    return (
        <div className="space-y-8">
            <PageHeader
                breadcrumbs={[
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Notifications" },
                ]}
            />
            <div className="bg-brand-dark-900 border border-gray-800 rounded-xl p-8">
                <h2 className="text-xl font-semibold text-white mb-4">
                    Notifications
                </h2>
                <p className="text-brand-dark-300">
                    View updates about your business, reservations, and system alerts.
                </p>
            </div>
        </div>
    );
}
