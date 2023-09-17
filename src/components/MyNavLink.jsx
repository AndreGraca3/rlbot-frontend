import Link from "next/link";

const MyNavLink = ({ title, href, onClick = () => {} }) => {
  return (
    <Link onClick={onClick} href={href}>
      <button className="px-4 py-2 opacity-70 font-medium focus:outline-none rounded hover:opacity-100 md:hover:bg-slate-700">
        {title}
      </button>
    </Link>
  );
};

export default MyNavLink;
