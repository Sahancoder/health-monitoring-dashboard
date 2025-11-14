"use client";

import { useEffect, useState } from "react";
import type { AxiosResponse } from "axios";

import { apiClient } from "@/lib/apiClient";
import { WS_BASE_URL } from "@/lib/config";

export interface AlertMessage {
  id: number;
  patient_id: number;
  category: string;
  message: string;
  status: string;
  created_at: string;
}

export function useAlerts() {
  const [alerts, setAlerts] = useState<AlertMessage[]>([]);

  useEffect(() => {
    let isMounted = true;
    const fetchAlerts = async () => {
      try {
        const response: AxiosResponse<AlertMessage[]> = await apiClient.get("/alerts");
        if (isMounted) {
          setAlerts(response.data);
        }
      } catch (error) {
        if (process.env.NODE_ENV !== "production") {
          console.error("Unable to load alerts", error);
        }
      }
    };

    void fetchAlerts();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const socket = new WebSocket(`${WS_BASE_URL}/ws/alerts`);
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data) as AlertMessage;
  setAlerts((previous: AlertMessage[]) => [message, ...previous]);
    };

    socket.onerror = (event) => {
      if (process.env.NODE_ENV !== "production") {
        console.error("Alerts socket error", event);
      }
    };

    return () => socket.close();
  }, []);

  return alerts;
}
