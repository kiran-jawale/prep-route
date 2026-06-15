

/**
 * Input Component
 *
 * Reusable text input wrapper around the native HTML input.
 *
 * Props:
 * Inherits all standard HTML input attributes.
 *
 * Purpose:
 * Provides consistent styling for form inputs.
 */


import type { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className = "", ...props }: Props) => {
  return (
    <input
      {...props}
      className={`
        w-full   h-12  px-4 rounded-xl border border-zinc-300  outline-none focus:border-[#6475F7]
        ${className}
      `}
    />
  );
};

export default Input;
