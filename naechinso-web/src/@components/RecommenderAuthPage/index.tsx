import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { postMemberReissue } from "../../apis/member.api";
import { ImgRecommenderAuthNaechinso } from "../../asset/image";
import { routePaths } from "../../core/routes/path";

export default function RecommenderAuthPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("questionList");
    localStorage.removeItem("checkedQ1");
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
    localStorage.removeItem("landingUrl");
    localStorage.removeItem("recommenderName");
    localStorage.removeItem("priceType");
    localStorage.removeItem("memberName");
    localStorage.removeItem("checkedKeywordList");

    localStorage.setItem("landingUrl", "auth");
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
    }
  };

  return (
    <St.RecommenderAuthPage>
      <St.Naechinso src={ImgRecommenderAuthNaechinso} alt="내친소" />
      <St.TitleWrapper>
        <St.Title>널 기다리고 있었어!</St.Title>
        <St.Title>소속 인증하러 가보자고🏃‍♀</St.Title>
      </St.TitleWrapper>
      <St.Button onClick={() => navigate(routePaths.PhoneNum)} type="button">
        소속 인증 하기
      </St.Button>
    </St.RecommenderAuthPage>
  );
}

const St = {
  RecommenderAuthPage: styled.main`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.neural};

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40%;
    @media only screen and (min-height: 680px) {
      padding-top: 55%;
    }
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
};
