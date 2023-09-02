import Link from "next/link";

const MyNavLink = ({ title, href }) => {
  return (
    <Link href={href}>
      <button className="px-4 py-2 opacity-70 font-medium rounded hover:opacity-100 hover:bg-slate-700">
        {title}
      </button>
    </Link>
  );
};

export default MyNavLink;
