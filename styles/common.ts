import { cn } from "@/lib/utils";

const border = "border-4 border-black";

export const commonStyles = {
  border: cn("border-4 border-black", border),
  container: cn("rounded-2xl p-8 font-mono", border),
  tableContainer: cn(
    "w-full rounded-xl p-4 overflow-x-auto bg-pastel-light-pink",
    border
  ),
  heading:
    "text-2xl font-extrabold mb-6 uppercase tracking-wide pb-2 font-mono",
  tableHeader: "p-3 text-lg font-bold uppercase",
  tableRow: "border-b-4 border-black last:border-b-0",
  tableCell: "px-2 py-3 font-bold",
  avatarContainer: "inline-block border-2 border-black rounded-full",
  visitorName: "font-bold text-base",
  visitorInfo: "flex gap-1 items-center text-xs text-black/70 font-mono mt-1",
  badge:
    "border-2 border-black text-black font-bold px-2 py-0.5 rounded-md shadow-none bg-pastel-light-yellow",
  statCard:
    "flex flex-col gap-1 min-w-[120px] border-4 border-black rounded-lg p-4 bg-yellow-300 shadow-none font-mono min-h-[120px] min-w-[160px]",
  statLabel: "font-bold text-sm uppercase tracking-wide",
  statValue: "text-3xl font-extrabold leading-none ",
  statSub: "text-xs /60 font-mono",
  statDelta: "text-xs font-bold flex items-center gap-1",
  statDeltaPositive: "text-stat-green",
  statDeltaNegative: "text-stat-rose",
  chartContainer: "w-full border-4 border-black rounded-xl bg-yellow-100 p-4",
  icon: "inline-block w-4 h-4 rounded-full bg-stat-blue border-2 border-black",
  insightCard:
    "rounded-lg px-7 border border-black py-7 bg-pastel-light-yellow shadow-none font-mono min-h-[120px] min-w-[160px]",
  shadow: { boxShadow: "4px 4px 0 0 #000" },
} as const;
