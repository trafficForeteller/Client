export const routePaths = {
  Landing: "/*",
  Login: "/login",
};

export type RoutePaths = typeof routePaths[keyof typeof routePaths];
