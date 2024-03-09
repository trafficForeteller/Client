export type genderTypeProps = {
  id: number;
  gender: string;
  checked: boolean;
  string: string;
};

export const genderTypeList: genderTypeProps[] = [
  { id: 0, gender: "남자", checked: false, string: "M" },
  { id: 1, gender: "여자", checked: false, string: "W" },
];

export type eduLevelrops = {
  id: number;
  eduLevel: string;
  checked: boolean;
};

export const eduLevelList: eduLevelrops[] = [
  { id: 0, eduLevel: "학사", checked: false },
  { id: 1, eduLevel: "석사", checked: false },
  { id: 2, eduLevel: "박사", checked: false },
];
