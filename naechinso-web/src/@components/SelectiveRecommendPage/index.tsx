import { useEffect, useState } from "react";
import styled from "styled-components";

import { selectiveRecommendList, selectiveRecommendProps } from "../../core/recommend/recommend";
import { AdressingFixedHeader, MoveNextPageBtn } from "../@common";
import BottomSheet from "./BottomSheet";

export default function SelectiveRecommendPage() {
  const [isBottomSheetOpened, setIsBottomSheetOpened] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [selectiveRecommendArr, setSelectiveRecommendArr] = useState(selectiveRecommendList);

  const handleSelectQuestion = (question: selectiveRecommendProps | undefined) => {
    if (!question) return;
    // 선택한 question을 찾아서 checked 속성을 true로 변경하고, 나머지 객체들의 checked를 false로 변경
    const updatedList = selectiveRecommendArr.map((item) => ({
      ...item,
      checked: item.id === question.id,
    }));
    setSelectiveRecommendArr(updatedList); // selectiveRecommendArr 업데이트

    // 질문 골랐을 대
    setIsBottomSheetOpened(true);
    localStorage.setItem("checkedSelectiveQ", question.icon + question.title);
    setPlaceholder(question.placeholder);
  };

  const closeModal = () => setIsBottomSheetOpened(false);

  useEffect(() => {
    // 새로고침 시 이전에 local에 저장된 keywordList 초기값으로 세팅
    const selectiveRecommendListOfLocal = localStorage.getItem("selectiveRecommendList") as string;
    const newSelectiveRecommendList = JSON.parse(selectiveRecommendListOfLocal);
    const checkedSelectiveQ = localStorage.getItem("checkedSelectiveQ");
    if (newSelectiveRecommendList) {
      setSelectiveRecommendArr(newSelectiveRecommendList);
      if (checkedSelectiveQ) setButtonActive(true);
    } else {
      setSelectiveRecommendArr(
        selectiveRecommendList.map((selectiveR) => {
          selectiveR.checked = false;
          return selectiveR;
        }),
      );
    }

    const firstRecommend = localStorage.getItem("firstRecommend");
    if (firstRecommend) {
      localStorage.setItem("selectiveRecommend", localStorage.getItem("firstRecommend") as string);
      localStorage.removeItem("firstRecommend");
    }
  }, []);

  useEffect(() => {
    setButtonActive(selectiveRecommendArr.some((item) => item.checked));
    localStorage.setItem("selectiveRecommendList", JSON.stringify(selectiveRecommendArr));
  }, [selectiveRecommendArr]);

  return (
    <St.SelectiveRecommendPage isBottomSheetOpened={isBottomSheetOpened}>
      <AdressingFixedHeader
        currentRequiredPage={4}
        header="내 친구 자랑"
        navigatePath="/recommend/friendLoverType"
        title1="질문 하나를 골라서"
        title2="내 친구를 더 어필해 보자! 😉"
      />

      {isBottomSheetOpened && (
        <BottomSheet isBottomSheetOpened={isBottomSheetOpened} closeModal={closeModal} placeholder={placeholder} />
      )}

      <St.QuestionListWrapper isBottomSheetOpened={isBottomSheetOpened}>
        {selectiveRecommendArr.map((question) => {
          return (
            <St.QuestionBox
              type="button"
              key={question.id}
              onClick={() => handleSelectQuestion(question)}
              checked={question.checked}>
              <St.Icon>{question.icon}</St.Icon>
              <St.Title checked={question.checked}>{question.title}</St.Title>
            </St.QuestionBox>
          );
        })}
      </St.QuestionListWrapper>

      <MoveNextPageBtn
        title="다음"
        disabled={!buttonActive}
        handleState={() => handleSelectQuestion(selectiveRecommendArr.find((item) => item.checked === true))}
      />
    </St.SelectiveRecommendPage>
  );
}

const St = {
  SelectiveRecommendPage: styled.main<{ isBottomSheetOpened: boolean }>`
    position: relative;
    width: 100%;
    overflow: ${({ isBottomSheetOpened }) => (isBottomSheetOpened ? "hidden" : "auto")};
    padding: 18.8rem 2rem 0;
  `,
  QuestionListWrapper: styled.article<{ isBottomSheetOpened: boolean }>`
    overflow: ${({ isBottomSheetOpened }) => (isBottomSheetOpened ? "hidden" : "auto")};
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    padding-bottom: 10rem;
  `,
  QuestionBox: styled.button<{ checked: boolean }>`
    width: 100%;
    height: 7.6rem;
    padding: 1.2rem 1.6rem;

    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    // id에 따라 배경색과 글자색깔 구분
    background: ${({ theme, checked }) => (checked ? theme.colors.brown : theme.colors.neural)};
    border-radius: 16px;
  `,
  Icon: styled.p`
    ${({ theme }) => theme.fonts.bold_16};
  `,
  Title: styled.h3<{ checked: boolean }>`
    color: ${({ theme, checked }) => (checked ? theme.colors.white : theme.colors.black)};
    ${({ theme }) => theme.fonts.bold_16};
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
