import { useEffect } from "react";
import TagManager from "react-gtm-module";
import styled from "styled-components";

import { IcRecommenderLanding } from "../../asset/icons";
import { routePaths } from "../../core/routes/path";
import { MoveNextPageBtn, Title } from "../@common";

export default function EditRecommenderLandingPage() {
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: { event: "page_path", customParameter: "/edit/landing" },
    });
  }, []);

  return (
    <St.EditRecommenderLandingPage>
      <St.TitleWrapper>
        <Title title="🤗" />
        <Title title="추천사는 잘 도착해서" />
        <Title title="네 소개를 기다리고 있어 " />
      </St.TitleWrapper>

      <St.ImgWrapper>
        <IcRecommenderLanding aria-label="내친소" />
      </St.ImgWrapper>

      <St.Bottom>
        <St.Desc>내친소는 신뢰를 기반으로 하고 있는데</St.Desc>
        <St.Desc>너에 대해서 다시 한 번 소개부탁해!</St.Desc>
      </St.Bottom>
      <MoveNextPageBtn nextPage={routePaths.RecommenderInfo} title="내 소개 하기" disabled={false} />
    </St.EditRecommenderLandingPage>
  );
}

const St = {
  EditRecommenderLandingPage: styled.main`
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
};
