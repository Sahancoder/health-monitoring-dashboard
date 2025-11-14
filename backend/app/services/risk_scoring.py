from collections.abc import Sequence

from app.models.vital import Vital


def calculate_average_risk(vitals: Sequence[Vital]) -> float:
    """Very rough placeholder risk calculation."""
    if not vitals:
        return 0.0

    weighted_sum = 0.0
    for vital in vitals:
        base_weight = 1.0
        if vital.type in {"heart_rate", "respiratory_rate"}:
            base_weight = 1.2
        elif vital.type.startswith("bp_"):
            base_weight = 1.3
        weighted_sum += base_weight * vital.value

    return min(weighted_sum / (len(vitals) * 200.0), 1.0)
