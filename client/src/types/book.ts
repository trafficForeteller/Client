export interface IGetSearchBookData {
  authors: string[];
  contents: string;
  isbn: string;
  thumbnail: string;
  title: string;
  check: number; // 기록 완료 여부. 1이 등록된 것
  emotion: IEmotion[];
}

interface IEmotion {
  emotionId: number;
  emotionNumber: number;
}

export interface IPostBookReviewData {
  isbn: string;
  emotion: IEmotion[];
  comments: string;
  rating: number;
}

export type IGetRecommendBookData = {
  authors: string[];
  contents: string;
  isbn: string;
  thumbnail: string;
  title: string;
  emotion: IEmotion[];
};

export type IGetLifeBookData = {
  authors: string[];
  contents: string;
  thumbnail: string;
  title: string;
  emotion: IEmotion[];
};
