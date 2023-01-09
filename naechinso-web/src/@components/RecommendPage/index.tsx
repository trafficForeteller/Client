import { useState } from "react";
import styled from "styled-components";

import { MovePreviousPageBtn, ShortInputBox, Title } from "../@common";
import ProgressBar from "../@common/ProgressBar";

export default function RecommendPage() {
  const [progressRate, setProgressRate] = useState(20);

  return (
    <St.RecommendPage>
      <St.Header>
        <MovePreviousPageBtn />
        친구 정보
      </St.Header>
      <ProgressBar progressRate={progressRate} />
      <St.TitleWrapper>
        <Title title="어떤 친구를 소개해줄거야?" />
        <Title title="너무 궁금해!👀" />
      </St.TitleWrapper>
      <ShortInputBox label="친구 이름" placeholder="실명을 적어줘. 이름 가운데는 *처리돼" />
    </St.RecommendPage>
  );
}

const St = {
  RecommendPage: styled.main``,
  Header: styled.header`
    height: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body1};
  `,
  TitleWrapper: styled.hgroup`
    margin-left: 2.4rem;
    margin-bottom: 2.4rem;
  `,
};
