"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { apiClient } from "@/lib/api-client";
import PageHeader from "@/components/layout/page-header";
import ValueCard from "@/components/value-card";
import ProgressTable, {
    type RegistrationRequest,
} from "@/components/users/progress-table";
import UserDetailsModal from "@/components/users/UserDetailsModal";
import { toast } from "sonner";

const ActivityTrendChart = dynamic(
    () => import("@/components/ActivityTrendChart"),
    {
        ssr: false,
    }
);

export default function SuperAdminUsersPage() {
    const [selected, setSelected] = useState<RegistrationRequest | null>(null);
    const [users, setUsers] = useState<RegistrationRequest[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Mocked chart data
    const chartData = [
        { day: "Sun", registeredUsers: 45, visitors: 65 },
        { day: "Mon", registeredUsers: 75, visitors: 85 },
        { day: "Tue", registeredUsers: 55, visitors: 70 },
        { day: "Wed", registeredUsers: 85, visitors: 35 },
        { day: "Thu", registeredUsers: 70, visitors: 80 },
        { day: "Fri", registeredUsers: 60, visitors: 75 },
        { day: "Sat", registeredUsers: 80, visitors: 90 },
    ];

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsLoading(true);
                const response = await apiClient.get("/users");
                const mappedUsers: RegistrationRequest[] = (response.data.data || []).map(
                    (u: any) => ({
                        id: u.id,
                        name: u.name || "N/A",
                        email: u.email,
                        avatar: u.image || "",
                        totalCoins: u.coins || 0,
                        places: 0, // Placeholder
                        lastVisit: { location: "N/A", time: "N/A" },
                        status: "approved",
                    })
                );
                setUsers(mappedUsers);
            } catch (error) {
                console.error("Failed to fetch users:", error);
                toast.error("Failed to load users");
            } finally {
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <>
            <PageHeader
                breadcrumbs={[
                    { label: "Dashboard", href: "/super-admin" },
                    { label: "Users" },
                ]}
            />
            <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ValueCard
                        title="All Users"
                        value={users.length}
                        unit="Users"
                        description="+2.4%"
                        label="All time"
                    />
                    <ValueCard
                        title="Active"
                        value={0}
                        unit="Users"
                        description="+0%"
                        label="Today"
                    />
                    <ValueCard
                        title="Restricted"
                        value={0}
                        unit="Users"
                        description="0%"
                        label="All time"
                    />
                    <ValueCard
                        title="Visitors"
                        value={0}
                        unit="Users"
                        description="+0"
                        label="Now"
                    />
                </div>

                <ActivityTrendChart data={chartData} />

                <ProgressTable
                    data={users}
                    title="Registered Users"
                    onViewDetails={(req) => setSelected(req)}
                />
            </div>
            <UserDetailsModal selected={selected} onClose={() => setSelected(null)} />
        </>
    );
}
