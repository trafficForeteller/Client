export const routePaths = {
  Landing: "/",
  InstallApp: "/naechinso-app",
  PhoneNum: "/join",
  Certified: "/join/autorize",
  RecommendLanding: "/recommend/landing",
  Recommend: "/recommend",
  Keyword: "/recommend/keyword",
};

export type RoutePaths = typeof routePaths[keyof typeof routePaths];
