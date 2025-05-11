import { notFound } from "next/navigation";
import JourneyPage from "@/components/journey";
import { getDateFilter } from "@/utils/date-utils";
import { getJourneyInsightsByDate } from "@/lib/analytics";
import { PageProps, TabKey } from "@/@types/insights";
import { VisitorJourney } from "@/prisma/app/generated/prisma/client";

const validTabs = ["today", "this-week", "this-month", "custom"] as const;

type Tab = TabKey;

export default async function Page({ params, searchParams }: PageProps) {
  const { tab } = await params;
  const { q } = await searchParams;

  if (!validTabs.includes(tab as Tab)) {
    notFound();
  }

  const dateFilter = getDateFilter(tab);

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
