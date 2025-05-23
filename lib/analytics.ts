import {
  AnalyticsInfoResponse,
  JourneyInsightsResponse,
} from "@/@types/analytics";
import { DateRange } from "@/@types/common";
import type {
  Analytics as PrismaAnalytics,
  VisitorFilter,
} from "@/prisma/app/generated/prisma/client";
import { slow } from "@/utils/common";
import { prisma } from "./prisma";

export const getAnalytics = async (): Promise<PrismaAnalytics[]> => {
  await slow(8000);
  // Fetch analytics data for current period (last 7 days)
  const currentAnalytics = await prisma.analytics.findMany({
    orderBy: { date: "asc" },
    take: 7,
  });

  return currentAnalytics;
};

export const getJourneyInsights =
  async (): Promise<JourneyInsightsResponse> => {
    await slow(3000);
    const journeys = await prisma.visitorJourney.findMany({
      orderBy: { completedAt: "desc" },
      take: 10,
    });

    return journeys;
  };

export const getJourneyInsightsByDate = async (
  dateFilter: DateRange
): Promise<JourneyInsightsResponse> => {
  await slow(2000);
  const journeys = await prisma.visitorJourney.findMany({
    where: {
      completedAt: dateFilter,
    },
    orderBy: { completedAt: "desc" },
    take: 10,
  });

  return journeys;
};

export const getVisitorFilters = async (): Promise<VisitorFilter[]> => {
  await slow(1000);
  return await prisma.visitorFilter.findMany();
};

export const getAnalyticsInfo = async (): Promise<AnalyticsInfoResponse> => {
  await slow(1000);
  return await prisma.analyticsInfo.findUnique({
    where: {
      domain: "nextjscourse.dev",
    },
  });
};
