import { cn } from "@/lib/utils";
import { commonStyles } from "@/styles/common";

export default function SearchSkeleton() {
  return (
    <input
      className={cn(
        "mt-7 w-full sm:w-96 bg-gray-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] font-mono",
        commonStyles.border
      )}
      placeholder="Loading..."
      disabled
    />
  );
}
