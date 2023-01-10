export type relationTypeProps = {
  id: number;
  relation: string;
  checked: boolean;
};

export const relationTypeList: relationTypeProps[] = [
  { id: 0, relation: "친족", checked: false },
  { id: 1, relation: "초/중/고 친구", checked: false },
  { id: 2, relation: "대학교 친구", checked: false },
  { id: 3, relation: "회사 친구", checked: false },
  { id: 4, relation: "기타", checked: false },
];

export const relationDurationList: relationTypeProps[] = [
  { id: 0, relation: "1년 이하", checked: false },
  { id: 1, relation: "1-3년", checked: false },
  { id: 2, relation: "3-5년", checked: false },
  { id: 3, relation: "5년 이상", checked: false },
];

export const stepItemList = [
  { step: 2, itemList: { label: "관계", placeholder: "어떤 관계인지 선택해줘", relationArr: { relationTypeList } } },
  {
    step: 3,
    itemList: {
      label: "알고 지낸 기간",
      placeholder: "알고 지낸 기간을 선택해줘",
      relationArr: { relationDurationList },
    },
  },
];
