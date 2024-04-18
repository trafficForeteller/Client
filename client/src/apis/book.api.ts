// eslint-disable-next-line
import { IGetRecommendBookData, IGetSearchBookData } from "../types/book";

import { serverAxios } from ".";

const PREFIX_URL = "/book";

//인생책 검색
export async function getSearchBook(
  searchKeyword: string,
  accessToken: string | null,
  onSuccess: (successData: IGetSearchBookData[]) => void,
  onFail: (errorMessage: string) => void,
): Promise<void | null> {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/findBook?title&${searchKeyword}`, {
      headers: { Authorization: `${accessToken}`, "Content-Type": "application/json" },
    });
    onSuccess(data.documents);
  } catch (err) {
    if (err instanceof Error) {
      onFail(err.message);
    }
  }
}

//랜딩페이지 책 추천 컴포넌트
export async function getRecommendBook(
  onSuccess: (successData: IGetRecommendBookData[]) => void,
  onFail: (errorMessage: string) => void,
): Promise<void | null> {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/recommend`, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(data);
    onSuccess(data);
  } catch (err) {
    if (err instanceof Error) {
      onFail(err.message);
    }
  }
}
