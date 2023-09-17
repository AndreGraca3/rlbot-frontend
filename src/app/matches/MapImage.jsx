import { getMap } from "@/actions/data/mapData";

export default async function MapImage({ name }) {
  return (
    <img
      src={(await getMap(name)).imgUrl}
      className="w-full h-full animate-pop-up-transparent border-slate-700 rounded-md shadow-sm border-2"
    />
  );
}
