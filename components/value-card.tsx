import React from 'react';
import { Users } from 'lucide-react';

interface ValueCardProps {
  title: string;
  value: number;
  unit: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  label?: string;
  iconColor?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
  title,
  value,
  unit,
  description,
  icon,
  label,
  className = "",
  iconColor = "",
}) => {
  // ✅ If custom icon provided, clone it and inject color + size classes
  const renderedIcon = icon
    ? React.cloneElement(icon as React.ReactElement, {
        className: `w-6 h-6 ${iconColor} ${(icon as React.ReactElement).props.className || ""}`,
      })
    : <Users className={`w-6 h-6 ${iconColor}`} />;

  return (
    <div className={`bg-brand-dark-900 rounded-xl border-2 border-brand-dark-700 p-6 ${className}`}>
      {/* Header with title and icon */}
      <div className="flex justify-between mb-8">
        <h3 className="text-sm text-brand-dark-50">
          {title}
        </h3>
        <div className="w-12 h-12 bg-brand-dark-700 rounded-xl flex items-center justify-center self-start">
          {renderedIcon}
        </div>
      </div>

      {/* Value and unit */}
      <div className="mb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-xl text-brand-dark-50">
            {value}
          </span>
          <span className="text-xs text-brand-dark-400">
            {unit}
          </span>
        </div>
      </div>

      {/* description (left) and Label (right) */}
      <div className="flex justify-between items-center text-sm">
        <span className="text-purple-400">{description}</span>
        {label && <span className="text-green-500 font-medium">{label}</span>}
      </div>
    </div>
  );
};

export default ValueCard;
