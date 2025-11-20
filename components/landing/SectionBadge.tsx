interface SectionBadgeProps {
  children: React.ReactNode;
}

export default function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <div className="inline-block bg-[#F9F5FF] text-[#6941C6] px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm md:text-base mb-6 md:mb-8 font-medium">
      {children}
    </div>
  );
}
