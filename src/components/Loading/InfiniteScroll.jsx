"use client";

import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
import { hasMorePages } from "@/utils/html";
import { buildQueryParams } from "@/utils/http";

export default function InfiniteScroll({ component, route, page, totalItems, filters }) {
  const { push } = useRouter();
  const [isFetching, setIsFetching] = useState(false);
  const [ref, isInView] = useInView();

  function loadMoreItems() {
    setIsFetching(true);
    const nextPage = page + 1;
    push(`/${route}${buildQueryParams({page: nextPage, ...filters})}`, { scroll: false });
  }

  useEffect(() => {
    if (!hasMorePages(page, totalItems)) {
      setIsFetching(false);
      return;
    }
    if (isInView) loadMoreItems();
  }, [isInView]);

  return (
    <>
      {component}
      <div
        className="flex justify-center items-center col-span-1 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        {isFetching && <Spinner />}
      </div>
    </>
  );
}
