import { Skeleton } from "../ui/skeleton";

export const AnalyticsInfoSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-10 w-full" />
    </div>
  );
};
