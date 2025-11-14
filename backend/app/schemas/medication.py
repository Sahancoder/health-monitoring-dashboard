from pydantic import BaseModel


class MedicationBase(BaseModel):
    name: str
    dosage: str | None = None
    schedule: str | None = None


class MedicationCreate(MedicationBase):
    patient_id: int


class Medication(MedicationBase):
    id: int
    patient_id: int

    class Config:
        orm_mode = True
