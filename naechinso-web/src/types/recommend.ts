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
  icon: string;
  title1: string;
  title2?: string;
  question1: string;
  question2: string;
  placeholder: string;
  checked: boolean;
  disabled: boolean;
}

export interface IUuid {
  uuid: string;
}

export interface IGetReommend {
  appeals: string[];
  appealDetail: string;
  dontGo: string;
  recommendQuestion: IPostRecommendElement[];
}

export interface IGetCheckPrice {
  isPrice: boolean;
  isShowRecommend: boolean;
}
