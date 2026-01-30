"use client";

import { useAuth } from "@/contexts/auth-context";
import AppShell from "@/components/layout/app-shell";
import { type SidebarMenuSection } from "@/components/layout/sidebar";
import {
    LayoutDashboard,
    Users,
    Building2,
    CreditCard,
    DollarSign,
    BarChart3,
    LogOut,
} from "lucide-react";
import { AuthGuard } from "@/components/auth-guard";

export default function SuperAdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, logout } = useAuth();

    const displayUser = user || {
        id: "",
        name: "Admin",
        email: "",
        avatarUrl: undefined,
    };

    const menu: SidebarMenuSection[] = [
        {
            section: "App Management",
            items: [
                {
                    icon: LayoutDashboard,
                    label: "Dashboard",
                    href: "/super-admin",
                    active: false, // This will be handled by the current path check in Sidebar usually, or we can leave it dynamic
                },
                {
                    icon: Building2,
                    label: "Businesses",
                    badge: 5,
                    href: "/super-admin/businesses",
                },
                { icon: Users, label: "Users", href: "/super-admin/users" },
                {
                    icon: CreditCard,
                    label: "Subscriptions",
                    href: "/super-admin/subscriptions",
                },
                {
                    icon: DollarSign,
                    label: "Revenues",
                    href: "/super-admin/revenues",
                },
                {
                    icon: BarChart3,
                    label: "Reports",
                    badge: 9,
                    href: "/super-admin/reports",
                },
            ],
        },
        {
            section: "Account",
            items: [{ icon: LogOut, label: "Sign Out", onClick: logout }],
        },
    ];

    return (
        <AuthGuard>
            <AppShell user={displayUser} menu={menu}>
                {children}
            </AppShell>
        </AuthGuard>
    );
}
