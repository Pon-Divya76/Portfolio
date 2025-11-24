import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
}

type CardHeaderProps = {
  children: ReactNode;
  className?: string;
};

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

type CardTitleProps = {
  children: ReactNode;
  className?: string;
};

export function CardTitle({ children, className = "" }: CardTitleProps) {
  return (
    <h3 className={`text-xl font-semibold text-white ${className}`}>
      {children}
    </h3>
  );
}

type CardContentProps = {
  children: ReactNode;
  className?: string;
};

export function CardContent({ children, className = "" }: CardContentProps) {
  return (
    <div className={`text-white ${className}`}>
      {children}
    </div>
  );
}

// Re-export all components for easier imports
export { CardHeader as Header, CardTitle as Title, CardContent as Content };



