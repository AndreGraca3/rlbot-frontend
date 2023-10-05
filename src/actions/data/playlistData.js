import { tryFetch } from "@/utils/http";

export async function getPlaylists() {
  return await tryFetch("/playlists");
}