import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { IcLandingLogo } from "../../asset/icons";
import { ImgLanding } from "../../asset/image";
import { routePaths } from "../../core/routes/path";
import RecommendPageBtn from "./RecommendPageBtn";

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    location.pathname !== "/" && localStorage.setItem("member-uuid", location.pathname);
    window.localStorage.clear();
  }, [location]);

  return (
    <St.LandingPage>
      <St.Top>
        <St.CommentWrapper>
          <St.Comment>소개팅은 받고 싶은데</St.Comment>
          <St.Comment>소개팅 앱은 싫다면?😎</St.Comment>
        </St.CommentWrapper>
        <St.Naechinso src={ImgLanding} alt="내친소" />
      </St.Top>

      <St.Bottom>
        <St.TitleWrapper>
          <St.OneLineIntro>진짜 친구가 해주는 소개팅</St.OneLineIntro>
          <IcLandingLogo />
        </St.TitleWrapper>

        <St.ButtonWrapper>
          <RecommendPageBtn nextPage={routePaths.InstallApp} title="내친소 시작하기" />
          <RecommendPageBtn nextPage={routePaths.PhoneNum} title="내 친구를 소개하고 싶어" />
        </St.ButtonWrapper>
      </St.Bottom>
    </St.LandingPage>
  );
}

const St = {
  LandingPage: styled.main`
    width: 100%;
    height: 100%;
  `,
  Top: styled.section`
    background-color: ${({ theme }) => theme.colors.orange};
    width: 100%;
    height: 45%;
    z-index: -1;

    position: relative;
  `,
  CommentWrapper: styled.article`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 20rem;
  `,
  Comment: styled.p`
    width: fit-content;
    background-color: ${({ theme }) => theme.colors.orange50};
    padding: 0.8rem 1.2rem;
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.sub3};
    border-radius: 16px 16px 16px 0px;
  `,
  Naechinso: styled.img`
    width: 102%;
    height: 12.1rem;
    position: absolute;
    bottom: -1px;
    left: -1px;
  `,
  Bottom: styled.section`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};

    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  TitleWrapper: styled.hgroup`
    margin-bottom: 4rem;
  `,
  OneLineIntro: styled.h2`
    color: ${({ theme }) => theme.colors.gray50};
    ${({ theme }) => theme.fonts.body2};
  `,

  ButtonWrapper: styled.article`
    display: flex;
    flex-direction: column;

    gap: 1.2rem;
  `,
};
