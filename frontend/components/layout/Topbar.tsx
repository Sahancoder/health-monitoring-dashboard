import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950/60 px-6">
      <div className="relative w-80">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        <input
          className="w-full rounded-lg border border-slate-800 bg-slate-900/70 py-2 pl-10 pr-4 text-sm text-slate-100 placeholder:text-slate-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          placeholder="Search patients, alerts, or plans"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative rounded-full border border-slate-800 bg-slate-900/70 p-2 text-slate-300 transition hover:text-white">
          <Bell className="h-4 w-4" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-brand" />
        </button>
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand to-blue-400" />
      </div>
    </header>
  );
}
