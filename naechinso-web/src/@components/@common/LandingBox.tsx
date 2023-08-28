import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { postMemberReissue } from "../../apis/member.api";
import { ImgChickenIcon, ImgLandingBackground, ImgLandingNaechinso, ImgRouletteIcon } from "../../asset/image";
import { GTM_CLASS_NAME } from "../../util/const/gtm";
import AgreeSelfIntroModal from "./AgreeSelfIntroModal";
import MoveNextPageBtn from "./MoveNextPageBtn";

interface LandingBoxProps {
  setAccessToken: React.Dispatch<React.SetStateAction<boolean>>;
  handleMoveLandingPage: () => void;
  isRecommenderModalOpened: boolean;
}

export default function LandingBox(props: LandingBoxProps) {
  const { setAccessToken, handleMoveLandingPage, isRecommenderModalOpened } = props;
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
    localStorage.removeItem("memberPhoneNum");
    localStorage.removeItem("checkedKeywordList");
    localStorage.removeItem("checkedSelectiveQ");
    localStorage.removeItem("selectiveRecommendList");
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
    <>
      <St.LandingBox>
        <St.Naechinso src={ImgLandingNaechinso} alt="내친소" />
        <St.Title>친구를 소개하러 온 걸 환영해!</St.Title>
        <St.Desc>내친소는 현실의 지인소개를 온라인화했어</St.Desc>

        <St.LandingExplainBox>
          <St.LandingExplainWrapper>
            <St.Icon src={ImgRouletteIcon} alt="룰렛 아이콘" />
            <St.LandingExplainTitle>100% 당첨 룰렛 기회</St.LandingExplainTitle>
            <St.LandingExplainDescWrapper>
              <St.LandingExplainDesc>친구를 3명 추천하고</St.LandingExplainDesc>
              <St.LandingExplainDesc>
                <St.Bold>룰렛</St.Bold>을 돌려봐
              </St.LandingExplainDesc>
            </St.LandingExplainDescWrapper>
          </St.LandingExplainWrapper>
          <St.LandingExplainWrapper>
            <St.Icon src={ImgChickenIcon} alt="치킨 아이콘" />
            <St.LandingExplainTitle>100% 치킨 기프티콘</St.LandingExplainTitle>
            <St.LandingExplainDescWrapper>
              <St.LandingExplainDesc>추천한 친구가 연애하면</St.LandingExplainDesc>
              <St.LandingExplainDesc>
                <St.Bold>치킨 기프티콘 100%</St.Bold> 발송!
              </St.LandingExplainDesc>
            </St.LandingExplainDescWrapper>
          </St.LandingExplainWrapper>
        </St.LandingExplainBox>

        <St.LandingBackGround src={ImgLandingBackground} alt="랜딩페이지 배경" />
        <St.Notification>*유저가 아니어도 돼!</St.Notification>
        <MoveNextPageBtn
          title="🔥3분컷🔥 추천사 작성하기"
          disabled={false}
          className={GTM_CLASS_NAME.startAccess}
          handleState={handleMoveLandingPage}
        />
      </St.LandingBox>
      {isRecommenderModalOpened && (
        <>
          <AgreeSelfIntroModal />
          <St.BackDrop />
        </>
      )}
    </>
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
    z-index: 99;
    width: 6rem;
    height: 6rem;
  `,
  Title: styled.p`
    width: fit-content;
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.bold_28};

    z-index: 99;
    letter-spacing: -0.01em;
    margin-top: 1.6rem;
  `,
  Desc: styled.p`
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.reg_15};

    z-index: 99;
    margin-top: 0.7rem;
  `,
  LandingBackGround: styled.img`
    display: flex;
    justify-content: center;
    width: 102%;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    @media only screen and (min-width: 600px) {
      width: 37.5rem;
    }
  `,
  LandingExplainBox: styled.section`
    z-index: 99;
    display: flex;
    gap: 1rem;
    width: 100%;
    justify-content: center;
    margin-top: 5.6rem;
  `,
  Icon: styled.img`
    width: 6rem;
    height: 6rem;
  `,
  LandingExplainWrapper: styled.article`
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 8px;
    background: var(--alpha-white-40, rgba(255, 255, 255, 0.4));
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(8px);

    width: 16.7rem;
    height: 17.7rem;
  `,
  LandingExplainTitle: styled.h3`
    ${({ theme }) => theme.fonts.bold_16};
    margin: 1rem 0 0.4rem;
  `,
  LandingExplainDescWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  LandingExplainDesc: styled.p`
    ${({ theme }) => theme.fonts.reg_13};
  `,
  Bold: styled.b`
    ${({ theme }) => theme.fonts.bold_13};
  `,
  BackDrop: styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.64);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
  `,
  Notification: styled.div`
    color: ${({ theme }) => theme.colors.gray40};
    ${({ theme }) => theme.fonts.reg_12};
    z-index: 100;
    position: absolute;
    bottom: 9.5rem;
  `,
};
