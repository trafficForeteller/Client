import { useState } from "react";
import styled from "styled-components";

import { IcLandingLogo } from "../../asset/icons";
import { ImgCommentNaechinso, ImgLanding } from "../../asset/image";
import { routePaths } from "../../core/routes/path";
import { MoveNextPageBtn, Title } from "../@common";
import RecommendPageBtn from "./RecommendPageBtn";

export default function LandingPage() {
  const [inputActive, setInputActive] = useState(true);

  return (
    <St.LandingPage>
      <St.CommentBox>
        <St.Naechinso src={ImgCommentNaechinso} alt="내친소" />
        <St.CommentWrapper>
          <St.Comment>안녕 나는 친소야!</St.Comment>
          <St.Comment>네 친구라면...</St.Comment>
          <St.Comment>분명 멋있겠지? 😘</St.Comment>
          <St.Comment>너무 기대된다!</St.Comment>
        </St.CommentWrapper>
      </St.CommentBox>

      <St.Bottom>
        <St.TitleWrapper>
          <St.Title>딱 10분만 투자해서</St.Title>
          <St.Title>소중한 친구를 자랑해줘!</St.Title>
        </St.TitleWrapper>

        <St.Desc>
          현재는 수도권에 거주하는 <St.Highlight>89~99년도생</St.Highlight>만
        </St.Desc>
        <St.Desc> 내친소를 이용할 수 있어!</St.Desc>
        <St.Desc> 추천하는 사람의 나이는 상관 없으니 걱정하지 마</St.Desc>
      </St.Bottom>
      <MoveNextPageBtn nextPage={routePaths.PhoneNum} title="추천사 작성 시작하기" inputActive={false} />
    </St.LandingPage>
  );
}

const St = {
  LandingPage: styled.main`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.neural};
  `,
  CommentBox: styled.section`
    display: flex;
    gap: 1.5rem;
  `,
  Naechinso: styled.img`
    width: 12.5rem;
    height: 16.5rem;
    margin-top: 40%;
  `,
  CommentWrapper: styled.article`
    margin-top: 55%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  `,
  Comment: styled.p`
    width: fit-content;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0.8rem 1.2rem;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub3};
    border-radius: 0px 16px 16px 16px;
  `,
  Bottom: styled.section`
    width: 37.5rem;
    padding-top: 2.8rem;
    height: 30.4rem;
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
  TitleWrapper: styled.hgroup`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 1.2rem;
  `,
  Title: styled.h2`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.head1};
  `,
  Desc: styled.p`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body2};
  `,
  Highlight: styled.b`
    color: ${({ theme }) => theme.colors.orange};
  `,
};
