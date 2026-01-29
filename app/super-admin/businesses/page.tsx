"use client";

import { useState, useEffect } from "react";
import { apiClient } from "@/lib/api-client";
import { useAuth } from "@/contexts/auth-context";
import { AuthGuard } from "@/components/auth-guard";
import AppShell from "@/components/layout/app-shell";
import PageHeader from "@/components/layout/page-header";
import ValueCard from "@/components/value-card";
import ActivityTrendChart, { type ChartDataPoint } from "@/components/ActivityTrendChart";
import BusinessHistoryTable, { type BusinessVisit } from "@/components/businesses/business-history-table";
import BusinessDetailsModal from "@/components/businesses/BusinessDetailsModal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LayoutDashboard, Users, Building2, CreditCard, DollarSign, BarChart3, LogOut } from "lucide-react";
import { type SidebarMenuSection } from "@/components/layout/sidebar";
import { toast } from "sonner";

export default function BusinessesPage() {
  const [selected, setSelected] = useState<BusinessVisit | null>(null);
  const [places, setPlaces] = useState<BusinessVisit[]>([]);
  const [claims, setClaims] = useState<BusinessVisit[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user, logout } = useAuth();

  // Mocked chart data for now
  const chartData: ChartDataPoint[] = [
    { day: "Sun", registeredUsers: 45, visitors: 65 },
    { day: "Mon", registeredUsers: 75, visitors: 85 },
    { day: "Tue", registeredUsers: 55, visitors: 70 },
    { day: "Wed", registeredUsers: 85, visitors: 35 },
    { day: "Thu", registeredUsers: 70, visitors: 80 },
    { day: "Fri", registeredUsers: 60, visitors: 75 },
    { day: "Sat", registeredUsers: 80, visitors: 90 },
  ];

  const handleApproveClaim = async (claimId: string) => {
    try {
      await apiClient.patch(`/claims/${claimId}/status`, { status: "approved" });
      toast.success("Claim approved successfully");
      setClaims(prev => prev.filter(c => c.id !== claimId));
      // Refresh places to show the newly assigned owner if needed
      const placesRes = await apiClient.get("/places");
      const mappedPlaces: BusinessVisit[] = (placesRes.data.data || []).map((p: any) => ({
        id: p.id,
        businessName: p.name,
        email: p.email || "N/A",
        avatar: p.logoUrl || "",
        category: p.category || "General",
        subcategory: p.subcategory || "",
        clients: p.reviewStats?.totalReviews || 0,
        coinsPerVisit: 0,
        currentPlan: "Approved",
        time: { date: new Date(p.createdAt).toLocaleDateString(), clock: new Date(p.createdAt).toLocaleTimeString() },
      }));
      setPlaces(mappedPlaces);
    } catch (error) {
      console.error("Failed to approve claim:", error);
      toast.error("Failed to approve claim");
    }
  };

  return (
    <div className="space-y-8">
      <PageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/super-admin" },
          { label: "Businesses" },
        ]}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <ValueCard title="All Businesses" value={places.length} unit="Groups" description="+2.4%" label="All time" />
        <ValueCard title="Pending" value={claims.length} unit="Requests" description="Action required" label="Now" />
        <ValueCard title="Suspended" value={0} unit="Groups" description="0%" label="All time" />
        <ValueCard title="Visitors" value={0} unit="Now" description="+0" label="Now" />
      </div>

      <ActivityTrendChart data={chartData} />

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid grid-cols-3 w-full bg-brand-dark-900 border border-brand-dark-800">
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="restricted">Restricted</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="mt-4">
          <BusinessHistoryTable
            data={places}
            title="Active Businesses"
            onViewDetails={(req) => setSelected(req)}
          />
        </TabsContent>
        <TabsContent value="pending" className="mt-4">
          <BusinessHistoryTable
            data={claims}
            title="Pending Business Claims"
            onViewDetails={(req) => setSelected(req)}
            onApprove={handleApproveClaim}
            variant="pending"
          />
        </TabsContent>
        <TabsContent value="restricted" className="mt-4">
          <div className="rounded-lg border border-brand-dark-800 p-6 text-brand-dark-300">Restricted view coming soon.</div>
        </TabsContent>
      </Tabs>

      <BusinessDetailsModal selected={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
