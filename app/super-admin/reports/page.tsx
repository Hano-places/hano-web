"use client";

import PageHeader from "@/components/layout/page-header";

export default function ReportsPage() {
    return (
        <>
            <PageHeader
                breadcrumbs={[
                    { label: "Dashboard", href: "/super-admin" },
                    { label: "Reports" },
                ]}
            />
            <div className="flex items-center justify-center p-12 text-gray-500">
                <p>Reports content coming soon...</p>
            </div>
        </>
    );
}
