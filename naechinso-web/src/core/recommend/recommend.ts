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

export type keywordProps = {
  id: number;
  keyword: string;
  checked: boolean;
};

export const keywordList: keywordProps[] = [
  { id: 0, keyword: "패션센스🧥", checked: false },
  { id: 1, keyword: "자기관리🏊🏻‍♀️", checked: false },
  { id: 2, keyword: "사랑꾼💗", checked: false },
  { id: 3, keyword: "일잘러🤓", checked: false },
  { id: 4, keyword: "애교쟁이😘", checked: false },
  { id: 5, keyword: "실물파👀", checked: false },
  { id: 6, keyword: "귀여워🐹", checked: false },
  { id: 7, keyword: "다정해🎩", checked: false },
  { id: 8, keyword: "섬세해🪡", checked: false },
  { id: 9, keyword: "유머러스😜", checked: false },
  { id: 10, keyword: "뇌섹🧠", checked: false },
  { id: 11, keyword: "인성갑😇", checked: false },
  { id: 12, keyword: "차분해🍵", checked: false },
  { id: 13, keyword: "화목한가정‍👩‍👦  ", checked: false },
  { id: 14, keyword: "🚗가 있어", checked: false },
  { id: 15, keyword: "핫바디💪🏻", checked: false },
  { id: 16, keyword: "🍯성대", checked: false },
  { id: 17, keyword: "여유있지💰", checked: false },
];

export type questionProps = {
  id: number;
  icon: string;
  title: string;
  desc: string;
  placeholder: string;
  checked: boolean;
};

export const questionList: questionProps[] = [
  {
    id: 0,
    icon: "✨",
    title: "3가지 TMI",
    desc: "친구와 친해져야만 알 수 있는 3가지 TMI는?",
    placeholder: "",
    checked: false,
  },
  {
    id: 1,
    icon: "✏️",
    title: "친구 애인에게",
    desc: "친구가 만나게 될 미래의 친구 애인에게 편지를 쓴다면?",
    placeholder: "",
    checked: false,
  },
  {
    id: 2,
    icon: "😍",
    title: "자랑스러워",
    desc: "친구가 내 친구여서 가장 뿌듯할 때는?",
    placeholder: "",
    checked: false,
  },
  { id: 3, icon: "🥹", title: "감동이야", desc: "친구한테 감동받은 적이 있다면?", placeholder: "", checked: false },
  {
    id: 4,
    icon: "✏️",
    title: "친구 애인에게",
    desc: "친구가 만나게 될 미래의 친구 애인에게 편지를 쓴다면?",
    placeholder: "",
    checked: false,
  },
  {
    id: 5,
    icon: "👍🏻",
    title: "가장 큰 장점은",
    desc: "친구의 성격 중 가장 큰 장점은?",
    placeholder: "",
    checked: false,
  },
];
