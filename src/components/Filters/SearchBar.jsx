"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import Spinner from "../Loading/Spinner";
import Link from "next/link";

const SearchBar = ({ placeHolder, hideIcon, route, onChange = () => {} }) => {
  const [text, setText] = useState("");
  const [search] = useDebounce(text, 750);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if(!search) return
    onChange(search);
  }, [search]);

  const router = useRouter();

  const handleSubmit = () => {
    if (!ref.current) return;
    ref.current.click();
  };

  return (
    <div className="flex w-fit h-full bg-black rounded-lg p-1 border-transparent border-2 focus-within:animate-pulse-colors">
      <form action={handleSubmit} className="flex w-fit">
        <input
          onChange={(e) => setText(e.target.value)}
          className="bg-black caret-white text-white text-sm w-40 focus:outline-none"
          placeholder={placeHolder}
        ></input>
        {!hideIcon && (
          <Link
            className="cursor-pointer px-2"
            ref={ref}
            href={`${route}/${text}`}
          >
            <svg
              className="h-full w-5 stroke-current view-[0 0 24 24] text-white"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
            </svg>
          </Link>
        )}
      </form>
      {isLoading && <Spinner />}
    </div>
  );
};

export default SearchBar;
