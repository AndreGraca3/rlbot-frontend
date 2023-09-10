export default function MatchBox({ blueScore, orangeScore, mapUrl, timeAgo }) {
  const matchResult = `${blueScore} - ${orangeScore}`;

  return (
    <div className="flex relative w-44 h-28 md:w-48 md:h-32 bg-slate-900 rounded-lg p-1 justify-center items-center md:hover:scale-105 duration-150">
      <img
        src={mapUrl}
        className="w-full h-full opacity-50 border-slate-700 rounded-md shadow-sm border-2"
      />

      <div className="flex w-full h-full flex-col gap-2 absolute items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="w-10 h-10 rounded-full shadow-lg shadow-cyan-500/50 bg-primary-color"></div>
          <div className="text-white font-semibold bg-slate-900 bg-opacity-60 rounded-sm p-1 mx-2">
            {matchResult}
          </div>
          <div className="w-10 h-10 rounded-full shadow-lg shadow-orange-500/50 bg-secondary-color"></div>
        </div>
        <div className="items-center justify-center">{timeAgo}</div>
      </div>
    </div>
  );
}
