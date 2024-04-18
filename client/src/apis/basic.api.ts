// eslint-disable-next-line
import { AxiosError } from "axios";

import { IPostLoginInfo, IPostSignInInfo } from "../types/basic";

import { serverAxios } from ".";

export async function postSignIn(
  joinData: IPostSignInInfo,
  onSuccess: (token: string) => void,
  onFail: (errorMessage: string) => void,
): Promise<void | null> {
  try {
    const { data } = await serverAxios.post("/join", joinData, {
      headers: { "Content-Type": "application/json" },
    });
    onSuccess(data.token);
  } catch (err) {
    if (err instanceof Error) {
      onFail(err.message);
    }
  }
}

export async function postLogin(
  loginData: IPostLoginInfo,
  onSuccess: (token: string) => void,
  onFail: (errorMessage: string) => void,
): Promise<void | null> {
  try {
    const { data } = await serverAxios.post("/login", loginData, {
      headers: { "Content-Type": "application/json" },
    });
    onSuccess(data.token);
  } catch (err) {
    if (err instanceof Error) {
      onFail(err.message);
    }
  }
}
