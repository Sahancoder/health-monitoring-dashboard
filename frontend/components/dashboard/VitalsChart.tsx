"use client";

import { useMemo } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import DataCard from "@/components/common/DataCard";
import { Vital } from "@/hooks/types";
import { useVitals } from "@/hooks/useVitals";

interface VitalsChartProps {
  patientId: number;
}

export default function VitalsChart({ patientId }: VitalsChartProps) {
  const { vitals, isLoading, hasError } = useVitals(patientId);

  const chartData = useMemo(
    () =>
      vitals.map((vital: Vital) => ({
        ...vital,
        created_at: new Date(vital.created_at).toLocaleTimeString(),
      })),
    [vitals],
  );

  return (
    <DataCard title="Vitals Trends">
      <div className="h-64">
        {hasError ? (
          <div className="flex h-full flex-col items-center justify-center text-center text-sm text-slate-400">
            <p>We could not reach the vitals service.</p>
            <p className="text-xs text-slate-500">Verify the backend is running and try again.</p>
          </div>
        ) : chartData.length === 0 ? (
          <div className="flex h-full items-center justify-center text-sm text-slate-400">
            {isLoading ? "Loading vitals…" : "Vitals data will appear once available."}
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#0f172a" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis
                dataKey="created_at"
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#020817",
                  border: "1px solid #1e293b",
                  borderRadius: "0.75rem",
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#38bdf8"
                fill="url(#colorValue)"
                strokeWidth={2}
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </DataCard>
  );
}
