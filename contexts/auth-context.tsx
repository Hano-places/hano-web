"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth";

interface AuthContextType {
  user: {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
  } | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  isAuthenticated: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, isPending } = useSession();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(isPending);
  }, [isPending]);

  const user = session?.user
    ? {
        id: session.user.id,
        name: session.user.name || "",
        email: session.user.email || "",
        avatarUrl: session.user.image || undefined,
      }
    : null;

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

