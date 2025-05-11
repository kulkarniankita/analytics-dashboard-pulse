"use client";

import { ChartData } from "@/@types/common";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface VisitorChartProps {
  data: ChartData[];
}

export default function VisitorChart({ data }: VisitorChartProps) {
  return (
    <div className="h-[260px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="date"
            stroke="#000"
            tick={{ fill: "#000", fontFamily: "monospace", fontWeight: "bold" }}
          />
          <YAxis
            stroke="#000"
            tick={{ fill: "#000", fontFamily: "monospace", fontWeight: "bold" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "2px solid black",
              borderRadius: "0.5rem",
              fontFamily: "monospace",
              fontWeight: "bold",
            }}
          />
          <Area
            type="monotone"
            dataKey="visitors"
            stroke="#3b82f6"
            strokeWidth={4}
            fill="#3b82f6"
            fillOpacity={0.12}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
