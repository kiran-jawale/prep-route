import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`  bg-white border  rounded-2xl  p-6        shadow-sm
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
