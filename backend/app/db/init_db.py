from sqlalchemy.orm import Session

from app.core.security import get_password_hash
from app.models.user import User
from app.models.patient import Patient


def init_db(db: Session) -> None:
    if db.query(User).first():
        return

    demo_users = [
        User(
            email="admin@example.com",
            hashed_password=get_password_hash("admin"),
            full_name="Admin User",
            is_active=True,
            is_superuser=True,
        ),
        User(
            email="sahanviranga18@gmail.com",
            hashed_password=get_password_hash("demo123"),
            full_name="Demo Clinician",
            is_active=True,
            is_superuser=False,
        ),
    ]
    db.add_all(demo_users)

    patient = Patient(name="John Doe", mrn="MRN-001")
    db.add(patient)

    db.commit()
