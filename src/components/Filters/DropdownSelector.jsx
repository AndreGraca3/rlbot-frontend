"use client";

import Link from "next/link";
import { Listbox, Transition } from "@headlessui/react";
import { buildQueryParams } from "@/utils/http";
import { Fragment, useState } from "react";
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

  const selected = queries.options.find(o => o.query == queryParams[queries.queryName]);

  return (
    <Listbox as="div" className="relative">
      {({ open }) => (
        <>
          <Listbox.Label className="block px-0.5 pb-1 text-secondary text-sm">
            {title}
          </Listbox.Label>
          <Listbox.Button className="w-full h-10 bg-dark-bg-color relative rounded-lg pl-3 pr-10 font-medium text-left text-sm shadow-md md:hover:bg-highlight-color focus:outline-none focus-visible:ring-2">
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
              className="z-50 absolute translate-y-2 max-h-96 bg-dark-bg-color rounded shadow-md overflow-y-auto overscroll-contain focus:outline-none"
            >
              {queries.options.map((q, i) => {
                const isSelected = q.name === selected?.name;
                return (
                  <Listbox.Option as={Fragment} key={i}>
                    <Link
                      className="flex p-2 w-full md:hover:bg-highlight-color focus:bg-secondary-color focus:outline-none rounded"
                      href={generateLinkHref(q)}
                    >
                      {isSelected && <Icons.checkMark />}
                      <p
                        className={`${
                          isSelected ? "font-semibold" : ""
                        } ml-2 truncate`}
                      >
                        {q.name}
                      </p>
                    </Link>
                  </Listbox.Option>
                );
              })}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  );
}
