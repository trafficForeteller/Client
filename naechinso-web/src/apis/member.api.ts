// eslint-disable-next-line
import { AxiosError } from "axios";
import { IGetMemberStatus, IPostPolicy, IPostRecommender, IPostReissue } from "../types/member";

import { serverAxios } from ".";

const PREFIX_URL = "/member";

export async function postMemberJoin(policyData: IPostPolicy, registerToken: string | undefined): Promise<void | null> {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/join`, policyData, {
      headers: { Authorization: `${registerToken}`, "Content-Type": "application/json" },
    });
    if (data.status === 200) {
      return data.data;
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to verify your Authentication number or your phone number");
  }
}

export async function postMemberReissue(
  accessToken: string | null,
  refreshToken: string | null,
): Promise<IPostReissue | null> {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/reissue`, "", {
      headers: {
        Authorization: `${accessToken}`,
        Refresh: `${refreshToken}`,
        "Content-Type": "application/json",
      },
    });
    return data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function postMemberJoinRecommender(
  recommenderData: IPostRecommender,
  accessToken: string | null,
  onSuccess: () => void,
  onFail: (errorMessage: string) => void,
  onReissue: () => void,
): Promise<void | null> {
  try {
    await serverAxios.post(`${PREFIX_URL}/join/recommender`, recommenderData, {
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

export async function patchMemberEdu(
  eduData: object,
  accessToken: string | null,
  onSuccess: () => void,
  onFail: (errorMessage: string) => void,
  onReissue: () => void,
): Promise<void | null> {
  try {
    await serverAxios.patch(`${PREFIX_URL}/edu`, eduData, {
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

export async function patchMemberJob(
  jobData: object,
  accessToken: string | null,
  onSuccess: () => void,
  onFail: (errorMessage: string) => void,
  onReissue: () => void,
): Promise<void | null> {
  try {
    await serverAxios.patch(`${PREFIX_URL}/job`, jobData, {
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

export async function getMemberStatus(accessToken: string | null): Promise<IGetMemberStatus | undefined> {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}`, {
      headers: { Authorization: `${accessToken}`, "Content-Type": "application/json" },
    });
    if (data.status === 200) {
      return { jobAccepted: data.data.jobAccepted, eduAccepted: data.data.eduAccepted, name: data.data.name };
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to post job Data");
  }
}

export async function getUserName(
  accessToken: string | null,
  memberUuid: string | null,
  onSuccess: (userData: string) => void,
  onReissue: () => void,
): Promise<void | undefined> {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/name${memberUuid}`, {
      headers: { Authorization: `${accessToken}`, "Content-Type": "application/json" },
    });
    onSuccess(data.data.name);
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response?.data.status === 401) onReissue();
    }
  }
}
