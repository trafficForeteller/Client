// eslint-disable-next-line
import { IPatchFriendDetail, IPostFriendInfo, IPostRecommend, IUuid } from "../types/recommend";
import { serverAxios } from ".";

const PREFIX_URL = "/recommend";

export async function postRecommendFriendInfo(
  friendsInfo: IPostFriendInfo,
  accessToken: string | null,
  onSuccess: (userData: IUuid) => void,
  onFail: (errorMessage: string) => void,
): Promise<void | null> {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/request-uuid`, friendsInfo, {
      headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
    });
    onSuccess(data.data);
  } catch (err) {
    if (err instanceof Error) {
      onFail(err.message);
    }
  }
}

export async function postMagicRecommendFriendInfo(
  friendsInfo: IPostFriendInfo,
  accessToken: string | null,
  memberUuid: string | null,
  onSuccess: (userData: IUuid) => void,
  onFail: (errorMessage: string) => void,
): Promise<void | null> {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/request-uuid${memberUuid}`, friendsInfo, {
      headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
    });
    onSuccess(data.data);
  } catch (err) {
    if (err instanceof Error) {
      onFail(err.message);
    }
  }
}

export async function patchRecommendFriendDetail(
  friendDetail: IPatchFriendDetail,
  accessToken: string | null,
  uuid: string | null,
): Promise<void | null> {
  try {
    const { data } = await serverAxios.patch(`${PREFIX_URL}/${uuid}/accept`, friendDetail, {
      headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
    });
    if (data.status === 200) {
      return data.data;
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to patch detail recommend of your friend");
  }
}

export async function postRecommendation(
  recommend: IPostRecommend,
  accessToken: string | null,
  uuid: string | null,
): Promise<void | null> {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/question/${uuid}`, recommend, {
      headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
    });
    if (data.status === 200) {
      return data.data;
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to post your recommend");
  }
}
