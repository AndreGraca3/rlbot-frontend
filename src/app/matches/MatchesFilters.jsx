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
    </div>
  );
}
