"use client";

import Selector from "@/components/Filters/Selector";
import SearchBar from "@/components/Filters/SearchBar";
import { buildQueryParams } from "@/utils/http";
import { useRouter } from "next/navigation";

export default function PlayersFilters({ queryParams }) {
  const router = useRouter();

  const platformQueries = {
    queryName: "platform",
    options: [
      { name: "All" },
      { name: "PC", query: "PC" },
      { name: "PS4", query: "PS4" },
      { name: "Xbox", query: "Xbox" },
    ],
  };

  const timeWindowQueries = {
    queryName: "createdAfter",
    options: [
      { name: "All Time", query: "all" },
      { name: "This Year", query: "1y" },
      { name: "This Month", query: "1m" },
      { name: "This Week", query: "7d" },
      { name: "Today", query: "1d" },
    ],
  };

  return (
    <div className="flex flex-row flex-wrap gap-4 items-center justify-evenly">
      <div className="flex flex-row flex-wrap gap-2">
        <Selector
          title="Platform"
          queries={platformQueries}
          queryParams={queryParams}
        />

        <Selector
          title="Time Window"
          queries={timeWindowQueries}
          queryParams={queryParams}
        />
      </div>

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
