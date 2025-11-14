from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.api_v1.router import api_router
from app.websocket import vitals_ws, alerts_ws

app = FastAPI(title="Health Monitoring API", version="1.0")

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/api/v1")
app.include_router(vitals_ws.router)
app.include_router(alerts_ws.router)
