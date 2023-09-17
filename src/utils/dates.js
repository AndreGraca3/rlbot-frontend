export function timeSince(datetime) {
  const currentDate = new Date();
  const pastDate = new Date(datetime);
  const timeDifference = currentDate - pastDate;

  const timeUnits = [
    { unit: "year", milliseconds: 365 * 24 * 60 * 60 * 1000 },
    { unit: "month", milliseconds: 30 * 24 * 60 * 60 * 1000 },
    { unit: "day", milliseconds: 24 * 60 * 60 * 1000 },
    { unit: "hour", milliseconds: 60 * 60 * 1000 },
    { unit: "minute", milliseconds: 60 * 1000 },
    { unit: "second", milliseconds: 1000 },
  ];

  for (const unitData of timeUnits) {
    const { unit, milliseconds } = unitData;
    const count = Math.floor(timeDifference / milliseconds);

    if (count >= 1) {
      return `${count} ${unit}${count === 1 ? "" : "s"} ago`;
    }
  }

  return "Just now";
}

export function transformQueryToDate(query) {
  if (!query || query == "all") return;
  const currentDate = new Date();

  if (query.endsWith("d")) {
    const days = parseInt(query);
    currentDate.setDate(currentDate.getDate() - days);
  } else if (query.endsWith("w")) {
    const weeks = parseInt(query);
    currentDate.setDate(currentDate.getDate() - weeks * 7);
  } else if (query.endsWith("m")) {
    const months = parseInt(query);
    currentDate.setMonth(currentDate.getMonth() - months);
  } else if (query.endsWith("y")) {
    const years = parseInt(query);
    currentDate.setFullYear(currentDate.getFullYear() - years);
  }

  return currentDate.toISOString();
}
