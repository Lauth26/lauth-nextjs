import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

export function Pagination({ currentPage, totalPages, basePath = "/blog" }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages: (number | "...")[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push("...");
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
  }

  const getHref = (page: number) => (page === 1 ? basePath : `${basePath}/${page}`);

  return (
    <nav className="flex items-center justify-center gap-2 mt-12" aria-label="Pagination">
      {currentPage > 1 && (
        <Link
          href={getHref(currentPage - 1)}
          className="px-4 py-2 rounded-lg bg-navy-500 text-navy-200 hover:bg-navy-400 hover:text-white transition-colors"
        >
          Previous
        </Link>
      )}

      {pages.map((page, index) =>
        page === "..." ? (
          <span key={`ellipsis-${index}`} className="px-3 py-2 text-navy-300">
            ...
          </span>
        ) : (
          <Link
            key={page}
            href={getHref(page)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              page === currentPage
                ? "bg-gold text-dark font-bold"
                : "bg-navy-500 text-navy-200 hover:bg-navy-400 hover:text-white"
            }`}
          >
            {page}
          </Link>
        )
      )}

      {currentPage < totalPages && (
        <Link
          href={getHref(currentPage + 1)}
          className="px-4 py-2 rounded-lg bg-navy-500 text-navy-200 hover:bg-navy-400 hover:text-white transition-colors"
        >
          Next
        </Link>
      )}
    </nav>
  );
}
