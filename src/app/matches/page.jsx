import { Suspense } from "react";
import MatchesStats from "./MatchesStats";
import MatchesContainer from "./MatchesContainer";
import ScrollDisplayer from "@/components/Displayers/ScrollDisplayer";

export default function Matches() {
  return (
    <div className="w-full flex-auto">
      <div className="space-y-10">
        <div className="space-y-2">
          <div className="text-3xl">Matches</div>
          <div className="text-md opacity-70">
            Find your top-performing matches.
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center h-full items-center gap-20">
          <ScrollDisplayer>
            <Suspense
              fallback={
                <>
                  {Array.from({ length: 3 }, (_, i) => (
                    <>Load</>
                  ))}
                </>
              }
            >
              <MatchesContainer />
            </Suspense>
          </ScrollDisplayer>
          <Suspense>
            <div className="flex flex-row md:flex-col gap-2 items-center">
              <MatchesStats label={"Matches played"} value={10} />
              <MatchesStats label={"Ended in Overtime"} value={6} />
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
