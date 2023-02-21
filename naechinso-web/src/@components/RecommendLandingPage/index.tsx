import styled from "styled-components";

import { ImgCommentNaechinso } from "../../asset/image";
import { routePaths } from "../../core/routes/path";
import { MoveNextPageBtn } from "../@common";

export default function RecommenderLandingPage() {
  return (
    <St.RecommendLandingPage>
      <St.CommentBox>
        <St.Naechinso src={ImgCommentNaechinso} alt="내친소" />
        <St.CommentWrapper>
          <St.Comment>네 친구라면...</St.Comment>
          <St.Comment>분명 멋있겠지? 😘</St.Comment>
          <St.Comment>너무 기대된다!</St.Comment>
          <St.Comment>
            네 추천사는 친구가
            <br />
            좋은 인연을 만나는 데 정말 큰 도움이 될 거야!
          </St.Comment>
        </St.CommentWrapper>
      </St.CommentBox>

      <St.Bottom>
        <St.TitleWrapper>
          <St.Title>이제 친구를 자랑해볼까?</St.Title>
        </St.TitleWrapper>

        <St.Desc>잠깐만 시간내서 친구에 대해</St.Desc>
        <St.Desc> 소개해줄 수 있을까?</St.Desc>
      </St.Bottom>
      <MoveNextPageBtn nextPage={routePaths.FriendInfo} title="추천사 작성 시작하기" disabled={false} />
    </St.RecommendLandingPage>
  );
}

const St = {
  RecommendLandingPage: styled.main`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.neural};
    padding-top: 10%;
    @media only screen and (min-height: 720px) {
      padding-top: 39%;
    }
  `,
  CommentBox: styled.section`
    display: flex;
    gap: 1.5rem;
  `,
  Naechinso: styled.img`
    width: 12.5rem;
    height: 16.5rem;
  `,
  CommentWrapper: styled.article`
    width: 19.4rem;
    margin-top: 5rem;
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
    width: 100%;
    padding-top: 2.8rem;
    height: 24.6rem;
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
