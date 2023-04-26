import { useEffect, useState } from "react";
import styled from "styled-components";

import { getUserName, postMemberReissue } from "../../apis/member.api";
import { ImgCommentNaechinso } from "../../asset/image";
import { routePaths } from "../../core/routes/path";
import { MoveNextPageBtn, ToolTipBox } from "../@common";

export default function RecommendLandingPage() {
  const recommenderName = localStorage.getItem("recommenderName") || "너";
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("member-uuid")) handleGetUserName();
    else setButtonDisabled(false);
  }, []);

  const handleGetUserName = async () => {
    await getUserName(
      localStorage.getItem("accessToken"),
      localStorage.getItem("member-uuid"),
      handleSuccessGetUserName,
      handleFailGetUserName,
      handleReissueGetUserName,
    );
  };

  const handleSuccessGetUserName = (userName: string) => {
    localStorage.setItem("memberName", userName);
    setButtonDisabled(false);
  };

  const handleFailGetUserName = () => {
    localStorage.removeItem("member-uuid");
    setButtonDisabled(false);
  };

  const handleReissueGetUserName = async () => {
    // 액세스 토큰 만료 응답인지 확인
    const userData = await postMemberReissue(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"));
    if (userData) {
      localStorage.setItem("accessToken", userData["accessToken"]);
      localStorage.setItem("refreshToken", userData["refreshToken"]);
    }
    handleGetUserName();
  };

  return (
    <St.RecommendLandingPage>
      <St.CommentBox>
        <St.Naechinso src={ImgCommentNaechinso} alt="내친소" />
        <St.CommentWrapper>
          <St.Comment>{recommenderName}의 친구라면...</St.Comment>
          <St.Comment>분명 멋있겠지? 😘</St.Comment>
          <St.Comment>너무 기대된다!</St.Comment>
          <St.Comment>
            네 추천사는 친구가
            <br />
            좋은 인연을 만나는 데 정말 큰 도움이 될 거야!
          </St.Comment>
        </St.CommentWrapper>
      </St.CommentBox>

      <ToolTipBox text="공들인 추천사는 추첨해서 친소가 매주 커피쏜다 😘" bottom={26.4} />

      <St.Bottom>
        <St.TitleWrapper>
          <St.Title>이제 친구를 소개해볼까?</St.Title>
        </St.TitleWrapper>
        <St.Desc>
          지금은 수도권에 거주하는 <St.Highlight>04~95년도생</St.Highlight>만
        </St.Desc>
        <St.Desc>내친소를 이용할 수 있어!</St.Desc>
      </St.Bottom>
      <MoveNextPageBtn nextPage={routePaths.FriendInfo} title="내 친구 추천하기" disabled={buttonDisabled} />
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
      padding-top: 30%;
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
