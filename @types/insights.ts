// Insights related types
export type TabData = {
  today: { [key: string]: { count: number; name: string } };
  thisWeek: { [key: string]: { count: number; name: string } };
  thisMonth: { [key: string]: { count: number; name: string } };
  custom: { [key: string]: { count: number; name: string } };
};

export type TabItem = {
  label: string;
  href: string;
  active: boolean;
  key: keyof TabData;
};

export type TabKey = "today" | "this-week" | "this-month" | "custom";

export type InsightsDataItem = {
  count: number;
  name: string;
};

export type PageProps = {
  params: Promise<{ tab: TabKey }>;
  searchParams: Promise<{ q: string; filter: string }>;
};
