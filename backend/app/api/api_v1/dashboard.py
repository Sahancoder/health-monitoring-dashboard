from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.models.alert import Alert
from app.models.patient import Patient
from app.models.vital import Vital
from app.models.care_plan import CarePlan
from app.services.risk_scoring import calculate_average_risk
from app.services.goals import summarize_goals
from app.schemas.dashboard import DashboardOverview

router = APIRouter()


@router.get("/overview", response_model=DashboardOverview)
def dashboard_overview(db: Session = Depends(get_db)) -> DashboardOverview:
    total_patients = db.query(Patient).count()
    active_alerts = db.query(Alert).filter(Alert.status == "active").count()
    vitals = db.query(Vital).all()
    care_plans = db.query(CarePlan).all()

    average_risk = calculate_average_risk(vitals)
    goals_completed, goals_total = summarize_goals(care_plans)

    return DashboardOverview(
        total_patients=total_patients,
        active_alerts=active_alerts,
        average_risk_score=average_risk,
        goals_completed=goals_completed,
        goals_total=goals_total,
    )
