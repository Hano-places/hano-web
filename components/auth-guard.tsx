"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";

import { usePathname } from "next/navigation";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, managedPlaces, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push("/login");
        return;
      }

      // Role-based redirection
      const isAdminRoute = pathname.startsWith("/businesses") || pathname.startsWith("/users");
      const isBusinessRoute = pathname.startsWith("/dashboard") ||
        pathname.startsWith("/stock-menu") ||
        pathname.startsWith("/reviews") ||
        pathname.startsWith("/vouchers") ||
        pathname.startsWith("/staff-team") ||
        pathname.startsWith("/settings");

      // Redirect Business Owners away from Admin routes
      if (isAdminRoute && !user?.isSuperAdmin) {
        router.push("/dashboard");
        return;
      }

      // Redirect Super Admins from Business routes to Admin home if they don't own the place
      // (Though usually Super Admins might want to see them, let's follow the logic for Business Owners)
      if (isBusinessRoute && !user?.isSuperAdmin && managedPlaces.length === 0) {
        // If they have no business, maybe they should be in onboarding
        // router.push("/onboarding");
      }
    }
  }, [isAuthenticated, isLoading, user, managedPlaces, router, pathname]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0C0C0C" }}>
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}

