export default function PageHeader({ title, text }) {
  return (
    <div className="w-full flex-auto pb-1 mb-8 border-b border-white border-opacity-20">
      <div className="space-y-4 animate-pop-up">
        <div className="space-y-2">
          <div className="w-fit text-2xl md:text-3xl">{title}</div>
          <div className="pl-1 w-fit text-xs md:text-base opacity-70">{text}</div>
        </div>
      </div>
    </div>
  );
}
