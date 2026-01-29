"use client";

import PageHeader from "@/components/layout/page-header";

export default function SubscriptionsPage() {
    return (
        <>
            <PageHeader
                breadcrumbs={[
                    { label: "Dashboard", href: "/super-admin" },
                    { label: "Subscriptions" },
                ]}
            />
            <div className="flex items-center justify-center p-12 text-gray-500">
                <p>Subscriptions content coming soon...</p>
            </div>
        </>
    );
}
