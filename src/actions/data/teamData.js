import { buildQueryParams, delay, tryFetch } from "@/utils/http";

export async function getTeams(matchId, playerId) {
  return await tryFetch(`/teams${buildQueryParams({ playerId, matchId })}`);
}
