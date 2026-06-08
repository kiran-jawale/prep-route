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
    primary: "bg-emerald-600 hover:bg-emerald-700 text-white",

    secondary: "bg-zinc-900 hover:bg-black text-white",

    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      disabled={disabled || loading}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        px-5
        py-3
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
            h-4
            w-4
            animate-spin
            rounded-full
            border-2
            border-white
            border-t-transparent
          "
        />
      )}

      {children}
    </button>
  );
}
