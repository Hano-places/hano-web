interface CheckListItemProps {
  children: React.ReactNode;
}

export default function CheckListItem({ children }: CheckListItemProps) {
  return (
    <li className="flex items-center gap-4 ml-5">
      <div className="w-8 h-8 rounded-full bg-[var(--landing-surface-60)] flex items-center justify-center flex-shrink-0">
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-[var(--landing-text-muted)] text-base sm:text-lg leading-relaxed">{children}</span>
    </li>
  );
}
