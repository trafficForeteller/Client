export const routePaths = {
  Landing: "/",
  InstallApp: "/naechinso-app",
  PhoneNum: "/join",
  Certified: "/join/autorize",
  FriendInfo: "/recommend",
  Keyword: "/recommend/keyword",
  ChooseQuestion: "/recommend/question",
  RecommenderInfo: "/join/recommender",
};

export type RoutePaths = typeof routePaths[keyof typeof routePaths];
