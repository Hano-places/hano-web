"use client";

import PageHeader from "@/components/layout/page-header";

export default function ReportsPage() {
    return (
        <div className="space-y-8">
            <PageHeader breadcrumbs={[{ label: "Business", href: "/dashboard" }, { label: "Reports" }]} />
            <div className="bg-brand-dark-900 border border-gray-800 rounded-xl p-8">
                <h2 className="text-xl font-semibold text-white mb-4">Business Reports</h2>
                <p className="text-brand-dark-300">Analyze your performance with detailed reports and insights.</p>
            </div>
        </div>
    );
}
