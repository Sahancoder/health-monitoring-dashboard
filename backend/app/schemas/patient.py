from datetime import date

from pydantic import BaseModel


class PatientBase(BaseModel):
    name: str
    dob: date | None = None
    gender: str | None = None
    mrn: str


class PatientCreate(PatientBase):
    pass


class Patient(PatientBase):
    id: int

    class Config:
        orm_mode = True
