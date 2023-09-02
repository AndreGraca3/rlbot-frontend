import Link from "next/link";

const ExpandedButton = ({ title, href, color }) => {
  return (
    <Link href={href} className="h-fit">
      <button
        className={
          "md:hover:scale-110 transition-all duration-150 px-4 py-1 rounded-sm text-xl block text-center font-bold " +
          color
        }
      >
        {title}
      </button>
    </Link>
  );
};

export default ExpandedButton;
