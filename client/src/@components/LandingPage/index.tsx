import styled from "styled-components";

import { Header, PathInputBox } from "../@common";

export default function LandingPage() {
  return (
    <St.LandingPage>
      <Header />
      <St.PathInputBoxWrapper>
        <PathInputBox pathDirection="출발" />
        <PathInputBox pathDirection="도착" />
      </St.PathInputBoxWrapper>
    </St.LandingPage>
  );
}

const St = {
  LandingPage: styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.orange};
    padding-top: 15%;
    @media only screen and (min-height: 680px) {
      padding-top: 30%;
    }
  `,
  PathInputBoxWrapper: styled.section`
    display: flex;
    flex-direction: column;

    gap: 1.4rem;
  `,
};
