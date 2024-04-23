// eslint-disable-next-line
import { IGetLifeBookData, IGetRecommendBookData, IGetSearchBookData, IPostBookReviewData } from "../types/book";

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
    onSuccess(data);
  } catch (err) {
    if (err instanceof Error) {
      onFail(err.message);
    }
  }
}

//인생 책 추천 컴포넌트
export async function getLifeBook(
  onSuccess: (successData: IGetLifeBookData[]) => void,
  onFail: (errorMessage: string) => void,
): Promise<void | null> {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/lifebook`, {
      headers: { "Content-Type": "application/json" },
    });
    onSuccess(data);
  } catch (err) {
    if (err instanceof Error) {
      onFail(err.message);
    }
  }
}

//인생 책 추천 컴포넌트
export async function postBookReview(
  bookReviewData: IPostBookReviewData,
  accessToken: string | null,
  onSuccess: (successMessage: string) => void,
  onFail: (errorMessage: string) => void,
): Promise<void | null> {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/review`, bookReviewData, {
      headers: {
        Authorization: `${accessToken}`,
        "Content-Type": "application/json",
        "Referrer-Policy": "no-referrer-when-downgrade",
      },
    });
    onSuccess(data.message);
  } catch (err) {
    if (err instanceof Error) {
      onFail(err.message);
    }
  }
}
