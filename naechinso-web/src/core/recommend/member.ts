export type genderTypeProps = {
  id: number;
  icon: string;
  gender: string;
  checked: boolean;
};

export const genderTypeList: genderTypeProps[] = [
  { id: 0, icon: "IcMen", gender: "남자", checked: false },
  { id: 1, icon: "IcWomen", gender: "여자", checked: false },
];
