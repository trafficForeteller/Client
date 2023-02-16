import axios from "axios";

export const serverAxios = axios.create({
  baseURL: "https://dev.naechinso.com",
});
