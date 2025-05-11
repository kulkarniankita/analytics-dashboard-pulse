import { DateRange } from "@/@types/common";

export const getDateRanges = (now: Date = new Date()) => {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  // Calculate week start (Monday)
  const weekStart = new Date(today);
  const dayOfWeek = today.getDay();
  const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Adjust for Monday start
  weekStart.setDate(today.getDate() - diff);
  weekStart.setHours(0, 0, 0, 0);

  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

  return {
    today,
    weekStart,
    monthStart,
    tomorrow,
  };
};

export const getDateFilter = (tab: string): DateRange => {
  const { today, weekStart, monthStart, tomorrow } = getDateRanges();

  switch (tab) {
    case "today":
      return { gte: today };
    case "this-week":
      return { gte: weekStart, lte: tomorrow };
    case "this-month":
      return { gte: monthStart };
    case "custom":
      return {};
    default:
      return {};
  }
};
