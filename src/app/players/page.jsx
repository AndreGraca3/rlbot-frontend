import Players from "./Players";
import { Suspense } from "react";
import TableSqueleton from "@/components/Loading/TableSqueleton";
import PlayersFilters from "./PlayersFilters";
import PageHeader from "@/components/Header/PageHeader";

export default function PlayersPage({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  const filters = {
    platform: searchParams.platform,
    createdAfter: searchParams.createdAfter || "7d",
    name: searchParams.name,
  };

  return (
    <div className="w-full flex-auto">
      <PageHeader title="Players" text="Find someone you've played with." />
      <PlayersFilters queryParams={filters} />
      <Suspense fallback={<TableSqueleton />}>
        <Players page={page} filters={filters} />
      </Suspense>
    </div>
  );
}
