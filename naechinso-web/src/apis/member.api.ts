// eslint-disable-next-line
import { IPostPolicy } from "../types/member";
import { serverAxios } from ".";

const PREFIX_URL = "/member";

export const postMemberJoin = async (policyData: IPostPolicy, registerToken: string): Promise<void | null> => {
  const { data } = await serverAxios.post(`${PREFIX_URL}/join`, policyData, {
    headers: { Authorization: `${registerToken}`, "Content-Type": "application/json" },
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
    throw new Error("Failed to verify your Authentication number or your phone number");
  }
};
