import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import Router from "./Router";
import setScreenSize from "./util/setScreenSize";

export default function App() {
  useEffect(() => {
    setScreenSize();
  }, []);

  return (
    <St.MobileContainer>
      <Helmet>
        <meta name="title" content="내친소, 내 친구를 소개합니다" />
        <meta name="description" content="친구를 소개해준다구? 어떤 친구야?👀" />
        <meta property="og:title" content="내친소, 내 친구를 소개합니다" />
        <meta property="og:description" content="친구를 소개해준다구? 어떤 친구야?👀" />
        <meta property="og:url" content="https://recommend.naechinso.com/" />
      </Helmet>
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
