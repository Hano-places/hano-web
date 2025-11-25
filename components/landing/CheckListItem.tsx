interface CheckListItemProps {
  children: React.ReactNode;
}

export default function CheckListItem({ children }: CheckListItemProps) {
  return (
    <li className="flex items-start">
      <svg
        className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-gray-300 text-lg">{children}</span>
    </li>
  );
}
