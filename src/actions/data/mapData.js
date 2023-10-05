import { delay, tryFetch } from "@/utils/http";

export async function getMaps() {
  return await tryFetch("/maps");
}

export async function getMap(name) {
  return await tryFetch(`/maps/${name}`);
}