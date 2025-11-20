import type React from "react"

interface NotificationCardProps {
  userName: string
  action: string
  place: string
  placeColor: string
  avatarType: "circle" | "square"
  avatarColor?: string
  icon?: React.ReactNode
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
    <div className="bg-[#1E1E1E]/80 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 w-[280px] sm:w-[320px] md:w-[360px] shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="flex items-start space-x-2 sm:space-x-3">
        <div
          className={`w-8 h-8 sm:w-10 sm:h-10 ${avatarType === "circle" ? "rounded-full" : "rounded-lg sm:rounded-xl"} ${
            avatarColor || "bg-gray-700"
          } flex-shrink-0 flex items-center justify-center`}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-[10px] sm:text-xs leading-tight">
            <span className="font-semibold">{userName}</span> {action}
          </p>
          <p className={`${placeColor} font-semibold text-[10px] sm:text-xs mt-0.5 sm:mt-1 truncate`}>{place}</p>
        </div>
      </div>
    </div>
  )
}
