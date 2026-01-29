"use client";

import PageHeader from "@/components/layout/page-header";

export default function BusinessesPage() {
    return (
        <>
            <PageHeader
                breadcrumbs={[
                    { label: "Dashboard", href: "/super-admin" },
                    { label: "Businesses" },
                ]}
            />
            <div className="flex items-center justify-center p-12 text-gray-500">
                <p>Businesses content coming soon...</p>
            </div>
        </>
    );
}
