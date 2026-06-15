

/**
 * Container Component
 *
 * Provides a consistent content width and horizontal spacing
 * for page layouts.
 *
 * Props:
 * @param children Wrapped page content.
 * @param className Additional container styles.
 *
 * Purpose:
 * Standardizes page alignment and content width.
 */


import type { ReactNode } from "react";

interface Props {
  children: ReactNode;

  className?: string;
}

export default function Container({ children, className = "" }: Props) {
  return (
    <div
      className={`
        mx-auto  w-full  max-w-7xl  px-6
        ${className}
      `}
    >
      {children}
    </div>
  );
}
