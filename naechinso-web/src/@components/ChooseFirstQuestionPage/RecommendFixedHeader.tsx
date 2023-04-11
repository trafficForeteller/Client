import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IcPreviousBtn } from "../../asset/icons";
import { routePaths } from "../../core/routes/path";
import { ProgressBar, Title } from "../@common";

export default function RecommendFixedHeader() {
  const navigate = useNavigate();

  const movePreviousPage = () => {
    //이전페이지로 이동
    window.scrollTo(0, 0);
    navigate(routePaths.Keyword);
  };

  return (
    <St.RecommendFixedHeader>
      <St.Header>
        <St.MovePressButton onClick={movePreviousPage} type="button">
          <IcPreviousBtn aria-label="이전 페이지 이동" />
        </St.MovePressButton>
        추천사
      </St.Header>
      <ProgressBar progressRate={55} />
      <St.TitleWrapper>
        <Title title="친구를 어필할 수 있는" />
        <Title title="질문을 하나 골라 답해보자!" />
      </St.TitleWrapper>
    </St.RecommendFixedHeader>
  );
}

const St = {
  RecommendFixedHeader: styled.section`
    width: 37.5rem;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 0;

    padding-bottom: 1rem;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #ffffff 10%);
    z-index: 2;

    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
  MovePressButton: styled.button`
    position: absolute;
    top: 1em;
    left: 1.6rem;
    z-index: 8;
    cursor: pointer;
  `,
  Header: styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body1};

    position: absolute;
    width: 100%;
    height: 5.6rem;
    top: 0;
    left: 0;
  `,
  Selection: styled.div`
    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.gray40};
    margin-bottom: 0.4rem;
  `,
  TitleWrapper: styled.hgroup`
    position: relative;
    padding: 9rem 2rem 0;
  `,
  SubTitleWrapper: styled.section`
    padding-right: 2rem;
  `,
};
