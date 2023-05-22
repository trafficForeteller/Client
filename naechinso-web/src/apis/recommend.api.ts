// eslint-disable-next-line
import { AxiosError } from "axios";
import {
  IGetCheckPrice,
  IGetReommend,
  IPatchFriendDetail,
  IPostFriendInfo,
  IPostRecommend,
  IUuid,
} from "../types/recommend";

import { serverAxios } from ".";

const PREFIX_URL = "/recommend";

export async function postRecommendFriendInfo(
  friendsInfo: IPostFriendInfo,
  accessToken: string | null,
  onSuccess: (userData: IUuid) => void,
  onFail: (errorMessage: string) => void,
  onReissue: () => void,
): Promise<void | null> {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/request-uuid`, friendsInfo, {
      headers: { Authorization: `${accessToken}`, "Content-Type": "application/json" },
    });
    onSuccess(data.data);
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response?.data.status === 401) onReissue();
      else onFail(err.message);
    }
  }
}

export async function postMagicRecommendFriendInfo(
  friendsInfo: IPostFriendInfo,
  accessToken: string | null,
  memberUuid: string | null,
  onSuccess: (userData: IUuid) => void,
  onFail: (errorMessage: string) => void,
  onReissue: () => void,
): Promise<void | null> {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/request-uuid${memberUuid}`, friendsInfo, {
      headers: { Authorization: `${accessToken}`, "Content-Type": "application/json" },
    });
    onSuccess(data.data);
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response?.data.status === 401) onReissue();
      else onFail(err.message);
    }
  }
}

export async function patchRecommendFriendDetail(
  friendDetail: IPatchFriendDetail,
  accessToken: string | null,
  uuid: string | null,
  onSuccess: () => void,
  onFail: (err: AxiosError) => void,
  onReissue: () => void,
): Promise<void | null> {
  try {
    await serverAxios.patch(`${PREFIX_URL}/${uuid}/accept`, friendDetail, {
      headers: { Authorization: `${accessToken}`, "Content-Type": "application/json" },
    });
    onSuccess();
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response?.data.status === 401) onReissue();
      else onFail(err);
    }
  }
}

export async function postRecommendation(
  recommend: IPostRecommend,
  accessToken: string | null,
  uuid: string | null,
  onSuccess: () => void,
  onFail: (errorMessage: string) => void,
  onReissue: () => void,
): Promise<void | null> {
  try {
    await serverAxios.post(`${PREFIX_URL}/question/${uuid}`, recommend, {
      headers: { Authorization: `${accessToken}`, "Content-Type": "application/json" },
    });
    onSuccess();
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response?.data.status === 401) onReissue();
      else onFail(err.message);
    }
  }
}

export async function getRecommend(
  accessToken: string | null,
  uuid: string | null,
  onSuccess: (userData: IGetReommend) => void,
  onFail: () => void,
): Promise<void | null> {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/${uuid}`, {
      headers: { Authorization: `${accessToken}`, "Content-Type": "application/json" },
    });
    onSuccess(data.data);
  } catch (err) {
    if (err instanceof Error) {
      onFail();
    }
  }
}

export async function getCheckPrice(
  accessToken: string | null,
  uuid: string | null,
  onSuccess: (userData: IGetCheckPrice) => void,
  onFail: (errorMessage: string) => void,
  onReissue: () => void,
): Promise<void | null> {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/${uuid}/check-price`, {
      headers: { Authorization: `${accessToken}`, "Content-Type": "application/json" },
    });
    onSuccess(data.data);
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response?.data.status === 401) onReissue();
      else onFail(err.message);
    }
  }
}

export async function postSendRecommendSms(
  accessToken: string | null,
  onSuccess: () => void,
  onFail: (errorMessage: string) => void,
  onReissue: () => void,
): Promise<void | null> {
  try {
    await serverAxios.post(`${PREFIX_URL}/sms/send`, "", {
      headers: { Authorization: `${accessToken}`, "Content-Type": "application/json" },
    });
    onSuccess();
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response?.data.status === 401) onReissue();
      else onFail(err.message);
    }
  }
}
