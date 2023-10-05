"use server";

import { tryFetch, buildQueryParams, delay } from "@/utils/http";

export async function getPlayers(skip, limit, filters) {
  const queries = {
    skip,
    limit,
    ...filters,
  };
  const query = `/players${buildQueryParams(queries)}`;
  return await tryFetch(query);
}

export async function getPlayer(playerId) {
  return await tryFetch(`/players/${playerId}`);
}
