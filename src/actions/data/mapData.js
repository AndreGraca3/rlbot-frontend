import { tryFetch } from "@/utils/http";

export async function getMaps() {
  /* await new Promise((res) => {
    setTimeout(res, 4000);
  }); */
  return await tryFetch("rl/maps");
}

export async function getMap(name) {
  return await tryFetch(`rl/maps/${name}`);
}