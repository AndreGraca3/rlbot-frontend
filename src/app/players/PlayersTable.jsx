import { getPlayers } from "@/actions/data/playerData";
import FlatTable from "@/components/Tables/FlatTable";
import MyToast from "@/components/Toast/MyToast";
import { timeSince } from "@/utils/dates";
import TableSqueleton from "@/components/Loading/TableSqueleton";

export default async function PlayersTable() {
  const players = await getPlayers();
  if (players.error) {
    return (
      <div>
        <MyToast error={players.error} />
        <TableSqueleton />
      </div>
    );
  }

  return (
    <FlatTable
      columns={["Name", "Platform", "Last Seen"]}
      rows={players.map(({ id, created_at, updated_at, ...player }) => ({
        ...player,
        href: `players/${id}`,
        updated_at: timeSince(updated_at),
      }))}
    />
  );
}
