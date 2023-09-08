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
      { name: "PC", query: "PC" },
      { name: "PS4", query: "PS4" },
      { name: "Xbox", query: "Xbox" },
    ],
  };

  const timeWindowQueries = {
    queryName: "createdAfter",
    options: [
      { name: "Today", query: "1d" },
      { name: "This Week", query: "7d" },
      { name: "This Month", query: "1m" },
      { name: "This Year", query: "1y" },
    ],
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-4">
        <Selector
          title="Platform"
          route="players"
          defaultName="All"
          queries={platformQueries}
          queryParams={queryParams}
        />
        <Selector
          title="Time Window"
          route="players"
          defaultName="All Time"
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
