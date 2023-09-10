import { Suspense } from "react";
import MatchesFeed from "./MatchesFeed";
import Skeleton from "@/components/Loading/Skeleton";
import PaginatedContainer from "@/components/Pagination/PaginatedContainer";
import PaginationControl from "@/components/Pagination/PaginationControl";

export default function MatchesPage({ searchParams }) {
  const { skip, limit, createdAfter, map } = searchParams;
  const filters = { createdAfter };

  return (
    <div className="w-full flex-auto">
      <div className="space-y-10">
        <div className="space-y-2">
          <div className="text-3xl">Matches</div>
          <div className="text-md opacity-70">
            Find your top-performing matches.
          </div>
        </div>
        <Suspense
          fallback={
            <PaginatedContainer>
              <Skeleton count={9} />
            </PaginatedContainer>
          }
        >
          <MatchesFeed map={map} skip={skip} limit={limit} />
        </Suspense>
      </div>
    </div>
  );
}
