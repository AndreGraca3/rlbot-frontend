import { buildQueryParams, tryFetch } from "@/utils/http";

export async function getComments(matchId, playerId) {
  return await tryFetch(`/comments${buildQueryParams({ playerId, matchId })}`);
}
