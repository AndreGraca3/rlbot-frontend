import TeamCircle from "../TeamCircle";

export default function MatchLayer({
  blueScore,
  orangeScore,
  timeAgo,
  isForfeit,
}) {
  return (
    <div className="flex w-full h-full flex-col gap-2 items-center justify-center">
      <div className="opacity-70 items-center text-sm text-center justify-center">
        {new Date(timeAgo).toLocaleDateString("pt-PT", {
          hour: "numeric",
          minute: "numeric",
        })}
      </div>
      <div className="flex items-center justify-center">
        <div className="w-14 h-14">
          <TeamCircle />
        </div>
        <div className="text-white text-3xl font-extrabold rounded-sm p-1 mx-4 truncate">
          {`${blueScore} - ${orangeScore}`}
        </div>
        <div className="w-14 h-14">
          <TeamCircle color="orange" />
        </div>
      </div>
      {isForfeit && (
        <span className="animate-pulse bg-red-900 border-2 text-xs font-semibold p-1 rounded-full">
          🏳️ FORFEITED
        </span>
      )}
    </div>
  );
}
