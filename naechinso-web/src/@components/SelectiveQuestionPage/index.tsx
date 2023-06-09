import styled from "styled-components";

import { selectiveQuestionList } from "../../core/recommend/recommend";
import { AdressingFixedHeader } from "../@common";

export default function SelectiveQuestionPage() {
  return (
    <St.SelectiveQuestion>
      <AdressingFixedHeader
        header="추천사"
        navigatePath="/recommend/dontGo"
        progressRate={98}
        questionKind="선택질문"
        title1="🤔 원하는 질문 1개에 답해주면 돼!"
      />

      <St.QuestionListWrapper>
        {selectiveQuestionList.map((question) => {
          return (
            <St.QuestionBox type="button" key={question.id} idx={question.id}>
              <St.SubTitleWrapper>
                <St.Icon>{question.icon}</St.Icon>
                <St.SubTitle idx={question.id}>{question.subTitle}</St.SubTitle>
              </St.SubTitleWrapper>
              <St.Title>{question.title}</St.Title>
            </St.QuestionBox>
          );
        })}
      </St.QuestionListWrapper>
    </St.SelectiveQuestion>
  );
}

const St = {
  SelectiveQuestion: styled.main`
    padding: 18rem 2rem 15rem;
  `,
  QuestionListWrapper: styled.section`
    margin: 0 auto;
    width: 37.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    //  overflow-y: scroll;
  `,
  // id에 따라 배경색과 글자색깔 구분
  QuestionBox: styled.button<{ idx: number }>`
    width: 32.7rem;
    height: 10.6rem;
    padding: 2rem 2rem 2.8rem;

    display: flex;
    flex-direction: column;
    background: ${({ idx }) => (idx % 3 === 0 ? "#D0F4FF" : idx % 3 === 1 ? "#FFEFC2" : "#FFE4CC")};
    border: 0.5px solid ${({ idx }) => (idx % 3 === 0 ? "#00C2FF" : idx % 3 === 1 ? "#FFBB00" : "#FF7A00")};
    border-radius: 1.2rem;
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
};
