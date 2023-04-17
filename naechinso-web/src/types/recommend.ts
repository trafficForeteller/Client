export interface IPostFriendInfo {
  phone?: string;
  name?: string;
  period: string;
  meet: string;
}

export interface IPatchFriendDetail {
  appealDetail: string | null;
  appeals: string[] | null;
  dontGo: string | null;
  priceType: string;
}

export interface IPostRecommendElement {
  recommendQuestion: string;
  recommendAnswer: string;
}

export interface IPostRecommend {
  recommendQuestions: IPostRecommendElement[];
}

export interface IPostRecommendQuestion {
  id: number;
  question: string;
  placeholder: string;
  checked: boolean;
}

export interface IUuid {
  uuid: string;
}

export interface IGetReommend {
  appeals: string[];
  appealDetail: string;
  dontGo: string;
  customQuestion: IPostRecommendElement[];
}

export interface IGetCheckPrice {
  isPrice: boolean;
  isShowRecommend: boolean;
}
