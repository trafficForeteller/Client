// eslint-disable-next-line
import { IPatchEdu, IPatchJob, IPostPolicy, IPostRecommender } from "../types/member";
import { serverAxios } from ".";

const PREFIX_URL = "/member";

export const postMemberJoin = async (policyData: IPostPolicy, registerToken: string): Promise<void | null> => {
  const { data } = await serverAxios.post(`${PREFIX_URL}/join`, policyData, {
    headers: { Authorization: `${registerToken}`, "Content-Type": "application/json" },
  });
  try {
    if (data.status === 200) {
      return data.data;
    }
  } catch (err) {
    if (data.status === 400) {
      return data.message;
    }
    throw new Error("Failed to verify your Authentication number or your phone number");
  }
};

export const postMemberJoinRecommender = async (
  recommenderData: IPostRecommender,
  accessToken: string | null,
): Promise<void | null> => {
  const { data } = await serverAxios.post(`${PREFIX_URL}/join/recommender`, recommenderData, {
    headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
  });
  try {
    if (data.status === 200) {
      return data.data;
    }
  } catch (err) {
    if (data.status === 400) {
      return data.message;
    }
    throw new Error("Failed to post recommender Data");
  }
};

export const patchMemberEdu = async (eduData: object, accessToken: string | null): Promise<void | null> => {
  const { data } = await serverAxios.patch(`${PREFIX_URL}/edu`, eduData, {
    headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
  });
  try {
    if (data.status === 200) {
      return data.data;
    }
  } catch (err) {
    if (data.status === 400) {
      return data.message;
    }
    throw new Error("Failed to post edu Data");
  }
};

export const patchMemberJob = async (jobData: object, accessToken: string | null): Promise<void | null> => {
  const { data } = await serverAxios.patch(`${PREFIX_URL}/job`, jobData, {
    headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
  });
  try {
    if (data.status === 200) {
      return data.data;
    }
  } catch (err) {
    if (data.status === 400) {
      return data.message;
    }
    throw new Error("Failed to post job Data");
  }
};
