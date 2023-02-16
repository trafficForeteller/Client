export interface IPostFriendInfo {
  phone?: string;
  name: string;
  period: string;
  meet: string;
}

export interface IPatchFriendDetail {
  appealDetail: string | null;
  appeals: string[] | null;
  dontGo: string | null;
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
  title: string;
  desc1: string;
  desc2: string;
  desc3: string;
  placeholder: string;
  checked: boolean;
  disabled: boolean;
}
