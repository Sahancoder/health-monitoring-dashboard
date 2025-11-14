from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from app.db.base import Base


class CarePlan(Base):
    __tablename__ = "care_plans"

    id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey("patients.id", ondelete="CASCADE"))
    goal = Column(String, nullable=False)
    status = Column(String, nullable=False, default="in_progress")

    patient = relationship("Patient", back_populates="care_plans")
