export default function TableSqueleton() {
  return (
    <div className="border-2 border-gray-950 shadow-md rounded-lg w-1/2 mx-auto overflow-hidden">
      <div className="flex w-full py-2 bg-dark-bg-color justify-center font-semibold">
        <span className="animate-pulse">Loading...</span>
      </div>
      {Array.from({ length: 3 }, (_, i) => (
        <div
          style={{ animationDelay: `${i * 0.1}s` }}
          key={i}
          className="flex border-t w-full h-8 bg-slate-700 animate-pulse"
        ></div>
      ))}
    </div>
  );
}
