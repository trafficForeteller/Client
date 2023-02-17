import axios from "axios";

import { REACT_APP_API_NAECHINSO } from "../util/api";

export const serverAxios = axios.create({
  baseURL: REACT_APP_API_NAECHINSO,
});
