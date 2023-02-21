import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";
import { FixedHeader, TextAreaBox } from "../@common";

export default function SecondRecommendPage() {
  const [textCheck, setTextCheck] = useState(false);
  const [secondRecommend, setSecondRecommend] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("secondRecommend")) {
      const recommendInLocal = localStorage.getItem("secondRecommend") as string;
      setSecondRecommend(recommendInLocal);
      setTextCheck(true);
    }
  }, []);

  useEffect(() => {
    handleEnteredText(secondRecommend);
    localStorage.setItem("secondRecommend", secondRecommend);
  }, [secondRecommend]);

  const handleEnteredText = (text: string) => {
    // 글자수 확인
    if (text) {
      if (text.length >= 50) setTextCheck(true);
      else setTextCheck(false);
    }
  };

  const handleSkipButton = () => {
    localStorage.removeItem("secondRecommend");
    navigate(routePaths.AppealDetail);
  };

  return (
    <St.SecondRecommendPage>
      <FixedHeader
        header="추천사"
        progressRate={55}
        title1="친구에 대해 더 자랑하고 "
        title2="싶은 점을 자유롭게 적어줘😃"
        selection={true}
      />

      <TextAreaBox
        placeholder="내 친구는 전 직장 동기야! 자기 일을 진짜 책임감 있게 잘하고 주변을 늘 먼저 생각하는 친구야. 사람한테 치이는 일이 힘들 텐데 내색하지 않고 밝게 웃는 친구를 보면 존경스럽기까지 해!💕"
        minLength={49}
        maxLength={150}
        text={secondRecommend}
        setText={setSecondRecommend}
        height={13}
        letterLimit="50자 이상 150자 이내"
      />

      <St.MoveBtnWrapper>
        <St.SkipButton onClick={handleSkipButton} type="button">
          건너뛰기
        </St.SkipButton>
        <St.NextButton onClick={() => navigate(routePaths.AppealDetail)} disabled={!textCheck} type="button">
          다음
        </St.NextButton>
      </St.MoveBtnWrapper>
    </St.SecondRecommendPage>
  );
}

const St = {
  SecondRecommendPage: styled.main`
    padding-top: 21rem;
    padding-left: 2rem;
    padding-right: 2rem;
  `,
  MoveBtnWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.9rem;

    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 3.6rem;
    padding: 0 2rem;
    height: 11rem;

    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 80%);
    width: 37.5rem;
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
  SkipButton: styled.button`
    color: ${({ theme }) => theme.colors.gray40};
    ${({ theme }) => theme.fonts.sub3};
    border-radius: 1.6rem;
  `,
  NextButton: styled.button`
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.sub3};
    width: 33.5rem;
    height: 5.6rem;
    border-radius: 1.6rem;

    &:disabled {
      background-color: ${({ theme }) => theme.colors.orange20};
      cursor: default;
    }
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
};
