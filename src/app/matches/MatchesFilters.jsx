import { getMaps } from "@/actions/data/mapData";
import { getPlaylists } from "@/actions/data/playlistData";
import DropdownSelector from "@/components/Filters/DropdownSelector";
import { filters } from "@/utils/http";

export default async function MatchesFilters({ queryParams }) {
  const maps = await getMaps();
  if (maps.error) return;

  const mapQueries = {
    queryName: "mapName",
    options: [{ name: "All" }],
  };

  maps.forEach((map) => {
    mapQueries.options.push({ name: map.name, query: map.name });
  });

  const playlists = await getPlaylists();
  if (playlists.error) return;

  const playlistQueries = {
    queryName: "playlist",
    options: [{ name: "All" }],
  };

  playlists.forEach((playlist) => {
    playlistQueries.options.push({ name: playlist.name, query: playlist.name });
  });

  return (
    <div className="flex flex-row flex-wrap gap-4">
      <DropdownSelector
        title="🗺️ Map"
        queries={mapQueries}
        queryParams={queryParams}
      />
      <DropdownSelector
        title={filters.timeWindowQueries.title}
        queries={filters.timeWindowQueries}
        queryParams={queryParams}
      />
      <DropdownSelector
        title="🎮 Playlist"
        queries={playlistQueries}
        queryParams={queryParams}
      />
    </div>
  );
}
