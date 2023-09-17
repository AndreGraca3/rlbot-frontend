"use client";

import Link from "next/link";
import { Menu } from "@headlessui/react";

export default function DropdownSelector({ title, queries, queryParams }) {
  return (
    <Menu as="div">
      <Menu.Button className="h-10 bg-dark-bg-color relative w-full rounded-lg pl-3 pr-10 font-medium text-left text-sm shadow-md hover:bg-highlight-color focus:outline-none">
        <span className="inline-flex flex-nowrap items-center truncate leading-10">
          <div className="inline-flex flex-row flex-nowrap justify-start items-center gap-2">
            <div>{title}</div>
          </div>
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="h-5 w-5 text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            ></path>
          </svg>
        </span>
      </Menu.Button>

      <Menu.Items className="absolute flex-col max-h-96 overflow-auto overscroll-contain rounded-md bg-dark-bg-color p-2 text-sm shadow-lg shadow-black/50 focus:outline-none">
        <Link href={"?map"}>a</Link>
      </Menu.Items>
    </Menu>
  );
}
