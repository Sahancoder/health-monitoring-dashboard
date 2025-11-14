import DataCard from "@/components/common/DataCard";
import { DashboardOverview } from "@/hooks/types";

interface GoalsProgressCardProps {
  overview?: DashboardOverview;
}

export default function GoalsProgressCard({ overview }: GoalsProgressCardProps) {
  const completed = overview?.goals_completed ?? 0;
  const total = overview?.goals_total ?? 0;
  const progress = total ? Math.round((completed / total) * 100) : 0;

  return (
    <DataCard title="Goals Progress">
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm text-slate-300">
          <span>Completed goals</span>
          <span className="text-white">
            {completed}/{total}
          </span>
        </div>
        <div className="h-2 rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-slate-500">
          Teams stay on track when focus areas stay above 80%.
        </p>
      </div>
    </DataCard>
  );
}
