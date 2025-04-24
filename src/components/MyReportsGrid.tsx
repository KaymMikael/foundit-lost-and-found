import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Post } from "@/types/index.type";
import { useEffect, useState } from "react";
import ReportsGridLayout from "./reports-grid-layout";
import MyReportCard from "./my-report-card";

interface MyReportsGridProps {
  posts: Post[];
  search: string;
}

const MyReportsGrid = ({ posts, search }: MyReportsGridProps) => {
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const getPaginatedPosts = (posts: Post[]) => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return posts.slice(start, start + ITEMS_PER_PAGE);
  };

  const getTotalPages = (posts: Post[]) => {
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
        {paginatedPosts.length ? (
          paginatedPosts.map((post) => (
            <MyReportCard key={post.id} post={post} />
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

            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={currentPage === i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className="cursor-pointer"
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

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
