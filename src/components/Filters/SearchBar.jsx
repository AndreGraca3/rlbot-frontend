"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const SearchBar = ({ placeHolder, hideIcon, onChange = () => {} }) => {
  const [text, setText] = useState();
  const [search] = useDebounce(text, 750);

  useEffect(() => {
    if(search === undefined) return
    onChange(search);
  }, [search]);

  return (
    <div className="flex h-full bg-black rounded-lg p-1 border-transparent border-2 focus-within:animate-pulse-colors">
      <form action="/player" className="flex w-fit">
        <input
          onChange={(e) => setText(e.target.value)}
          className="bg-black caret-white text-white text-sm w-40 focus:outline-none"
          placeholder={placeHolder}
        ></input>
        {!hideIcon && (
          <div className="cursor-pointer px-2">
            <svg
              className="h-full w-5 stroke-current view-[0 0 24 24] text-white"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
            </svg>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;