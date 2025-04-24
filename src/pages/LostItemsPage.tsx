import ItemsPetsSearchBar from "@/components/items-pets-search-bar";
import PostReportCard from "@/components/PostReportCard";
import ReportsGridLayout from "@/components/reports-grid-layout";
import { Skeleton } from "@/components/ui/skeleton";
import useItemsReports from "@/hooks/useItemsReports";
import useSearch from "@/hooks/useSearch";

const LostItemsPage = () => {
  const { lostItemsReports,loading } = useItemsReports();
  const { searchQuery, sortOrder, handleSearch } = useSearch();

  const filteredReports = lostItemsReports
    .filter(({ post }) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.post.createdAt).getTime();
      const dateB = new Date(b.post.createdAt).getTime();
      return sortOrder === "oldest" ? dateA - dateB : dateB - dateA;
    });

  return (
    <div className="max-w-7xl 2xl:mx-auto flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Lost Items</h2>
      {/* Search bar */}
      <ItemsPetsSearchBar onSearch={handleSearch} />
      {/* Lost items grid */}
      <ReportsGridLayout>
        {loading ? (
          // Show skeletons while loading
          Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="space-y-4">
              <Skeleton className="h-40 w-full rounded-xl" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))
        ) : filteredReports.length ? (
          filteredReports.map((data) => (
            <PostReportCard userPost={data} key={data.post.id} />
          ))
        ) : (
          <p className="mt-2 text-gray-400">No reports found</p>
        )}
      </ReportsGridLayout>
    </div>
  );
};

export default LostItemsPage;
