"use client";

import Link from "next/link";

export default function FlatTable({ columns, rows }) {
  if (rows.length === 0)
    return (
      <div className="h-full items-center text-center text-red-600 font-semibold opacity-90 justify-center">
        Nothing to display at the moment. Go play some more to populate this
        area!
      </div>
    );
  return (
    <div className="border-2 shadow-md border-gray-950 rounded-lg max-w-xl mx-auto overflow-hidden">
      <div className="flex bg-dark-bg-color font-semibold">
        {columns.map((column, index) => {
          return (
            <div className="w-1/2 py-2 px-4 text-left" key={index}>
              {column}
            </div>
          );
        })}
      </div>
      {rows.map((row, index) => {
        return (
          <div
            style={{ animationDelay: `${index * 0.1}s` }}
            className="hover:bg-slate-700 odd:bg-bg-surface-odd opacity-0 hover:opacity-70 border-t animate-fade-in-from-above"
            key={index}
          >
            <Link className="w-full h-full flex" href={row.href}>
              {Object.keys(row).map((key, keyIndex) =>
                key === "href" ? (
                  <></>
                ) : (
                  <div
                    className="w-1/2 py-2 px-4 text-left text-sm md:text-base overflow-hidden text-ellipsis"
                    key={keyIndex}
                  >
                    {row[key]}
                  </div>
                )
              )}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
