import { useState } from "react";
import styled from "styled-components";

import { selectiveRecommendList, selectiveRecommendProps } from "../../core/recommend/recommend";
import { AdressingFixedHeader } from "../@common";
import BottomSheet from "./BottomSheet";
import SkipBottomSheet from "./SkipBottomModal";

export default function SelectiveRecommendPage() {
  const [isBottomSheetOpened, setIsBottomSheetOpened] = useState(false);
  const [isSkipBottomSheetOpened, setIsSkipBottomSheetOpened] = useState(false);
  const [placeholder, setPlaceholder] = useState("");

  const handleSkipButton = () => {
    // 한 번 막는 모달 떠야해
    setIsSkipBottomSheetOpened(true);
  };

  const handleSelectQuestion = (question: selectiveRecommendProps) => {
    // 질문 골랐을 대
    setIsBottomSheetOpened(true);
    localStorage.setItem("checkedSelectiveQ", question.icon + question.title);
    setPlaceholder(question.placeholder);
  };

  const closeModal = () => setIsBottomSheetOpened(false);
  const closeSkipBottomSheet = () => setIsSkipBottomSheetOpened(false);
  return (
    <>
      <AdressingFixedHeader
        header="추천사"
        navigatePath="/recommend/dontGo"
        progressRate={98}
        questionKind="선택질문"
        title1="🤔 원하는 질문 1개에 답해주면 돼!"
      />

      {isBottomSheetOpened && (
        <BottomSheet isBottomSheetOpened={isBottomSheetOpened} closeModal={closeModal} placeholder={placeholder} />
      )}
      <St.SelectiveRecommendPage>
        <St.QuestionListWrapper>
          {selectiveRecommendList.map((question) => {
            return (
              <St.QuestionBox
                type="button"
                key={question.id}
                idx={question.id}
                onClick={() => handleSelectQuestion(question)}>
                <St.SubTitleWrapper>
                  <St.Icon>{question.icon}</St.Icon>
                  <St.SubTitle idx={question.id}>{question.subTitle}</St.SubTitle>
                </St.SubTitleWrapper>
                <St.Title>{question.title}</St.Title>
              </St.QuestionBox>
            );
          })}
        </St.QuestionListWrapper>

        <St.SkipButton onClick={handleSkipButton} type="button">
          건너뛰기
        </St.SkipButton>
        {isSkipBottomSheetOpened && (
          <SkipBottomSheet isBottomSheetOpened={isSkipBottomSheetOpened} closeModal={closeSkipBottomSheet} />
        )}
      </St.SelectiveRecommendPage>
    </>
  );
}

const St = {
  ModalBackground: styled.div`
    background-color: rgba(0, 0, 0, 0.64);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
  `,
  SelectiveRecommendPage: styled.main`
    width: 100%;
    height: 100%;
    padding: 18rem 2rem 15rem;
  `,
  QuestionListWrapper: styled.section`
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    //  overflow-y: scroll;
  `,
  QuestionBox: styled.button<{ idx: number }>`
    width: 100%;
    height: 10.6rem;
    padding: 2rem 2rem 2.8rem;

    display: flex;
    flex-direction: column;
    // id에 따라 배경색과 글자색깔 구분
    background: ${({ idx }) => (idx % 3 === 0 ? "#D0F4FF" : idx % 3 === 1 ? "#FFEFC2" : "#FFE4CC")};
    border: 0.5px solid ${({ idx }) => (idx % 3 === 0 ? "#00C2FF" : idx % 3 === 1 ? "#FFBB00" : "#FF7A00")};
    border-radius: 1.2rem;
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 32.7rem;
    }
  `,
  SubTitleWrapper: styled.article`
    display: flex;
    gap: 0.6rem;
    align-items: center;
  `,
  Icon: styled.p`
    ${({ theme }) => theme.fonts.sub2};
  `,
  SubTitle: styled.p<{ idx: number }>`
    color: ${({ theme, idx }) => (idx % 3 === 0 ? "#2D8AA8" : theme.colors.orange)};
    ${({ theme }) => theme.fonts.body3};
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
