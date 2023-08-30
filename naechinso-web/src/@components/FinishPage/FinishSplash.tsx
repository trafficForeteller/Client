import styled, { css, keyframes } from "styled-components";

import { ImgRecommendation } from "../../asset/image";

interface FinishSplashProps {
  visible: boolean;
}

export default function FinishSplash(props: FinishSplashProps) {
  const { visible } = props;

  return (
    <St.FinishSplash visible={visible}>
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const St = {
  FinishSplash: styled.main<{ visible: boolean }>`
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

    ${({ visible }) =>
      visible
        ? css`
            animation: ${fadeIn} 0.3s ease-in-out forwards;
          `
        : css`
            animation: ${fadeOut} 0.5s ease-in-out forwards;
          `}
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
    bottom: 0;

    width: 37.67rem;
    height: 39.37rem;
  `,
};
