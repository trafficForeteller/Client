// eslint-disable-next-line
import { IPatchFriendDetail, IPostFriendInfo } from "../types/recommend";
import { serverAxios } from ".";

const PREFIX_URL = "/recommend";

export const postRecommendFriendInfo = async (
  friendsInfo: IPostFriendInfo,
  accessToken: string | null,
): Promise<void | null> => {
  const { data } = await serverAxios.post(`${PREFIX_URL}/request-uuid`, friendsInfo, {
    headers: { Authorization: `${accessToken}`, "Content-Type": "application/json" },
  });
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

export const patchRecommendFriendDetail = async (
  friendDetail: IPatchFriendDetail,
  accessToken: string | null,
  uuid: string | null,
): Promise<void | null> => {
  const { data } = await serverAxios.patch(`${PREFIX_URL}/${uuid}/accept`, friendDetail, {
    headers: { Authorization: `${accessToken}`, "Content-Type": "application/json" },
  });
  try {
    if (data.status === 200) {
      return data.data;
    }
  } catch (err) {
    if (data.status === 400) {
      return data.message;
    }
    throw new Error("Failed to patch your detail recommend");
  }
};
