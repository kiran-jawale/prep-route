

/**
 * Search Bar Component
 *
 * Reusable controlled search input used throughout
 * dashboard and management screens.
 *
 * Props:
 * @param value Current search value.
 * @param icon Optional icon element.
 * @param onChange Search value change handler.
 * @param placeholder Placeholder text.
 *
 * Purpose:
 * Standardizes search input behavior across modules.
 */


import type { ReactNode } from "react";


interface Props {
  value: string;
  icon?: ReactNode;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
}: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="
        h-12
        w-full
        rounded-xl
        border
        border-zinc-300
        px-4
        outline-none
        focus:border-[#6475F7]
      "
    />
  );
}
