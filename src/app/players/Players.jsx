import { getPlayers } from "@/actions/data/playerData";
import PlayersTable from "./PlayersTable";
import InfiniteScroll from "@/components/Loading/InfiniteScroll";
import MyToast from "@/components/Warnings/MyToast";
import TableSqueleton from "@/components/Loading/TableSqueleton";
import { getLimit } from "@/utils/html";
import { transformQueryToDate } from "@/utils/dates";

export default async function Players({ page, filters }) {
  const rsp = await getPlayers(0, getLimit(page), {
    ...filters,
    createdAfter: transformQueryToDate(filters.createdAfter),
  });

  if (rsp.error)
    return (
      <>
        <TableSqueleton />
        <MyToast error={rsp.error} />
      </>
    );

  return (
    <InfiniteScroll
      component={<PlayersTable players={rsp.results} />}
      route="players"
      page={page}
      totalItems={rsp.total}
      filters={filters}
    />
  );
}
