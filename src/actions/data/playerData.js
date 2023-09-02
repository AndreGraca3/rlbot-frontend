import tryFetch from "@/utils/http";

export async function getPlayers() {
  /* await new Promise((res) => {
    setTimeout(res, 4000);
  }); */
  // return Array(20).fill({ name: "Andre".repeat(19), platform: "PC", created_at: 1034 });
  return await tryFetch("rl/players");
}
