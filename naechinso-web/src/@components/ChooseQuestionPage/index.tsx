import { useEffect, useState } from "react";
import styled from "styled-components";

import { questionList } from "../../core/recommend/recommend";
import { routePaths } from "../../core/routes/path";
import { MoveNextPageBtn } from "../@common";
import FixedHeader from "../@common/FixedHeader";

export default function ChooseQuestionPage() {
  const [questionArr, setQuestionArr] = useState(questionList);
  const [nextBtnActive, setNextBtnActive] = useState(false);

  useEffect(() => {
    chooseQuestion();
  }, [questionArr]);

  const toggleCheck = (idx: number) => {
    // 항목별 체크
    const newQuestionArr = questionList.map((q, index) => {
      if (idx === index) q.checked = !q.checked;
      else q.checked = false;
      return q;
    });
    setQuestionArr(newQuestionArr);
  };

  const chooseQuestion = () => {
    // 하나라도 checked true면 버튼 활성화
    const isQuestionChecked = (item: { checked: boolean }) => item.checked === true;
    setNextBtnActive(questionArr.some(isQuestionChecked));
  };

  return (
    <St.ChooseQuestion>
      <FixedHeader header="추천사" progressRate={55} title1="친구를 잘 설명할 수 있는" title2="질문을 골라 답해줘!" />
      <St.QuestionContainer>
        {questionArr.map((question) => {
          return (
            <St.QuestionBox checked={question.checked} key={question.id} onClick={() => toggleCheck(question.id)}>
              <St.QuestionWrapper>
                <St.Icon>{question.icon}</St.Icon>
                <St.Title checked={question.checked}>{question.title}</St.Title>
              </St.QuestionWrapper>
              <St.DescWrapper checked={question.checked}>
                <St.Desc>{question.desc1}</St.Desc>
                <St.Desc>{question.desc2}</St.Desc>
                <St.Desc>{question.desc3}</St.Desc>
              </St.DescWrapper>
            </St.QuestionBox>
          );
        })}
      </St.QuestionContainer>
      <MoveNextPageBtn nextPage={routePaths.FriendInfo} title="다음" inputActive={!nextBtnActive} />
    </St.ChooseQuestion>
  );
}

const St = {
  ChooseQuestion: styled.main`
    padding-bottom: 10rem;
  `,

  QuestionContainer: styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.6rem;
    padding-top: 19rem;
    z-index: -1;
  `,
  QuestionBox: styled.article<{ checked: boolean }>`
    padding: 1.6rem 1.2rem;
    width: 16rem;
    height: 17rem;

    background-color: ${({ theme, checked }) => (checked ? theme.colors.brown : theme.colors.neural)};
    border-radius: 16px;

    position: relative;
    cursor: pointer;
  `,
  QuestionWrapper: styled.hgroup``,
  Icon: styled.h3`
    ${({ theme }) => theme.fonts.sub2};
    color: ${({ theme }) => theme.colors.black};
  `,
  Title: styled.h3<{ checked: boolean }>`
    ${({ theme }) => theme.fonts.sub2};
    color: ${({ theme, checked }) => (checked ? theme.colors.white : theme.colors.black)};
  `,
  DescWrapper: styled.div<{ checked: boolean }>`
    position: absolute;
    bottom: 1.2rem;

    ${({ theme }) => theme.fonts.body5};
    color: ${({ theme, checked }) => (checked ? theme.colors.white : theme.colors.brown)};
  `,
  Desc: styled.p``,
};
