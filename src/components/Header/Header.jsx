"use client";

import MyNavLink from "../MyNavLink";
import SearchBar from "../Filters/SearchBar";
import ExpandedButton from "../../components/Buttons/ExpandedButton";
import Hamburguer from "../Buttons/Hamburguer";
import CloseButton from "../Buttons/CloseButton";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Header = () => {
  let [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "🏠 Home", href: "/" },
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
      <button
        onClick={() => setIsOpen(true)}
        className="z-20 left-2 absolute rounded flex md:hidden p-2 focus:outline-none focus-visible:ring-2"
      >
        <Hamburguer />
      </button>

      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog onClose={() => setIsOpen(false)}>
          <Transition.Child
            enter="transition ease-in-out duration-200 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-200 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            as={Fragment}
          >
            <div className={"fixed w-3/4 z-40 top-0 left-0 h-screen"}>
              <div className="flex flex-col h-full min-w-3/4 max-w-sm bg-bg-surface-odd shadow-lg shadow-black">
                <div className="flex flex-col gap-y-2 p-2 justify-center w-full">
                  <CloseButton onClick={() => setIsOpen(false)} />
                  {links}
                </div>
              </div>
            </div>
          </Transition.Child>
          <Transition.Child
            enter="transition-opacity ease-linear duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as={Fragment}
          >
            <Dialog.Overlay className="fixed top-0 left-0 w-screen h-screen z-20 bg-black bg-opacity-40"></Dialog.Overlay>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <div className="flex justify-center items-center gap-x-4">
        <ExpandedButton title="RLBot" href="/" color={"bg-secondary-color"} />
        <div className="hidden md:flex items-center h-full">
          <div className="gap-2 items-center md:mr-14">{links.slice(1)}</div>
          <SearchBar route="/players" placeHolder="Search Player..." />
        </div>
      </div>
    </nav>
  );
};

export default Header;
