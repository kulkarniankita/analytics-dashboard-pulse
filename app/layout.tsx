import Dashboard from "@/components/dashboard";
import Header from "@/components/header";
import Insights from "@/components/insights";
import Search from "@/components/search";
import { getAnalytics, getJourneyInsights } from "@/lib/analytics";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AnalyticsInfo } from "@/components/analytics-info";
import { Suspense } from "react";
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
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <Header />

        <main className="p-6 flex flex-col gap-6 pb-24 container mx-auto">
          <Suspense fallback={<div>Loading Analytics Info...</div>}>
            <AnalyticsInfo />
          </Suspense>

          <Suspense fallback={<div>Loading Dashboard...</div>}>
            <Dashboard />
          </Suspense>

          <Suspense fallback={<div>Loading Insights...</div>}>
            <Insights />
          </Suspense>

          <Search />

          {children}
        </main>
      </body>
    </html>
  );
}
