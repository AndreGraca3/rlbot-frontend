import Link from "next/link";
import { buildQueryParams } from "@/utils/http";

export default function Selector({ title, queries, queryParams }) {
  const currentFilterValue = queryParams[queries.queryName];

  const generateLinkHref = (option) => {
    const newParams = { ...queryParams };
    if (option.query) {
      newParams[queries.queryName] = option.query;
    } else {
      delete newParams[queries.queryName]; // Remove the query parameter
    }
    return buildQueryParams(newParams);
  };

  return (
    <nav className="flex flex-col flex-nowrap justify-start items-start">
      <div className="px-0.5 pb-1 text-secondary text-sm">{title}</div>
      <ol className="flex flex-row rounded-lg shadow-md">
        {queries.options.map((option, index) => {
          const isSelected = option.query === currentFilterValue;
          return (
            <li key={index} className="group">
              <div className="max-w-[150px]"> {/* Constrain the width of the link container */}
                <Link
                  className={`${
                    isSelected ? "bg-highlight-color " : ""
                  }h-10 flex items-center hover:bg-highlight-color hover:opacity-90 bg-dark-bg-color px-3 font-medium text-sm text-center ${
                    index === 0 ? "group-first:rounded-l-lg " : ""
                  }${
                    index === queries.options.length - 1
                      ? "group-last:rounded-r-lg"
                      : ""
                  }`}
                  href={generateLinkHref(option)}
                  title={option.name} // Set the title attribute to display full text on hover
                >
                  <p className="truncate">
                    {option.name}
                  </p>
                </Link>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
