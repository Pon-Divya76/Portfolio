import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-[10px] bg-[#f1f1f1] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.1)] ${className}`}
    >
      {children}
    </div>
  );
}


