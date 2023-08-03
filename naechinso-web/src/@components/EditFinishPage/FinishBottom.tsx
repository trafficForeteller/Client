import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";
import { GTM_CLASS_NAME } from "../../util/const/gtm";

export default function FinishBottom() {
  const navigate = useNavigate();

  const handleMoveRecommendLanding = () => {
    navigate(routePaths.RecommendLanding);

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
    localStorage.removeItem("memberPhoneNum");
    localStorage.removeItem("checkedKeywordList");
    localStorage.removeItem("checkedSelectiveQ");
    localStorage.removeItem("selectiveRecommendList");
    localStorage.removeItem("selectiveRecommend");
    localStorage.removeItem("friendLoverType");
    localStorage.removeItem("friendLoverTypeList");
    localStorage.removeItem("appealDetail");
    localStorage.removeItem("appealDetailList");
  };

  return (
    <St.FinishBottom>
      <St.Title>
        <St.HighLight>다른 친구</St.HighLight>도 소개해볼래!😎
      </St.Title>
      <St.NextStepBtn type="button" onClick={handleMoveRecommendLanding} className={GTM_CLASS_NAME.referral}>
        다른 친구 소개하기
      </St.NextStepBtn>
      <St.MoveLandingBtn
        type="button"
        onClick={() => navigate(routePaths.Landing)}
        className={GTM_CLASS_NAME.landingView}>
        홈 화면으로 이동
      </St.MoveLandingBtn>
    </St.FinishBottom>
  );
}

const St = {
  FinishBottom: styled.footer`
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 20px 20px 0px 0px;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);

    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.8rem 2rem 3.6rem;

    width: 37.5rem;
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
  Title: styled.h2`
    color: ${({ theme }) => theme.colors.gray100};
    ${({ theme }) => theme.fonts.sub2};
    display: flex;
  `,
  HighLight: styled.b`
    color: ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fonts.sub2};
  `,
  NextStepBtn: styled.button`
    background-color: ${({ theme }) => theme.colors.orange20};
    color: ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fonts.body3};
    width: 100%;
    height: 4.4rem;
    border-radius: 1.6rem;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 2.8rem;
    margin-bottom: 2rem;
  `,
  MoveLandingBtn: styled.button`
    color: ${({ theme }) => theme.colors.gray70};
    ${({ theme }) => theme.fonts.body9};
  `,
};
