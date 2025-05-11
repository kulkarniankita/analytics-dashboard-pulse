import type { Analytics as PrismaAnalytics } from "@/prisma/app/generated/prisma/client";

export interface ChartDataPoint {
  date: string;
  visitors: number;
}

export interface StatItem {
  label: string;
  value: number | string;
  color: string;
}

export interface AnalyticsData extends PrismaAnalytics {
  date: Date;
  visitors: number;
  revenue: number;
  bounceRate: number;
  sessionTime: number;
}
