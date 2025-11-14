interface StatusPillProps {
  status: "success" | "warning" | "danger" | "info";
  label: string;
}

const statusColors: Record<StatusPillProps["status"], string> = {
  success: "bg-emerald-500/20 text-emerald-300",
  warning: "bg-amber-500/20 text-amber-300",
  danger: "bg-rose-500/20 text-rose-300",
  info: "bg-sky-500/20 text-sky-300",
};

export default function StatusPill({ status, label }: StatusPillProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${statusColors[status]}`}>
      {label}
    </span>
  );
}
