import { buildQueryParams } from "@/utils/http";
import Link from "next/link";

export default function PaginationIndices({ route, page, totalPages, filters }) {
  const calculateIndices = (page, totalPages) => {
    const indices = [];
    const maxButtons = 5;
    const halfButtons = Math.floor(maxButtons / 2);
    let start = page - halfButtons;
    let end = page + halfButtons;

    if (start < 1) {
      start = 1;
      end = Math.min(totalPages, maxButtons);
    } else if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, totalPages - maxButtons + 1);
    }

    for (let i = start; i <= end; i++) {
      indices.push(i);
    }

    return indices;
  };

  const indices = calculateIndices(page, totalPages);

  return (
    <div className="flex gap-x-2">
      {indices.map((num) => (
        <Link
          key={num}
          className={`border px-3 py-2 rounded-md focus:outline-none md:hover:bg-highlight-color ${
            page === num ? "bg-highlight-color" : "bg-dark-bg-color"
          }`}
          href={`${route}${buildQueryParams({ page: num, ...filters })}`}
        >
          {num}
        </Link>
      ))}
    </div>
  );
}
