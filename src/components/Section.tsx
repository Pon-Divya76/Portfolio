import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  children: ReactNode;
};

export function Section({ title, description, eyebrow, children }: SectionProps) {
  return (
    <section className="mx-auto mb-12 w-full max-w-5xl px-4 sm:px-6 lg:px-0">
      <div className="mb-6 space-y-2">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="text-base text-mist sm:text-lg">{description}</p>
        ) : null}
      </div>
      <div className="glass-panel rounded-3xl border border-white/5 p-6 sm:p-10">
        {children}
      </div>
    </section>
  );
}


