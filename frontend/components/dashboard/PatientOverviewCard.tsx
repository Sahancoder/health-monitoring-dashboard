import DataCard from "@/components/common/DataCard";

const demoPatients = [
  {
    id: 1,
    name: "John Doe",
    age: 58,
    status: "High risk",
    trend: "+4.2%",
  },
  {
    id: 2,
    name: "Jessica Lee",
    age: 44,
    status: "Stable",
    trend: "-1.9%",
  },
];

export default function PatientOverviewCard() {
  return (
    <DataCard title="Patient Overview">
      <ul className="space-y-3 text-sm">
        {demoPatients.map((patient) => (
          <li
            key={patient.id}
            className="flex items-center justify-between rounded-xl border border-slate-800/70 bg-slate-900/60 px-3 py-2"
          >
            <div>
              <p className="font-medium text-white">{patient.name}</p>
              <p className="text-xs text-slate-400">Age {patient.age}</p>
            </div>
            <div className="text-right text-xs">
              <p className="font-semibold text-rose-400">{patient.status}</p>
              <p className="text-slate-500">{patient.trend}</p>
            </div>
          </li>
        ))}
      </ul>
    </DataCard>
  );
}
