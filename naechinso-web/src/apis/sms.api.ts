// eslint-disable-next-line
import { AxiosError } from "axios";
import { IPostPhoneNumber, IPostVerifyPhoneNumber, IToken, IUserDataType } from "../types/sms";

import { serverAxios } from "./index";

const PREFIX_URL = "/sms";

export async function postSmsSend(phoneNumberData: IPostPhoneNumber): Promise<void | null> {
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
}

export async function postSmsVerify(
  authNumberData: IPostVerifyPhoneNumber,
  onSuccess: (userData: IToken) => void,
  onFail: (errorMessage: string) => void,
) {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/verify`, authNumberData, {
      headers: { "Content-Type": "application/json" },
    });
    onSuccess(data.data);
    // return data;
  } catch (error) {
    if (error instanceof Error) {
      onFail(error.message);
    }
  }
}
