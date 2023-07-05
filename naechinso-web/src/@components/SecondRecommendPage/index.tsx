import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { postMemberReissue } from "../../apis/member.api";
import { postRecommendation } from "../../apis/recommend.api";
import { IcPreviousBtn } from "../../asset/icons";
import { routePaths } from "../../core/routes/path";
import { FixedHeader, TextAreaBox, ToggleTipBox } from "../@common";

export default function SecondRecommendPage() {
  const [secondRecommend, setSecondRecommend] = useState("");
  const [postRecommend, setPostRecommend] = useState({
    recommendQuestions: [
      {
        recommendQuestion: "",
        recommendAnswer: "",
      },
    ],
  });
  const navigate = useNavigate();
  const [isBottomSheetOpened, setIsBottomSheetOpened] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("secondRecommend")) {
      const recommendInLocal = localStorage.getItem("secondRecommend") as string;
      setSecondRecommend(recommendInLocal);
    }
    setIsBottomSheetOpened(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("secondRecommend", secondRecommend);
    setPostRecommend({
      recommendQuestions: [
        {
          recommendQuestion: "친구에 대해 더 소개하고 싶은 점을 자유롭게 적어줘😃",
          recommendAnswer: secondRecommend,
        },
      ],
    });
  }, [secondRecommend]);

  const handleSkipButton = () => {
    localStorage.removeItem("secondRecommend");
    navigate(routePaths.AppealDetail);
  };

  const handleRegisterRecommender = async () => {
    // 추천사 등록하기
    await postRecommendation(
      postRecommend,
      localStorage.getItem("accessToken"),
      localStorage.getItem("uuid"),
      handleSuccessPostRecommendation,
      handleFailRequest,
      handleReissuePostRecommendation,
    );
  };

  const isButtonDisabled = !secondRecommend || secondRecommend.length === 0;

  const handleReissuePostRecommendation = async () => {
    // 액세스 토큰 만료 응답인지 확인
    const userData = await postMemberReissue(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"));
    if (userData) {
      localStorage.setItem("accessToken", userData["accessToken"]);
      localStorage.setItem("refreshToken", userData["refreshToken"]);
    }
    handleRegisterRecommender();
  };

  const handleSuccessPostRecommendation = async () => {
    navigate(routePaths.AppealDetail);
  };
  const handleFailRequest = (errorMessage: string) => {
    //  postRecommendation 실패할 시
    console.log(errorMessage);
    navigate(routePaths.Error);
  };

  return (
    <>
      <FixedHeader
        header="추천사"
        progressRate={55}
        title1="친구에 대해 더 자랑하고"
        title2="싶은 점을 자유롭게 적어보자!"
      />

      <St.ModalBackground />
      <St.SecondRecommendPage isBottomSheetOpened={isBottomSheetOpened}>
        <St.MovePrevButton onClick={() => navigate(routePaths.ChooseFirstQuestion)} type="button">
          <IcPreviousBtn aria-label="모달 닫기" />
        </St.MovePrevButton>
        <St.TitleWrapper>
          <St.Title>친구에 대해 더 자랑하고</St.Title>
          <St.Title>싶은 점을 자유롭게 적어줘😃</St.Title>{" "}
        </St.TitleWrapper>

        <ToggleTipBox />

        <TextAreaBox
          placeholder="내 친구는 전 직장 동기야! 자기 일을 진짜 책임감 있게 잘하고 주변을 늘 먼저 생각하는 친구야. 사람한테 치이는 일이 힘들 텐데 내색하지 않고 밝게 웃는 친구를 보면 존경스럽기까지 해!💕"
          minLength={0}
          maxLength={300}
          text={secondRecommend}
          setText={setSecondRecommend}
          height={13}
          letterLimit="300자 이내"
          isModalOpened={false}
          textareaScroll={true}
        />

        <St.MoveBtnWrapper>
          <St.SkipButton onClick={handleSkipButton} type="button">
            건너뛰기
          </St.SkipButton>
          <St.NextButton onClick={handleRegisterRecommender} type="button" disabled={isButtonDisabled}>
            다음
          </St.NextButton>
        </St.MoveBtnWrapper>
      </St.SecondRecommendPage>
    </>
  );
}

const slideIn = keyframes`
  from {
    transform: translateY(35%);
  }
  to {
    transform: translateY(0%)
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(100%)
  }
`;

const St = {
  ModalBackground: styled.div`
    background-color: rgba(0, 0, 0, 0.64);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 98;
  `,
  SecondRecommendPage: styled.main<{ isBottomSheetOpened: boolean }>`
    padding: 0 2rem 2rem;
    width: 100%;
    height: 95%;

    position: fixed;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 32px 32px 0px 0px;

    animation: ${({ isBottomSheetOpened }) => (isBottomSheetOpened ? slideIn : slideOut)} 0.3s ease-in-out;

    z-index: 99;
    @media only screen and (min-width: 600px) {
      width: 37.5rem;
    }
  `,
  MovePrevButton: styled.button`
    cursor: pointer;
    padding: 2rem 0;
  `,
  TitleWrapper: styled.hgroup`
    margin-bottom: 1.8rem;
  `,
  Title: styled.h1`
    ${({ theme }) => theme.fonts.sub2};
    color: ${({ theme }) => theme.colors.black};
  `,
  MoveBtnWrapper: styled.section`
    display: flex;
    justify-content: center;
    gap: 1.1rem;

    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 4rem;
    padding: 0 2rem;
    margin-bottom: 1rem;

    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 80%);
    width: 37.5rem;
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
  SkipButton: styled.button`
    background-color: ${({ theme }) => theme.colors.neural};
    color: ${({ theme }) => theme.colors.gray40};
    ${({ theme }) => theme.fonts.bold_16};
    width: 100%;
    height: 5.6rem;
    border-radius: 16px;
  `,
  NextButton: styled.button`
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.bold_16};
    width: 100%;
    height: 5.6rem;
    border-radius: 16px;
  `,
};
