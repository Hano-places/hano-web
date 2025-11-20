"use client";

import { X } from "lucide-react";
import ActivityTrendChart, { type ChartDataPoint } from "@/components/ActivityTrendChart";

interface UserActivityModalProps {
  email: string;
  data: ChartDataPoint[];
  onClose: () => void;
}

export default function UserActivityModal({ email, data, onClose }: UserActivityModalProps) {
  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 backdrop-blur-md bg-black/50" onClick={onClose} />

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-5xl rounded-3xl p-6 sm:p-10 overflow-hidden"
          style={{
            backgroundImage: "url('/modal.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <button className="absolute top-6 right-8 text-brand-dark-200" onClick={onClose}>
            <X className="w-5 h-5" />
          </button>

          <div className="p-4 sm:p-6 bg-brand-dark-900 rounded-2xl mb-6 mt-8">
            <div className="flex items-center justify-between">
              <div className="text-brand-dark-100">
                <div className="text-sm opacity-70">Full Activity</div>
                <div className="text-lg sm:text-xl font-semibold">{email}</div>
              </div>
            </div>
          </div>

          <ActivityTrendChart data={data} />
        </div>
      </div>
    </div>
  );
}
