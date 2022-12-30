import styled from "styled-components";

import Title from "../@common/Title";

export default function LandingPage() {
  return (
    <St.LandingPage>
      <Title title={"어떤 친구인지 너무 기대돼🥰 내친소는 친구의 추천사가 있는 사람만 이용이 가능하거든"} />
    </St.LandingPage>
  );
}

const St = {
  LandingPage: styled.main`
    position: relative;
  `,
};
