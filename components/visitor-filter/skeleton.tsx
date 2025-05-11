import { Skeleton } from "@/components/ui/skeleton";

export function VisitorFilterSkeleton() {
  return (
    <div className='w-full'>
      <div className='flex flex-wrap gap-2'>
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className='h-10 w-24' />
        ))}
      </div>
    </div>
  );
}
