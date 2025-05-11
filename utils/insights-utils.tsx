import React, { ReactNode } from "react";
import { TabData, InsightsDataItem } from "@/@types/insights";

export const mapItems = (tabData: TabData, tab: keyof TabData): ReactNode => {
  return Object.entries(tabData[tab]).map(([key, item]) => (
    <div key={key} className="flex items-center justify-between">
      <span className="text-sm text-black">{item.name}</span>
      <span className="text-sm font-medium text-black">{item.count}</span>
    </div>
  ));
};

export const getTotalCount = (tabData: TabData, tab: keyof TabData): number => {
  const items = Object.values(tabData[tab]) as InsightsDataItem[];
  return items.reduce(
    (acc: number, item: InsightsDataItem) => acc + item.count,
    0
  );
};
