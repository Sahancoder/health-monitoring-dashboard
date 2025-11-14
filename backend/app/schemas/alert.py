from datetime import datetime

from pydantic import BaseModel


class AlertBase(BaseModel):
    category: str
    message: str
    status: str = "active"


class AlertCreate(AlertBase):
    patient_id: int


class Alert(AlertBase):
    id: int
    patient_id: int
    created_at: datetime

    class Config:
        orm_mode = True
