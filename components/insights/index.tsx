import { InsightData, InsightItem } from "@/@types/insights";
import { getJourneyInsights } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { VisitorJourney } from "@/prisma/app/generated/prisma/client";
import { commonStyles } from "@/styles/common";
import { getTotalCount, mapItems } from "@/utils/insights-utils";
import Link from "next/link";

export default async function Insights() {
  //2
  const journeys = await getJourneyInsights();

  const activeInsight = "";

  // Process data for each insight
  const insightData: InsightData = {
    today: {},
    thisWeek: {},
    thisMonth: {},
    custom: {},
  };

  // Get current date
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const weekStart = new Date(today);
  const dayOfWeek = today.getDay();
  const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Adjust for Monday start
  weekStart.setDate(today.getDate() - diff);
  weekStart.setHours(0, 0, 0, 0);
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);

  // Aggregate data
  journeys.forEach((journey) => {
    const journeyDate = new Date(journey.completedAt);

    // Today's data
    if (journeyDate >= today) {
      if (!insightData.today[journey.source]) {
        insightData.today[journey.source] = { count: 0, name: journey.source };
      }
      insightData.today[journey.source].count++;
    }

    // This week's data
    if (journeyDate >= weekStart) {
      if (!insightData.thisWeek[journey.source]) {
        insightData.thisWeek[journey.source] = {
          count: 0,
          name: journey.source,
        };
      }
      insightData.thisWeek[journey.source].count++;
    }

    // This month's data
    if (journeyDate >= monthStart) {
      if (!insightData.thisMonth[journey.source]) {
        insightData.thisMonth[journey.source] = {
          count: 0,
          name: journey.source,
        };
      }
      insightData.thisMonth[journey.source].count++;
    }
  });

  return (
    <div
      className={cn(
        commonStyles.container,
        commonStyles.shadow,
        "bg-badge-green"
      )}
    >
      <h1 className={commonStyles.heading}>Insights</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-auto py-6 px-2">
        {(
          [
            {
              label: "Today",
              href: "/today",
              key: "today",
            },
            {
              label: "This Week",
              href: "/this-week",
              key: "thisWeek",
            },
            {
              label: "This Month",
              href: "/this-month",
              key: "thisMonth",
            },
            {
              label: "Custom Range",
              href: "/custom",
              key: "custom",
            },
          ] as InsightItem[]
        ).map((item) => (
          <Link
            key={item.label}
            href={item.href}
            scroll={false}
            className={cn(
              "rounded-lg px-7 text-black py-7 min-w-[200px] bg-badge-red shadow-none font-mono border border-black",
              "border-4 shadow-[4px_4px_0_0_#000]"
            )}
          >
            <p className="font-bold mb-2 text-black">
              {item.label} ({getTotalCount(insightData, item.key)})
            </p>
            <div className="text-black">{mapItems(insightData, item.key)}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
