"use client";

import { useRouter } from "next/navigation";
import { Icons } from "../Icons";
import Link from "next/link";

export default function PaginationButton({ href, isRight, disabled = false }) {
  const router = useRouter();

  return (
    <Link
      disabled={disabled}
      href={href}
      className={`${
        disabled
          ? "bg-dark-bg-color pointer-events-none"
          : "bg-orange-500 md:hover:bg-highlight-color md:hover:scale-110"
      } overflow-hidden shadow-lg duration-200 transition-all ease-in-out focus:outline-none p-2 rounded-lg ${
        isRight ? "rotate-180" : ""
      }`}
    >
      <Icons.arrow />
    </Link>
  );
}
