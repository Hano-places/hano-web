"use client";

import PageHeader from "@/components/layout/page-header";

export default function SuperAdminReportsPage() {
    return (
        <div className="space-y-8">
            <PageHeader
                breadcrumbs={[
                    { label: "Dashboard", href: "/super-admin" },
                    { label: "Reports" },
                ]}
            />
            <div className="bg-brand-dark-900 border border-gray-800 rounded-xl p-8">
                <h2 className="text-xl font-semibold text-white mb-4">
                    Platform Reports
                </h2>
                <p className="text-brand-dark-300">
                    Analyze platform-wide performance with detailed reports and system
                    analytics.
                </p>
            </div>
        </div>
    );
}
