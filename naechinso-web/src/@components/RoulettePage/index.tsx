import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IcNaechinsoLogo } from "../../asset/icons";
import { ImgFinishBackground } from "../../asset/image";
import { routePaths } from "../../core/routes/path";
import { IRouletteGauge } from "../../types/recommend";
import { Roulette, RouletteGauge } from "../@common";

export default function RoulettePage() {
  const navigate = useNavigate();
  const [rouletteGauge, setRouletteGauge] = useState<IRouletteGauge[]>([
    { id: 0, name: "", status: "" },
    { id: 1, name: "", status: "" },
    { id: 2, name: "", status: "" },
  ]);
  const [recommendNumber, setRecommendNumber] = useState(0);

  const handleMovePhoneNumPage = () => {
    navigate(routePaths.PhoneNum);

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
    localStorage.removeItem("member-uuid");
    localStorage.removeItem("landingUrl");
    localStorage.removeItem("priceType");
    localStorage.removeItem("memberName");
    localStorage.removeItem("checkedKeywordList");
    localStorage.removeItem("checkedSelectiveQ");
    localStorage.removeItem("selectiveRecommend");
    localStorage.removeItem("friendLoverType");
    localStorage.removeItem("friendLoverTypeList");
    localStorage.removeItem("appealDetail");
    localStorage.removeItem("appealDetailList");
  };

  return (
    <St.RoulettePage>
      <St.RouletteBackground src={ImgFinishBackground} alt="주황 배경" />
      <St.HeaderWrapper>
        <St.NaechinsoLogo>
          <IcNaechinsoLogo />
        </St.NaechinsoLogo>
        <St.NaechinsoWeb href="https://www.naechinso.com/">내친소란?</St.NaechinsoWeb>
      </St.HeaderWrapper>
      <St.TitleWrapper>
        <St.Title>
          친구 <St.HighLight>3명</St.HighLight>을 초대하고
        </St.Title>
        <St.Title>
          대박 <St.HighLight>룰렛</St.HighLight>을 돌려보자!
        </St.Title>
      </St.TitleWrapper>

      <RouletteGauge
        rouletteGauge={rouletteGauge}
        setRouletteGauge={setRouletteGauge}
        setRecommendNumber={setRecommendNumber}
      />
      <Roulette
        rouletteGauge={rouletteGauge}
        recommendNumber={recommendNumber}
        setRecommendNumber={setRecommendNumber}
        setRouletteGauge={setRouletteGauge}
      />
      {/* GTM 새로 달아야함 */}
      <St.MoveLandingBtn type="button" onClick={handleMovePhoneNumPage}>
        다른 친구 소개하고 룰렛 돌리기
      </St.MoveLandingBtn>
    </St.RoulettePage>
  );
}
const St = {
  RoulettePage: styled.main`
    background-color: ${({ theme }) => theme.colors.black};

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.8rem 2rem 12rem;

    width: 100%;
    height: 100vh;

    position: relative;
  `,
  RouletteBackground: styled.img`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  `,
  HeaderWrapper: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    z-index: 2;
  `,
  NaechinsoLogo: styled.span`
    width: 5.6rem;
    height: 3.6rem;
  `,
  NaechinsoWeb: styled.a`
    color: ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fonts.caption6};
  `,
  TitleWrapper: styled.hgroup`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;

    margin: 2.4rem 0 1.2rem;
  `,
  Title: styled.h2`
    color: ${({ theme }) => theme.colors.white};

    font-family: "PilseungGothic";
    font-size: 3.8rem;
    line-height: 116%;
  `,
  HighLight: styled.b`
    color: #ffb700;

    font-family: PilseungGothic;
    font-size: 3.8rem;
    line-height: 116%;
    text-align: center;
    letter-spacing: -0.01em;
  `,
  MoveLandingBtn: styled.button`
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.bold_16};
    height: 5.6rem;
    border-radius: 16px;
    z-index: 4;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    bottom: 4.4rem;

    width: 33.5rem;
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 90%;
    }
  `,
};
