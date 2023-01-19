// eslint-disable-next-line
import { IGetPending } from "../types/pending";
import { serverAxios } from ".";

const PREFIX_URL = "/pending";

export const getPendingStatus = async (accessToken: string | null): Promise<IGetPending[]> => {
  const { data } = await serverAxios.get(`${PREFIX_URL}`, {
    headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
  });
  try {
    return data.data;
  } catch (err) {
    if (data.status === 400) {
      return data.message;
    }
    throw new Error("Failed to get your pending status");
  }
};
