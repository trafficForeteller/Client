// eslint-disable-next-line
import { AxiosError } from "axios";
import { IPostPhoneNumber, IPostVerifyPhoneNumber, IUserDataType } from "../types/sms";

import { serverAxios } from "./index";

const PREFIX_URL = "/sms";

export const postSmsSend = async (phoneNumberData: IPostPhoneNumber): Promise<void | null> => {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/send`, phoneNumberData, {
      headers: { "Content-Type": "application/json" },
    });

    if (data?.status === 200) {
      return data.data;
    }
  } catch (err) {
    throw new Error("Failed to send Authentication number to your phone number");
  }
};

export const postSmsVerify = async (
  authNumberData: IPostVerifyPhoneNumber,
): Promise<IUserDataType | null | undefined> => {
  const { data } = await serverAxios.post(`${PREFIX_URL}/verify`, authNumberData, {
    headers: { "Content-Type": "application/json" },
  });
  try {
    if (data.status === 200) {
      return data;
    }
  } catch (err) {
    const { response } = err as unknown as AxiosError;
    if (response) {
      throw { status: response.status, data: response.data };
    }
    return response;
  }
};
