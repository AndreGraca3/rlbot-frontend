"use server";

import { tryFetch, buildQueryParams, delay } from "@/utils/http";

export async function getPlayers(skip, limit, filters) {
  const queries = {
    skip,
    limit,
    ...filters
  }
  const query = `rl/players${buildQueryParams(queries)}`
  return await tryFetch(query);
}
