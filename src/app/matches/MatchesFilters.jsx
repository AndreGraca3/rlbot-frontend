import { getMaps } from "@/actions/data/mapData";
import DropdownSelector from "@/components/Filters/DropdownSelector";

export default async function MatchesFilters({ queryParams }) {
  const maps = await getMaps();

  const mapQueries = {
    queryName: "mapName",
    options: [{ name: "All" }],
  };

  maps.forEach((map) => {
    mapQueries.options.push({ name: map.name, query: map.name });
  });

  return (
    <div className="flex flex-row flex-wrap gap-4 items-center justify-evenly">
      <div className="flex flex-row flex-wrap gap-2">
        <DropdownSelector title="Map" queries={mapQueries} queryParams={queryParams} />
      </div>
    </div>
  );
}
