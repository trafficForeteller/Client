export interface IPostPhoneNumber {
  phoneNumber: string;
}

export interface IPostVerifyPhoneNumber {
  code: string;
  phoneNumber: string;
}

export interface IToken {
  registerToken?: "";
  accessToken?: "";
}

export interface IUserDataType {
  status: number;
  data: IToken;
}
