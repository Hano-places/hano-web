import { Users, Star } from 'lucide-react';

interface ValueCardProps {
  title: string;
  value: number | string;
  unit?: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  label?: string;
  iconColor?: string;
  showStars?: boolean;
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
  showStars = false,
}) => {
  // ✅ If custom icon provided, clone it and inject color + size classes
  const renderedIcon = icon
    ? React.cloneElement(icon as React.ReactElement, {
      className: `w-6 h-6 ${iconColor} ${(icon as React.ReactElement).props.className || ""}`,
    })
    : <Users className={`w-6 h-6 ${iconColor}`} />;

  return (
    <div className={`bg-brand-dark-900 rounded-xl border border-brand-dark-700 p-6 ${className}`}>
      {/* Header with title and icon */}
      <div className="flex justify-between mb-8">
        <h3 className="text-sm text-brand-dark-400 font-medium">
          {title}
        </h3>
        <div className="w-12 h-12 bg-brand-dark-800 rounded-xl flex items-center justify-center self-start">
          {renderedIcon}
        </div>
      </div>

      {/* Value and unit */}
      <div className="mb-4">
        {showStars ? (
          <div className="flex items-center gap-1 mb-1">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
            ))}
            <Star className="w-5 h-5 text-gray-600" />
          </div>
        ) : (
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">
              {typeof value === 'number' ? value.toLocaleString() : value}
            </span>
            {unit && <span className="text-xs text-brand-dark-400">{unit}</span>}
          </div>
        )}
      </div>

      {/* description (left) and Label (right) */}
      <div className="flex justify-between items-center text-sm">
        <span className="text-brand-dark-300">{description}</span>
        {label && <span className="text-green-500 font-medium">{label}</span>}
      </div>
    </div>
  );
};

export default ValueCard;
