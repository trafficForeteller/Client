// eslint-disable-next-line
import { IGetSearchBookData } from "../types/book";

import { serverAxios } from ".";

const PREFIX_URL = "/book";

//인생책 검색
export async function getSearchBook(
  searchKeyword: string,
  onSuccess: (successData: IGetSearchBookData[]) => void,
  onFail: (errorMessage: string) => void,
): Promise<void | null> {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/${searchKeyword}`, {
      headers: { "Content-Type": "application/json" },
    });
    onSuccess(data.documents);
  } catch (err) {
    if (err instanceof Error) {
      onFail(err.message);
    }
  }
}

// 책 리뷰 POST
// export async function postLogin(
//   loginData: IPostLoginInfo,
//   onSuccess: (successMessage: string) => void,
//   onFail: (errorMessage: string) => void,
// ): Promise<void | null> {
//   try {
//     const { data } = await serverAxios.post(`${PREFIX_URL}/review/login`, loginData, {
//       headers: { "Content-Type": "application/json" },
//     });
//     onSuccess(data.data);
//   } catch (err) {
//     if (err instanceof Error) {
//       onFail(err.message);
//     }
//   }
// }
