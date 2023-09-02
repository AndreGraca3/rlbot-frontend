import { Suspense } from "react";
import PlayersTable from "./PlayersTable";
import TableSqueleton from "@/components/Loading/TableSqueleton";

export default function Players() {
  return (
    <div className="w-full flex-auto">
      <div className="space-y-10">
        <div className="space-y-2">
          <div className="text-3xl">Players</div>
          <div className="text-md opacity-70">
            Find someone you've played with.
          </div>
        </div>
        <Suspense fallback={<TableSqueleton />}>
          <PlayersTable />
        </Suspense>
      </div>
    </div>
  );
}
