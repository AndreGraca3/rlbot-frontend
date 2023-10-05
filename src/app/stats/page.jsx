import PageHeader from "@/components/Header/PageHeader";

export default function Stats() {
  return (
    <div className="flex flex-col items-center justify-center">
      <PageHeader title="Global Stats" text="WIP" />

      <img
        src="/construction_rl.png"
        className={`cursor-pointer rounded-lg animate-bounce animation-playing hover:animation-paused`}
        alt="Construction Image"
      />
      {/*<p>With filters in top: Players found, most played map, goals, saves, demos. And Player with most of each</p>*/}
    </div>
  );
}
