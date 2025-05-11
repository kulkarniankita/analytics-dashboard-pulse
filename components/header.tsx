import { BarChartIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-20 bg-background/80 border-b border-muted px-6 py-4 flex items-center justify-between shadow-sm backdrop-blur">
      <div className="container mx-auto">
        <Link href="/">
          <h1 className="text-xl font-bold tracking-tight flex items-center gap-2">
            <BarChartIcon className="w-6 h-6 text-stat-rose" /> Pulse
          </h1>
        </Link>
      </div>
    </header>
  );
}
