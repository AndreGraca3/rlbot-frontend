import Link from "next/link";
import React from "react";

export default function FlatTableEntry({ row, index }) {
  return (
    <div
      style={{ animationDelay: `${index * 0.03}s` }}
      className="hover:bg-slate-700 odd:bg-bg-surface-odd opacity-0 hover:opacity-70 animate-fade-in-from-above"
    >
      <Link className="w-full h-full flex" href={row.href}>
        {Object.keys(row).map((prop, index) => {
          if (prop === "href") return;
          else
            return (
              <div
                key={index}
                className="w-1/2 py-2 px-4 text-left text-sm md:text-base truncate"
              >
                {row[prop]}
              </div>
            );
        })}
      </Link>
    </div>
  );
}
