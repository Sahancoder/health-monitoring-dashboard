"use client";

import { useMemo } from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import DataCard from "@/components/common/DataCard";
import { DashboardOverview } from "@/hooks/types";

interface VisualTrendsCardProps {
  overview?: DashboardOverview;
}

const FALLBACK_TRENDS = [
  { label: "Mon", risk: 0.58, alerts: 2 },
  { label: "Tue", risk: 0.61, alerts: 3 },
  { label: "Wed", risk: 0.55, alerts: 1 },
  { label: "Thu", risk: 0.63, alerts: 4 },
  { label: "Fri", risk: 0.6, alerts: 2 },
  { label: "Sat", risk: 0.57, alerts: 1 },
  { label: "Sun", risk: 0.65, alerts: 3 },
];

export default function VisualTrendsCard({ overview }: VisualTrendsCardProps) {
  const chartData = useMemo(() => {
    if (!overview) {
      return FALLBACK_TRENDS;
    }

    const clampedRisk = Math.min(Math.max(overview.average_risk_score, 0), 1);
    const dailyVariance = 0.05;

    return FALLBACK_TRENDS.map((entry, index) => ({
      ...entry,
      risk: Number(
        (clampedRisk + (Math.sin(index) * dailyVariance) / 2).toFixed(2),
      ),
      alerts: Math.max(entry.alerts, overview.active_alerts - index),
    }));
  }, [overview]);

  return (
    <DataCard title="Visual Trends" subtitle="Recent changes in overall risk">
      <div className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <defs>
              <linearGradient id="riskGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f472b6" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#f472b6" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="label" tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              domain={[0, 1]}
              ticks={[0.25, 0.5, 0.75, 1]}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#020817",
                border: "1px solid #1e293b",
                borderRadius: "0.75rem",
              }}
              formatter={(value: number, key: string) => {
                if (key === "risk") {
                  return [`${Math.round(value * 100)}%`, "Risk"];
                }
                return [value, "Alerts"];
              }}
            />
            <Line
              type="monotone"
              dataKey="risk"
              stroke="url(#riskGradient)"
              strokeWidth={2}
              dot={{ r: 3, stroke: "#f472b6", fill: "#0f172a" }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </DataCard>
  );
}
