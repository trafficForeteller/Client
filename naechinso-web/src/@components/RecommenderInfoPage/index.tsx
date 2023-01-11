import styled from "styled-components";

import { MovePreviousPageBtn, ProgressBar, SubTitle, Title } from "../@common";

export default function RecommenderInfoPage() {
  return (
    <St.RecommenderInfo>
      <St.Header>
        <MovePreviousPageBtn />
        추천인 소개
      </St.Header>
      <ProgressBar progressRate={55} />
      <St.TitleWrapper>
        <Title title="😆" />
        <Title title="간단히 너를 소개해줘!" />
      </St.TitleWrapper>
      <SubTitle subTitle="네 정보를 밝히며 친구를 추천하면" />
      <SubTitle subTitle="이 친구에게 엄청난 신뢰가 더해질거야✌️" />
    </St.RecommenderInfo>
  );
}

const St = {
  RecommenderInfo: styled.main`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  `,
  Header: styled.header`
    height: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body1};
  `,
  TitleWrapper: styled.hgroup`
    margin-bottom: 0.6rem;
    position: relative;
    z-index: -1;

    display: flex;
    flex-direction: column;
  `,
};
