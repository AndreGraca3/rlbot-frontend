export default function Displayer({ label, value }) {
  return (
    <div className="w-fit flex flex-col rounded-md shadow-md shadow-slate-900 overflow-hidden">
      <div className="text-ellipsis overflow-hidden text-center p-2 bg-orange-500">
        {label}
      </div>
      <div className="border-t-2 text-black font-semibold border-black text-ellipsis overflow-hidden bg-white text-center p-2">
        {value}
      </div>
    </div>
  );
}
