import Link from "next/link";
import { Suspense } from "react";
import MapImage from "./MapImage";

export default async function MatchBox({
  id,
  blueScore,
  orangeScore,
  map,
  timeAgo,
}) {

  return (
    <Link className="w-40 h-28" href={`/matches/${id}`}>
      <div className="flex relative w-full h-full bg-slate-900 rounded-lg p-1 justify-center items-center md:hover:scale-105 duration-150">
        <Suspense
          fallback={
            <div className="w-full h-full rounded bg-slate-600 opacity-60 animate-pulse"></div>
          }
        >
          <MapImage name={map} />
        </Suspense>

        <div className="flex w-4/5 h-full flex-col gap-2 absolute items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="w-6 h-6 grow-0 shrink-0 rounded-full shadow-lg shadow-cyan-500/50 bg-primary-color"></div>
            <div className="text-white text-sm font-semibold bg-slate-900 bg-opacity-60 rounded-sm p-1 mx-2 truncate">
              {`${blueScore} - ${orangeScore}`}
            </div>
            <div className="w-6 h-6 grow-0 shrink-0 rounded-full shadow-lg shadow-orange-500/50 bg-secondary-color"></div>
          </div>
          <div className="items-center text-center justify-center">{timeAgo}</div>
        </div>
      </div>
    </Link>
  );
}
