"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";

export default function RootPage() {
  const { user, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log("Root Page Auth State:", { isLoading, isAuthenticated, user });

    if (!isLoading) {
      if (isAuthenticated) {
        // If isSuperAdmin, redirect to /super-admin
        if (user?.isSuperAdmin) {
          console.log("User is Super Admin, redirecting to /super-admin");
          router.push("/super-admin");
        } else {
          // Normal business user, redirect to /dashboard
          console.log("Redirecting to /dashboard (Not Super Admin)");
          router.push("/dashboard");
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

  // Root page now purely redirects essentially.
  // But if for some reason we are still here (e.g. initial render before effect), render nothing or loading.
  // The layout will handle the rest.

  return null;
}
