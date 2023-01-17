export interface IPostPolicy {
  acceptsInfo: boolean;
  acceptsReligion: boolean;
  acceptsService: boolean;
  acceptsLocation: boolean;
  acceptsMarketing: boolean;
}

export interface ITokenType {
  registerToken: string;
  accessToken: string;
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

export interface IJobType {
  jobName: string;
  jobPart: string;
  jobLocation: string;
}
