import MatchBox from "./MatchBox";
import { timeSince, transformQueryToDate } from "@/utils/dates";
import { getMatches } from "@/actions/data/matchData";
import PaginatedContainer from "@/components/Pagination/PaginatedContainer";
import PaginationControl from "@/components/Pagination/PaginationControl";
import MyToast from "@/components/Toast/MyToast";
import Spinner from "@/components/Loading/Spinner";

export default async function MatchesFeed({ page, limit, filters }) {
  const skip = (page - 1) * limit;

  const rsp = await getMatches(skip, limit, {
    ...filters,
    createdAfter: transformQueryToDate(filters.createdAfter),
  });

  if (rsp.error)
    return (
      <>
        <Spinner />
        <MyToast error={rsp.error} />
      </>
    );

  const maxPages = Math.max(1, Math.ceil(rsp.total / limit));
  const matches = rsp.results;

  return (
    <div>
      <PaginationControl page={page} maxPages={maxPages} filters={filters} />
      <PaginatedContainer>
        {matches.map((match, i) => {
          return (
            <MatchBox
              key={i}
              style={{ animationDelay: `${i * 0.03}s` }}
              id={match.id}
              blueScore={match.blue_score}
              orangeScore={match.orange_score}
              map={match.map_name}
              timeAgo={timeSince(match.created_at)}
            />
          );
        })}
      </PaginatedContainer>
    </div>
  );
}
