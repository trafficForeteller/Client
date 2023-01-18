export const routePaths = {
  Landing: "/",
  InstallApp: "/naechinso-app",
  PhoneNum: "/join",
  Certified: "/join/autorize",
  FriendInfo: "/recommend",
  Keyword: "/recommend/charm",
  ChooseQuestion: "/recommend/question",
  Recommend: "/recommend/answer",
  AppealDetail: "/recommend/appealDetail",
  DontGo: "/recommend/dontGo",
  RecommenderInfo: "/recommender/info",
  ChooseWork: "/recommender/chooseWork",
  Edu: "/recommender/education",
  Job: "/recommender/job",
  EduCertified: "/recommender/education/certified",
  JobCertified: "/recommender/job/certified",
  Finish: "/finish",
  RecommenderLanding: "/recommender",
};

export type RoutePaths = typeof routePaths[keyof typeof routePaths];
