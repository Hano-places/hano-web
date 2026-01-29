"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { apiClient } from "@/lib/api-client";
import { getTokens, clearTokens } from "@/lib/auth";

interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  isSuperAdmin?: boolean;
}

interface ManagedPlace {
  place: {
    id: string;
    name: string;
  };
}

interface AuthContextType {
  user: User | null;
  managedPlaces: ManagedPlace[];
  isLoading: boolean;
  isAuthenticated: boolean;
  refreshProfile: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  managedPlaces: [],
  isLoading: true,
  isAuthenticated: false,
  refreshProfile: async () => { },
  logout: () => { },
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [managedPlaces, setManagedPlaces] = useState<ManagedPlace[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const fetchProfile = useCallback(async () => {
    const { accessToken } = getTokens();
    if (!accessToken) {
      setUser(null);
      setManagedPlaces([]);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      // Fetch user profile
      const userResponse = await apiClient.get("/users/me");
      const userData = userResponse.data;
      console.log("AuthContext: Raw /users/me response:", userData);


      // Handle potential nesting (e.g. if API returns { user: { ... } } or just { ... })
      const distinctUser = userData.user || userData;

      setUser({
        id: distinctUser.id,
        name: distinctUser.name || "",
        email: distinctUser.email || "",
        avatarUrl: distinctUser.image || undefined,
        isSuperAdmin: distinctUser.isSuperAdmin,
      });

      // Fetch managed places for business owners
      const placesResponse = await apiClient.get("/place-admins/users/me/managed-places");
      setManagedPlaces(placesResponse.data.data || []);

    } catch (error) {
      console.error("Failed to fetch profile:", error);
      // Tokens might be invalid, but interceptor handles 401
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const logout = useCallback(() => {
    clearTokens();
    setUser(null);
    setManagedPlaces([]);
    router.push("/login");
  }, [router]);

  return (
    <AuthContext.Provider
      value={{
        user,
        managedPlaces,
        isLoading,
        isAuthenticated: !!user,
        refreshProfile: fetchProfile,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
