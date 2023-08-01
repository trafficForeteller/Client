import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { getUserName, postMemberReissue } from "../../apis/member.api";
import { ImgCongratulateIcon, ImgRecommendLandingBackground } from "../../asset/image";
import { routePaths } from "../../core/routes/path";
import CheckFriendBox from "./CheckFriendBox";

export default function RecommendLandingPage() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();

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

  const handleSuccessGetUserName = (userName: string, userPhoneNum: string) => {
    localStorage.setItem("memberName", userName);
    localStorage.setItem("memberPhoneNum", userPhoneNum);
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
      <St.DescBox>
        <St.CongratulateIcon src={ImgCongratulateIcon} alt="축하하는 얼굴" />
        <St.Title> 내 친구를 소개해보자! </St.Title>
        <St.DescWrapper>
          <St.Desc>현재는 수도권에 거주하는 89~99년도생만</St.Desc>
          <St.Desc> 내친소를 이용할 수 있어!</St.Desc>
        </St.DescWrapper>
      </St.DescBox>
      <St.LandingBackGround src={ImgRecommendLandingBackground} alt="랜딩페이지 배경" />
      {localStorage.getItem("member-uuid") ? (
        <CheckFriendBox />
      ) : (
        <St.NextStepButtonWrapper>
          <St.NextStepButton onClick={() => navigate(routePaths.FriendInfo)} disabled={buttonDisabled} type="button">
            내 친구 추천하기
          </St.NextStepButton>
        </St.NextStepButtonWrapper>
      )}
    </St.RecommendLandingPage>
  );
}

const St = {
  RecommendLandingPage: styled.main`
    width: 100%;
    height: 100%;
    padding-top: 20%;
    @media only screen and (min-height: 720px) {
      padding-top: 30%;
    }
  `,
  DescBox: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
    color: ${({ theme }) => theme.colors.white};
  `,
  CongratulateIcon: styled.img`
    width: 8rem;
    height: 8rem;
  `,
  Title: styled.h1`
    ${({ theme }) => theme.fonts.bold_25};
  `,
  DescWrapper: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Desc: styled.p`
    ${({ theme }) => theme.fonts.reg_15};
  `,
  LandingBackGround: styled.img`
    display: flex;
    justify-content: center;
    width: 100%;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: -15%;
    z-index: -1;

    @media only screen and (min-width: 600px) {
      width: 37.5rem;
    }
    @media only screen and (min-height: 720px) {
      top: -5%;
    }
  `,
  NextStepButtonWrapper: styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 30%;
    padding: 0 2rem;
    height: 8rem;
    z-index: 99;
    @media only screen and (min-height: 720px) {
      bottom: 25%;
    }
  `,
  NextStepButton: styled.button`
    bottom: 3.2rem;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.bold_15};
    width: 34.3rem;
    height: 4.8rem;
    border-radius: 12px;

    &:disabled {
      background-color: ${({ theme }) => theme.colors.orange20};
      cursor: default;
    }
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
};
