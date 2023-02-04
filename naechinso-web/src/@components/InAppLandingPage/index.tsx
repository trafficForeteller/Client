import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";
import { LandingBox } from "../@common";

export default function InAppLandingPage() {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(false);

  const handleMoveLandingPage = () => {
    if (accessToken) navigate(routePaths.RecommendLanding);
    else navigate(routePaths.PhoneNum);
  };

  return (
    <St.LandingPage>
      <LandingBox setAccessToken={setAccessToken} handleMoveLandingPage={handleMoveLandingPage} />
    </St.LandingPage>
  );
}

const St = {
  LandingPage: styled.main`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.neural};
    padding-top: 30%;
  `,
};
