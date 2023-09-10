"use client";

import React, { useEffect, useState } from "react";
import MyNavLink from "../MyNavLink";
import SearchBar from "../Filters/SearchBar";
import ExpandedButton from "../../components/Buttons/ExpandedButton";
import Hamburguer from "../Buttons/Hamburguer";
import CloseButton from "../Buttons/CloseButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflowY = "auto";
  }, [isOpen]);

  const links = [
    { name: "📊 Stats", href: "/stats" },
    { name: "🙋‍♂️ Players", href: "/players" },
    { name: "🎮 Matches", href: "/matches" },
  ].map((link, i) => (
    <MyNavLink
      key={i}
      title={link.name}
      href={link.href}
      onClick={() => setIsOpen(false)}
    />
  ));

  return (
    <nav className="md:mt-4 md:bg-transparent bg-bg-surface-odd p-2 flex w-screen justify-center items-center relative">
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed top-0 left-0 w-screen h-screen z-20 bg-black bg-opacity-40"
        ></div>
      )}
      <div
        className={`fixed w-3/4 z-40 top-0 left-0 h-screen md:hidden transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col h-full min-w-3/4 max-w-sm bg-bg-surface-odd shadow-lg shadow-black"
        >
          <div
            onClick={() => setIsOpen(false)}
            className="flex flex-col gap-y-2 p-2 justify-center w-full"
          >
            <CloseButton />
            <MyNavLink title="🏠 Home" href="/" />
            {links}
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="z-50 left-4 absolute rounded focus:outline-none md:hidden flex"
      >
        {!isOpen && <Hamburguer />}
      </button>
      <div className="flex justify-center items-center gap-x-4">
        <ExpandedButton title="RLBot" href="/" color={"bg-secondary-color"} />
        <div className="hidden md:flex items-center h-full">
          <div className="gap-2 items-center md:mr-14">{links}</div>
          <SearchBar placeHolder="Search Player..." />
        </div>
      </div>
    </nav>
  );
};

export default Header;
