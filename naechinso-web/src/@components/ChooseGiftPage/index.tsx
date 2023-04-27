import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { postMemberReissue } from "../../apis/member.api";
import { patchRecommendFriendDetail } from "../../apis/recommend.api";
import { routePaths } from "../../core/routes/path";
import { IPatchFriendDetail } from "../../types/recommend";
import { ConsultantIconBtn, FixedHeader } from "../@common";

export default function ChooseGiftPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [patchRecommend, setPatchRecommend] = useState<IPatchFriendDetail>({
    appealDetail: "",
    appeals: [],
    dontGo: "",
    priceType: "",
  });

  useEffect(() => {
    setPatchRecommend({
      ...patchRecommend,
      appealDetail: state.patchRecommend.appealDetail,
      appeals: state.patchRecommend.appeals,
      dontGo: state.patchRecommend.dontGo,
    });
  }, []);

  useEffect(() => {
    if (patchRecommend.priceType !== "") handlePatchRecommend();
  }, [patchRecommend]);

  const handlePatchRecommend = async () => {
    //keyword, appealDetail, dontGo POST 성공할 시
    await patchRecommendFriendDetail(
      patchRecommend,
      localStorage.getItem("accessToken"),
      localStorage.getItem("uuid"),
      handleSuccessPatchRecommend,
      handleFailRequest,
      handleReissuePatchRecommend,
    );
  };

  const handleSuccessPatchRecommend = () => {
    // 추천사 PATCH 성공할 시
    localStorage.setItem("priceType", patchRecommend.priceType);
    navigate(routePaths.Finish);
  };

  const handleFailRequest = (err: AxiosError) => {
    // keyword, appealDetail, dontG POST 실패할 시
    err.response && console.log(err.response.data);
    navigate(routePaths.Error);
  };

  const handleReissuePatchRecommend = async () => {
    // 액세스 토큰 만료 응답인지 확인
    const userData = await postMemberReissue(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"));
    if (userData) {
      localStorage.setItem("accessToken", userData["accessToken"]);
      localStorage.setItem("refreshToken", userData["refreshToken"]);
    }
    handlePatchRecommend();
  };

  const handleChooseSunguri = () => {
    // 썬구리 선택시
    setPatchRecommend({
      ...patchRecommend,
      priceType: "SUNGURI",
    });
  };

  const handleChooseMyRecommend = () => {
    // 추천사보기 선택 시
    setPatchRecommend({
      ...patchRecommend,
      priceType: "MY_REC",
    });
  };

  return (
    <St.ChooseGiftPage>
      <FixedHeader header="추천인 보상" progressRate={98} title1="🎁" title2="받고 싶은 선물을 선택해줘!" />

      <St.ButtonWrapper>
        <St.ChooseWorkButton type="button" onClick={handleChooseSunguri}>
          썬구리 20개
        </St.ChooseWorkButton>
        <St.ChooseWorkButton type="button" onClick={handleChooseMyRecommend}>
          내 추천사 보기
        </St.ChooseWorkButton>
      </St.ButtonWrapper>

      <ConsultantIconBtn />
    </St.ChooseGiftPage>
  );
}

const St = {
  ChooseGiftPage: styled.main`
    padding: 22rem 2rem 0;
  `,
  ButtonWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
  `,
  ChooseWorkButton: styled.button`
    width: 33.5rem;
    height: 7rem;
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors.neural};
    border-radius: 16px;
    color: ${({ theme }) => theme.colors.brown};
    ${({ theme }) => theme.fonts.sub2};

    display: flex;
    align-items: center;

    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
};
