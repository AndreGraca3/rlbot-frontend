import { getMatches } from "@/actions/data/matchData";
import MatchContainer from "./MatchContainer";
import { timeSince } from "@/utils/dates";
import { getMap } from "@/actions/data/mapData";
import Link from "next/link";
import MyToast from "@/components/Toast/MyToast";
import NotFound from "../not-found";

export default async function MatchesContainer() {
  const matches = await getMatches();
  if (matches.error) {
    return (
      <div>
        <MyToast error={matches.error} />
        <NotFound code={500} />
      </div>
    );
  }

  return (
    <>
      {matches.map(async (match, i) => {
        const map = await getMap(match.map_name);
        return (
          <Link
            style={{ animationDelay: `${i * 0.1}s` }}
            className="h-fit py-0 opacity-0 animate-fade-in-from-above"
            href={`/matches/${match.id}`}
          >
            <MatchContainer
              blueScore={match.blue_score}
              orangeScore={match.orange_score}
              mapUrl={map.imgUrl}
              timeAgo={timeSince(match.created_at)}
            />
          </Link>
        );
      })}
    </>
  );
}
