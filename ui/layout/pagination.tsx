import React from "react";
import Link from "next/link";

interface PaginationProps {
  /**
   * The current page number.
   */
  currentPage: number;

  /**
   * The total number of pages available.
   */
  totalPages: number;

  /**
   * Callback function to handle page change.
   * It receives the new page number as an argument.
   */
  onPageChange?: (page: number) => void;
}

/**
 * Pagination component for navigating through paginated data.
 * Displays page numbers, and "Previous" and "Next" buttons.
 *
 * @param {PaginationProps} props - The props for the Pagination component.
 * @param {number} props.currentPage - The current page number.
 * @param {number} props.totalPages - The total number of pages.
 * @param {function} [props.onPageChange] - Optional callback for handling page changes.
 * @returns {JSX.Element} A pagination component.
 */
export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  /**
   * Handles page click events and triggers the onPageChange callback if provided.
   *
   * @param {number} page - The page number that was clicked.
   */
  const handlePageClick = (page: number) => {
    if (onPageChange) onPageChange(page);
  };

  /**
   * Renders page numbers for pagination.
   * Includes ellipsis for large ranges of pages.
   *
   * @returns {JSX.Element[]} Array of JSX elements representing page numbers.
   */
  const renderPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pageNumbers.push(i);
      } else if (i === currentPage - 2 || i === currentPage + 2 || i === totalPages - 1) {
        pageNumbers.push("...");
      }
    }

    return Array.from(new Set(pageNumbers)).map((page, index) => {
      if (typeof page === "number") {
        return (
          <Link
            key={index}
            href={`?page=${page}`}
            scroll={false}
            onClick={() => handlePageClick(page)}
            className={`w-full relative inline-flex items-center px-4 py-2 text-sm font-semibold rounded-sm ${
              page === currentPage ? "bg-[#F0A5BC]" : "bg-white"
            }`}>
            {page}
          </Link>
        );
      }
      return (
        <span
          key={index}
          className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 focus:outline-offset-0">
          {page}
        </span>
      );
    });
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 sm:px-6">
      <div className="flex sm:flex-1 sm:items-center sm:justify-between">
        <div className="hidden sm:flex">
          <p className="text-sm text-gray-700">
            Showing page <span className="font-medium">{currentPage}</span> of{" "}
            <span className="font-medium">{totalPages}</span>
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md border-gray-300 border-2 bg-white"
            aria-label="Pagination">
            {/* Previous Button */}
            {currentPage > 1 && (
              <Link
                href={`?page=${currentPage - 1}`}
                onClick={() => handlePageClick(currentPage - 1)}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ">
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            )}

            {/* Page Numbers */}
            {renderPageNumbers()}

            {/* Next Button */}
            {currentPage < totalPages && (
              <Link
                href={`?page=${currentPage + 1}`}
                onClick={() => handlePageClick(currentPage + 1)}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400">
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}
