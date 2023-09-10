export default function PaginatedContainer({ children }) {
  return (
    <div
      className={`grid grid-cols-2 grid-flow-row md:grid-cols-3 py-2 gap-4 place-items-center`}
    >
      {children}
    </div>
  );
}
