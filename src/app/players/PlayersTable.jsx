"use client";

import TableSqueleton from "@/components/Loading/TableSqueleton";
import FlatTable from "@/components/Tables/FlatTable";
import { timeSince } from "@/utils/dates";

export default function PlayersTable({ players }) {
  if (!players) {
    return <TableSqueleton />;
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
