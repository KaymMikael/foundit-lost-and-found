import { useState } from "react";

const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const handleSearch = ({
    searchQuery,
    sortOrder,
  }: {
    searchQuery: string;
    sortOrder: string;
  }) => {
    setSearchQuery(searchQuery);
    setSortOrder(sortOrder);
  };

  return { searchQuery, setSearchQuery, sortOrder, setSortOrder, handleSearch };
};

export default useSearch;
