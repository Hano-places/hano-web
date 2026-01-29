"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import AdminDashboardContent from "@/components/admin/AdminDashboardContent";
import { AuthGuard } from "@/components/auth-guard";

export default function RootPage() {
  const { user, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log("Root Page Auth State:", { isLoading, isAuthenticated, user });

    if (!isLoading) {
      if (isAuthenticated) {
        // If explicitly NOT an admin, OR if isSuperAdmin is undefined/null,
        // treat them as a normal business user and redirect to dashboard.
        // We only keep them here if user.isSuperAdmin === true.
        if (user?.isSuperAdmin !== true) {
          console.log("Redirecting to /dashboard (Not Super Admin)");
          router.push("/dashboard");
        } else {
          console.log("User is Super Admin, staying on root");
        }
      } else {
        console.log("Not authenticated, redirecting to /login");
        router.push("/login");
      }
    }
  }, [user, isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0C0C0C] flex items-center justify-center font-montserrat">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (isAuthenticated && user?.isSuperAdmin) {
    return (
      <AuthGuard>
        <AdminDashboardContent />
      </AuthGuard>
    );
  }

  return null;
}
