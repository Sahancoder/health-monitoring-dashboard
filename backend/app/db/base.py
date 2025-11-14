from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base

from app.core.config import get_settings

settings = get_settings()

engine = create_engine(settings.database_url.unicode_string())
Base = declarative_base()
