import { getMatch } from "@/actions/data/matchData";

export default async function Match({ params }) {
  const match = await getMatch(params.id);
  return (
    <div>
      <div>This was a great match</div>
      <div>
        {JSON.stringify(match)}
      </div>
    </div>
  );
}
