from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.models.vital import Vital
from app.schemas.vital import Vital as VitalSchema

router = APIRouter()


@router.get("/history/{patient_id}", response_model=list[VitalSchema])
def get_vitals_history(patient_id: int, db: Session = Depends(get_db)) -> list[Vital]:
    return (
        db.query(Vital)
        .filter(Vital.patient_id == patient_id)
        .order_by(Vital.created_at.asc())
        .all()
    )
