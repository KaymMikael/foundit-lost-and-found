import ItemsPetsSearchBar from "@/components/items-pets-search-bar";
import PostReportCard from "@/components/PostReportCard";
import ReportsGridLayout from "@/components/reports-grid-layout";
import ReportsGridSkeleton from "@/components/reports-grid-skeleton";
import usePetsReport from "@/hooks/usePetsReports";
import useSearch from "@/hooks/useSearch";

const LostPetsPage = () => {
  const { loading, lostPetsReports } = usePetsReport();
  const { searchQuery, sortOrder, handleSearch } = useSearch();

  const filteredReports = lostPetsReports
    .filter(
      ({ post }) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.location.place.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.post.createdAt).getTime();
      const dateB = new Date(b.post.createdAt).getTime();
      return sortOrder === "oldest" ? dateA - dateB : dateB - dateA;
    });
  return (
    <div className="max-w-7xl 2xl:mx-auto flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Lost Pets</h2>
      {/* Search bar */}
      <ItemsPetsSearchBar onSearch={handleSearch} />
      {/* Losts Pets grid */}
      <ReportsGridLayout>
        {loading ? (
          // Show skeletons while loading
          <ReportsGridSkeleton />
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

export default LostPetsPage;
