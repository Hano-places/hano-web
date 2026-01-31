"use client";

import PageHeader from "@/components/layout/page-header";
import { LogoutDevicesButton } from "@/components/auth/logout-devices-button";

export default function BusinessSettingsPage() {
    return (
        <div className="space-y-8">
            <PageHeader
                breadcrumbs={[
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Settings" },
                ]}
            />
            <div className="bg-brand-dark-900 border border-gray-800 rounded-xl p-8">
                <h2 className="text-xl font-semibold text-white mb-4">
                    Business Settings
                </h2>
                <p className="text-brand-dark-300">
                    Manage your business profile, operating hours, and improved configurations.
                </p>
            </div>
            <LogoutDevicesButton />
        </div>
    );
}
