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
    width: 37.5rem;
    height: 100vh;
  `,
};
