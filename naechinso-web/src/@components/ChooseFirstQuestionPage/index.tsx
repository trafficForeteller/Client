import { useEffect, useState } from "react";
import styled from "styled-components";

import { keywordProps, questionList, questionProps } from "../../core/recommend/recommend";
import { FixedHeader, MoveNextPageBtn } from "../@common";
import BottomSheet from "./BottomSheet";

export default function ChooseFirstQuestionPage() {
  const [questionArr, setQuestionArr] = useState<questionProps[]>(questionList);
  const [nextBtnActive, setNextBtnActive] = useState(false);
  const [checkedQuestion, setCheckedQuestion] = useState({});
  const [isBottomSheetOpened, setIsBottomSheetOpened] = useState(false);
  const [keywordArr, setKeywordArr] = useState<keywordProps[]>([]);

  useEffect(() => {
    // 새로고침 시 이전에 local에 저장된 questionList 초기값으로 세팅
    window.scrollTo(0, 0);

    // 매력 키워드 배열
    const keywordListOfLocal = localStorage.getItem("keywordList") as string;
    const newKeywordList = JSON.parse(keywordListOfLocal) as keywordProps[];
    newKeywordList && setKeywordArr(newKeywordList.filter((newKeyword) => newKeyword.checked === true));

    const questionListOfLocal = localStorage.getItem("questionList") as string;
    const newQuestionList = JSON.parse(questionListOfLocal);
    if (newQuestionList) {
      const checkedQ1 = parseLocalStorage("checkedQ1");
      if (checkedQ1) handleCheckedQuestion(checkedQ1);
      setIsBottomSheetOpened(true);
    } else {
      setQuestionArr(
        questionList.map((question) => {
          question.checked = false;
          return question;
        }),
      );
    }
  }, []);

  useEffect(() => {
    chosenQuestion();
  }, [questionArr, keywordArr]);

  const handleCheckedQuestion = (checkedQ: string) => {
    // 선택된 질문이 있을 때 질문 담고, 다음 버튼 활성화
    setCheckedQuestion(checkedQ);
    setNextBtnActive(true);
  };

  const toggleCheck = (idx: number, checkedQ: string) => {
    // 질문 체크
    if (checkedQ === "question") {
      const tempQuestionArr = questionArr;
      const newQuestionArr = tempQuestionArr.map((q, index) => {
        if (idx === index) {
          q.checked = !q.checked;
          q.checked === true && setCheckedQuestion(q);
        } else q.checked = false;
        return q;
      });
      setQuestionArr(newQuestionArr);

      const newKeywordArr = keywordArr.map((q) => {
        q.keywordChecked = false;
        return q;
      });
      setKeywordArr(newKeywordArr);
    } else {
      const tempKeywordArr = keywordArr;
      const newKeywordArr = tempKeywordArr.map((q, index) => {
        if (idx === index) {
          q.keywordChecked = !q.keywordChecked;
          q.keywordChecked === true && setCheckedQuestion(q);
        } else q.keywordChecked = false;
        return q;
      });
      setKeywordArr(newKeywordArr);

      const newQuestionArr = questionArr.map((q) => {
        q.checked = false;
        return q;
      });
      setQuestionArr(newQuestionArr);
    }
  };

  const chosenQuestion = () => {
    // 하나라도 checked true면 버튼 활성화
    const isKeywordChecked = (item: { keywordChecked: boolean }) => item.keywordChecked === true;
    const isQuestionChecked = (item: { checked: boolean }) => item.checked === true;
    setNextBtnActive(keywordArr.some(isKeywordChecked) || questionArr.some(isQuestionChecked));
  };

  const saveCheckedQuestion = () => {
    localStorage.setItem("questionList", JSON.stringify(questionArr));
    localStorage.setItem("checkedKeywordList", JSON.stringify(keywordArr));
    localStorage.setItem("checkedQ1", JSON.stringify(checkedQuestion));
    setIsBottomSheetOpened(true);
  };

  const parseLocalStorage = (item: string) => {
    //  localStorage에 저장된 친구가 배열 혹은 object일 때 JSON.parse하는 함수
    const itemInLocal = localStorage.getItem(`${item}`) as string;
    const parseItem = JSON.parse(itemInLocal);
    return parseItem;
  };

  return (
    <St.ChooseFirstQuestionPage isBottomSheetOpened={isBottomSheetOpened}>
      <FixedHeader
        header="추천사"
        progressRate={55}
        title1="친구를 어필할 수 있는"
        title2="질문을 하나 골라 답해보자!"
      />
      <St.QuestionContainer>
        <St.Label>내가 고른 키워드 관련 질문이야</St.Label>
        <St.CheckedKeywordContainer>
          {keywordArr.map((keyword, idx) => {
            return (
              <St.CheckedKeywordWrapper key={idx}>
                <St.CheckedKeywordNumber>{idx + 1}</St.CheckedKeywordNumber>
                <St.CheckedKeyword>{keyword.keyword}</St.CheckedKeyword>
              </St.CheckedKeywordWrapper>
            );
          })}
        </St.CheckedKeywordContainer>
        {keywordArr.map((keyword, idx) => {
          return (
            <St.QuestionBox
              checked={keyword.keywordChecked}
              key={keyword.id}
              onClick={() => toggleCheck(idx, "keyword")}>
              <St.QuestionNumber>{idx + 1}</St.QuestionNumber>
              <St.QuestionWrapper>
                <St.Icon>{keyword.icon}</St.Icon>
                <St.TitleWrapper checked={keyword.keywordChecked}>
                  <St.Title>{keyword.question}</St.Title>
                </St.TitleWrapper>
              </St.QuestionWrapper>
            </St.QuestionBox>
          );
        })}
      </St.QuestionContainer>

      <St.QuestionContainer>
        <St.Label>아래의 질문에 답해도 좋아</St.Label>
        {questionArr.map((question) => {
          return (
            <St.QuestionBox
              checked={question.checked}
              key={question.id}
              onClick={() => toggleCheck(question.id, "question")}>
              <St.QuestionWrapper>
                <St.Icon>{question.icon}</St.Icon>
                <St.TitleWrapper checked={question.checked}>
                  <St.Title>{question.question}</St.Title>
                </St.TitleWrapper>
              </St.QuestionWrapper>
            </St.QuestionBox>
          );
        })}
      </St.QuestionContainer>

      <MoveNextPageBtn title="다음" disabled={!nextBtnActive} handleState={saveCheckedQuestion} />

      {isBottomSheetOpened && (
        <BottomSheet isBottomSheetOpened={isBottomSheetOpened} closeModal={() => setIsBottomSheetOpened(false)} />
      )}
    </St.ChooseFirstQuestionPage>
  );
}

const St = {
  ChooseFirstQuestionPage: styled.main<{ isBottomSheetOpened: boolean }>`
    width: 100%;
    padding-bottom: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 18rem;

    ${({ isBottomSheetOpened }) => (isBottomSheetOpened ? "position: fixed; width: 100%; " : "")}
    @media only screen and (min-width: 600px) {
      width: 37.5rem;
    }
  `,
  QuestionContainer: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 33.5rem;
    height: 100%;
    padding-top: 1.6rem;

    gap: 1.5rem;
    margin: 0 auto 2rem;
  `,
  CheckedKeywordContainer: styled.ul`
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-grow: 1;
  `,
  CheckedKeywordWrapper: styled.li`
    border: 1px solid ${({ theme }) => theme.colors.orange50};
    padding: 0.8rem 1.5rem;
    border-radius: 12px;
    position: relative;
  `,
  CheckedKeywordNumber: styled.div`
    background-color: ${({ theme }) => theme.colors.orange50};
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.body8};

    position: absolute;
    top: -5px;
    left: -5px;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
  CheckedKeyword: styled.p`
    ${({ theme }) => theme.fonts.body8};
    color: ${({ theme }) => theme.colors.orange50};
  `,
  Label: styled.p`
    ${({ theme }) => theme.fonts.body9};
    color: ${({ theme }) => theme.colors.gray100};
    width: 100%;
  `,
  QuestionBox: styled.button<{ checked: boolean }>`
    padding: 1.2rem;
    width: 100%;
    height: 8.8rem;
    transition: all 0.2s ease;

    background-color: ${({ theme, checked }) => (checked ? theme.colors.brown : theme.colors.neural)};
    border-radius: 16px;

    position: relative;
    cursor: pointer;

    display: flex;
    &:disabled {
      color: ${({ theme }) => theme.colors.neural};
    }
  `,
  QuestionNumber: styled.div`
    background-color: ${({ theme }) => theme.colors.orange50};
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.body8};

    position: absolute;
    top: 10px;
    right: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
  QuestionWrapper: styled.hgroup`
    display: flex;
    flex-direction: column;
  `,
  Icon: styled.p`
    ${({ theme }) => theme.fonts.sub2};
    color: ${({ theme }) => theme.colors.black};
    width: fit-content;
  `,
  TitleWrapper: styled.article<{ checked: boolean }>`
    ${({ theme }) => theme.fonts.sub2};
    color: ${({ theme, checked }) => (checked ? theme.colors.white : theme.colors.black)};
    margin-top: 0.4rem;
  `,
  Title: styled.h3`
    width: fit-content;
  `,
};
