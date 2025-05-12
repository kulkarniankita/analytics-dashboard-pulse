import Dashboard from "@/components/dashboard";
import Header from "@/components/header";
import Insights from "@/components/insights";
import Search from "@/components/search";
import { getAnalytics, getJourneyInsights } from "@/lib/analytics";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { DashboardSkeleton } from "@/components/dashboard/skeleton";
import { InsightsSkeleton } from "@/components/insights/skeleton";
import { AnalyticsInfoSkeleton } from "@/components/analytics-info/skeleton";
import { AnalyticsInfo } from "@/components/analytics-info/analytics-info";
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Pulse",
  description: "Pulse is a tool for tracking your website's analytics.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //2
  const journeys = await getJourneyInsights();
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <Header />

        <main className="p-6 flex flex-col gap-6 pb-24 container mx-auto">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-black text-black bg-yellow-300 inline-block px-2 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Analytics Info
            </h1>
            <Suspense fallback={<AnalyticsInfoSkeleton />}>
              <AnalyticsInfo />
            </Suspense>
          </div>

          <Suspense fallback={<DashboardSkeleton />}>
            <Dashboard />
          </Suspense>

          <Suspense fallback={<InsightsSkeleton />}>
            <Insights journeys={journeys} />
          </Suspense>

          <Search />

          {children}
        </main>
      </body>
    </html>
  );
}
