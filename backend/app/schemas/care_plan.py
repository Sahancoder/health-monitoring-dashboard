from pydantic import BaseModel


class CarePlanBase(BaseModel):
    goal: str
    status: str = "in_progress"


class CarePlanCreate(CarePlanBase):
    patient_id: int


class CarePlan(CarePlanBase):
    id: int
    patient_id: int

    class Config:
        orm_mode = True
