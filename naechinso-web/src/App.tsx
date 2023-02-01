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
