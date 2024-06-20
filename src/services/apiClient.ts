import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5290/api",
});
