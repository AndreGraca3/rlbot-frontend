const SearchBar = ({ placeHolder }) => {
  return (
    <div className="hidden md:flex bg-black rounded-lg px-2 border-transparent border-2 focus-within:shadow-slate-400 focus-within:shadow-sm focus-within:animate-pulse-colors">
      <form action="/player" className="flex w-fit">
        <input
          className="bg-black caret-white text-white w-40 focus:outline-none"
          placeholder={placeHolder}
        ></input>
        <div className="cursor-pointer px-2">
          <svg
            className="h-full w-5 stroke-current view-[0 0 24 24] text-white"
            viewBox="0 0 24 24"
          >
            <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
          </svg>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
