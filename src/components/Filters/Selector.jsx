import Link from "next/link";
import { buildQueryParams } from "@/utils/http";

export default function Selector({
  title,
  route,
  defaultName,
  queries,
  queryParams,
}) {
  const currentFilterValue = queryParams[queries.queryName];

  const generateLinkHref = (option) => {
    const newParams = { ...queryParams };
    if (option.query) {
      newParams[queries.queryName] = option.query;
    } else {
      delete newParams[queries.queryName]; // Remove the query parameter
    }
    return `/${route}${buildQueryParams(newParams)}`;
  };

  return (
    <nav className="flex flex-col flex-nowrap justify-start items-start">
      <div className="px-0.5 pb-1 text-secondary text-sm">{title}</div>
      <ol className="flex flex-row rounded-lg shadow-md">
        <li key="default" className="group">
          <Link
            className={`${
              !currentFilterValue ? "bg-highlight-color " : ""
            }h-10 flex items-center hover:bg-highlight-color hover:opacity-90 bg-dark-bg-color px-3.5 font-medium text-sm group-first:rounded-l-lg group-last:rounded-r-lg`}
            href={`/${route}${buildQueryParams({
              ...queryParams,
              [queries.queryName]: undefined, // Set the query parameter to undefined
            })}`}
          >
            {defaultName}
          </Link>
        </li>
        {queries.options.map((option, index) => {
          const isSelected = option.query === currentFilterValue;
          return (
            <li key={index} className="group">
              <Link
                className={`${
                  isSelected ? "bg-highlight-color " : ""
                }h-10 flex items-center hover:bg-highlight-color hover:opacity-90 bg-dark-bg-color px-3.5 font-medium text-sm ${
                  index === 0 ? "group-first:rounded-l-lg " : ""
                }${
                  index === queries.options.length - 1
                    ? "group-last:rounded-r-lg"
                    : ""
                }`}
                href={generateLinkHref(option)}
              >
                {option.name}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
