"use client";

import Link from "next/link";
import { Listbox, Transition } from "@headlessui/react";
import { buildQueryParams } from "@/utils/http";
import { Fragment } from "react";
import { Icons } from "../Icons";

export default function DropdownSelector({ title, queries, queryParams }) {
  const generateLinkHref = (option) => {
    const newParams = { ...queryParams };
    if (option.query) {
      newParams[queries.queryName] = option.query;
    } else {
      delete newParams[queries.queryName]; // Remove the query parameter
    }
    return buildQueryParams(newParams);
  };

  const selected = queries.options.find(
    (o) => o.query == queryParams[queries.queryName]
  );

  return (
    <Listbox>
      {({ open }) => (
        <div className="relative">
          <Listbox.Label className="block px-0.5 pb-1 text-secondary text-sm">
            {title}
          </Listbox.Label>
          <Listbox.Button className="relative w-full h-10 bg-dark-bg-color rounded-lg pl-3 pr-10 font-medium text-left text-sm shadow-md md:hover:bg-highlight-color focus:outline-none focus-visible:ring-2">
            {selected?.name}
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-gray-400"
              >
                <path d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
              </svg>
            </span>
          </Listbox.Button>

          <Transition
            show={open}
            enter="transition ease-in duration-50"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-50"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as={Fragment}
          >
            <Listbox.Options
              as="div"
              className="z-50 absolute w-full translate-y-2 max-h-96 bg-dark-bg-color rounded text-sm shadow-lg overflow-y-auto focus:outline-none"
            >
              {queries.options.map((q, i) => {
                const isSelected = q.name === selected?.name;
                return (
                  <Listbox.Option as={Fragment} key={i}>
                    <Link href={generateLinkHref(q)}>
                      <div className="relative hover:bg-highlight-color h-10 flex items-center pl-10 pr-4 cursor-pointer select-none">
                        <span className="flex truncate leading-10 font-normal">
                          {q.name}
                        </span>
                        {isSelected && (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-500">
                            <Icons.checkMark />
                          </span>
                        )}
                      </div>
                    </Link>
                  </Listbox.Option>
                );
              })}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
}
