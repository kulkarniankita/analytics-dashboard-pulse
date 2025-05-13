// Insights related types
export type InsightData = {
  today: { [key: string]: { count: number; name: string } };
  thisWeek: { [key: string]: { count: number; name: string } };
  thisMonth: { [key: string]: { count: number; name: string } };
  custom: { [key: string]: { count: number; name: string } };
};

export type InsightItem = {
  label: string;
  href: string;
  active: boolean;
  key: keyof InsightData;
};

export type InsightKey = "today" | "this-week" | "this-month" | "custom";

export type InsightsDataItem = {
  count: number;
  name: string;
};

export type PageProps = {
  params: Promise<{ insight: InsightKey }>;
  searchParams: Promise<{ q: string; filter: string[] }>;
};
