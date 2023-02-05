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
  { id: 0, keyword: "사랑꾼💗", checked: false },
  { id: 1, keyword: "유머러스😜", checked: false },
  { id: 2, keyword: "활발해🤗", checked: false },
  { id: 3, keyword: "차분해🍵", checked: false },
  { id: 4, keyword: "귀여워🐹", checked: false },
  { id: 5, keyword: "다정해🍭", checked: false },
  { id: 6, keyword: "섬세해💐", checked: false },
  { id: 7, keyword: "천사야😇", checked: false },
  { id: 8, keyword: "똑똑해🧠", checked: false },
  { id: 9, keyword: "일잘러🤓", checked: false },
  { id: 10, keyword: "꿀성대🍯", checked: false },
  { id: 11, keyword: "실물파👀", checked: false },
  { id: 12, keyword: "패션센스🧥", checked: false },
  { id: 13, keyword: "핫바디💪🏻", checked: false },
  { id: 14, keyword: "차가 있어🚗", checked: false },
  { id: 15, keyword: "자기관리🏊🏻‍", checked: false },
  { id: 16, keyword: "화목한가정‍👩‍👦", checked: false },
  { id: 17, keyword: "여유있지💰", checked: false },
];

export type questionProps = {
  id: number;
  icon: string;
  title: string;
  desc1: string;
  desc2: string;
  desc3: string;
  placeholder: string;
  checked: boolean;
  disabled: boolean;
};

export const questionList: questionProps[] = [
  {
    id: 0,
    icon: "✨",
    title: "본받고싶은점",
    desc1: "",
    desc2: "내 친구에게 어떤 점을 ",
    desc3: "본받고 싶어?",
    placeholder:
      "내 친구랑 같이 있으면 말을 재밌게 해서 정말 즐겁고 시간이 5배속으로 가는 거 같아. 또 별명이 남무위키였던 적이 있을 정도로 박학다식해. 아는게 정말 많고 세상에 대해 호기심이 많아서 매사에 열심히 사는 친구라서 본받고 싶은 점들이 너무 많아",
    checked: false,
    disabled: false,
  },
  {
    id: 1,
    icon: "😭",
    title: "감동이야",
    desc1: "",
    desc2: "내 친구한테 ",
    desc3: "감동받은 일화가 있다면?",
    placeholder:
      "내 친구는 섬세하고 배려심이 넘쳐. 이야기도 잘 들어주고 따뜻한 사람이니까 많이 의지할 수 있을 거야. 한 번은 내가 힘들다고 하니까 늦은 밤인데도 찾아와서 이야기를 들어준 적이 있어! 자기 사람 일이라면 바로 달려와주는 거 보고 정말 감동이었어...",
    checked: false,
    disabled: false,
  },
  {
    id: 2,
    icon: "😍",
    title: "이성적 매력",
    desc1: "이성적으로 봤을 때 ",
    desc2: "내 친구의 가장 큰 ",
    desc3: "매력은 뭐라고 생각해?",
    placeholder:
      "내 친구는 하루도 안빼먹고 매일 아침에 헬스하는데, 그 이유가 좋아하는 사람이 생기면 더 당당해지고 싶기 때문이라고 하더라 멋있는 친구야ㅎㅎㅎ 몸도 좋아져서 이번에 바프도 찍었더라~ 거기다 매일 출근 전 운동한다는 거 쉽지 않은데, 정말 성실한 친구라 느꼈었어",
    checked: false,
    disabled: false,
  },

  {
    id: 3,
    icon: "😎",
    title: "멋져",
    desc1: "",
    desc2: "내 친구가 ",
    desc3: "멋져보일 때는 언제야?",
    placeholder:
      "내 친구 스스로 플리마켓 행사를 기획했었는데, 셀러들에게 행복한 플리마켓을 만들어줘서 감사하다고 따로 연락이 왔을 정도로 짜임새 있고 재밌게 행사를 준비했어! 그정도로 일도 잘하고 사람들에게 행복을 나누는 사람인 게 느껴져서 정말 내 친구인게 뿌듯했어 ㅎㅎ",
    checked: false,
    disabled: false,
  },
  {
    id: 4,
    icon: "👍🏻",
    title: "성격 중 장점",
    desc1: "",
    desc2: "내 친구의 성격 중 ",
    desc3: "가장 큰 장점은?",
    placeholder:
      "내가 프로필이나 인스타에 올리는 사진 중 이친구가 찍으면 바로 올라갈 정도로 미적 감각이 엄청난 친구라서 사진찍는거나 예술에 대한 이야기같이하면 좋을거같아 진짜 같이 사진찍는데 주접도 잘 떨고 예쁘게 찍어줘서 나도 배우고 싶을정도야ㅋㅋ",
    checked: false,
    disabled: false,
  },
  {
    id: 5,
    icon: "👀",
    title: "에피소드",
    desc1: "앞서 선택했던 ",
    desc2: "매력 키워드에 관한 ",
    desc3: "에피소드가 있을까?",
    placeholder:
      "내 친구 넘 다정해~ 다른 팀과 달리 우리 팀플팀은 아직도 몇년동안 연락하는데, 전적으로 이 친구 덕이라고 생각이 들 만큼 주변사람들 잘 챙기고 자기사람이라 생각되면 귀찮은게 없는 친구야ㅎㅎ 표현도 잘하고 먼저 잘 챙겨주고 보답하는 ENFP 그자체!!",
    checked: false,
    disabled: false,
  },
  {
    id: 6,
    icon: "🎨",
    title: "3가지 TMI",
    desc1: "내 친구와 친해져야만 ",
    desc2: "알 수 있는 ",
    desc3: "3가지 TMI는?",
    placeholder:
      "책을 정말 많이 읽어서 매번 만나서 고민 얘기할 때마다 도움이 될만한 책을 추천해줘~ 글구 눈이 오든 비가 오든 매일 러닝할 정도로 자기관리가 철저해! 사람들 챙기는 걸 항상 1순위로 생각하는 친구야. 만취할 때 사랑해 남발해서 오죽하면 별명이 사랑이야.ㅋㅋㅋ",
    checked: false,
    disabled: false,
  },
  {
    id: 7,
    icon: "📷",
    title: "이미지",
    desc1: "",
    desc2: "친구는 그룹 내에서 ",
    desc3: "어떤 이미지야?",
    placeholder:
      "친구인데도 존경스럽고 배울 점 많은 사람을 떠올릴 때 딱 이 친구가 생각나는 것 같아. 예전에 강릉여행을 4박 5일동안갔는데, 혼자 새벽 6시에 일어나서 러닝하더라구! 매일 성실하고 긍정적이게 살아서 정말 본받고 싶은 친구의 정석이야",
    checked: false,
    disabled: false,
  },
  {
    id: 8,
    icon: "💬",
    title: "자주 하는 대화",
    desc1: "",
    desc2: "친구랑 어떤 주제로 ",
    desc3: "자주 대화해?",
    placeholder:
      "내 친구랑 영화 취향이 비슷해서 영화 얘기를 많이 해! 최근에 에.에.올 보고 너무 재밌어서 친구랑 4시간 동안 영화 얘기만 했었어 ㅋㅋㅋ 같은 영화 보고 느낀 점 얘기하더라도 똑똑한 친구라 그런지 대화에서 인싸이트를 많이 얻어! 그리고 얘기도 잘 들어줘서 정말 대화할 맛 나는 친구야~",
    checked: false,
    disabled: false,
  },
  {
    id: 9,
    icon: "👭🏻",
    title: "친해진 계기",
    desc1: "",
    desc2: "친구랑 친해진 ",
    desc3: "계기가 뭐야?",
    placeholder:
      "상사한테 한 소리듣고 좀 풀죽어 있었던 적이 있었어. 근데 갑자기 얼굴만 알던 직장동기가 와서 힘내라는 쪽지랑 캔커피를 하나 주더라.. 안친한데도 그렇게 친절을 베푼 게 너무 감동이었어. 그래서 내가 친해지고 싶다고 들이대서 친해지게 됐어! ㅎㅎ",
    checked: false,
    disabled: false,
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
    comment1: "안녕 나는 친소야!",
    comment2: "네 친구라면...",
    comment3: "분명 멋있겠지? 😘",
    highlight: "89~99년도생만",
    desc1: "현재는 수도권에 거주하는",
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
