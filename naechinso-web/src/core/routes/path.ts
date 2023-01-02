export const routePaths = {
  Landing: "/",
  InstallApp: "/naechinso-app",
  PhoneNum: "/join",
};

export type RoutePaths = typeof routePaths[keyof typeof routePaths];
