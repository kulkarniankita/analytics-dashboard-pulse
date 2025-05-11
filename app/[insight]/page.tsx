import { notFound } from "next/navigation";
import JourneyPage from "@/components/journey";
import { getDateFilter } from "@/utils/date-utils";
import { getJourneyInsightsByDate } from "@/lib/analytics";
import { PageProps, InsightKey } from "@/@types/insights";
import { VisitorJourney } from "@/prisma/app/generated/prisma/client";

const validInsights = ["today", "this-week", "this-month", "custom"] as const;

type Insight = InsightKey;

export default async function Page({ params, searchParams }: PageProps) {
  const { insight } = await params;
  const { q } = await searchParams;

  if (!validInsights.includes(insight as Insight)) {
    notFound();
  }

  const dateFilter = getDateFilter(insight);

  const journeys = await getJourneyInsightsByDate(dateFilter);

  const filteredJourneys = journeys.filter((journey: VisitorJourney) => {
    const matchesSearch =
      journey.name.toLowerCase().includes(q?.toLowerCase() || "") ||
      journey.country.toLowerCase().includes(q?.toLowerCase() || "") ||
      journey.device.toLowerCase().includes(q?.toLowerCase() || "") ||
      journey.os.toLowerCase().includes(q?.toLowerCase() || "") ||
      journey.browser.toLowerCase().includes(q?.toLowerCase() || "");

    return matchesSearch;
  });
  const data = filteredJourneys.length > 0 ? filteredJourneys : journeys;

  return <JourneyPage journeys={data} />;
}
