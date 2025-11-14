import DataCard from "@/components/common/DataCard";

const demoPlans = [
  { id: 1, goal: "Reduce systolic blood pressure", status: "In progress" },
  { id: 2, goal: "Improve daily activity", status: "On track" },
  { id: 3, goal: "Medication adherence", status: "Needs review" },
];

export default function CarePlanCard() {
  return (
    <DataCard title="Care Plan">
      <ul className="space-y-3 text-sm">
        {demoPlans.map((plan) => (
          <li
            key={plan.id}
            className="flex items-center justify-between rounded-xl border border-slate-800/70 bg-slate-900/50 px-3 py-2"
          >
            <span className="text-slate-200">{plan.goal}</span>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
              {plan.status}
            </span>
          </li>
        ))}
      </ul>
    </DataCard>
  );
}
