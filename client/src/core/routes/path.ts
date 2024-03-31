export const routePaths = {
  Landing: "/*",
  SiginIn: "/signIn",
};

export type RoutePaths = typeof routePaths[keyof typeof routePaths];
