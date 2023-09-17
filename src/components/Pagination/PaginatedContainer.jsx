export default function PaginatedContainer({ children }) {
  return (
    <div
      className={`grid grid-cols-2 grid-flow-row md:grid-cols-4 py-2 gap-8 place-items-center`}
    >
      {children}
    </div>
  );
}
