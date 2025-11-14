from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.models.patient import Patient
from app.schemas.patient import Patient as PatientSchema

router = APIRouter()


@router.get("/", response_model=list[PatientSchema])
def list_patients(db: Session = Depends(get_db)) -> list[Patient]:
    return db.query(Patient).all()


@router.get("/{patient_id}", response_model=PatientSchema)
def get_patient(patient_id: int, db: Session = Depends(get_db)) -> Patient:
    patient = db.get(Patient, patient_id)
    if patient is None:
        raise HTTPException(status_code=404, detail="Patient not found")
    return patient
