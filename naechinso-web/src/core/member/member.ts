export type genderTypeProps = {
  id: number;
  gender: string;
  checked: boolean;
};

export const genderTypeList: genderTypeProps[] = [
  { id: 0, gender: "남자", checked: false },
  { id: 1, gender: "여자", checked: false },
];
