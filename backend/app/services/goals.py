from collections.abc import Sequence

from app.models.care_plan import CarePlan


def summarize_goals(care_plans: Sequence[CarePlan]) -> tuple[int, int]:
    """Return completed goals count and total."""
    total = len(care_plans)
    completed = sum(1 for plan in care_plans if plan.status == "completed")
    return completed, total
