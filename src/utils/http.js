import axios from "axios";

export async function tryFetch(path) {
  try {
    const res = await axios.get("http://localhost:8080/" + path);
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
