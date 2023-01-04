import { serverAxios } from "./index";

const PREFIX_URL = "/sms";

interface IPostPhoneNumber {
  phoneNumber: string;
}

export const postSmsSend = async (phoneNumberData: IPostPhoneNumber): Promise<void | null> => {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/send`, phoneNumberData, {
      headers: { "Content-Type": "application/json" },
    });

    if (data.status === 200) {
      return data.data;
    }
  } catch (err) {
    throw new Error("Failed to send Authentication number to your phone number");
  }
};
