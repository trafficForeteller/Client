import styled from "styled-components";

import { ImgLandingNaechinso } from "../../asset/image";

export default function LandingBox() {
  return (
    <>
      <St.LandingBox>
        <St.Naechinso src={ImgLandingNaechinso} alt="내친소" />
        <St.Title>친구를 소개하러 온 걸 환영해!</St.Title>
        <St.Desc>내친소는 현실의 지인소개를 온라인화했어</St.Desc>
      </St.LandingBox>
    </>
  );
}

const St = {
  LandingBox: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
  `,
  Naechinso: styled.img`
    z-index: 99;
    width: 6rem;
    height: 6rem;
  `,
  Title: styled.p`
    width: fit-content;
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.bold_28};

    z-index: 99;
    letter-spacing: -0.01em;
    margin-top: 1.6rem;
  `,
  Desc: styled.p`
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.reg_15};

    z-index: 99;
    margin-top: 0.7rem;
  `,
};
