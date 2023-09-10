export default function Skeleton({ count }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`w-44 h-28 md:w-48 md:h-32 rounded-lg bg-slate-600 animate-pulse m-2`}
        ></div>
      ))}
    </>
  );
}
