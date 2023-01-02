import styled from "styled-components";

import { IcLandingLogo } from "../../asset/icons";
import { Landing } from "../../asset/image";
import { routePaths } from "../../core/routes/path";
import NextPageBtn from "../@common/NextPageBtn";
import Title from "../@common/Title";
import RecommendPageBtn from "./RecommendPageBtn";

export default function index() {
  return (
    <St.LandingPage>
      <St.LandingTop>
        <IcLandingLogo aria-label="내친소" />
        <St.Blank />
        <Title title={"소개팅은 받고 싶은데"} />
        <Title title={" 소개팅 앱은 싫다면?"} />
        <St.SubTitle>진짜 친구가 해주는 소개팅</St.SubTitle>
      </St.LandingTop>

      <St.LandingImgWrapper>
        <St.LandingImg src={Landing} alt={"랜딩페이지 아이콘"} />
      </St.LandingImgWrapper>

      <St.LandingBottom>
        <NextPageBtn nextPage={routePaths.InstallApp} title={"내친소 시작하기"} />
        <RecommendPageBtn nextPage={routePaths.PhoneNum} title={"내 친구를 소개하고 싶어"} />
      </St.LandingBottom>
    </St.LandingPage>
  );
}

const St = {
  LandingPage: styled.main``,
  LandingTop: styled.hgroup`
    padding: 9.8rem 3.6rem 0;
  `,
  Blank: styled.div`
    height: 2rem;
  `,
  SubTitle: styled.h2`
    ${({ theme }) => theme.fonts.sub3};
    color: ${({ theme }) => theme.colors.black};
    margin: 0.8rem 0 4.3rem;
  `,
  LandingImgWrapper: styled.section`
    display: flex;
    justify-content: center;
  `,
  LandingImg: styled.img`
    width: 19.5rem;
    height: 20rem;
    margin: 5rem 0 6.6rem;
  `,
  LandingBottom: styled.footer`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
  `,
};
