import styled from "styled-components";

import { ImgRouletteGaugeNaechinso } from "../../asset/image";

export default function RouletteGauge() {
  const recommendMember = ["김지수", null, null];

  return (
    <St.RouletteGauge>
      <St.DescWrapper>
        <St.Naechinso src={ImgRouletteGaugeNaechinso} alt="내친소" />
        <St.Desc>
          <St.HighlightYellow>100% 당첨</St.HighlightYellow> 룰렛까지
          <St.HighLightOrange> 2명</St.HighLightOrange> 남았어!
        </St.Desc>
      </St.DescWrapper>
      <St.RouletteGaugeBox></St.RouletteGaugeBox>
    </St.RouletteGauge>
  );
}

const St = {
  RouletteGauge: styled.section`
    z-index: 2;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(12px);

    width: 33.5rem;
    height: 11rem;
    padding: 1.6rem 1.6rem 1.5rem;
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 90%;
    }
  `,
  DescWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
  `,
  Naechinso: styled.img`
    width: 2rem;
    height: 2rem;
  `,
  Desc: styled.p`
    color: ${({ theme }) => theme.colors.gray20};
    ${({ theme }) => theme.fonts.body9};
  `,
  HighlightYellow: styled.b`
    color: #ffb700;
    ${({ theme }) => theme.fonts.body8};
  `,
  HighLightOrange: styled.b`
    color: ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fonts.body8};
  `,
  RouletteGaugeBox: styled.article``,
};
