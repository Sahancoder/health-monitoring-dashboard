"use client";

import AlertsPanel from "@/components/dashboard/AlertsPanel";
import CarePlanCard from "@/components/dashboard/CarePlanCard";
import MedicationsList from "@/components/dashboard/MedicationsList";
import RiskScoreCard from "@/components/dashboard/RiskScoreCard";
import VitalsChart from "@/components/dashboard/VitalsChart";
import Shell from "@/components/layout/Shell";
import { useDashboardOverview } from "@/hooks/useDashboard";

interface PatientDetailPageProps {
  params: {
    patientId: string;
  };
}

export default function PatientDetailPage({ params }: PatientDetailPageProps) {
  const patientId = Number(params.patientId);
  const { data, isLoading } = useDashboardOverview();

  return (
    <Shell>
      <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <VitalsChart patientId={patientId} />
          <CarePlanCard />
          <MedicationsList />
        </div>
        <div className="space-y-6">
          <RiskScoreCard overview={data} isLoading={isLoading} />
          <AlertsPanel />
        </div>
      </div>
    </Shell>
  );
}
