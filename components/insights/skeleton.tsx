import { cn } from "@/lib/utils";
import { commonStyles } from "@/styles/common";

export function InsightsSkeleton() {
  return (
    <div
      className={cn(
        commonStyles.container,
        commonStyles.shadow,
        "bg-badge-green"
      )}
    >
      <div className='h-8 w-32 bg-gray-200 animate-pulse rounded mb-6'></div>
      <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-auto py-6 px-2'>
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className={cn(
              "rounded-lg px-7 py-7 min-w-[200px] bg-pastel-light-yellow shadow-none",
              "border-4 border-black",
              "shadow-[4px_4px_0_0_#000]"
            )}
          >
            <div className='h-6 w-24 bg-gray-200 animate-pulse rounded mb-4'></div>
            <div className='space-y-2'>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className='h-4 w-full bg-gray-200 animate-pulse rounded'
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
