import styled from "styled-components";

import { ImgLandingBackground } from "../../asset/image";
import { Header } from "../@common";

export default function LandingPage() {
  return (
    <St.Landing>
      <Header />
      <St.Background src={ImgLandingBackground} alt="책장 배경" />
      <St.IntroBox>
        <St.Title>
          놓치기 아쉬운
          <br />
          당신만을 위한 인생책을 준비했어요
        </St.Title>
        <St.SubTitle>내가 기록한 감정으로 딱 맞는 책을 찾으세요!</St.SubTitle>
        <St.FloatingBtnWrapper type="button">
          <St.FloatingBtnDesc>감동 MAX 책 후기 기록하고 &gt;</St.FloatingBtnDesc>
          <St.FloatingBtn>책 추천받기</St.FloatingBtn>
        </St.FloatingBtnWrapper>
      </St.IntroBox>
    </St.Landing>
  );
}

const St = {
  Landing: styled.section`
    position: relative;
  `,
  IntroBox: styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem 2.8rem 0;
  `,
  Background: styled.img`
    width: 100%;
    height: 30rem;

    position: absolute;
    z-index: -1;
  `,
  Title: styled.h1`
    ${({ theme }) => theme.fonts.bold20};

    margin-bottom: 0.7rem;
  `,
  SubTitle: styled.p`
    ${({ theme }) => theme.fonts.reg12};
  `,
  FloatingBtnWrapper: styled.button`
    width: 100%;
    height: 5.9rem;

    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 12px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.6rem 2.5rem;
    margin-top: 10.6rem;
  `,
  FloatingBtnDesc: styled.p`
    color: ${({ theme }) => theme.colors.purple2};
    ${({ theme }) => theme.fonts.reg12};
  `,
  FloatingBtn: styled.span`
    background-color: ${({ theme }) => theme.colors.purple2};
    border-radius: 6px;

    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.semi10};
    padding: 0.7rem 1rem;
  `,
};
