import axios from "axios";

export default async function tryFetch(path) {
  try {
    const res = await axios.get("http://localhost:8080/" + path);
    return res.data;
  } catch (e) {
    return {error: e.message};
  }
}
