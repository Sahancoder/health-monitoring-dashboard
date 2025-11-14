export function createWebSocket(path: string): WebSocket | null {
  if (typeof window === "undefined") {
    return null;
  }

  const base = process.env.NEXT_PUBLIC_WS_BASE_URL ?? "ws://localhost:8000";
  const url = new URL(path, base);
  return new WebSocket(url);
}
