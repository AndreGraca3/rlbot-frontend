import { SCROLL_MAX_ITEMS_PER_PAGE } from "@/config";
import Link from "next/link";
import React from "react";

export default function FlatTableEntry({ row, index }) {
  return (
    <div
      style={{ animationDelay: `${index % SCROLL_MAX_ITEMS_PER_PAGE * 0.03}s` }}
      className="hover:bg-slate-700 odd:bg-bg-surface-odd opacity-0 hover:opacity-70 shadow animate-fade-in-from-above"
    >
      <Link className="w-full h-full flex" href={row.href}>
        {Object.keys(row).map((prop, index) => {
          if (prop === "href") return;
          else
            return (
              <div
                key={index}
                className="w-full py-2 px-4 text-left text-sm md:text-base truncate whitespace-nowrap"
              >
                {row[prop]}
              </div>
            );
        })}
      </Link>
    </div>
  );
}
