from typing import Any

from fastapi import WebSocket


class ConnectionManager:
    """Track connected WebSocket clients per channel."""

    def __init__(self) -> None:
        self.active_connections: list[WebSocket] = []

    async def connect(self, websocket: WebSocket) -> None:
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket) -> None:
        if websocket in self.active_connections:
            self.active_connections.remove(websocket)

    async def broadcast(self, message: Any) -> None:
        for connection in list(self.active_connections):
            await connection.send_json(message)
