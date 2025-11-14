from pydantic import BaseModel


class DashboardOverview(BaseModel):
    total_patients: int
    active_alerts: int
    average_risk_score: float
    goals_completed: int
    goals_total: int
