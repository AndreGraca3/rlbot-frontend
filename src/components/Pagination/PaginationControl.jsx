import { buildQueryParams } from "@/utils/http";
import PaginationButton from "./PaginationButton";
import PaginationIndices from "./PaginationIndices";

export default function PaginationControl({ page, maxPages, filters}) {

  return (
    <div className="flex w-full py-2 justify-center items-center gap-x-4">
      <PaginationButton
        disabled={page <= 1}
        href={`/matches${buildQueryParams({ page: page - 1, ...filters })}`}
      />
      <PaginationIndices route="/matches" page={page} totalPages={maxPages} filters={filters} />
      <PaginationButton
        disabled={page >= maxPages}
        href={`/matches${buildQueryParams({ page: page + 1, ...filters })}`}
        isRight={true}
      />
    </div>
  );
}
