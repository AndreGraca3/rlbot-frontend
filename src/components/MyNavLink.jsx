import Link from "next/link";

const MyNavLink = ({ title, href, onClick = () => {} }) => {
  return (
    <Link
      onClick={onClick}
      href={href}
      className="text-start opacity-70 font-medium focus:outline-none rounded hover:opacity-100 hover:bg-slate-700 px-4 py-2 "
    >
      {title}
    </Link>
  );
};

export default MyNavLink;
