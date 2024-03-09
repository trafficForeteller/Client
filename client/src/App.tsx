import { useEffect } from "react";
import styled from "styled-components";

import Router from "./Router";
import setScreenSize from "./util/setScreenSize";

export default function App() {
  useEffect(() => {
    setScreenSize();
  }, []);

  return (
    <St.MobileContainer>
      <meta name="title" content="트래픽 예언가" />
      <meta name="description" content="정확한 교통 예측으로, 스트레스 없는 이동을 경험하세요" />
      <meta property="og:title" content="트래픽 예언가" />
      <meta property="og:description" content="정확한 교통 예측으로, 스트레스 없는 이동을 경험하세요" />
      <Router />
    </St.MobileContainer>
  );
}

const St = {
  MobileContainer: styled.div`
    position: relative;
    margin: 0 auto;
    height: 100vh;
    box-sizing: border-box;

    ${({ theme }) => theme.media.desktop`
      width: 37.5rem;
    `};
  `,
};
