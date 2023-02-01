import styled from "styled-components";

import { IcRecommenderLanding } from "../../asset/icons";
import { routePaths } from "../../core/routes/path";
import { MoveNextPageBtn, Title } from "../@common";

export default function RecommenderLandingPage() {
  return (
    <St.RecommenderLandingPage>
      <St.TitleWrapper>
        <Title title="🙏" />
        <Title title="친구를 정성들여" />
        <Title title="소개해줘서 고마워" />
      </St.TitleWrapper>

      <St.ImgWrapper>
        <IcRecommenderLanding />
      </St.ImgWrapper>

      <St.Bottom>
        <St.Desc>내친소는 신뢰를 기반으로 하고 있는데</St.Desc>
        <St.Desc>너에 대해서도 살짝 소개해줄래?</St.Desc>
      </St.Bottom>
      <MoveNextPageBtn nextPage={routePaths.RecommenderInfo} title="내 소개 하기" inputActive={false} />
    </St.RecommenderLandingPage>
  );
}

const St = {
  RecommenderLandingPage: styled.main`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.neural};
    padding-top: 10%;
  `,
  TitleWrapper: styled.hgroup`
    margin-bottom: 5%;
    margin-left: 2.4rem;
  `,
  ImgWrapper: styled.article`
    width: 35rem;
    float: right;
  `,
  Bottom: styled.section`
    width: 100%;
    padding-top: 2.8rem;
    height: 21.2rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 20px 20px 0px 0px;

    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Desc: styled.h2`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};
  `,
};
