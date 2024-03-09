import styled from "styled-components";

import { LandingBox } from "../@common";

export default function LandingPage() {
  return (
    <St.LandingPage>
      <LandingBox />
    </St.LandingPage>
  );
}

const St = {
  LandingPage: styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.orange};
    padding-top: 15%;
    @media only screen and (min-height: 680px) {
      padding-top: 30%;
    }
  `,
};
