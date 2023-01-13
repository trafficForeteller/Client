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
