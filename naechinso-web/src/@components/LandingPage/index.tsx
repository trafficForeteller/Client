import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { postMemberReissue } from "../../apis/member.api";
import { IcAppStore, IcPlayStore } from "../../asset/icons";
import { ImgLandingNaechinso } from "../../asset/image";
import { routePaths } from "../../core/routes/path";

export default function LandingPage() {
  const location = useLocation();
  const [accessToken, setAccessToken] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("questionList");
    localStorage.removeItem("checkedQ1");
    localStorage.removeItem("checkedQ2");
    localStorage.removeItem("firstRecommend");
    localStorage.removeItem("secondRecommend");
    localStorage.removeItem("eduInfo");
    localStorage.removeItem("jobInfo");
    localStorage.removeItem("appealDetail");
    localStorage.removeItem("dontGo");
    localStorage.removeItem("appeals");
    localStorage.removeItem("friendInfo");
    localStorage.removeItem("keywordList");
    localStorage.removeItem("postRecommender");
    localStorage.removeItem("genderTypeList");
    localStorage.removeItem("uuid");

    location.pathname !== "/" && localStorage.setItem("member-uuid", location.pathname);
    localStorage.getItem("accessToken") && setAccessToken(true);
  }, [location]);

  useEffect(() => {
    localStorage.getItem("accessToken") && handlePostMemberReissue();
  }, []);

  const handlePostMemberReissue = async () => {
    // 액세스 토큰 만료 응답인지 확인
    const userData = await postMemberReissue(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"));
    if (userData) {
      localStorage.setItem("accessToken", userData["accessToken"]);
      localStorage.setItem("refreshToken", userData["refreshToken"]);
      setAccessToken(true);
    } else setAccessToken(false);
  };

  return (
    <St.LandingPage>
      <St.Naechinso src={ImgLandingNaechinso} alt="내친소" />
      <St.TitleWrapper>
        <St.Title>친구를 소개하러 온 걸</St.Title>
        <St.Title>환영해!🧡</St.Title>
      </St.TitleWrapper>
      <St.Button
        onClick={() => (accessToken ? navigate(routePaths.RecommendLanding) : navigate(routePaths.PhoneNum))}
        type="button">
        내 친구 소개하기
      </St.Button>
      <St.Bottom>
        <St.DescWrapper>
          <St.Line></St.Line>
          <St.Desc>내친소를 시작하고 싶다면?</St.Desc>
          <St.Line></St.Line>
        </St.DescWrapper>
        <St.InstallBtnWrapper>
          <St.InstallBtn type="button" onClick={() => navigate(routePaths.InstallApp)}>
            <IcPlayStore />
          </St.InstallBtn>
          <St.InstallBtn type="button" onClick={() => navigate(routePaths.InstallApp)}>
            <IcAppStore />
          </St.InstallBtn>
        </St.InstallBtnWrapper>
      </St.Bottom>
    </St.LandingPage>
  );
}

const St = {
  LandingPage: styled.main`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.neural};

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 35%;
  `,
  Naechinso: styled.img`
    width: 12.1rem;
    height: 12.1rem;
  `,
  TitleWrapper: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: -0.01em;
    margin-top: 1.6rem;
    margin-bottom: 3.6rem;
  `,
  Title: styled.p`
    width: fit-content;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.head1};
  `,
  Button: styled.button`
    bottom: 3.5rem;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.sub3};
    width: 33.5rem;
    height: 5.6rem;
    border-radius: 1.6rem;
  `,
  Bottom: styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem 6.3rem;

    position: absolute;
    bottom: 0;
  `,
  DescWrapper: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  `,
  Line: styled.div`
    border: 1px solid ${({ theme }) => theme.colors.gray30};
    width: 23%;
    height: 1px;
  `,
  Desc: styled.p`
    color: ${({ theme }) => theme.colors.gray50};
    ${({ theme }) => theme.fonts.body7};
    width: 14.7rem;
  `,

  InstallBtnWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-top: 2.8rem;
  `,
  InstallBtn: styled.button`
    width: 16rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.colors.gray80};
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
