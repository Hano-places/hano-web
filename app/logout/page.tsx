"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";

export default function LogoutPage() {
  const router = useRouter();
  const { logout } = useAuth();

  useEffect(() => {
    const run = async () => {
      try {
        await logout();
      } finally {
        router.push("/login");
      }
    };
    void run();
  }, [logout, router]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0C0C0C" }}>
      <div className="text-white">Signing out...</div>
    </div>
  );
}

