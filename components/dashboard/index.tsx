import { prisma } from "@/lib/prisma";
import React from "react";
import { commonStyles } from "@/styles/common";
import { cn } from "@/lib/utils";
import Stats from "./stats";
import VisitorChart from "./visitor-chart";
import { AnalyticsData, ChartDataPoint, StatItem } from "@/@types/dashboard";
import { getAnalytics } from "@/lib/analytics";

export default async function Dashboard() {
  //1
  const currentAnalytics = await getAnalytics();

  // Calculate current period metrics
  const totalVisitors = currentAnalytics.reduce(
    (sum: number, a: AnalyticsData) => sum + a.visitors,
    0
  );
  const totalRevenue = currentAnalytics.reduce(
    (sum: number, a: AnalyticsData) => sum + a.revenue,
    0
  );

  const avgBounceRate = currentAnalytics.length
    ? currentAnalytics.reduce(
        (sum: number, a: AnalyticsData) => sum + a.bounceRate,
        0
      ) / currentAnalytics.length
    : 0;
  const avgSessionTime = currentAnalytics.length
    ? currentAnalytics.reduce(
        (sum: number, a: AnalyticsData) => sum + a.sessionTime,
        0
      ) / currentAnalytics.length
    : 0;

  // Get current active visitors (last hour)
  const currentHour = new Date();
  currentHour.setHours(currentHour.getHours() - 1);
  const activeVisitors = await prisma.analytics.count({
    where: {
      date: {
        gte: currentHour,
      },
    },
  });

  // Prepare chart data
  const chartData: ChartDataPoint[] = currentAnalytics.map(
    (data: AnalyticsData) => ({
      date: new Date(data.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      visitors: data.visitors,
    })
  );

  const stats: StatItem[] = [
    {
      label: "Visitors",
      value: totalVisitors,
      color: "text-stat-blue",
    },
    {
      label: "Revenue",
      value: `$${totalRevenue.toFixed(0)}`,
      color: "text-stat-orange",
    },
    {
      label: "Bounce rate",
      value: `${Math.round(avgBounceRate)}%`,
      color: "text-stat-rose",
    },
    {
      label: "Session time",
      value: `${Math.floor(avgSessionTime / 60)}m ${Math.round(
        avgSessionTime % 60
      )}s`,
      color: "text-stat-green",
    },
    {
      label: "Visitors now",
      value: activeVisitors,
      color: "text-stat-blue-light",
    },
  ];

  return (
    <div
      className={cn(
        commonStyles.container,
        commonStyles.shadow,
        "bg-badge-purple"
      )}
    >
      <div className="flex flex-col gap-4">
        <h1 className={commonStyles.heading}>Dashboard</h1>

        <div className="flex flex-wrap gap-8 items-end mb-2">
          {stats.map((stat) => (
            <Stats
              key={stat.label}
              label={stat.label}
              value={stat.value}
              color={stat.color}
            />
          ))}
        </div>

        <div
          className={cn(
            commonStyles.tableContainer,
            "bg-yellow-100",
            commonStyles.shadow
          )}
        >
          <VisitorChart
            data={chartData.map((data) => ({
              ...data,
              name: "Visitors",
              value: data.visitors,
            }))}
          />
        </div>
      </div>
    </div>
  );
}
