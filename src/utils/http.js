import axios from "axios";

export async function tryFetch(path) {
  try {
    const res = await axios.get(process.env.BACKEND_URL + path);
    return res.data;
  } catch (e) {
    return { error: e.response?.data?.message || e.message };
  }
}

export function buildQueryParams(params) {
  if (!params || Object.keys(params).length === 0) {
    return "";
  }

  const queryParams = Object.keys(params)
    .filter(
      (key) =>
        params[key] !== null && params[key] !== undefined && params[key] !== ""
    )
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join("&");

  return queryParams ? `?${queryParams}` : "";
}

export async function delay(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const filters = {
  timeWindowQueries: {
    title: "🕒 Time Window",
    queryName: "createdAfter",
    options: [
      { name: "All Time", query: "all" },
      { name: "This Year", query: "1y" },
      { name: "This Month", query: "1m" },
      { name: "This Week", query: "7d" },
      { name: "Today", query: "1d" },
    ],
  },
  platformQueries: {
    title: "🎮 Platform",
    queryName: "platform",
    options: [
      { name: "All" },
      { name: "PC", query: "PC" },
      { name: "PS4", query: "PS4" },
      { name: "Xbox", query: "Xbox" },
    ],
  },
};
