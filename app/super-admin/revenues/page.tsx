"use client";

import PageHeader from "@/components/layout/page-header";

export default function RevenuesPage() {
    return (
        <>
            <PageHeader
                breadcrumbs={[
                    { label: "Dashboard", href: "/super-admin" },
                    { label: "Revenues" },
                ]}
            />
            <div className="flex items-center justify-center p-12 text-gray-500">
                <p>Revenues content coming soon...</p>
            </div>
        </>
    );
}
