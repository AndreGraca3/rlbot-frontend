import Displayer from "@/components/Displayers/Displayer";

export default async function MatchesStats({ label, value }) {
  return <Displayer label={label} value={value} />;
}
