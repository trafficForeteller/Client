import styled from "styled-components";

import { ImgRecommendation } from "../../asset/image";

export default function FinishSplash() {
  return (
    <St.FinishSplash>
      <St.HighlightTag>작성 완료</St.HighlightTag>
      <St.TitleWrapper>
        <St.Title>
          <St.HighLight>추천사가 완성</St.HighLight>됐어!
        </St.Title>
        <St.Title>친구 추천해줘서 고마워🧡</St.Title>
      </St.TitleWrapper>
      <St.Recommendation src={ImgRecommendation} alt="내친소 추천사 완성" />
    </St.FinishSplash>
  );
}

const St = {
  FinishSplash: styled.main`
    background-color: ${({ theme }) => theme.colors.gray2};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20%;

    width: 102%;
    height: 100vh;

    z-index: 9999;
    position: absolute;
    left: 0;
    top: 0;
  `,
  HighlightTag: styled.div`
    background-color: ${({ theme }) => theme.colors.orange10};

    color: ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fonts.semi_16};
    border-radius: 35px;
    padding: 0.8rem 1.4rem;
    z-index: 10000;
  `,
  TitleWrapper: styled.hgroup`
    z-index: 10000;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.4rem;
  `,
  Title: styled.h2`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.bold_25};
  `,
  HighLight: styled.b`
    color: ${({ theme }) => theme.colors.orange};
  `,
  Recommendation: styled.img`
    position: absolute;
    /* left: 0;
    right: 0; */
    bottom: 0;

    width: 37.67rem;
    height: 39.37rem;
  `,
};
