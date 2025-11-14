import DataCard from "@/components/common/DataCard";

const demoMedications = [
  { id: 1, name: "Atorvastatin", dosage: "20mg", schedule: "Night" },
  { id: 2, name: "Metformin", dosage: "500mg", schedule: "Morning & Night" },
  { id: 3, name: "Lisinopril", dosage: "10mg", schedule: "Morning" },
];

export default function MedicationsList() {
  return (
    <DataCard title="Medications">
      <ul className="space-y-3 text-sm">
        {demoMedications.map((medication) => (
          <li
            key={medication.id}
            className="rounded-xl border border-slate-800/70 bg-slate-900/60 px-3 py-2"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-white">{medication.name}</span>
              <span className="text-xs text-slate-400">{medication.dosage}</span>
            </div>
            <p className="text-xs text-slate-500">{medication.schedule}</p>
          </li>
        ))}
      </ul>
    </DataCard>
  );
}
