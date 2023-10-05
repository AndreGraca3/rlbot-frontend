export default function Skeleton({ count = 1 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`w-full h-full rounded-lg bg-slate-600 opacity-80 animate-pulse`}
        ></div>
      ))}
    </>
  );
}
