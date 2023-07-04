import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { postMemberReissue } from "../../apis/member.api";
import { ImgBackgroundCloud, ImgBackgroundGift, ImgLandingNaechinso } from "../../asset/image";
import { GTM_CLASS_NAME } from "../../util/const/gtm";
import MoveNextPageBtn from "./MoveNextPageBtn";

interface LandingBoxProps {
  setAccessToken: React.Dispatch<React.SetStateAction<boolean>>;
  handleMoveLandingPage: () => void;
}

export default function LandingBox(props: LandingBoxProps) {
  const { setAccessToken, handleMoveLandingPage } = props;
  const location = useLocation();

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
    localStorage.removeItem("checkedSelectiveQ");
    localStorage.removeItem("selectiveRecommend");
    localStorage.removeItem("friendLoverType");
    localStorage.removeItem("friendLoverTypeList");
    localStorage.removeItem("appealDetail");
    localStorage.removeItem("appealDetailList");

    if (location.pathname.startsWith("/landing")) {
      const memberUuid = location.pathname.substring(8);
      memberUuid.length === 37 && localStorage.setItem("member-uuid", memberUuid);
    } else if (location.pathname.startsWith("/edit")) localStorage.setItem("landingUrl", "edit");
    else localStorage.removeItem("member-uuid");
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
    <St.LandingBox>
      <St.Naechinso src={ImgLandingNaechinso} alt="내친소" />
      <St.TitleWrapper>
        <St.Title>친구를 소개하러 온 걸 환영해!</St.Title>
      </St.TitleWrapper>
      <St.DescWrapper>
        <St.Desc>내친소는 현실의 지인소개를 온라인화했어</St.Desc>
        <St.Desc>내친소의 유저가 아니어도 추천사를 쓸 수 있어😉</St.Desc>
      </St.DescWrapper>

      <St.BackGroundGift src={ImgBackgroundGift} alt="선물배경" />
      <St.BackGroundCloud src={ImgBackgroundCloud} alt="구름배경" />
      <MoveNextPageBtn
        title="1분컷 추천사 작성하기"
        disabled={false}
        className={GTM_CLASS_NAME.startAccess}
        handleState={handleMoveLandingPage}
      />
    </St.LandingBox>
  );
}

const St = {
  LandingBox: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
  `,
  Naechinso: styled.img`
    width: 6rem;
    height: 6rem;
  `,
  TitleWrapper: styled.hgroup`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: -0.01em;
    margin-top: 1.6rem;
  `,
  Title: styled.p`
    width: fit-content;
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.bold_25};
  `,
  DescWrapper: styled.div`
    margin: 0.7rem 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Desc: styled.p`
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.reg_15};
  `,
  BackGroundCloud: styled.img`
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;

    @media only screen and (min-width: 600px) {
      width: 37.5rem;
    }
  `,
  BackGroundGift: styled.img`
    width: 100%;
    z-index: 2;
  `,
};
