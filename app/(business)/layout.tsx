"use client";

import React from "react";
import AppShell from "@/components/layout/app-shell";
import { type SidebarMenuSection } from "@/components/layout/sidebar";
import { LayoutDashboard, Users, UtensilsCrossed, CreditCard, BarChart3, LogOut } from "lucide-react";
import { AuthGuard } from "@/components/auth-guard";
import { useAuth } from "@/contexts/auth-context";

export default function BusinessLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user } = useAuth();

    const displayUser = user || {
        name: "",
        email: "",
        avatarUrl: undefined,
    };

    const menu: SidebarMenuSection[] = [
        {
            section: "Business Management",
            items: [
                { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
                { icon: Users, label: "Clients", href: "/clients" },
                { icon: UtensilsCrossed, label: "Stock & Menu", href: "/stock-menu" },
                { icon: CreditCard, label: "Subscription", href: "/subscription" },
                { icon: BarChart3, label: "Reports", href: "/reports" },
            ],
        },
        {
            section: "Account",
            items: [{ icon: LogOut, label: "Sign Out", href: "/logout" }],
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
