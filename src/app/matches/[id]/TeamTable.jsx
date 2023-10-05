import { getPlayer } from "@/actions/data/playerData";
import { getTeams } from "@/actions/data/teamData";
import FlatTable from "@/components/Tables/FlatTable";

export default async function TeamTable({ matchId, color }) {
  
  const team = await getTeams(matchId);
  if (team.error) return;


  const detailedTeam = await Promise.all(
    team
      .filter((t) => t.team.toLowerCase() === color)
      .map(async (t) => {
        const player = await getPlayer(t.player_id);
        return {
          name: player.name,
          href: "/players/" + t.player_id,
        };
      })
  );

  return <FlatTable color={color} columns={["Players"]} rows={detailedTeam}></FlatTable>;
}
