# Health Monitoring Dashboard

A full-stack demo showcasing a clinician-focused monitoring experience built with **Next.js**, **Tailwind CSS**, **React Query**, and **shadcn/ui** on the frontend, backed by a **FastAPI** service with **PostgreSQL**, **SQLAlchemy**, and WebSocket support for real-time patient vitals and alerts.

## Project Structure

```
backend/
  app/
    api/              # FastAPI routers and dependencies
    core/             # Settings, security helpers
    db/               # Engine, session, seed helpers
    models/           # SQLAlchemy models
    schemas/          # Pydantic response/request models
    services/         # Domain service helpers
    websocket/        # WebSocket routers & connection manager
frontend/
  app/                # Next.js app router pages
  components/         # Layout + dashboard UI pieces
  hooks/              # React Query & WS hooks
  lib/                # API client, config, query client
  styles/             # Tailwind globals
```

## Prerequisites

- Node.js 18+
- Python 3.11+
- PostgreSQL instance (local or container)

## Backend Setup

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate
pip install -r requirements.txt
cp .env.example .env
# update DATABASE_URL & secrets as needed
python -c "from app.db.base import Base, engine; import app.models.user, app.models.patient, app.models.vital, app.models.alert, app.models.care_plan, app.models.medication; Base.metadata.create_all(bind=engine)"
python -c "from app.db.session import SessionLocal; from app.db.init_db import init_db; db = SessionLocal(); init_db(db); db.close()"
uvicorn app.main:app --reload --port 8000
```

The API documentation becomes available at `http://localhost:8000/docs`.

## Frontend Setup

```powershell
cd frontend
npm install
npm run dev
```

The dashboard runs at `http://localhost:3000`. Demo login credentials mirror the seed users:

- `admin@example.com` / `admin`
- `sahanviranga18@gmail.com` / `demo123`

## Real-Time Vitals & Alerts

- REST history endpoints (`/api/v1/vitals/history/{patient_id}`) hydrate initial charts.
- WebSocket streams (`/ws/vitals`, `/ws/alerts`) push new points or alert notices to the dashboard via hooks.
- The frontend hooks merge REST + WS data with optimistic UI updates.

## Additional Notes

- `docs/implementation-plan.md` captures the roadmap followed to assemble the stack.
- Extend the system by adding new SQLAlchemy models, Pydantic schemas, and routes, then consume them via React Query hooks or WebSocket listeners.
- A `docker-compose.yml` skeleton is provided for local Postgres + backend orchestration (customize secrets before use).
