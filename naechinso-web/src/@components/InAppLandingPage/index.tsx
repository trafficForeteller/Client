import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { getMemberStatus } from "../../apis/member.api";
import { routePaths } from "../../core/routes/path";
import { LandingBox } from "../@common";

export default function InAppLandingPage() {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(false);

  const onEnterKeyUp = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") handleMemberStatus();
  };

  const handleMemberStatus = async () => {
    // 이미 가입된 유저인지 확인
    if (accessToken && localStorage.getItem("accessToken")) {
      const userData = await getMemberStatus(localStorage.getItem("accessToken"));
      if (userData && userData.jobAccepted === "NONE" && userData.eduAccepted === "NONE")
        navigate(routePaths.RecommenderLanding);
      else {
        userData && localStorage.setItem("recommenderName", userData.name);
        navigate(routePaths.RecommendLanding);
      }
    } else navigate(routePaths.PhoneNum);
  };

  return (
    <St.LandingPage onKeyUp={onEnterKeyUp}>
      <LandingBox setAccessToken={setAccessToken} handleMoveLandingPage={handleMemberStatus} />
    </St.LandingPage>
  );
}

const St = {
  LandingPage: styled.main`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.neural};
    padding-top: 40%;
    @media only screen and (min-height: 680px) {
      padding-top: 55%;
    }
  `,
};
