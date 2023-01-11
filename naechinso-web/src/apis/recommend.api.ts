// eslint-disable-next-line
import { IPostFriendsInfo } from "../types/recommend";
import { serverAxios } from ".";

const PREFIX_URL = "/recommend";

export const postRecommendFriendInfo = async (
  friendsInfo: IPostFriendsInfo,
  accessToken: string,
): Promise<void | null> => {
  const { data } = await serverAxios.post(`${PREFIX_URL}/request-uuid`, friendsInfo, {
    headers: { Authorization: `${accessToken}`, "Content-Type": "application/json" },
  });
  console.log(data.data);
  try {
    if (data.status === 200) {
      return data.data;
    }
  } catch (err) {
    if (data.status === 400) {
      return data.message;
    }
    throw new Error("Failed to post your recommend");
  }
};
