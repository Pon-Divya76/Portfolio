"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/data/navigation";

type NavTabsProps = {
  items: NavItem[];
  className?: string;
};

export function NavTabs({ items, className }: NavTabsProps) {
  const pathname = usePathname();

  return (
    <nav className={className}>
      <ul className="flex items-center justify-center space-x-6 text-base font-medium text-text-secondary">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative py-2 transition-colors hover:text-text-primary ${
                  isActive ? 'text-text-primary' : ''
                }`}
              >
                {item.label}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
