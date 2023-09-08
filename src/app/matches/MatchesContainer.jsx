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

  const matchesWithMaps = await Promise.all(
    matches.map(async (match) => {
      const mapImg = (await getMap(match.map_name)).imgUrl;
      return { ...match, mapImg };
    })
  );

  return (
    <>
      {matchesWithMaps.map((match, i) => {
        return (
          <Link
            key={i}
            style={{ animationDelay: `${i * 0.1}s` }}
            className="h-fit py-0 opacity-0 animate-fade-in-from-above"
            href={`/matches/${match.id}`}
          >
            <MatchContainer
              blueScore={match.blue_score}
              orangeScore={match.orange_score}
              mapUrl={match.mapImg}
              timeAgo={timeSince(match.created_at)}
            />
          </Link>
        );
      })}
    </>
  );
}
