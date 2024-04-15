import axios from "axios";

export const serverAxios = axios.create({
  // 실 서버 사용
  baseURL: "https://docpamine.store",
});
