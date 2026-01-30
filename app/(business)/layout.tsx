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
    const { user, managedPlaces, logout } = useAuth();

    const displayUser = user || {
        id: "",
        name: "",
        email: "",
    };

    const firstPlace = managedPlaces[0]?.place;

    const menu: SidebarMenuSection[] = [
        {
            section: firstPlace ? `Store: ${firstPlace.name}` : "Hano Business",
            items: [
                { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
                { icon: Users, label: "Clients", href: "/clients" },
                { icon: UtensilsCrossed, label: "Stock & Menu", href: "/stock-menu" },
                { icon: CreditCard, label: "Subscription", href: "/subscriptions" },
                { icon: BarChart3, label: "Reports", href: "/reports" },
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
