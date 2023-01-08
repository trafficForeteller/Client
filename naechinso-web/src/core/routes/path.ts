export const routePaths = {
  Landing: "/",
  InstallApp: "/naechinso-app",
  PhoneNum: "/join",
  Certified: "/join/autorize",
  RecommendLanding: "/recommend/landing",
};

export type RoutePaths = typeof routePaths[keyof typeof routePaths];
