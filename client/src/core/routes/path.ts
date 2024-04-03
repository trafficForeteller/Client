export const routePaths = {
  Login: "/login",
  SiginIn: "/signIn",
  RecommendBook: "/recommend",
  Search: "/search",
  Landing: "/*",
};

export type RoutePaths = typeof routePaths[keyof typeof routePaths];
