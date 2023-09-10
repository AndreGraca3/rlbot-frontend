import { Icons } from "../Icons";

export default function PaginationButton({onClick, isRight, disabled = false}) {
  return (
    <button disabled={disabled} onClick={onClick} className={`${disabled ? "bg-dark-bg-color" : "bg-orange-500"} border p-2 rounded-lg ${isRight ? "rotate-180" : ""}`}>
      <Icons.arrow />
    </button>
  );
}
