import { Icons } from "../Icons";

export default function CloseButton({ onClick = () => {} }) {
  return (
    <button
      className="w-fit h-fit p-2 rounded-full bg-black bg-opacity-20 focus:outline-none focus-visible:ring-2 hover:ring-2"
      onClick={onClick}
    >
      <Icons.cross />
    </button>
  );
}
