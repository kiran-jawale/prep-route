import type { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function TextArea({ className = "", ...props }: Props) {
  return (
    <textarea
      {...props}
      className={`
        min-h-32
        w-full
        rounded-xl
        border
        border-zinc-300
        p-4
        outline-none
        focus:border-[#6475F7]
        ${className}
      `}
    />
  );
}
