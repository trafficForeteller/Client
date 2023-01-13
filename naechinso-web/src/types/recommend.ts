export interface IPostFriendInfo {
  phone: string;
  name: string;
  period: string;
  meet: string;
}

export interface IPatchFriendDetail {
  appealDetail: string | null;
  appeals: string[] | null;
  dontGo: string | null;
}

export interface IPostRecommend {
  recommendQuestion: string;
  recommendAnswer: string;
}
