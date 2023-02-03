import styled from "styled-components";

import { LandingBox } from "../@common";

export default function InAppLandingPage() {
  return (
    <St.LandingPage>
      <LandingBox />
    </St.LandingPage>
  );
}

const St = {
  LandingPage: styled.main`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.neural};
    padding-top: 35%;
  `,
};
