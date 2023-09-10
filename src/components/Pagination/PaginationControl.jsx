"use client";

import { PAGINATION_MAX_ITEMS_PER_PAGE } from "@/config";
import PaginationButton from "./PaginationButton";
import PaginationIndices from "./PaginationIndices";
import { useRouter } from "next/navigation";
import { buildQueryParams } from "@/utils/http";

export default function PaginationControl({
  route,
  skip = 0,
  limit = PAGINATION_MAX_ITEMS_PER_PAGE,
  total,
}) {
  const router = useRouter();
  const page = Math.floor(skip / limit) + 1;
  const maxPages = Math.max(1, Math.ceil(total / limit));

  return (
    <div className="flex w-full py-2 justify-center items-center gap-x-4">
      <PaginationButton
        disabled={page === 1}
        onClick={() => {
          router.push(
            `/${route}${buildQueryParams({ skip: skip - limit, limit })}`
          );
        }}
      />
      <PaginationIndices page={page} />
      <PaginationButton
        disabled={page === maxPages}
        onClick={() => {
          router.push(
            `/${route}${buildQueryParams({ skip: skip + limit, limit })}`
          );
        }}
        isRight={true}
      />
    </div>
  );
}
