import FlatTableEntry from "./FlatTableEntry";
import EmptyResourceWarning from "../Warnings/EmptyResourceWarning";

export default function FlatTable({ columns, rows }) {
  if (rows.length === 0)
    return (
      <EmptyResourceWarning />
    );
  return (
    <div className="border-2 shadow-md border-gray-950 rounded-lg max-w-xl mx-auto overflow-hidden">
      <div className="flex bg-dark-bg-color font-semibold">
        {columns.map((column, index) => {
          return (
            <div className="w-1/2 py-2 px-4 text-left" key={index}>
              {column}
            </div>
          );
        })}
      </div>
      {rows.map((row, index) => (
        <FlatTableEntry
          key={index}
          index={index}
          row={row}
        />
      ))}
    </div>
  );
}
