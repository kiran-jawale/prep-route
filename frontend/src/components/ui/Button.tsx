/**
 * Button Component
 *
 * Reusable button supporting loading states and
 * multiple visual variants.
 *
 * Props:
 * @param children Button content.
 * @param loading Displays loading indicator and disables interaction.
 * @param variant Visual appearance of button.
 *
 * Purpose:
 * Standardizes action buttons across the application.
 */

import type { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
  variant?: "primary" | "secondary" | "danger";
}
export default function Button({
  children,
  loading = false,
  variant = "primary",
  className = "",
  disabled,
  ...props
}: Props) {
  const variants = {
    primary:
      "bg-[#6475F7] hover:bg-[#5B6CF2] text-white border border-[#6475F7]",

    secondary:
      "bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-200",

    danger: "bg-red-50 hover:bg-red-100 text-red-600 border border-red-200",
  };

  return (
    <button
      disabled={disabled || loading}
      className={`
  inline-flex
  items-center
  justify-center
  gap-2

  rounded-lg

  px-6
  py-2.5

  text-sm
  font-medium

  transition-all

  disabled:cursor-wait
  disabled:opacity-60

  ${variants[variant]}
  ${className}
`}
      {...props}
    >
      {loading && (
        <span
          className="
            h-4      w-4   animate-spin   border-2  border-white border-t-transparent
          "
        />
      )}

      {children}
    </button>
  );
}
