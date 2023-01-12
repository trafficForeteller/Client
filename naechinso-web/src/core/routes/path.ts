export const routePaths = {
  Landing: "/",
  InstallApp: "/naechinso-app",
  PhoneNum: "/join",
  Certified: "/join/autorize",
  FriendInfo: "/recommend",
  Keyword: "/recommend/charm",
  ChooseQuestion: "/recommend/question",
  Recommend: "/recommend/answer",
  RecommenderInfo: "/join/recommender",
};

export type RoutePaths = typeof routePaths[keyof typeof routePaths];
