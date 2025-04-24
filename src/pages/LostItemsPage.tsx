import ItemsPetsSearchBar from "@/components/items-pets-search-bar";
import PostReportCard from "@/components/PostReportCard";
import ReportsGridLayout from "@/components/reports-grid-layout";
import useItemsReports from "@/hooks/useItemsReports";

const LostItemsPage = () => {
  const { lostItemsReports } = useItemsReports();

  return (
    <div className="max-w-7xl 2xl:mx-auto flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Lost Items</h2>
      {/* Search bar */}
      <ItemsPetsSearchBar />
      {/* Lost items grid */}
      <ReportsGridLayout>
        {lostItemsReports.length ? (
          lostItemsReports.map((data) => (
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
