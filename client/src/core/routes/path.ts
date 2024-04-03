export const routePaths = {
  Login: "/login",
  SiginIn: "/signIn",
  RecommendBook: "/recommend",
  Landing: "/*",
};

export type RoutePaths = typeof routePaths[keyof typeof routePaths];
