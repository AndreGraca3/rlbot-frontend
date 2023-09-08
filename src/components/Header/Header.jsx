import MyNavLink from "./MyNavLink";
import SearchBar from "../Filters/SearchBar";
import ExpandedButton from "../../components/Buttons/ExpandedButton";

const Header = () => {
  return (
    <nav className="mt-4 p-2 flex w-screen justify-center items-center">
      <div className="flex justify-center items-center gap-x-4">
        <ExpandedButton title="RLBot" href="/" color={"bg-secondary-color"} />
        <div className="hidden md:flex items-center h-full">
          <div className="gap-2 items-center md:mr-14">
            <MyNavLink href="/stats" title={"📊 Stats"} />
            <MyNavLink href="/players" title={"🙋‍♂️ Players"} />
            <MyNavLink href="/matches" title={"🎮 Matches"} />
          </div>
          <SearchBar placeHolder="Search Player..." />
        </div>
      </div>
    </nav>
  );
};

export default Header;
