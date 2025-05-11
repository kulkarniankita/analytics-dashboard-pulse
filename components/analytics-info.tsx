import { Badge } from "./ui/badge";
import { getAnalytics } from "@/lib/analytics";
import { AnalyticsInfoResponse } from "@/@types/analytics";
import { InfoItem } from "@/@types/components";

export async function AnalyticsInfo() {
  const analyticsInfo: AnalyticsInfoResponse = await getAnalytics();

  if (!analyticsInfo) {
    return <></>;
  }

  const { domain, createdAt, updatedAt } = analyticsInfo;

  const infoItems: InfoItem[] = [
    { id: "domain", label: "Domain", value: domain },
    {
      id: "createdAt",
      label: "Created At",
      value: createdAt ? new Date(createdAt).toLocaleDateString() : "",
    },
    {
      id: "updatedAt",
      label: "Updated At",
      value: updatedAt ? new Date(updatedAt).toLocaleDateString() : "",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-black text-black bg-yellow-300 inline-block px-2 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        Analytics Info
      </h1>
      <div className="flex gap-2">
        {infoItems.map((item) => (
          <Badge
            key={item.id}
            variant="outline"
            className="text-sm font-bold text-black bg-pink-300 inline-block px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            {item.label}: {item.value}
          </Badge>
        ))}
      </div>
    </div>
  );
}
