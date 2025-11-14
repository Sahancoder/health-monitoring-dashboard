import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/patients", label: "Patients" },
  { href: "/alerts", label: "Alerts" },
];

export default function Sidebar() {
  return (
    <aside className="flex h-full w-64 flex-col gap-6 border-r border-slate-800 bg-slate-950/60 p-6">
      <div>
        <span className="text-sm uppercase tracking-[0.2em] text-slate-500">
          CLYHEALTH
        </span>
        <p className="text-xl font-semibold text-slate-100">Monitor</p>
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800/60 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
