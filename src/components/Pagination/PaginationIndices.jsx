export default function PaginationIndices({ page }) {
    const start = Math.max(1, page - 2);
    const end = Math.min(start + 6, 4);
  
    const indices = Array.from({ length: end - start + 1 }, (_, index) => start + index);
  
    return (
      <div className="flex gap-x-2">
        {indices.map((num) => (
          <button key={num} className={`border px-3 py-2 rounded-md ${page === num ? "bg-highlight-color" : "bg-dark-bg-color"}`}>
            {num}
          </button>
        ))}
      </div>
    );
  }
  