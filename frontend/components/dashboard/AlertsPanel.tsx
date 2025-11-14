"use client";

import DataCard from "@/components/common/DataCard";
import { AlertMessage, useAlerts } from "@/hooks/useAlerts";

export default function AlertsPanel() {
  const alerts = useAlerts();

  return (
    <DataCard title="Active Alerts">
      <ul className="space-y-3 text-sm">
  {alerts.slice(0, 5).map((alert: AlertMessage) => (
          <li
            key={alert.id}
            className="flex items-center justify-between rounded-xl border border-slate-800/60 bg-slate-900/80 px-3 py-2"
          >
            <div>
              <p className="font-medium text-white">{alert.category}</p>
              <p className="text-xs text-slate-400">{alert.message}</p>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-rose-400">
              {alert.status}
            </span>
          </li>
        ))}
        {alerts.length === 0 && (
          <li className="text-xs text-slate-500">No alerts at the moment.</li>
        )}
      </ul>
    </DataCard>
  );
}
