import axios from "axios";

export const learnLindoInstance = axios.create({
  baseURL: "http://localhost:4000/api/",
});
