export const routePaths = {
  Landing: "/",
  InstallApp: "/naechinso-app",
  PhoneNum: "/join",
  Certified: "/join/autorize",
  Recommend: "/recommend",
  Keyword: "/recommend/keyword",
  SubjectiveDesc: "/recommend/subjectiveDesc",
};

export type RoutePaths = typeof routePaths[keyof typeof routePaths];
