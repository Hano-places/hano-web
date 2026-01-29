"use client";

import PageHeader from "@/components/layout/page-header";

export default function UsersPage() {
    return (
        <>
            <PageHeader
                breadcrumbs={[
                    { label: "Dashboard", href: "/super-admin" },
                    { label: "Users" },
                ]}
            />
            <div className="flex items-center justify-center p-12 text-gray-500">
                <p>Users content coming soon...</p>
            </div>
        </>
    );
}
