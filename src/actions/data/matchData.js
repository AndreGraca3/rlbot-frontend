import { buildQueryParams, delay, tryFetch } from "@/utils/http";

export async function getMatches(skip, limit, filters) {
  const queries = {
    skip,
    limit,
    ...filters,
  };
  const query = `rl/matches${buildQueryParams(queries)}`;
  return await tryFetch(query);
}
