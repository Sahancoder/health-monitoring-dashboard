export interface DashboardOverview {
  total_patients: number;
  active_alerts: number;
  average_risk_score: number;
  goals_completed: number;
  goals_total: number;
}

export interface Vital {
  id: number;
  patient_id: number;
  type: string;
  value: number;
  unit: string;
  created_at: string;
}
