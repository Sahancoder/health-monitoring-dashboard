from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.models.alert import Alert
from app.schemas.alert import Alert as AlertSchema

router = APIRouter()


@router.get("/", response_model=list[AlertSchema])
def list_alerts(db: Session = Depends(get_db)) -> list[Alert]:
    return db.query(Alert).order_by(Alert.created_at.desc()).all()
