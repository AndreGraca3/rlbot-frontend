import { tryFetch } from "@/utils/http";

export async function getMaps() {
  return await tryFetch("rl/maps");
}

export async function getMap(name) {
  return await tryFetch(`rl/maps/${name}`);
}