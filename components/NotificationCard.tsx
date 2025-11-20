import type React from "react";

interface NotificationCardProps {
  userName: string;
  action: string;
  place: string;
  placeColor: string;
  avatarType: "circle" | "square";
  avatarColor?: string;
  icon?: React.ReactNode;
}

export default function NotificationCard({
  userName,
  action,
  place,
  placeColor,
  avatarType,
  avatarColor,
  icon,
}: NotificationCardProps) {
  return (
    <div className="bg-[#1E1E1E]/90 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 w-full max-w-[360px] mx-auto shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="flex items-start space-x-3">
        <div
          className={`w-10 h-10 ${
            avatarType === "circle" ? "rounded-full" : "rounded-xl"
          } ${
            avatarColor || "bg-gray-700"
          } flex-shrink-0 flex items-center justify-center`}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-xs sm:text-sm leading-tight">
            <span className="font-semibold">{userName}</span> {action}
          </p>
          <p className={`${placeColor} font-semibold text-xs sm:text-sm mt-1`}>
            {place}
          </p>
        </div>
      </div>
    </div>
  );
}
