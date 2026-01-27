"use client";

import PageHeader from "@/components/layout/page-header";

export default function ClientsPage() {
    return (
        <div className="space-y-8">
            <PageHeader breadcrumbs={[{ label: "Business", href: "/dashboard" }, { label: "Clients" }]} />
            <div className="bg-brand-dark-900 border border-gray-800 rounded-xl p-8">
                <h2 className="text-xl font-semibold text-white mb-4">Client Management</h2>
                <p className="text-brand-dark-300">Manage your customers and their interaction history here.</p>
            </div>
        </div>
    );
}
