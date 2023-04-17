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
      "내 친구는 정말 다정하고 사랑꾼이야!😍 사랑을 달고 다니는 느낌? 언제는 내가 지하철을 잘못타서 약속 시간에 많이 늦었는데 구두 신고 뛰지 말라며 택시도 불러준 다정 사랑꾼이야! 자신의 연인에게는 보다 더 사랑꾼이겠지?",
  },
  {
    id: 1,
    icon: "😜",
    keyword: "유머러스😜",
    checked: false,
    keywordChecked: false,
    question: "친구랑 가장 크게 웃은 적은?",
    placeholder:
      "내 친구는 진짜 웃겨! 예의 바른 성격이라 처음에는 진중해보일 수 있는데, 친해지고 나면 하루종일 드립 생각만 하고 있나? 라는 생각이 들정도로 입만 열면 드립쳐ㅋㅋ🤪 만나고 집가면 너무 웃어서 배가 아플정도야ㅋㅋㅋ",
  },
  {
    id: 2,
    icon: "🤗",
    keyword: "활발해🤗",
    checked: false,
    keywordChecked: false,
    question: "텐션 높은 내 친구가 가장 신날 때는?",
    placeholder:
      "내 친구는 항상 긍정적이고 활발해😛 여기저기 다른 팀 사람들과 대화 나누는 걸 즐기는 편이라, 한 눈에 봐도 나랑 잘 맞을 것 같더라고! 그리고 성격이 정말 좋아서 같이 일하는 사람들이 전부 함께하고 싶어하는 친구였어!",
  },
  {
    id: 3,
    icon: "🍵",
    keyword: "차분해🍵",
    checked: false,
    keywordChecked: false,
    question: "내 친구 덕에 나까지 차분해졌던 때는?",
    placeholder:
      "내 친구는 되게 차분해서 나까지 편안해지는 매력이 있어. 예전에 내가 악몽을 얘기했더니, 친구가 좋게 해석해서 길몽으로 만들어주더라구. 웃고 넘어갔는데 그날 밤에 오늘은 악몽꾸지말라고 말하는거야! 그걸 기억하고 있어서 감동이었어🥺",
  },
  {
    id: 4,
    icon: "🐹",
    keyword: "귀여워🐹",
    checked: false,
    keywordChecked: false,
    question: "친구가 가장 귀여워보일 때는?",
    placeholder:
      "내 친구는 굉장히 귀여워!! 애교쟁이에다가 리트리버🐶 같은 친구야~ 댕댕이마냥 작은 거에도 행복해할 줄 아는 거 볼 때 정말 귀여워보이더라. 소확행의 대명사랄까~ 진짜 귀엽고 웃겨서 이 귀염둥이랑 있으면 시간 가는지 모르겠어ㅋㅋㅋ",
  },
  {
    id: 5,
    icon: "🍭",
    keyword: "다정해🍭",
    checked: false,
    keywordChecked: false,
    question: "내 친구의 다정다감 포인트는?",
    placeholder:
      "친구는 엄청 다정해!! 처음에 내가 백엔드에 관심있다고 해서 친해졌는데, 그런 관련 행사때마다 나한테 알려주시고 말도 먼저 걸어주시고 하더라구! 내가 당시에 회사 처음 들어가서 친한 사람도 많이 없고 그랬는데 다정하게 챙겨주셔서 엄청 감사했어😊",
  },
  {
    id: 6,
    icon: "💐",
    keyword: "섬세해💐",
    checked: false,
    keywordChecked: false,
    question: "섬세한 내 친구가 속이 깊다 생각한 순간은?",
    placeholder:
      "내 친구는 정말 섬세해! 친구들끼리 여행을 가서 술을 마시면 항상 제일 먼저 일어나서 우리의 해장을 신경써😀 남들이 다 자고 있을때도 방해되지않게 해장음식을 시켜놓고 적당한 시간에 우리를 잘 챙겨줘 이런사람 또 없다😏",
  },
  {
    id: 7,
    icon: "😇",
    keyword: "천사야😇",
    checked: false,
    keywordChecked: false,
    question: "천사같은 내 친구! 도움을 받은 적은?",
    placeholder:
      "내 친구는 예스맨이야! 아주 긍정적이고 화도 잘 안내는 천사 그 자체지..다른 사람의 기분을 상하지 않게 하고 도와줄 일에는 두 팔 걷어 나서는 의리파야 그만큼 자신의 연인에게도 한없는 사랑꾼이겠지? 유하지만 자신의 강단은 있는 친구야",
  },
  {
    id: 8,
    icon: "🧠",
    keyword: "똑똑해🧠",
    checked: false,
    keywordChecked: false,
    question: "뇌가 섹시한 내 친구에게 놀란 적은?",
    placeholder:
      "이 친구는 정말 똑똑해. 매일매일 회고📝를 하는데 그 깊이가 장난이 아니야..! 자신이 원하는 방향으로 살기 위해 매일 노력하는 점이 멋있어. 이런 모습을 대통령도 인정하는지, 무려 [대한민국 인재상]을 수상했지 뭐야? 진짜 능력자야!",
  },
  {
    id: 9,
    icon: "🤓",
    keyword: "일잘러🤓",
    checked: false,
    keywordChecked: false,
    question: "내 친구의 본업 천재 모먼트는?",
    placeholder:
      "내 친구는 일도 정말 잘해😏 우리 회사에서 프로젝트를 많이 하는데 그때마다 본업 모먼트가 딱! 발휘되면서 전문가가 이런거구나~ 싶은 느낌이 들더라고. 명확하게 의견주장하는 게 너무 프로페셔널 하더라고! 자기 분야에서 멋짐 뿜뿜 하는 사람이야",
  },
  {
    id: 10,
    icon: "🍯",
    keyword: "꿀성대🍯",
    checked: false,
    keywordChecked: false,
    question: "친구가 꿀성대라 생긴 일화는?",
    placeholder:
      "내 친구는 진짜 목소리가 좋아. 목소리가 너무 꿀같아서 친구 주변에 벌이 꼬인 적도 있다니까🍯ㅋㅋㅋ 하루에 몇 번꼴로 모르는 사람한테 칭찬받을 만큼 좋아! 마음씨도 넓고 착하고 근데 목소리까지도 중저음이라 차분+다정+편안한 바이브가 있어. ",
  },
  {
    id: 11,
    icon: "👀",
    keyword: "실물파👀",
    checked: false,
    keywordChecked: false,
    question: "실물이 훨씬 나아서 신기했던 썰은?",
    placeholder:
      "막상 내 친구는 실제로 봐야 그 매력을 알 수 있어!! 실물파에 너무 예쁘고 눈웃음이 너무 사랑스러워😊 진짜 내가 몇번 반했어ㅠㅠ 마지막으로 대화하다보면 느낄 수 있는 안정감있는 분위기는 내가 글로 쓸 수 없거든.. 정말 만나보면 알 거야!!",
  },
  {
    id: 12,
    icon: "🧥",
    keyword: "패션센스🧥",
    checked: false,
    keywordChecked: false,
    question: "패셔니스타 친구! 가장 멋져보일 때는?",
    placeholder:
      "내 친구는 센스 있는 사람이야. 패션 센스는 물론이고 일상에서 특별함을 건져내는 감각이 좋아✨사람들을 잘 챙기는 성격이라 친구들 선물도 센스있게 잘 고르고, 본인의 성격이 잘 묻어나는 패션센스와 그걸 잘 소화하는 모습도 멋져보여!!",
  },
  {
    id: 13,
    icon: "💪🏻",
    keyword: "핫바디💪🏻",
    checked: false,
    keywordChecked: false,
    question: "핫바디 내 친구에게 감탄했던 일화는?",
    placeholder:
      "내 친구는 말이지 독한 친구야. 회사 다니면서 운동+다이어트를 하고 그 와중에 봉사활동도 해. 하나도 힘든 걸 다 잘 해내!🤗 또 내 친구는 크로스핏을 해. 퇴근후에 쉬고 싶을 텐데 빼먹지 않고 정말 열심히 해. 증말로 몸도 탄탄하고 듬직한 친구야.",
  },
  {
    id: 14,
    icon: "🚗",
    keyword: "차가 있어🚗",
    checked: false,
    keywordChecked: false,
    question: "Best Driver 친구! 고마웠던 순간은?",
    placeholder:
      "내 친구는 운전할 때 가장 멋있는 것 같아🤩 내가 한때 갑자기 근무지 변경으로 이사를 하야 하는 상황이 와서 곤란한 상황이 있었는데 왕복 8시간 거리를 그냥 나를 위해 직접 운전해서 데리러 오고 데려다 주더라고… 진짜 그만큼 너무 착하고 의리있는 친구야🙇‍♂️",
  },
  {
    id: 15,
    icon: "🏊🏻‍",
    keyword: "자기관리🏊🏻‍",
    checked: false,
    keywordChecked: false,
    question: "규칙적으로 하는 친구만의 생활루틴은?",
    placeholder:
      "내 친구는 자기관리에 진심이야.😎 매일 운동을 한시간 이상 꾸준히 하고, 작년 같은 경우에는 프로필 준비를 따로 하면서 매일 두시간 이상 운동하고 살도 20kg 뺐다고 하더라고. 담배도 피우지 않고 건강하게 하루하루 살아가는 모습이 가장 큰 매력이지 않을까 싶어",
  },
  {
    id: 16,
    icon: "👩‍👦",
    keyword: "화목한가정‍👩‍👦",
    checked: false,
    keywordChecked: false,
    question: "친구 가족의 화목한 일화는?",
    placeholder:
      "내 친구는 가족이랑 엄청 친해 ㅋㅋㅋ 하나 에피소드가 우리집 제사지낸다고 했더니 자기네 집은 명절때 제사 안지내는데 동생이랑 명절 분위기 내고 싶어서 전 굽는대. 나한테는 약간 신선한 충격이었던 에피소드ㅋㅋㅋ 배려심이 엄청 넘치는 친구야!",
  },
  {
    id: 17,
    icon: "💰",
    keyword: "여유있지💰",
    checked: false,
    keywordChecked: false,
    question: "내 친구의 경제관념이 느껴진 모먼트는?",
    placeholder:
      "내 친구는 연합 투자 동아리에서 만난 친구야! 이 친구는 경제적으로 되게 여유로워서 이 친구와 만난다면 평소에 쉽게 할 수 없는 다양한 경험들을 할 수 있어~ 이 친구는 인생에서의 다양한 경험 덕분에 지식도, 입담도 갖춘 친구가 된 것 같아!",
  },
  {
    id: 18,
    icon: "👨‍🍳",
    keyword: "요리왕👨‍🍳",
    checked: false,
    keywordChecked: false,
    question: "친구의 요리 중 가장 기억에 남는 것은?",
    placeholder:
      "친구는 요리 실력이 정말 좋아서 내가 집에 놀러갈 때마다 항상 손수 요리를 해줘. 마라샹궈, 파스타, 닭발, 그외에도 정말 다양한 요리를 직접 해줬어. 먹는 것에 진심인 친구니까 같이 즐겁게 요리할 수 있는 사람이면 내 친구와 잘 어울리지 않을까 싶어!",
  },
  {
    id: 19,
    icon: "📚",
    keyword: "다독왕📚",
    checked: false,
    keywordChecked: false,
    question: "독서왕 친구! 남다른 영감을 줄 때는?",
    placeholder:
      "내 친구는 속이 깊고 독서를 좋아하는 생각이 깊은 친구야. 나랑 만나면 서로 좋아하는 책과 음악을 공유하느라 시간 가는 지를 몰라ㅎㅎ 그리고 둘다 재테크와 미래에 어떻게 살아갈지에 대한 얘기 하다보면 어느순간 밖이 깜깜해질 정도야ㅎㅎ",
  },
  {
    id: 20,
    icon: "🥚",
    keyword: "꿀피부🥚",
    checked: false,
    keywordChecked: false,
    question: "피부미인 친구의 관리 비법은?",
    placeholder:
      "내 친구는 하얗고 뽀얀 피부에 시크한 이미지를 가지고 있지만, 웃을 때는 너무 사랑스러운 이미지를 가지고 있어! 회사끝나고 자기관리한다고 운동하고 식단도 직접 만들어먹으면서 자기관리를 철저히 하는 걸 보니 꿀피부는 당연히 따라오는 결과겠구나 싶더라~",
  },
  {
    id: 21,
    icon: "👍",
    keyword: "리더십👍",
    checked: false,
    keywordChecked: false,
    question: "친구만이 가진 리더십 특징은?",
    placeholder:
      "내 친구는 매사 성실해 놀땐 놀고 일할땐 확실하게 일하는 느낌! 리더십도 좋고 대학에서 같이 학생회를 했었는데 같이 일하면서 든든하고 의지가 많이 됐어 매번 일을 벌리는 것 같은데 보다보면 끝까지 매듭을 잘지어서 결국 뭔가를 이뤄내는 리더십을 가졌어!",
  },
  {
    id: 22,
    icon: "⚖",
    keyword: "바른 인성⚖",
    checked: false,
    keywordChecked: false,
    question: "내 친구의 바른 신념이 드러날 때는?",
    placeholder:
      "내 친구는 즐길 땐 즐길 줄 알고, 고민을 들어 줄 때는 진중하게 들어주는 친구야! 지금까지도 매주마다 만나서 같이 노는데 미래에 대해서 같이 얘기도 하는 미래지향적인 친구야 :) 어른들에게 예의도 바르고 주변 평판도 엄청 좋아서 한마디로 표현하면 젠틀몬스터 그 자체야 👀",
  },
  {
    id: 23,
    icon: "🤸‍♀️",
    keyword: "재주왕🤸‍♀️",
    checked: false,
    keywordChecked: false,
    question: "재주왕 내친구! 가장 잘하는 것은?",
    placeholder:
      "내 친구는 같이 있으면 진짜 재밌어. 술을 마셔도 안 마셔도 항상 재밌는 이야깃거리가 쏟아져 나오고, 별 거 아닌 이야기도 재밌게 전달하는 재주가 있어서 같이 있으면 시간 가는 줄 몰라. 요리도 잘하고, 운전도 잘하고, 손재주가 좋은 일등 신랑감이야!",
  },
  {
    id: 24,
    icon: "😘",
    keyword: "애교쟁이😘",
    checked: false,
    keywordChecked: false,
    question: "사랑스러워서 기억남는 친구의 애교는?",
    placeholder:
      "항상 긍정적이고 밝은 에너지 덕분에 함께 있으면 즐겁고 편안할 때가 많아! 감정표현에 솔직하고 애교도 많은편이라 좋은 인연이 된다면 행복하게 잘 만날 수 있을거야. 언니지만 친구같고 친구지만 언니같은 내 칭구는 같이 있으면 5분이 한시간 같이 가는 소중한 존재야💕",
  },
  {
    id: 25,
    icon: "✨",
    keyword: "외모출중✨",
    checked: false,
    keywordChecked: false,
    question: "아름다운 친구 용안으로 생긴 일화는?",
    placeholder:
      "내  친구는 정말 이기적이야, 왜 그런지 알아? 학력과 외모가 매우 출중하거든. 잘생겼으면 하지 말아야 할 운동도 꾸준히 해서 나를 포함한 수 많은 남자들을 기죽이고 있어. 다부진 몸에 그 누구보다 따뜻한 마음을 가지고 있어 너한테만 정말 잘 해주리라 믿어 의심치 않아!",
  },
  {
    id: 26,
    icon: "🌊",
    keyword: "배려심🌊",
    checked: false,
    keywordChecked: false,
    question: "공감 잘하는 친구 덕에 감동받은 때는?",
    placeholder:
      "내 친구는 대학 동기야! 벌써 안 지 5년이 다 되어 가는데, 함께 보낸 시간이 많아지면서 이 친구가 얼마나 속이 깊고 정이 많은 친구인지 알게 됐어! 고민도 잘 들어주고 공감도 잘 해주는 친구라 깊은 속 얘기까지 털어놓을 수 있어🥺",
  },
  {
    id: 27,
    icon: "🐥",
    keyword: "긍정적🐥",
    checked: false,
    keywordChecked: false,
    question: "긍정적인 친구로 같이 행복해진 일화는?",
    placeholder:
      "내 친구랑 같이 유럽으로 여행 간 적이 있는데 그때 확실히 이 친구가 정말 다정하고 배려심 넘치고 착하다는 걸 느꼈어👏 둘다 처음 유럽에 가는 거라 시행착오도 많고 바가지도 당하고 했는데 그때마다 친구는 상대방의 기분을 먼저 살피면서 긍정적으로 분위기를 풀어주더라구😽",
  },
  {
    id: 28,
    icon: "🙇🏻‍♀️",
    keyword: "예의바름🙇🏻‍♀️",
    checked: false,
    keywordChecked: false,
    question: "센스있는 내 친구의 매너 모먼트는?",
    placeholder:
      " 성격은 또 얼마나 어른스럽고 다정하고 똑부러지는지 몰라. 손재주도 좋아서 친구들 졸업 꽃목걸이도 손수 만들어줘서 너무 감동이었어 알잘딱깔센이 사람이라면 바로 내 친구라고 할 수 있어ㅎㅎ 어른들께 정말 예의있게 잘해서 어른분들이 많이 예뻐하셔😚",
  },
  {
    id: 29,
    icon: "👏🏻",
    keyword: "배울점많아👏🏻",
    checked: false,
    keywordChecked: false,
    question: "친구지만 배우고 싶은 삶의 태도는?",
    placeholder:
      "내 친구는 맡은 일은 처음부터 허투루하는 법이 없이 끝까지 완벽하게 책임지는 듬직하고 집념이 있는 사람이야. 모르는 게 있는 걸 싫어해서 바쁜 와중에도 꾸준히 다독하는 모습이 멋지고 박학다식해서 배울 점이 아주 많아! 작은 것도 지나치지 않고 인사이트를 얻어내더라구",
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
    placeholder: "내 친구랑 같이 있으면 말을 재밌게 해서 정말 ",
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
