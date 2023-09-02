import { getRandomWidth } from "@/utils/html";

export default function LinesSqueleton() {
  return (
    <div>
      <ul className="list-none pl-6 mt-4 space-y-3 items-center justify-center">
        {[...Array(20).keys()].map((i) => (
          <li key={i}>
            <span
              className="rounded-md inline-block h-5 bg-slate-700 animate-pulse"
              style={{
                width: getRandomWidth(),
                animationDelay: `${i * 0.1}s`,
                animationDuration: "1s",
              }}
            ></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
