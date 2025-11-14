# Implementation Plan

## Backend
- Finalize FastAPI routers for auth, patients, vitals, alerts, and dashboard overview.
- Implement SQLAlchemy models and Pydantic schemas for patients, vitals, alerts, care plans, medications, and users.
- Provide service helpers for risk scoring and goal summaries.
- Expose WebSocket endpoints for vitals and alerts broadcast support.
- Seed development data via `init_db` utility and document `.env` configuration.

## Frontend
- Configure Next.js with Tailwind CSS, React Query, and shared providers.
- Implement authentication page and core dashboard layout using Sidebar, Topbar, and Shell components.
- Build reusable UI primitives such as `DataCard` and specialized dashboard widgets (risk score, vitals chart, alerts panel, etc.).
- Add hooks (`useDashboard`, `useVitals`, `useAlerts`) combining REST and WebSocket data flows.
- Define shared type definitions and API clients for consistent data handling.

## Dev Experience
- Supply npm and pip dependency manifests.
- Document environment setup commands and development workflow in README.
- Prepare placeholders for Docker Compose and future extensions.
