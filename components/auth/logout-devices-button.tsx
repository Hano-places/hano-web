"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { apiClient } from "@/lib/api-client";
import { useAuth } from "@/contexts/auth-context";
import { toast } from "sonner";
import { LogOut } from "lucide-react";

export function LogoutDevicesButton() {
    const [isLoading, setIsLoading] = useState(false);
    const { logout } = useAuth();

    const handleLogoutAll = async () => {
        try {
            setIsLoading(true);
            await apiClient.post("/auth/logout-devices");
            toast.success("Logged out from all devices successfully.");

            // Clear local session as well
            logout();
        } catch (error) {
            console.error("Failed to logout from all devices:", error);
            toast.error("Failed to logout from all devices. Please try again.");
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-brand-dark-900 border border-gray-800 rounded-xl p-8 mt-8">
            <h3 className="text-lg font-medium text-white mb-4">Session Management</h3>
            <p className="text-brand-dark-300 mb-6">
                Sign out of all other active sessions on all devices, including this one.
            </p>
            <Button
                variant="destructive"
                onClick={handleLogoutAll}
                disabled={isLoading}
                className="flex items-center gap-2"
            >
                <LogOut className="w-4 h-4" />
                {isLoading ? "Logging out..." : "Log out from all devices"}
            </Button>
        </div>
    );
}
