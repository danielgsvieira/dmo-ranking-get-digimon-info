import axios from "axios";

async function get(url) {
  return await axios.get(url);
}

export { get };
