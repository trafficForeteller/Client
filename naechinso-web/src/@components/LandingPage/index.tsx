import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { getMemberStatus } from "../../apis/member.api";
import { routePaths } from "../../core/routes/path";
import { GTM_CLASS_NAME } from "../../util/const/gtm";
import { LandingBox } from "../@common";

export default function LandingPage() {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(false);
  const [isRecommenderModalOpened, setIsRecommenderModalOpened] = useState(false);

  const onEnterKeyUp = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") handleMemberStatus();
  };

  const handleMemberStatus = async () => {
    // 이미 가입된 유저인지 확인
    if (accessToken && localStorage.getItem("accessToken")) {
      const userData = await getMemberStatus(localStorage.getItem("accessToken"));
      userData && userData.rouletteUuid && localStorage.setItem("roulette-uuid", userData.rouletteUuid);
      if (userData && userData.eduName === null && userData.jobName === null) {
        setIsRecommenderModalOpened(true);
        navigate(routePaths.RecommenderInfo);
      } else {
        userData && localStorage.setItem("recommenderName", userData.name);
        navigate(routePaths.RecommendLanding);
      }
    } else setIsRecommenderModalOpened(true);
  };

  return (
    <St.LandingPage onKeyUp={onEnterKeyUp}>
      <LandingBox
        setAccessToken={setAccessToken}
        handleMoveLandingPage={handleMemberStatus}
        isRecommenderModalOpened={isRecommenderModalOpened}
      />
      {/* {!localStorage.getItem("member-uuid") && (
        <St.DescWrapper>
          <St.Desc>내친소를 직접 사용하고 싶다면? </St.Desc>
          <St.InstallBtn
            type="button"
            onClick={() => navigate(routePaths.InstallApp)}
            className={GTM_CLASS_NAME.acquisitionInstallApp}>
            여기로✨
          </St.InstallBtn>
        </St.DescWrapper>
      )} */}
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
  DescWrapper: styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1.6rem;
  `,
  Desc: styled.p`
    color: ${({ theme }) => theme.colors.gray50};
    ${({ theme }) => theme.fonts.body7};
  `,
  InstallBtn: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.gray50};
    ${({ theme }) => theme.fonts.body3};
    cursor: pointer;
    text-decoration: underline;
  `,
};
