import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";

export default function RecommendationPage() {
  const memberUuid = location.pathname.substring(15, 52);
  const recommendationImgUrl = location.pathname.substring(52);
  const [recommendationImg, setRecommendationImg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setRecommendationImg("https://k.kakaocdn.net/dn" + recommendationImgUrl + ".png");
  }, []);

  const handleMagicLink = () => {
    // 매직링크로 이동
    navigate(`/landing${memberUuid}`);
  };

  const handleInstall = () => {
    // 앱 다운로드 페이지로 이동
    navigate(routePaths.InstallApp);
  };

  return (
    <St.RecommendationPage>
      <St.RecommendationImage src={recommendationImg} alt="추천사 사진 " />
      <St.ButtonWrapper>
        <St.MoveMagicLinkBtn onClick={handleMagicLink}>나도 추천사 써주기</St.MoveMagicLinkBtn>
        <St.MoveInstallBtn onClick={handleInstall}>나도 받기</St.MoveInstallBtn>
      </St.ButtonWrapper>
    </St.RecommendationPage>
  );
}

const St = {
  RecommendationPage: styled.main``,
  RecommendationImage: styled.img`
    width: 100%;
    margin-bottom: 8rem;
  `,
  ButtonWrapper: styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 2rem;
    height: 7.2rem;
    gap: 1rem;

    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 80%);
  `,
  MoveMagicLinkBtn: styled.button`
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.sub3};
    border-radius: 16px;
    width: fit-content;
    padding: 0 2rem;
    height: 5.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  MoveInstallBtn: styled.button`
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.sub3};
    border-radius: 16px;
    width: fit-content;
    padding: 0 3rem;
    height: 5.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
