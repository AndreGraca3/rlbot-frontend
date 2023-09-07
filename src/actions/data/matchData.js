import { tryFetch } from "@/utils/http";

export async function getMatches() {
  return await tryFetch("rl/matches");
}
