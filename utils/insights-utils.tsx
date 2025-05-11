import React, { ReactNode } from "react";
import { InsightData, InsightsDataItem } from "@/@types/insights";

export const mapItems = (
  insightData: InsightData,
  insight: keyof InsightData
): ReactNode => {
  return Object.entries(insightData[insight]).map(([key, item]) => (
    <div key={key} className="flex items-center justify-between">
      <span className="text-sm text-black">{item.name}</span>
      <span className="text-sm font-medium text-black">{item.count}</span>
    </div>
  ));
};

export const getTotalCount = (
  insightData: InsightData,
  insight: keyof InsightData
): number => {
  const items = Object.values(insightData[insight]) as InsightsDataItem[];
  return items.reduce(
    (acc: number, item: InsightsDataItem) => acc + item.count,
    0
  );
};
