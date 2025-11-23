"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/data/navigation";

type NavTabsProps = {
  items: NavItem[];
};

export function NavTabs({ items }: NavTabsProps) {
  const pathname = usePathname();

  return (
    <nav
      className="mx-auto my-8 w-full max-w-5xl rounded-2xl border border-white/20 bg-white/10 px-3 py-3 shadow-lg backdrop-blur-xl"
      aria-label="Primary"
    >
      <div className="flex snap-x gap-3 overflow-x-auto pb-1 pt-1 sm:justify-center">
        {items.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex min-w-[64px] items-center justify-center rounded-md border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-tight transition-all duration-200 sm:text-sm ${
                isActive
                  ? "bg-white/20 border-white text-white shadow-md"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

