import { buildQueryParams, delay, tryFetch } from "@/utils/http";

export async function getMatches(skip, limit, filters) {
  const queries = {
    skip,
    limit,
    ...filters,
  };
  const query = `/matches${buildQueryParams(queries)}`;
  return await tryFetch(query);
}

export async function getMatch(id) {
  const query = `/matches/${id}`;
  return await tryFetch(query);
}
