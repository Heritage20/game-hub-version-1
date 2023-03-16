import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "98fb380ea29044debfcf64d7672f2ac3",
  },
});
