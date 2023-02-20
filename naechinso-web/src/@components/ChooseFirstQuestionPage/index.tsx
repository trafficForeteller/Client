import { useEffect, useState } from "react";
import styled from "styled-components";

import { questionList, questionProps } from "../../core/recommend/recommend";
// eslint-disable-next-line
import { routePaths } from "../../core/routes/path";
import { FixedHeader, MoveNextPageBtn } from "../@common";

export default function ChooseFirstQuestionPage() {
  const [questionArr, setQuestionArr] = useState(questionList);
  const [nextBtnActive, setNextBtnActive] = useState(false);
  const [checkedQuestion, setCheckedQuestion] = useState<questionProps>();

  useEffect(() => {
    // 새로고침 시 이전에 local에 저장된 questionList 초기값으로 세팅
    const newQuestionList = parseLocalStorage("questionList");
    if (newQuestionList) {
      previouslyCheckedQuestion(newQuestionList);
      const checkedQ1 = parseLocalStorage("checkedQ1");
      if (checkedQ1) handleCheckedQuestion(checkedQ1);
    } else {
      setQuestionArr(
        questionList.map((question) => {
          question.checked = false;
          return question;
        }),
      );
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    chosenQuestion();
  }, [questionArr]);

  const handleCheckedQuestion = (checkedQ: questionProps) => {
    // step에 따른 CheckedQuestion 변화
    setCheckedQuestion(checkedQ);
    setNextBtnActive(true);
  };

  const previouslyCheckedQuestion = (questionList: questionProps[]) => {
    // 이전 step에서 체크된 질문은 disabled true, 현재 step에서 disabled false
    const checkedQ1 = parseLocalStorage("checkedQ1");
    const newQuestionList = questionList.map((question) => {
      if (checkedQ1 && question.id === checkedQ1.id) {
        question.disabled = false;
        question.checked = true;
      }
      return question;
    });
    setQuestionArr(newQuestionList);
  };

  const toggleCheck = (idx: number) => {
    // 질문 체크
    const tempQuestionArr = questionArr;
    const newQuestionArr = tempQuestionArr.map((q, index) => {
      if (idx === index) {
        q.checked = !q.checked;
        q.checked === true && setCheckedQuestion(q);
      } else q.checked = false;
      return q;
    });
    setQuestionArr(newQuestionArr);
  };

  const chosenQuestion = () => {
    // 하나라도 checked true면 버튼 활성화
    const isQuestionChecked = (item: { checked: boolean }) => item.checked === true;
    setNextBtnActive(questionArr.some(isQuestionChecked));
  };

  const saveCheckedQuestion = () => {
    localStorage.setItem("questionList", JSON.stringify(questionArr));
    localStorage.setItem("checkedQ1", JSON.stringify(checkedQuestion));
  };

  const parseLocalStorage = (item: string) => {
    //  localStorage에 저장된 친구가 배열 혹은 object일 때 JSON.parse하는 함수
    const itemInLocal = localStorage.getItem(`${item}`) as string;
    const parseItem = JSON.parse(itemInLocal);
    return parseItem;
  };

  return (
    <St.ChooseFirstQuestionPage>
      <FixedHeader
        header="추천사"
        progressRate={55}
        title1="친구를 어필할 수 있는"
        title2="질문을 하나 골라 답해보자!"
      />
      <St.QuestionContainer>
        {questionArr.map((question) => {
          return (
            <St.QuestionBox
              checked={question.checked}
              key={question.id}
              onClick={() => toggleCheck(question.id)}
              disabled={question.disabled}>
              <St.QuestionWrapper disabled={question.disabled}>
                <St.Icon>{question.icon}</St.Icon>
                <St.TitleWrapper checked={question.checked}>
                  <St.Title>{question.title1}</St.Title>
                  <St.Title>{question.title2}</St.Title>
                </St.TitleWrapper>
              </St.QuestionWrapper>
            </St.QuestionBox>
          );
        })}
      </St.QuestionContainer>

      <MoveNextPageBtn
        nextPage={routePaths.FirstRecommend}
        title="다음"
        inputActive={!nextBtnActive}
        handleState={saveCheckedQuestion}
      />
    </St.ChooseFirstQuestionPage>
  );
}

const St = {
  ChooseFirstQuestionPage: styled.main`
    padding-bottom: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  QuestionContainer: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-content: start;

    width: 33.5rem;
    height: 66rem;
    padding-top: 1.6rem;

    gap: 1.5rem;
    margin: 18rem auto 2rem;
  `,
  QuestionBox: styled.button<{ checked: boolean }>`
    padding: 1.2rem;
    width: 16rem;
    height: fit-content;

    background-color: ${({ theme, checked }) => (checked ? theme.colors.brown : theme.colors.neural)};
    border-radius: 16px;

    position: relative;
    cursor: pointer;

    display: flex;
    &:disabled {
      color: ${({ theme }) => theme.colors.neural};
    }
  `,
  QuestionWrapper: styled.hgroup<{ disabled: boolean }>`
    display: flex;
    flex-direction: column;
    opacity: ${({ disabled }) => (disabled ? "0.2" : "")};
  `,
  Icon: styled.h3`
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
