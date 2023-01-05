export const routePaths = {
  Landing: "/",
  InstallApp: "/naechinso-app",
  PhoneNum: "/join",
  Certified: "/join/autorize",
  Accept: "/join/accept",
};

export type RoutePaths = typeof routePaths[keyof typeof routePaths];
