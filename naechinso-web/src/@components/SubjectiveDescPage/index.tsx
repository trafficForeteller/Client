import { useEffect, useState } from "react";
import styled from "styled-components";

import { questionList } from "../../core/recommend/recommend";
import { routePaths } from "../../core/routes/path";
import { MoveNextPageBtn, Title } from "../@common";
import BasicHeader from "../@common/BasicHeader";

export default function SubjectiveDescPage() {
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
    <St.SubjectiveDesc>
      <BasicHeader header="추천사" progressRate={60} />
      <St.TitleWrapper>
        <Title title="친구를 잘 설명할 수 있는" />
        <Title title="질문을 골라 답해줘!" />
      </St.TitleWrapper>
      <St.Gradient></St.Gradient>
      <St.QuestionContainer>
        {questionArr.map((question) => {
          return (
            <St.QuestionBox checked={question.checked} key={question.id} onClick={() => toggleCheck(question.id)}>
              <St.QuestionWrapper>
                <St.Icon>{question.icon}</St.Icon>
                <St.Title checked={question.checked}>{question.title}</St.Title>
              </St.QuestionWrapper>
              <St.Desc checked={question.checked}>{question.desc}</St.Desc>
            </St.QuestionBox>
          );
        })}
      </St.QuestionContainer>

      <MoveNextPageBtn nextPage={routePaths.Recommend} title="다음" inputActive={!nextBtnActive} />
    </St.SubjectiveDesc>
  );
}

const St = {
  SubjectiveDesc: styled.main`
    padding-bottom: 10rem;
  `,
  TitleWrapper: styled.hgroup`
    margin-bottom: 2.4rem;
    position: relative;
    z-index: -1;
  `,
  Gradient: styled.div`
    width: 100%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
    transform: matrix(1, 0, 0, -1, 0, 0);
  `,
  QuestionContainer: styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.6rem;
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
  Desc: styled.p<{ checked: boolean }>`
    ${({ theme }) => theme.fonts.body5};
    color: ${({ theme, checked }) => (checked ? theme.colors.white : theme.colors.brown)};

    position: absolute;
    bottom: 1.6rem;
    word-break: keep-all;

    width: 13rem;
  `,
};
