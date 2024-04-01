export const routePaths = {
  SiginIn: "/signIn",
  RecommendBook: "/recommend",
  Landing: "/*",
};

export type RoutePaths = typeof routePaths[keyof typeof routePaths];
