

/**
 * Badge Component
 *
 * Displays small highlighted content inside a rounded badge.
 *
 * Props:
 * @param children Content displayed inside the badge.
 *
 * Purpose:
 * Provides a reusable visual label component.
 */


import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Badge = ({ children }: Props) => {
  return (
    <span
      className="
        inline-flex items-center  px-3 py-1  rounded-full  text-sm  bg-emerald-100  text-emerald-700
      "
    >
      {children}
    </span>
  );
};

export default Badge;