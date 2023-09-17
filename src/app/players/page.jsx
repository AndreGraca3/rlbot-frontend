import Players from "./Players";
import { Suspense } from "react";
import TableSqueleton from "@/components/Loading/TableSqueleton";
import PlayersFilters from "./PlayersFilters";

export default function PlayersPage({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  const filters = {
    platform: searchParams.platform,
    createdAfter: searchParams.createdAfter || "7d",
    name: searchParams.name,
  };

  return (
    <div className="w-full flex-auto">
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="text-3xl">Players</div>
          <div className="text-md opacity-70">
            Find someone you've played with.
          </div>
        </div>
        <PlayersFilters queryParams={filters} />
        <Suspense fallback={<TableSqueleton />}>
          <Players page={page} filters={filters} />
        </Suspense>
      </div>
    </div>
  );
}
