import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { UserPost } from "@/types/index.type";
import { useEffect, useState } from "react";
import ReportsGridLayout from "./reports-grid-layout";
import MyReportCard from "./my-report-card";
import ReportsGridSkeleton from "./reports-grid-skeleton";
import useReports from "@/hooks/useReports";

interface MyReportsGridProps {
  posts: UserPost[];
  search: string;
}

const MyReportsGrid = ({ posts, search }: MyReportsGridProps) => {
  const { loading } = useReports();
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const getPaginatedPosts = (posts: UserPost[]) => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return posts.slice(start, start + ITEMS_PER_PAGE);
  };

  const getTotalPages = (posts: UserPost[]) => {
    return Math.ceil(posts.length / ITEMS_PER_PAGE);
  };

  const paginatedPosts = getPaginatedPosts(posts);
  const totalPages = getTotalPages(posts);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return (
    <>
      <ReportsGridLayout>
        {loading ? (
          // Show skeletons while loading
          <ReportsGridSkeleton />
        ) : paginatedPosts.length ? (
          paginatedPosts.map((post) => (
            <MyReportCard key={post.post.id} post={post.post} />
          ))
        ) : (
          <p className="mt-2 text-gray-400">No reports found</p>
        )}
      </ReportsGridLayout>

      {totalPages > 1 && (
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className={
                  currentPage === 1
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};

export default MyReportsGrid;
