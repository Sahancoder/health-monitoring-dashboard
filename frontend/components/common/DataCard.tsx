import { ReactNode } from "react";

interface DataCardProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
}

export default function DataCard({ title, subtitle, action, children }: DataCardProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/30">
      <header className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          {title}
        </h2>
        {action}
      </header>
      {subtitle && (
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-slate-500">{subtitle}</p>
      )}
      <div className="space-y-3 text-slate-100">{children}</div>
    </section>
  );
}
