"use client";

import { useEffect, useState } from "react";
import type { AxiosResponse } from "axios";

import { apiClient } from "@/lib/apiClient";
import { WS_BASE_URL } from "@/lib/config";
import { Vital } from "@/hooks/types";

export function useVitals(patientId: number) {
  const [vitals, setVitals] = useState<Vital[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    const fetchVitals = async () => {
      try {
        const response: AxiosResponse<Vital[]> = await apiClient.get(
          `/vitals/history/${patientId}`,
        );
        if (isMounted) {
          setVitals(response.data);
          setHasError(false);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setHasError(true);
          setIsLoading(false);
        }
        if (process.env.NODE_ENV !== "production") {
          console.error("Unable to load vitals history", error);
        }
      }
    };

    void fetchVitals();

    return () => {
      isMounted = false;
    };
  }, [patientId]);

  useEffect(() => {
    const socket = new WebSocket(`${WS_BASE_URL}/ws/vitals`);

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data) as Vital;
      if (message.patient_id === patientId) {
        setVitals((previous: Vital[]) => [...previous, message]);
        setHasError(false);
        setIsLoading(false);
      }
    };

    socket.onerror = (event) => {
      if (process.env.NODE_ENV !== "production") {
        console.error("Vitals socket error", event);
      }
    };

    return () => socket.close();
  }, [patientId]);

  return { vitals, isLoading, hasError };
}
