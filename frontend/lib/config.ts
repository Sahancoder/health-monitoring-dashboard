export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api/v1";

export const WS_BASE_URL =
  process.env.NEXT_PUBLIC_WS_BASE_URL || "ws://localhost:8000";

export const PATIENT_MODEL_URL =
  process.env.NEXT_PUBLIC_PATIENT_MODEL_URL ||
  "https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Models@master/2.0/RiggedFigure/glTF-Binary/RiggedFigure.glb";

export const PATIENT_HIGHLIGHT_REGION =
  process.env.NEXT_PUBLIC_PATIENT_HIGHLIGHT_REGION || "Cardiorespiratory system";
