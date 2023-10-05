export default function TeamCircle({ color }) {
  return (
    <div
      className={`w-full h-full rounded-full shadow-lg animate-spin-slow ${
        color == "orange" ? "shadow-orange-500/50" : "shadow-cyan-500/50"
      } ${color == "orange" ? "bg-secondary-color" : "bg-primary-color"}`}
    ></div>
  );
}
