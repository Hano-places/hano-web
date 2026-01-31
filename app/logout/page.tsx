"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

export default function LogoutPage() {
  const router = useRouter();
  const { logout } = useAuth();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleCancel = () => {
    router.push("/");
  };

  const handleConfirmSignOut = async () => {
    setIsSigningOut(true);
    try {
      await logout();
      router.push("/login");
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: "#0C0C0C" }}>
      <AlertDialog open={true} onOpenChange={(open) => { if (!open) router.push("/"); }}>
        <AlertDialogContent className="bg-brand-dark-900 border-brand-dark-700 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Sign out?</AlertDialogTitle>
            <AlertDialogDescription className="text-brand-dark-300">
              Do you really want to sign out? You will need to log in again to access the dashboard.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              className="bg-brand-dark-800 border-brand-dark-600 text-white hover:bg-brand-dark-700"
              onClick={handleCancel}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 text-white hover:bg-red-700"
              onClick={handleConfirmSignOut}
              disabled={isSigningOut}
            >
              {isSigningOut ? "Signing out..." : "Sign out"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
