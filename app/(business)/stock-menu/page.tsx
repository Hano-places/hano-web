"use client";

import PageHeader from "@/components/layout/page-header";

export default function StockMenuPage() {
    return (
        <div className="space-y-8">
            <PageHeader breadcrumbs={[{ label: "Business", href: "/dashboard" }, { label: "Stock & Menu" }]} />
            <div className="bg-brand-dark-900 border border-gray-800 rounded-xl p-8">
                <h2 className="text-xl font-semibold text-white mb-4">Stock & Menu Management</h2>
                <p className="text-brand-dark-300">Update your products, pricing, and monitor stock levels.</p>
            </div>
        </div>
    );
}
