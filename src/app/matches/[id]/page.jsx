import { getMatch } from "@/actions/data/matchData";
import PageHeader from "@/components/Header/PageHeader";
import MatchLayer from "./MatchLayer";
import { getTeams } from "@/actions/data/teamData";
import TeamTable from "./TeamTable";
import { Suspense } from "react";
import Skeleton from "@/components/Loading/Skeleton";
import CommentsFeed from "./CommentsFeed";
import TableSqueleton from "@/components/Loading/TableSqueleton";
import Spinner from "@/components/Loading/Spinner";

export default async function MatchPage({ params }) {
  const match = await getMatch(params.id);
  if (match.error) return;

  return (
    <div>
      <PageHeader
        title={match.playlist}
        text={`Arena: ${match.map_name}`}
      />
      <div className="flex flex-col gap-10">
        <MatchLayer
          blueScore={match.blue_score}
          orangeScore={match.orange_score}
          timeAgo={match.created_at}
          isForfeit={match.state == "FORFEIT"}
        ></MatchLayer>
        <div className="flex w-full items-center justify-evenly gap-4">
          <Suspense fallback={<TableSqueleton />}>
            <TeamTable color="blue" matchId={match.id} />
          </Suspense>
          <Suspense fallback={<TableSqueleton />}>
            <TeamTable color="orange" matchId={match.id} />
          </Suspense>
        </div>
        <Suspense fallback={<Spinner />}>
          <CommentsFeed
            fetcher={async () => {
              return []
            }}
          />
        </Suspense>
      </div>
    </div>
  );
}
