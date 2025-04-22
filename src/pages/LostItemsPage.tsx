import ItemsPetsSearchBar from "@/components/items-pets-search-bar";

const LostItemsPage = () => {
  return (
    <div className="max-w-7xl 2xl:mx-auto flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Lost Items</h2>
      {/* Search bar */}
      <ItemsPetsSearchBar />
    </div>
  );
};

export default LostItemsPage;
