"use client";

import AlertsPanel from "@/components/dashboard/AlertsPanel";
import BodyVisualization from "@/components/dashboard/BodyVisualization";
import CarePlanCard from "@/components/dashboard/CarePlanCard";
import GoalsProgressCard from "@/components/dashboard/GoalsProgressCard";
import MedicationsList from "@/components/dashboard/MedicationsList";
import PatientOverviewCard from "@/components/dashboard/PatientOverviewCard";
import RiskScoreCard from "@/components/dashboard/RiskScoreCard";
import VitalsChart from "@/components/dashboard/VitalsChart";
import VisualTrendsCard from "@/components/dashboard/VisualTrendsCard";
import Shell from "@/components/layout/Shell";
import { useDashboardOverview } from "@/hooks/useDashboard";
import { PATIENT_HIGHLIGHT_REGION, PATIENT_MODEL_URL } from "@/lib/config";

export default function DashboardPage() {
  const { data, isLoading } = useDashboardOverview();
  const selectedPatientId = 1;

  return (
    <Shell>
      <div className="grid gap-6 xl:grid-cols-[1.3fr,2fr]">
        <div className="space-y-6">
          <PatientOverviewCard />
          <BodyVisualization
            modelUrl={PATIENT_MODEL_URL}
            highlightRegion={PATIENT_HIGHLIGHT_REGION}
          />
          <RiskScoreCard overview={data} isLoading={isLoading} />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <VitalsChart patientId={selectedPatientId} />
          <VisualTrendsCard overview={data} />
          <GoalsProgressCard overview={data} />
          <CarePlanCard />
          <MedicationsList />
          <AlertsPanel />
        </div>
      </div>
    </Shell>
  );
}
