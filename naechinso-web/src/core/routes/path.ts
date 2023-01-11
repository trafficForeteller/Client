export const routePaths = {
  Landing: "/",
  InstallApp: "/naechinso-app",
  PhoneNum: "/join",
  Certified: "/join/autorize",
  Recommend: "/recommend",
  Keyword: "/recommend/keyword",
  SubjectiveDesc: "/recommend/subjectiveDesc",
  RecommenderInfo: "/join/recommender",
};

export type RoutePaths = typeof routePaths[keyof typeof routePaths];
