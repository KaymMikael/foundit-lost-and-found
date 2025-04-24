import { Skeleton } from "./ui/skeleton";

const ReportsGridSkeleton = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, idx) => (
        <div key={idx} className="space-y-4">
          <Skeleton className="h-40 w-full rounded-xl" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </>
  );
};

export default ReportsGridSkeleton;
