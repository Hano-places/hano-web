"use client";

import { X, BadgeCheck, MapPin, Link2, Phone, ClipboardCopy } from "lucide-react";
import ValueCard from "@/components/value-card";
import { type RegistrationRequest } from "@/components/progress-table";

interface UserDetailsModalProps {
  selected: RegistrationRequest | null;
  onClose: () => void;
}

export default function UserDetailsModal({ selected, onClose }: UserDetailsModalProps) {
  if (!selected) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-4xl rounded-3xl p-16 overflow-hidden"
          style={{
            backgroundImage: "url('/modal.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Close Button */}
          <button
            className="absolute top-8 right-16 text-brand-dark-200"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="p-6 bg-brand-dark-900 rounded-3xl mb-12 mt-12 space-y-4">
            <div className="flex items-center justify-between">
              {/* Avatar + Info */}
              <div className="flex items-start gap-4">
                <img
                  src={selected.avatar}
                  alt={selected.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-lg font-semibold text-brand-dark-100">{selected.name}</div>
                  <div className="text-sm text-brand-dark-100">{selected.email}</div>
                </div>
              </div>

              {/* Verified Badge */}
              <BadgeCheck className="w-8 h-8 text-blue-500" />
            </div>

            <div className="flex items-center justify-between text-xs text-brand-dark-100">
              {/* Last Visit */}
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {selected.lastVisit.location}, Rwanda
              </span>

              {/* Phone + Link */}
              <div className="flex items-center gap-6">
                <a href="#" className="flex items-center gap-2 hover:underline">
                  <Link2 className="w-4 h-4" /> View Business Page
                </a>
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +250-791-234-567
                </span>
              </div>
            </div>
          </div>

          {/* Value Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <ValueCard
              title="Total Visits"
              value={selected.totalCoins}
              unit="RWF"
              description={`${selected.places} Plans`}
              label="↑ 2.4%"
              icon={<ClipboardCopy className="w-5 h-5 text-brand-dark-100" />}
            />
            <ValueCard
              title="Accumulated Coins"
              value={selected.totalCoins}
              unit="Hano coins"
              description={`${selected.places} Plans`}
              label="↑ 2.4%"
              icon={<ClipboardCopy className="w-5 h-5 text-brand-dark-100" />}
            />
          </div>

          {/* Footer */}
          <div className="grid grid-cols-2 divide-x gap-6 mb-6">
            <button
              className="w-full px-4 py-3 rounded-lg text-brand-dark-200 border border-brand-dark-700"
              onClick={onClose}
            >
              Back
            </button>
            <button className="w-full px-4 py-3 rounded-lg bg-white text-black font-medium">
              View Full Activity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
