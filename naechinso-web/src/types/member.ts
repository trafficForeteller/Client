export interface IPostPolicy {
  acceptsInfo: boolean;
  acceptsReligion: boolean;
  acceptsService: boolean;
  acceptsLocation: boolean;
  acceptsMarketing: boolean;
}

export interface IPostReissue {
  accessToken: string;
  refreshToken: string;
  isActive: boolean;
  isBanned: boolean;
}

export interface ITokenType {
  registerToken?: string;
  accessToken?: string;
}

export interface IPostRecommender {
  gender: string;
  name: string;
}

export interface IEduType {
  eduName: string;
  eduLevel: string;
  eduMajor: string;
}

export interface IPatchEdu {
  eduImage: string;
  eduName: string;
  eduLevel: string;
  eduMajor: string;
}

export interface IJobType {
  jobName: string;
  jobPart: string;
  jobLocation: string;
}

export interface IPatchJob {
  jobImage: string;
  jobName: string;
  jobPart: string;
  jobLocation: string;
}

export interface IGetMemberStatus {
  jobAccepted: string;
  eduAccepted: string;
}
