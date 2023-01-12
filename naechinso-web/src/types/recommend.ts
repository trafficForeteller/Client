export interface IPostFriendInfo {
  phone: string;
  name: string;
  period: string;
  meet: string;
}

export interface IPatchFriendDetail {
  appealDetail: string;
  appeals: string[];
  dontGo: string;
}

export interface IPostRecommend {
  recommendQuestion: string;
  recommendAnswer: string;
}
