export const routePaths = {
  Landing: "/*",
};

export type RoutePaths = typeof routePaths[keyof typeof routePaths];
