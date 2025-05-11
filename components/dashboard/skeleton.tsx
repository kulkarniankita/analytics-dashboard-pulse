import { cn } from "@/lib/utils";
import { commonStyles } from "@/styles/common";
import { Skeleton } from "@/components/ui/skeleton";

export function DashboardSkeleton() {
  return (
    <div
      className={cn(
        commonStyles.container,
        commonStyles.shadow,
        "bg-badge-purple"
      )}
    >
      <div className='flex flex-col gap-4'>
        <h1 className={commonStyles.heading}>Dashboard</h1>

        <div className='flex flex-wrap gap-8 items-end mb-2'>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={cn(commonStyles.statCard, commonStyles.shadow)}
            >
              <div className='flex items-center gap-2'>
                <Skeleton className='h-4 w-4' />
                <Skeleton className='h-4 w-20' />
              </div>
              <div className='flex items-end gap-2'>
                <Skeleton className='h-8 w-24' />
              </div>
            </div>
          ))}
        </div>

        <div
          className={cn(
            commonStyles.tableContainer,
            "bg-yellow-100",
            commonStyles.shadow
          )}
        >
          <div className='h-[260px] w-full'>
            <Skeleton className='h-full w-full' />
          </div>
        </div>
      </div>
    </div>
  );
}
