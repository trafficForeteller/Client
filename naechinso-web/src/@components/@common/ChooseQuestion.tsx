import { useEffect, useState } from "react";
import styled from "styled-components";

import { questionList, questionProps, RecommendStepMessage } from "../../core/recommend/recommend";
// eslint-disable-next-line
import { routePaths } from "../../core/routes/path";
import { FixedHeader, MoveNextPageBtn } from ".";

export interface ChooseQuestionProps {
  step: number;
}

export default function ChooseQuestion(props: ChooseQuestionProps) {
  const { step } = props;

  const [questionArr, setQuestionArr] = useState(questionList);
  const [nextBtnActive, setNextBtnActive] = useState(false);
  const [checkedQuestion, setCheckedQuestion] = useState<questionProps>();
  const [recommendStep, setRecommendStep] = useState(step);

  useEffect(() => {
    // 새로고침 시 이전에 local에 저장된 questionList 초기값으로 세팅
    const questionListOfLocal = localStorage.getItem("questionList") as string;
    const questionList = JSON.parse(questionListOfLocal);
    if (questionList) {
      setQuestionArr(questionList);
      const checkedQOfLocal = localStorage.getItem("checkedQ") as string;
      const checkedQ = JSON.parse(checkedQOfLocal);
      if (checkedQ) {
        setCheckedQuestion(checkedQ);
        setNextBtnActive(true);
      }
    }
  }, []);

  useEffect(() => {
    chooseQuestion();
  }, [questionArr]);

  const toggleCheck = (idx: number) => {
    // 질문 체크
    const newQuestionArr = questionList.map((q, index) => {
      if (idx === index) {
        q.checked = !q.checked;
        q.checked === true && setCheckedQuestion(q);
      } else q.checked = false;
      return q;
    });
    setQuestionArr(newQuestionArr);
  };

  const chooseQuestion = () => {
    // 하나라도 checked true면 버튼 활성화
    const isQuestionChecked = (item: { checked: boolean }) => item.checked === true;
    setNextBtnActive(questionArr.some(isQuestionChecked));
  };

  const saveCheckedQuestion = () => {
    localStorage.setItem("checkedQ", JSON.stringify(checkedQuestion));
    localStorage.setItem("questionList", JSON.stringify(questionArr));
  };

  return (
    <St.ChooseQuestion>
      <FixedHeader
        header="추천사"
        progressRate={55}
        title1="친구를 어필할 수 있는"
        title2="2개의 질문을 골라 답해보자!"
      />
      <St.Label>{RecommendStepMessage[recommendStep].questionChoiceMessage}</St.Label>
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
                <St.Title checked={question.checked}>{question.title}</St.Title>
              </St.QuestionWrapper>
              <St.DescWrapper checked={question.checked} disabled={question.disabled}>
                <St.Desc>{question.desc1}</St.Desc>
                <St.Desc>{question.desc2}</St.Desc>
                <St.Desc>{question.desc3}</St.Desc>
              </St.DescWrapper>
            </St.QuestionBox>
          );
        })}
      </St.QuestionContainer>
      <MoveNextPageBtn
        nextPage={recommendStep === 0 ? routePaths.FirstRecommend : routePaths.SecondRecommend}
        title="다음"
        inputActive={!nextBtnActive}
        state={recommendStep}
        handleState={saveCheckedQuestion}
      />
    </St.ChooseQuestion>
  );
}

const St = {
  ChooseQuestion: styled.main`
    padding: 0 2rem 10rem;
  `,
  Label: styled.div`
    ${({ theme }) => theme.fonts.caption8};
    color: ${({ theme }) => theme.colors.orange};
    margin-top: 18.5rem;

    width: 14.4rem;
    height: 3.6rem;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.orange};

    display: flex;
    justify-content: center;
    align-items: center;
  `,
  QuestionContainer: styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding-top: 1.6rem;
    padding-bottom: 1.5rem;
    z-index: -1;
  `,
  QuestionBox: styled.button<{ checked: boolean }>`
    padding: 1.6rem 1.2rem;
    width: 16rem;
    height: 17rem;

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
  Title: styled.h3<{ checked: boolean }>`
    ${({ theme }) => theme.fonts.sub2};
    color: ${({ theme, checked }) => (checked ? theme.colors.white : theme.colors.black)};
  `,
  DescWrapper: styled.div<{ checked: boolean; disabled: boolean }>`
    position: absolute;
    bottom: 1.2rem;

    ${({ theme }) => theme.fonts.body5};
    color: ${({ theme, checked }) => (checked ? theme.colors.white : theme.colors.brown)};
    opacity: ${({ disabled }) => (disabled ? "0.2" : "")};
  `,
  Desc: styled.p`
    width: fit-content;
  `,
};
