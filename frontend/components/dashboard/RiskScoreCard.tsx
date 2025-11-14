import { ReactNode } from "react";

import DataCard from "@/components/common/DataCard";
import { DashboardOverview } from "@/hooks/types";

interface RiskScoreCardProps {
  overview?: DashboardOverview;
  isLoading?: boolean;
}

export default function RiskScoreCard({ overview, isLoading }: RiskScoreCardProps) {
  const content: ReactNode = isLoading ? (
    <p className="text-sm text-slate-400">Loading risk metrics…</p>
  ) : (
    <div className="flex items-end justify-between">
      <div>
        <p className="text-5xl font-semibold text-white">
          {(overview?.average_risk_score ?? 0) * 100}%
        </p>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
          Average risk score
        </p>
      </div>
      <div className="text-right text-xs text-slate-400">
        <p>{overview?.active_alerts ?? 0} active alerts</p>
        <p>{overview?.total_patients ?? 0} patients monitored</p>
      </div>
    </div>
  );

  return <DataCard title="Risk Overview">{content}</DataCard>;
}
