import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "danger";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: Props) => {
  const variants = {
    primary: "bg-[#6475F7] hover:bg-[#5868F0] text-white",

    secondary: "bg-zinc-100 hover:bg-zinc-200 text-zinc-800",

    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      {...props}
      className={`
        h-12
        px-6
        rounded-xl
        font-medium
        transition
        disabled:opacity-50
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
