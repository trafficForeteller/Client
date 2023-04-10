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
  question: string;
  placeholder: string;
  checked: boolean;
  keywordChecked: boolean;
  icon: string;
};

export const keywordList: keywordProps[] = [
  {
    id: 0,
    icon: "💗",
    keyword: "사랑꾼💗",
    checked: false,
    keywordChecked: false,
    question: "내 친구의 달달한 사랑꾼 모먼트는?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 1,
    icon: "😜",
    keyword: "유머러스😜",
    checked: false,
    keywordChecked: false,
    question: "친구로 인해 배꼽이 달아난 사연은?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 2,
    icon: "🤗",
    keyword: "활발해🤗",
    checked: false,
    keywordChecked: false,
    question: "텐션 높은 내 친구가 가장 신날 때는?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 3,
    icon: "🍵",
    keyword: "차분해🍵",
    checked: false,
    keywordChecked: false,
    question: "내 친구 덕에 나까지 차분해졌던 때는?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 4,
    icon: "🐹",
    keyword: "귀여워🐹",
    checked: false,
    keywordChecked: false,
    question: "친구가 가장 귀여워보일 때는?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 5,
    icon: "🍭",
    keyword: "다정해🍭",
    checked: false,
    keywordChecked: false,
    question: "내 친구의 다정다감 포인트는?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 6,
    icon: "💐",
    keyword: "섬세해💐",
    checked: false,
    keywordChecked: false,
    question: "섬세한 내 친구를 속 깊다 생각든 때는?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 7,
    icon: "😇",
    keyword: "천사야😇",
    checked: false,
    keywordChecked: false,
    question: "내 친구가 천사구나 느꼈던 일화는?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 8,
    icon: "🧠",
    keyword: "똑똑해🧠",
    checked: false,
    keywordChecked: false,
    question: "뇌가 섹시한 내 친구에게 놀란 적은?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 9,
    icon: "🤓",
    keyword: "일잘러🤓",
    checked: false,
    keywordChecked: false,
    question: "내 친구의 본업 천재 모먼트는?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 10,
    icon: "🍯",
    keyword: "꿀성대🍯",
    checked: false,
    keywordChecked: false,
    question: "친구 목소리가 가장 감미로울 때는?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 11,
    icon: "👀",
    keyword: "실물파👀",
    checked: false,
    keywordChecked: false,
    question: "실물이 훨씬 나아서 신기했던 썰은?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 12,
    icon: "🧥",
    keyword: "패션센스🧥",
    checked: false,
    keywordChecked: false,
    question: "패셔니스타 친구! 가장 멋져보일 때는?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 13,
    icon: "💪🏻",
    keyword: "핫바디💪🏻",
    checked: false,
    keywordChecked: false,
    question: "핫바디 내 친구에게 감탄했던 일화는?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 14,
    icon: "🚗",
    keyword: "차가 있어🚗",
    checked: false,
    keywordChecked: false,
    question: "베스트 드라이버 친구! 고마웠던 순간은?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 15,
    icon: "🏊🏻‍",
    keyword: "자기관리🏊🏻‍",
    checked: false,
    keywordChecked: false,
    question: "규칙적으로 하는 친구만의 생활루틴은?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 16,
    icon: "👩‍👦",
    keyword: "화목한가정‍👩‍👦",
    checked: false,
    keywordChecked: false,
    question: "친구 가족의 화목한 일화는?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 17,
    icon: "💰",
    keyword: "여유있지💰",
    checked: false,
    keywordChecked: false,
    question: "내 친구의 부유함이 느껴진 모먼트는?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 18,
    icon: "👨‍🍳",
    keyword: "요리왕👨‍🍳",
    checked: false,
    keywordChecked: false,
    question: "친구의 요리 중 가장 기억에 남는 것은?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 19,
    icon: "📚",
    keyword: "다독왕📚",
    checked: false,
    keywordChecked: false,
    question: "독서왕 친구! 남다른 영감을 줄 때는?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 20,
    icon: "🥚",
    keyword: "꿀피부🥚",
    checked: false,
    keywordChecked: false,
    question: "피부미인 친구의 관리 비법은?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 21,
    icon: "👍",
    keyword: "리더십👍",
    checked: false,
    keywordChecked: false,
    question: "친구만이 가진 리더십 스타일은?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 22,
    icon: "⚖",
    keyword: "바른 인성⚖",
    checked: false,
    keywordChecked: false,
    question: "바른 인성 친구의 말버릇은?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 23,
    icon: "🤸‍♀️",
    keyword: "재주왕🤸‍♀️",
    checked: false,
    keywordChecked: false,
    question: "내 친구는 OO까지 잘한다면?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 24,
    icon: "😘",
    keyword: "애교쟁이😘",
    checked: false,
    keywordChecked: false,
    question: "기분 좋게해서 기억남는 친구의 애교는?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 25,
    icon: "✨",
    keyword: "외모출중✨",
    checked: false,
    keywordChecked: false,
    question: "아름다운 친구 용안으로 생긴 일화는?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 26,
    icon: "🌊",
    keyword: "배려심🌊",
    checked: false,
    keywordChecked: false,
    question: "공감 잘하는 친구 덕에 감동받은 때는?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 27,
    icon: "🐥",
    keyword: "긍정적🐥",
    checked: false,
    keywordChecked: false,
    question: "긍정적인 친구로 나도 행복해진 일화는?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 28,
    icon: "🙇🏻‍♀️",
    keyword: "예의바름🙇🏻‍♀️",
    checked: false,
    keywordChecked: false,
    question: "센스있는 내 친구의 매너 모먼트는?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
  {
    id: 29,
    icon: "🙇🏻🤓",
    keyword: "배울점많아🤓",
    checked: false,
    keywordChecked: false,
    question: "친구지만 배우고 싶은 삶의 태도는?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
  },
];

export type questionProps = {
  id: number;
  icon: string;
  question: string;
  placeholder: string;
  checked: boolean;
};

export const questionList: questionProps[] = [
  {
    id: 0,
    icon: "✨",
    question: "내 친구에게 본받고 싶은 점은?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
    checked: false,
  },
  {
    id: 1,
    icon: "😍",
    question: "내 친구의 이성적인 매력은?",
    placeholder:
      "내 친구는 하루도 안빼먹고 매일 아침에 헬스하는데, 그 이유가 좋아하는 사람이 생기면 더 당당해지고 싶기 때문이라고 하더라 멋있는 친구야ㅎㅎㅎ 몸도 좋아져서 이번에 바프도 찍었더라~ 거기다 매일 출근 전 운동한다는 거 쉽지 않은데, 정말 성실한 친구라 느꼈었어",
    checked: false,
  },
  {
    id: 2,
    icon: "👍🏻",
    question: "내 친구의 가장 큰 장점은?",
    placeholder:
      "내가 프로필이나 인스타에 올리는 사진 중 이친구가 찍으면 바로 올라갈 정도로 미적 감각이 엄청난 친구라서 사진찍는거나 예술에 대한 이야기같이하면 좋을거같아 진짜 같이 사진찍는데 주접도 잘 떨고 예쁘게 찍어줘서 나도 배우고 싶을정도야ㅋㅋ",
    checked: false,
  },
  {
    id: 3,
    icon: "🎨",
    question: "내 친구의 3가지 TMI가 있다면?",
    placeholder:
      "책을 정말 많이 읽어서 매번 만나서 고민 얘기할 때마다 도움이 될만한 책을 추천해줘~ 글구 눈이 오든 비가 오든 매일 러닝할 정도로 자기관리가 철저해! 사람들 챙기는 걸 항상 1순위로 생각하는 친구야. 만취할 때 사랑해 남발해서 오죽하면 별명이 사랑이야.ㅋㅋㅋ",
    checked: false,
  },
  {
    id: 4,
    icon: "💬",
    question: "친구와 자주 하는 대화 주제는?",
    placeholder:
      "내 친구랑 영화 취향이 비슷해서 영화 얘기를 많이 해! 최근에 에.에.올 보고 너무 재밌어서 친구랑 4시간 동안 영화 얘기만 했었어 ㅋㅋㅋ 같은 영화 보고 느낀 점 얘기하더라도 똑똑한 친구라 그런지 대화에서 인싸이트를 많이 얻어! 그리고 얘기도 잘 들어줘서 정말 대화할 맛 나는 친구야~",
    checked: false,
  },
  {
    id: 5,
    icon: "😭",
    question: "내 친구의 감동 모먼트는?",
    placeholder:
      "내 친구는 섬세하고 배려심이 넘쳐. 이야기도 잘 들어주고 따뜻한 사람이니까 많이 의지할 수 있을 거야. 한 번은 내가 힘들다고 하니까 늦은 밤인데도 찾아와서 이야기를 들어준 적이 있어! 자기 사람 일이라면 바로 달려와주는 거 보고 정말 감동이었어...",
    checked: false,
  },
  {
    id: 6,
    icon: "😎",
    question: "내 친구의 멋진 점은?",
    placeholder:
      "내 친구 스스로 플리마켓 행사를 기획했었는데, 셀러들에게 행복한 플리마켓을 만들어줘서 감사하다고 따로 연락이 왔을 정도로 짜임새 있고 재밌게 행사를 준비했어! 그정도로 일도 잘하고 사람들에게 행복을 나누는 사람인 게 느껴져서 정말 내 친구인게 뿌듯했어 ㅎㅎ",
    checked: false,
  },
  {
    id: 7,
    icon: "👀",
    question: "내 친구와의 기억남는 에피소드는?",
    placeholder:
      "내 친구 넘 다정해~ 다른 팀과 달리 우리 팀플팀은 아직도 몇년동안 연락하는데, 전적으로 이 친구 덕이라고 생각이 들 만큼 주변사람들 잘 챙기고 자기사람이라 생각되면 귀찮은게 없는 친구야ㅎㅎ 표현도 잘하고 먼저 잘 챙겨주고 보답하는 ENFP 그자체!!",
    checked: false,
  },
  {
    id: 8,
    icon: "📷",
    question: "나에게 내 친구의 이미지는?",
    placeholder:
      "친구인데도 존경스럽고 배울 점 많은 사람을 떠올릴 때 딱 이 친구가 생각나는 것 같아. 예전에 강릉여행을 4박 5일동안갔는데, 혼자 새벽 6시에 일어나서 러닝하더라구! 매일 성실하고 긍정적이게 살아서 정말 본받고 싶은 친구의 정석이야",
    checked: false,
  },
  {
    id: 9,
    icon: "👭🏻",
    question: "친구와 친해진 계기는?",
    placeholder:
      "상사한테 한 소리듣고 좀 풀죽어 있었던 적이 있었어. 근데 갑자기 얼굴만 알던 직장동기가 와서 힘내라는 쪽지랑 캔커피를 하나 주더라.. 안친한데도 그렇게 친절을 베푼 게 너무 감동이었어. 그래서 내가 친해지고 싶다고 들이대서 친해지게 됐어! ㅎㅎ",
    checked: false,
  },
];

export type TipProps = {
  id: number;
  desc1: string;
  highlight: string;
  desc2: string;
};

export const TipList: TipProps[] = [
  { id: 0, desc1: "실명 언급은 안돼!", highlight: "[내 친구]", desc2: "로 작성 부탁할게" },
  { id: 1, desc1: "", highlight: "[반말]", desc2: "로 친근하게 적어줘" },
  { id: 2, desc1: "", highlight: "[구체적인 에피소드]", desc2: "와 함께 적어주면 더 좋아" },
  { id: 3, desc1: "", highlight: "", desc2: "추천사는 친구의 매칭률에 중요한 영향을 미쳐!" },
];

export type RecommendLandingProps = {
  id: number;
  comment1: string;
  comment2: string;
  comment3: string;
  highlight?: string;
  desc1: string;
  desc2: string;
  desc3?: string;
};

export const RecommendLandingList: RecommendLandingProps[] = [
  {
    id: 0,
    comment1: "네 친구라면...",
    comment2: "분명 멋있겠지? 😘",
    comment3: "너무 기대된다!",
    highlight: "89~99년도생만",
    desc1: "지금은 수도권에 거주하는",
    desc2: "내친소를 이용할 수 있어!",
    desc3: "추천하는 사람의 나이는 상관 없으니 걱정하지 마",
  },
  {
    id: 1,
    comment1: "안녕!",
    comment2: "우리는 지인기반 소개앱 내친소야😎",
    comment3: "너의 추천사는 친구가 좋은 친구를 만나는 데 분명 큰 도움이 될거야! ",

    desc1: "잠깐만 시간을 내서 친구에 대해서",
    desc2: "소개해줄 수 있을까?",
  },
];

export type RecommendStepMessageProps = {
  id: number;
  questionChoiceMessage: string;
  recommendStepMessage: string;
};

export const RecommendStepMessage: RecommendStepMessageProps[] = [
  { id: 0, questionChoiceMessage: "첫 번째 질문을 선택해줘", recommendStepMessage: "질문 1" },
  { id: 1, questionChoiceMessage: "두 번째 질문을 선택해줘", recommendStepMessage: "질문 2" },
];

export type RecommenderInfoProps = {
  id: number;
  title1: string;
  title2: string;
  title3?: string;
};

export const RecommenderInfoList: RecommenderInfoProps[] = [
  {
    id: 0,
    title1: "👀",
    title2: "간단히 너를 소개해줘!",
  },
  {
    id: 1,
    title1: "😆",
    title2: "너에 대해 소개해줄래?",
  },
];
