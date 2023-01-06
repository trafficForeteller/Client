export const routePaths = {
  Landing: "/",
  InstallApp: "/naechinso-app",
  PhoneNum: "/join",
  Certified: "/join/autorize",
  RecommendLanding: "/recommendLanding",
};

export type RoutePaths = typeof routePaths[keyof typeof routePaths];
