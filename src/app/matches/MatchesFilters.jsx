import { getMaps } from "@/actions/data/mapData";
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

  const playlistQueries = {
    queryName: "playlist",
    options: [
      { name: "All" },
      { name: "1V1 Duel Ranked", query: "1v1" },
      { name: "2V2 Doubles Ranked", query: "2v2" },
      { name: "3V3 Standard Ranked", query: "3v3" },
    ],
  };

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
