import styled from "styled-components";

import { SubTitle, Title } from "../@common";

export default function RecommendLandingPage() {
  return (
    <St.RecommendLandingPage>
      <Title title="친구를 소개해줘!" />
      <Title title="네 친구라면 분명 멋있겠지?" />
      <SubTitle subTitle="" />
      <St.BackgroundColor></St.BackgroundColor>
    </St.RecommendLandingPage>
  );
}

const St = {
  RecommendLandingPage: styled.main`
    height: 100vh;
  `,
  BackgroundColor: styled.div`
    width: 100%;
    height: 67.86%;
    position: absolute;
    bottom: 0;
    transform: rotate(-180deg);
    background: linear-gradient(180deg, #ffe49d 2.78%, #ffffff 100%);
  `,
  Title: styled.h1``,
};
