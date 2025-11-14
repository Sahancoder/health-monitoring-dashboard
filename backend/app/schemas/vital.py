from datetime import datetime

from pydantic import BaseModel


class VitalBase(BaseModel):
    type: str
    value: float
    unit: str


class VitalCreate(VitalBase):
    patient_id: int


class Vital(VitalBase):
    id: int
    patient_id: int
    created_at: datetime

    class Config:
        orm_mode = True
