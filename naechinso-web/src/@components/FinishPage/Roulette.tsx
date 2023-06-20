import styled from "styled-components";

import { ImgRoulette, ImgRoulettePicker } from "../../asset/image";

export default function Roulette() {
  const recommendNumber = 2;

  return (
    <St.Roulette>
      <St.RouletteBoard src={ImgRoulette} alt="룰렛 원판" />
      <St.RoulettePicker src={ImgRoulettePicker} alt="룰렛 피커" />
      <St.RouletteReadyBtn disabled={recommendNumber > 2 ? false : true}>
        <St.RouletteBtnTitle recommendNumber={recommendNumber}>
          {recommendNumber > 2 ? "시-작!🤪" : "시작못함😥"}
        </St.RouletteBtnTitle>
        <St.RouletteRecommendNumberWrapper recommendNumber={recommendNumber}>
          <St.RouletteRecommendNumber recommendNumber={recommendNumber}>{recommendNumber}</St.RouletteRecommendNumber>
          <St.RouletteReommendFullNumber recommendNumber={recommendNumber}>/3명</St.RouletteReommendFullNumber>
        </St.RouletteRecommendNumberWrapper>
      </St.RouletteReadyBtn>
    </St.Roulette>
  );
}

const St = {
  Roulette: styled.section`
    width: 100%;
    position: relative;
    margin-top: 3.6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    z-index: 2;
  `,
  RouletteBoard: styled.img`
    width: 32rem;
  `,
  RoulettePicker: styled.img`
    width: 2.8rem;
    height: 4rem;
    position: absolute;
    transform: translate(-50%, 0);
    left: 50%;
    top: -8px;
  `,
  RouletteReadyBtn: styled.button`
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 10rem;
    height: 10rem;
  `,
  RouletteBtnTitle: styled.h2<{ recommendNumber: number }>`
    color: ${({ theme, recommendNumber }) => (recommendNumber > 2 ? theme.colors.white : "rgba(255, 255, 255, 0.6)")};
    ${({ theme, recommendNumber }) => (recommendNumber > 2 ? theme.fonts.body1 : theme.fonts.body8)};
    margin-bottom: 0.3rem;
  `,
  RouletteRecommendNumberWrapper: styled.div<{ recommendNumber: number }>`
    display: flex;
    align-items: flex-start;
    padding: 0.2rem 0.6rem;
    border-radius: 11px;
    width: fit-content;
    height: 1.8rem;

    background: ${({ theme, recommendNumber }) =>
      recommendNumber > 2 ? theme.colors.white : "rgba(255, 255, 255, 0.2)"};
  `,
  RouletteRecommendNumber: styled.p<{ recommendNumber: number }>`
    color: ${({ theme, recommendNumber }) => (recommendNumber > 2 ? theme.colors.orange : "rgba(255, 255, 255, 0.4)")};
    ${({ theme }) => theme.fonts.caption2};
  `,
  RouletteReommendFullNumber: styled.b<{ recommendNumber: number }>`
    color: ${({ theme, recommendNumber }) => (recommendNumber > 2 ? theme.colors.orange : theme.colors.white)};
    ${({ theme }) => theme.fonts.caption2};
  `,
};
