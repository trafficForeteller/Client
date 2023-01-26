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
  { id: 5, keyword: "다정해🎩", checked: false },
  { id: 6, keyword: "섬세해🪡", checked: false },
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
};

export const questionList: questionProps[] = [
  {
    id: 0,
    icon: "💍",
    title: "친구의 매력",
    desc1: "",
    desc2: "모두가 인정하는",
    desc3: "친구의 매력은?",
    placeholder:
      "처음 이 언니를 봤을 때 너무 예뻐서 깜짝 놀랐잖아. 외모는 아기자기하게 예쁘고, 마르고 스타일이 좋아서 요즘 뉴진스냐고 놀리고 있어ㅋㅋㅋ 사진보다 실물이 훨~씬 나으니 꼭 실물로 봐야해👍🏻",
    checked: false,
  },
  {
    id: 1,
    icon: "✏️",
    title: "친구 애인에게",
    desc1: "",
    desc2: "미래의 친구 애인에게",
    desc3: "편지를 쓴다면?",
    placeholder:
      "우리 형은 섬세하고 배려심이 넘쳐요. 이야기도 잘 들어주고 따뜻한 사람이니까 많의 의지할 수 있을 것 같아요. 우리 형도 동그란 사람이니까 따뜻하게 대해주시면 더욱 좋은 그리고 오래가는 커플이 될 수 있을거에요!",
    checked: false,
  },
  {
    id: 2,
    icon: "✨",
    title: "3가지 TMI",
    desc1: "친구와 친해져야만",
    desc2: "알 수 있는",
    desc3: "3가지 TMI는?",
    placeholder:
      "책을 정말 많이 읽는 친구야. 매번 만나서 고민 얘기할 때마다 자기가 읽었던 책 중에 도움이 될만한 책을 추천해주곤 해~ 글구 자기관리가 철저해. 매번 자기가 러닝하는 산책로가 있는데 거기서 보이는 풍경을 하루도 빠짐없이 기록함. 비가 오든 눈이 오든ㅋㅋㅋ",
    checked: false,
  },

  {
    id: 3,
    icon: "😍",
    title: "자랑스러워",
    desc1: "",
    desc2: "친구가 내 친구여서",
    desc3: "가장 뿌듯할 때는?",
    placeholder:
      "친구 스스로 플리마켓 행사를 기획했었는데, 셀러들에게 행복한 플리마켓을 만들어줘서 감사하다고 따로 연락이 왔을 정도야! 그정도로 사람을 진심으로 대하고 행복을 나누는 사람인 게 느껴져서 정말 내 친구인게 뿌듯했어 ㅎㅎ",
    checked: false,
  },
  {
    id: 4,
    icon: "👍🏻",
    title: "최고야",
    desc1: "",
    desc2: "내 친구 이거 하난",
    desc3: "정말 최고지!",
    placeholder:
      "내가 프로필이나 인스타에 올리는 사진 중 이친구가 찍으면 바로 올라갈 정도로 예술에대한 감각이 엄청난 친구라서 사진찍는거나 예술에 대한 이야기같이하면 좋을거같아 진짜 같이 사진찍는데도 재밌고 잘찍어줘서 나도 배우고싶은정도ㅋㅋ",
    checked: false,
  },
  {
    id: 5,
    icon: "🥹",
    title: "감동이야",
    desc1: "",
    desc2: "친구한테",
    desc3: "감동받은 적이 있다면?",
    placeholder:
      "다른 팀과 달리 우리 팀플팀은 아직도 몇년동안 연락하는데, 전적으로 이 친구 덕이라고 생각이 들 만큼 주변사람들 잘 챙기고 자기사람이라 생각되면 귀찮은게 없는 친구야ㅎㅎ 표현도 잘하고 먼저 잘 챙겨주고 보답하는 ENFP 그자체!!",
    checked: false,
  },
  {
    id: 6,
    icon: "👑",
    title: "가장 큰 장점은",
    desc1: "",
    desc2: "친구의 성격 중",
    desc3: "가장 큰 장점은?",
    placeholder:
      "오래된 친구들과 모일 때 사람들 챙기는 걸 항상 1순위로 생각하는 친구야. 만취할 때 사랑한다. 남발해서 오죽하면 별명이 사랑이야.ㅋㅋㅋㅋ근데 진심인 게 느껴져서 늘 고마울뿐이야",
    checked: false,
  },
  {
    id: 7,
    icon: "😎",
    title: "멋져",
    desc1: "",
    desc2: "친구가 멋있다고",
    desc3: "느꼈을 때는 언제야?",
    placeholder:
      "친구인데도 존경스럽고 배울 점 많은 사람을 떠올릴 때 딱 이 친구가 생각나는 것 같아. 예전에 강릉여행을 4박 5일동안갔는데, 혼자 새벽 6시에 일어나서 러닝하더라구! 성실하고 긍정적이어서 정말 본받고 싶은 친구야",
    checked: false,
  },
  {
    id: 8,
    icon: "❤💛",
    title: "멋져",
    desc1: "",
    desc2: "친구가 멋있다고",
    desc3: "느꼈을 때는 언제야?",
    placeholder:
      "친구인데도 존경스럽고 배울 점 많은 사람을 떠올릴 때 딱 이 친구가 생각나는 것 같아. 예전에 강릉여행을 4박 5일동안갔는데, 혼자 새벽 6시에 일어나서 러닝하더라구! 성실하고 긍정적이어서 정말 본받고 싶은 친구야",
    checked: false,
  },
  {
    id: 9,
    icon: "🧡",
    title: "멋져",
    desc1: "",
    desc2: "친구가 멋있다고",
    desc3: "느꼈을 때는 언제야?",
    placeholder:
      "친구인데도 존경스럽고 배울 점 많은 사람을 떠올릴 때 딱 이 친구가 생각나는 것 같아. 예전에 강릉여행을 4박 5일동안갔는데, 혼자 새벽 6시에 일어나서 러닝하더라구! 성실하고 긍정적이어서 정말 본받고 싶은 친구야",
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
  { id: 0, desc1: "추천사는", highlight: "친구의 매칭률", desc2: "에 중요한 영향을 미쳐" },
  { id: 1, desc1: "", highlight: "구체적인 에피소드", desc2: "와 함께 적어주면 더 좋아" },
  { id: 2, desc1: "실명 언급보단", highlight: "내 친구", desc2: "로 작성 부탁할게" },
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
    comment3: "너의 추천사는 친구가 좋은 인연을 만나는 데 분명 큰 도움이 될거야! ",

    desc1: "잠깐만 시간을 내서 친구에 대해서",
    desc2: "소개해줄 수 있을까?",
  },
];
