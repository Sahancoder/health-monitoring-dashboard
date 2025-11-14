"use client";

import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";
import { DashboardOverview } from "@/hooks/types";

export function useDashboardOverview() {
  return useQuery<DashboardOverview>({
    queryKey: ["dashboard-overview"],
    queryFn: async () => {
      const response = await apiClient.get<DashboardOverview>("/dashboard/overview");
      return response.data;
    },
    refetchInterval: 30_000,
  });
}
