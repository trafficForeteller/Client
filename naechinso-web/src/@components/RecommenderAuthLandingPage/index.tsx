import styled from "styled-components";

import { IcRecommenderLanding } from "../../asset/icons";
import { routePaths } from "../../core/routes/path";
import { MoveNextPageBtn, Title } from "../@common";

export default function EditRecommenderAuthLandingPage() {
  return (
    <St.EditRecommenderAuthLandingPage>
      <St.TitleWrapper>
        <Title title="😎" />
        <Title title="널 기다리고 있었어!" />
        <Title title="소속 인증 부탁할게🧡" />
      </St.TitleWrapper>

      <St.ImgWrapper>
        <IcRecommenderLanding aria-label="내친소" />
      </St.ImgWrapper>

      <St.Bottom>
        <St.Desc>
          <St.HighLight>3일 내</St.HighLight>로 소속인증 하지 않으면
        </St.Desc>
        <St.Desc>작성된 추천사가 날아가니 꼭 해줘!🥺</St.Desc>
      </St.Bottom>
      <MoveNextPageBtn nextPage={routePaths.ChooseWork} title="소속인증 하기" disabled={false} />
    </St.EditRecommenderAuthLandingPage>
  );
}

const St = {
  EditRecommenderAuthLandingPage: styled.main`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.neural};
    padding-top: 10%;
    @media only screen and (min-height: 680px) {
      padding-top: 20%;
    }
  `,
  TitleWrapper: styled.hgroup`
    margin-bottom: 5%;
    margin-left: 2.4rem;
  `,
  ImgWrapper: styled.article`
    width: 35rem;
    float: right;
    @media only screen and (min-height: 680px) {
      padding-top: 10%;
    }
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
  HighLight: styled.b`
    color: ${({ theme }) => theme.colors.orange};
  `,
};
