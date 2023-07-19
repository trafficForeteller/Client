import { useEffect, useState } from "react";
import styled from "styled-components";

import { selectiveRecommendList, selectiveRecommendProps } from "../../core/recommend/recommend";
import { AdressingFixedHeader, ConsultantTextBtn } from "../@common";
import BottomSheet from "./BottomSheet";

export default function SelectiveRecommendPage() {
  const [isBottomSheetOpened, setIsBottomSheetOpened] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const handleSelectQuestion = (question: selectiveRecommendProps) => {
    // 질문 골랐을 대
    setIsBottomSheetOpened(true);
    localStorage.setItem("checkedSelectiveQ", question.icon + question.title);
    setPlaceholder(question.placeholder);
  };

  const closeModal = () => setIsBottomSheetOpened(false);

  useEffect(() => {
    localStorage.getItem("checkedSelectiveQ") !== null &&
      localStorage.getItem("selectiveRecommend") !== null &&
      setIsBottomSheetOpened(true);
  }, []);

  return (
    <St.SelectiveRecommendPage isBottomSheetOpened={isBottomSheetOpened}>
      <AdressingFixedHeader
        header="추천사"
        navigatePath="/recommend/dontGo"
        progressRate={98}
        questionKind="필수질문 5"
        title1="😘 마지막이야! 질문 하나만 골라줘"
      />

      {isBottomSheetOpened && (
        <BottomSheet isBottomSheetOpened={isBottomSheetOpened} closeModal={closeModal} placeholder={placeholder} />
      )}
      <St.SelectiveRecommend>
        <St.QuestionListWrapper>
          {selectiveRecommendList.map((question) => {
            return (
              <St.QuestionBox type="button" key={question.id} onClick={() => handleSelectQuestion(question)}>
                <St.Icon>{question.icon}</St.Icon>
                <St.Title>{question.title}</St.Title>
              </St.QuestionBox>
            );
          })}
        </St.QuestionListWrapper>
      </St.SelectiveRecommend>
    </St.SelectiveRecommendPage>
  );
}

const St = {
  SelectiveRecommendPage: styled.main<{ isBottomSheetOpened: boolean }>`
    position: relative;
    width: 100%;
    overflow: ${({ isBottomSheetOpened }) => (isBottomSheetOpened ? "hidden" : "auto")};
    padding: 20rem 2rem 0;
  `,

  SelectiveRecommend: styled.section`
    width: 100%;
    height: 100vh;
  `,
  QuestionListWrapper: styled.article`
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    padding-bottom: 3.5rem;
  `,
  QuestionBox: styled.button`
    width: 100%;
    height: 8.8rem;
    padding: 1.28rem;

    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    // id에 따라 배경색과 글자색깔 구분
    background: ${({ theme }) => theme.colors.neural};
    border-radius: 16px;
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 33.5rem;
    }
  `,
  Icon: styled.p`
    ${({ theme }) => theme.fonts.sub2};
  `,
  Title: styled.h3`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};
  `,
  MoveBtnWrapper: styled.section`
    display: flex;
    justify-content: center;
    gap: 1.1rem;

    padding: 0 2rem;
    margin-bottom: 1rem;
  `,
  SkipButton: styled.button`
    color: ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fonts.body8};
    height: 4.8rem;
    border-radius: 16px;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 4rem;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 80%);

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.colors.orange};
    width: 32.5rem;
  `,
};
