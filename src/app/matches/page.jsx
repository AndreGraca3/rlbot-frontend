import MatchesFeed from "./MatchesFeed";
import { Suspense } from "react";
import Spinner from "@/components/Loading/Spinner";
import { PAGINATION_MAX_ITEMS_PER_PAGE } from "@/config";
import MatchesFilters from "./MatchesFilters";
import PageHeader from "@/components/Header/PageHeader";

export default async function MatchesPage({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || PAGINATION_MAX_ITEMS_PER_PAGE;
  const filters = {
    createdAfter: searchParams.createdAfter || "7d",
    mapName: searchParams.mapName,
    playlist: searchParams.playlist,
  };

  return (
    <div className="w-full flex-auto">
      <PageHeader title="Matches" text="Find your top-performing matches." />

      <div className="flex flex-col justify-center items-center space-y-4">
        <Suspense key={Math.random()} fallback={<Spinner />}>
          <MatchesFilters queryParams={filters} />
          <MatchesFeed page={page} limit={limit} filters={filters} />
        </Suspense>
      </div>
    </div>
  );
}
