from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from app.db.base import Base


class Medication(Base):
    __tablename__ = "medications"

    id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey("patients.id", ondelete="CASCADE"))
    name = Column(String, nullable=False)
    dosage = Column(String, nullable=True)
    schedule = Column(String, nullable=True)

    patient = relationship("Patient", back_populates="medications")
