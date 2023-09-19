"use client";

import Selector from "@/components/Filters/Selector";
import SearchBar from "@/components/Filters/SearchBar";
import { buildQueryParams, filters } from "@/utils/http";
import { useRouter } from "next/navigation";
import DropdownSelector from "@/components/Filters/DropdownSelector";

export default function PlayersFilters({ queryParams }) {
  const router = useRouter();

  return (
    <div className="flex flex-row flex-wrap gap-4 items-center justify-evenly">
      <Selector
        title={filters.platformQueries.title}
        queries={filters.platformQueries}
        queryParams={queryParams}
      />

      <DropdownSelector
        title={filters.timeWindowQueries.title}
        queries={filters.timeWindowQueries}
        queryParams={queryParams}
      />

      <SearchBar
        placeHolder="Player Name..."
        onChange={(text) => {
          router.push(
            `/players${buildQueryParams({ ...queryParams, name: text })}`
          );
        }}
        hideIcon={true}
      />
    </div>
  );
}
