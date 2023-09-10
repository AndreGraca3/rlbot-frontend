import { getMatches } from "@/actions/data/matchData";
import MatchBox from "./MatchBox";
import { timeSince } from "@/utils/dates";
import { getMap } from "@/actions/data/mapData";
import Link from "next/link";
import MyToast from "@/components/Toast/MyToast";
import NotFound from "../not-found";
import PaginatedContainer from "@/components/Pagination/PaginatedContainer";
import PaginationControl from "@/components/Pagination/PaginationControl";

export default async function MatchesFeed({ skip, limit }) {
  const rsp = await getMatches();

  if (rsp.error) {
    return (
      <div>
        <MyToast error={rsp.error} />
        <NotFound code={500} />
      </div>
    );
  }

  const matches = await Promise.all(
    rsp.results.map(async (match) => {
      const mapImg = (await getMap(match.map_name)).imgUrl;
      return { ...match, mapImg };
    })
  );

  return (
    <div>
      <PaginationControl route="matches" skip={parseInt(skip)} limit={limit} total={rsp.total} />
      <PaginatedContainer>
        {matches.map((match, i) => {
          return (
            <Link
              key={i}
              style={{ animationDelay: `${i * 0.08}s` }}
              className="w-fit h-fit opacity-0 animate-pop-up"
              href={`/matches/${match.id}`}
            >
              <MatchBox
                blueScore={match.blue_score}
                orangeScore={match.orange_score}
                mapUrl={match.mapImg}
                timeAgo={timeSince(match.created_at)}
              />
            </Link>
          );
        })}
      </PaginatedContainer>
    </div>
  );
}
