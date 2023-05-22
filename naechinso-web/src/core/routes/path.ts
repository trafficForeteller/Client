export const routePaths = {
  Recommendation: "/recommendation/*",
  MagicLink: "/landing/*",
  InAppLanding: "/landing",
  InstallApp: "/naechinso-app",
  PhoneNum: "/join",
  Certified: "/join/autorize",
  FriendInfo: "/recommend/friendInfo",
  Keyword: "/recommend/keyword",
  ChooseFirstQuestion: "/recommend/question/1",
  FirstRecommend: "/recommend/answer/1",
  SecondRecommend: "/recommend/answer/2",
  AppealDetail: "/recommend/appealDetail",
  DontGo: "/recommend/dontGo",
  RecommenderInfo: "/recommender/info",
  ChooseWork: "/recommender/chooseWork",
  Edu: "/recommender/edu",
  Job: "/recommender/job",
  EduCertified: "/recommender/edu/certified",
  JobCertified: "/recommender/job/certified",
  Finish: "/finish",
  RecommenderLanding: "/recommender",
  RecommendLanding: "/recommend",
  Edit: "/edit/*",
  JobEdit: "/edit/job",
  EduEdit: "/edit/edu",
  Pending: "/pending",
  Arrive: "/arrive",
  EditRecommender: "/edit/landing",
  RecommenderAuth: "/recommender/auth",
  RecommenderAuthLanding: "/recommender/auth/landing",
  EditFinish: "/edit/finish",
  Error: "/error",
  ChooseJob: "/recommender/chooseJob",
  Freelance: "/recommender/freelance",
  SelfEmployed: "/recommender/selfEmployed",
  SelfEmployedCertified: "/recommender/selfEmployed/certified",
  PrepareWork: "/recommender/prepareWork",
  ChooseGift: "/recommender/chooseGift",
  Landing: "/",
};

export type RoutePaths = typeof routePaths[keyof typeof routePaths];
