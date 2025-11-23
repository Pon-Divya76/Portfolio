import type { ReactNode } from "react";

type DetailCardProps = {
  title: string;
  subtitle?: string;
  meta?: string;
  children?: ReactNode;
  footer?: ReactNode;
};

export function DetailCard({ title, subtitle, meta, children, footer }: DetailCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/2 p-5 backdrop-blur-md transition-all duration-200 hover:border-accent/40 hover:bg-white/5">
      <header className="space-y-1">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/80">
          {meta}
        </p>
        <h2 className="font-display text-2xl text-white">{title}</h2>
        {subtitle ? <p className="text-sm text-mist">{subtitle}</p> : null}
      </header>
      {children ? <div className="mt-4 space-y-2 text-sm text-slate-200">{children}</div> : null}
      {footer ? <div className="mt-4 text-sm text-mist">{footer}</div> : null}
    </article>
  );
}


