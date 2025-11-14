from functools import lru_cache
from pydantic import BaseSettings, PostgresDsn


class Settings(BaseSettings):
    api_v1_prefix: str = "/api/v1"
    project_name: str = "Health Monitoring API"
    database_url: PostgresDsn = PostgresDsn(
        "postgresql://postgres:postgres@localhost:5432/healthdb"
    )
    jwt_secret_key: str = "change-me"
    jwt_algorithm: str = "HS256"
    access_token_expire_minutes: int = 60 * 24

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


@lru_cache
def get_settings() -> Settings:
    return Settings()
