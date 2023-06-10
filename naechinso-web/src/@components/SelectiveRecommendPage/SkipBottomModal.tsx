import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { postMemberReissue } from "../../apis/member.api";
import { getCheckPrice, patchRecommendFriendDetail, postRecommendation } from "../../apis/recommend.api";
import { IcWriting } from "../../asset/icons";
import { routePaths } from "../../core/routes/path";
import { IGetCheckPrice, IPatchFriendDetail } from "../../types/recommend";
import { WarningModal } from "../@common";

interface SkipBottomSheetProps {
  isBottomSheetOpened: boolean;
  closeModal: () => void;
}

export default function SkipBottomSheet(props: SkipBottomSheetProps) {
  const { isBottomSheetOpened, closeModal } = props;
  const [isWarningModalOpened, setIsWarningModalOpened] = useState(false);
  const [postRecommend, setPostRecommend] = useState({
    recommendQuestions: [
      {
        recommendQuestion: "",
        recommendAnswer: "",
      },
    ],
  });
  const [patchRecommend, setPatchRecommend] = useState<IPatchFriendDetail>({
    appealDetail: "",
    appeals: [],
    dontGo: "",
    priceType: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const modifiedFriendLoverType = `내 친구는 ${localStorage.getItem("friendLoverType")} 애인이랑 만났음 해!`;
    setPostRecommend({
      recommendQuestions: [
        {
          recommendQuestion: "친구는 어떤 사람이랑 어울릴 것 같아?",
          recommendAnswer: modifiedFriendLoverType,
        },
      ],
    });

    const modifiedAppealDetail = `내 친구는 ${localStorage.getItem("appealDetail")} 친구야!`;
    setPatchRecommend({
      ...patchRecommend,
      appealDetail: modifiedAppealDetail || "",
      appeals: JSON.parse(localStorage.getItem("appeals") || "[]"),
      dontGo: localStorage.getItem("dontGo") || "",
    });
  }, []);

  const handleSkip = () => {
    // 건너뛰기 선택 시 선택질문 작성된 것 삭제
    localStorage.removeItem("selectiveRecommend");
    localStorage.removeItem("checkedSelectiveQ");
    handleRegisterRecommender();
  };

  const handleRegisterRecommender = async () => {
    // 추천사 등록하기
    await postRecommendation(
      postRecommend,
      localStorage.getItem("accessToken"),
      localStorage.getItem("uuid"),
      handleSuccessPostRecommendation,
      handleFailRequest,
      handleReissuePostRecommendation,
    );
  };

  const handleSuccessPostRecommendation = async () => {
    // 상품을 받을 수 있는 추천사인지 확인하는 함수 실행
    handleGetCheckPrice();
  };

  const handleGetCheckPrice = async () => {
    // 상품을 받을 수 있는 추천사인지 확인
    await getCheckPrice(
      localStorage.getItem("accessToken"),
      localStorage.getItem("uuid"),
      handleSuccessGetCheckPrice,
      handleFailRequest,
      handleReissueGetCheckPrice,
    );
  };

  const handleSuccessGetCheckPrice = (userData: IGetCheckPrice) => {
    if (userData.isPrice === false) {
      setPatchRecommend({
        ...patchRecommend,
        priceType: "NONE",
      });
    } else if (userData.isPrice === true && userData.isShowRecommend === true) {
      setPatchRecommend({
        ...patchRecommend,
        priceType: "SUNGURI",
      });
    } else if (userData.isPrice === true && userData.isShowRecommend === false) {
      navigate(routePaths.ChooseGift, { state: { patchRecommend } });
    }
  };

  useEffect(() => {
    // patchRecommend 성공 시
    if (patchRecommend.priceType !== "") handlePatchRecommend();
  }, [patchRecommend]);

  const handlePatchRecommend = async () => {
    // keyword, appealDetail, dontGo POST
    await patchRecommendFriendDetail(
      patchRecommend,
      localStorage.getItem("accessToken"),
      localStorage.getItem("uuid"),
      handleSuccessPatchRecommend,
      handleFailPatchRecommend,
      handleReissuePatchRecommend,
    );
  };

  const handleSuccessPatchRecommend = () => {
    // 추천사 PATCH 성공할 시
    localStorage.setItem("priceType", patchRecommend.priceType);
    navigate(routePaths.Finish);
  };

  const handleFailPatchRecommend = (err: AxiosError) => {
    // keyword, appealDetail, dontG POST 실패할 시
    const errData = err.response && (err.response.data as Error);
    const errorMessage = errData && (errData.message as string);
    console.log(errorMessage);

    if (errorMessage === "비속어가 포함되어 있습니다") setIsWarningModalOpened(true);
    else navigate(routePaths.Error);
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

  const handleReissueGetCheckPrice = async () => {
    // 액세스 토큰 만료 응답인지 확인
    const userData = await postMemberReissue(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"));
    if (userData) {
      localStorage.setItem("accessToken", userData["accessToken"]);
      localStorage.setItem("refreshToken", userData["refreshToken"]);
    }
    handleGetCheckPrice();
  };

  const handleFailRequest = (errorMessage: string) => {
    //  postRecommendation 실패할 시
    console.log(errorMessage);
    navigate(routePaths.Error);
  };

  const handleReissuePostRecommendation = async () => {
    // 액세스 토큰 만료 응답인지 확인
    const userData = await postMemberReissue(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"));
    if (userData) {
      localStorage.setItem("accessToken", userData["accessToken"]);
      localStorage.setItem("refreshToken", userData["refreshToken"]);
    }
    handleRegisterRecommender();
  };

  return (
    <>
      <St.ModalBackground />
      <St.BottomSheet isBottomSheetOpened={isBottomSheetOpened}>
        <St.ImgWrapper>
          <IcWriting />
        </St.ImgWrapper>
        <St.TitleWrapper>
          <St.Title>선택질문 답변하면</St.Title>
          <St.Title>친구가 더 좋은 사람과</St.Title>
          <St.Title>만날 수 있는데도..?🥺</St.Title>
        </St.TitleWrapper>

        <St.ButtonWrapper>
          <St.CloseBtn type="button" onClick={closeModal}>
            작성할래
          </St.CloseBtn>
          <St.NextStepBtn type="button" onClick={handleSkip}>
            건너 뛰기
          </St.NextStepBtn>
        </St.ButtonWrapper>
      </St.BottomSheet>
      {isWarningModalOpened && (
        <WarningModal
          title1="상대방의 마음을 돌릴"
          title2="한 마디를 다시 작성해줘🥺"
          desc1="비속어가 포함되어 있는지 확인해줘!"
          buttonTitle="응 수정할게!"
          setIsWarningModalOpened={setIsWarningModalOpened}
        />
      )}
    </>
  );
}

const slideIn = keyframes`
  from {
    transform: translateY(35%);
  }
  to {
    transform: translateY(0%)
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(100%)
  }
`;

const St = {
  ModalBackground: styled.div`
    background-color: rgba(0, 0, 0, 0.64);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 98;
  `,
  BottomSheet: styled.main<{ isBottomSheetOpened: boolean }>`
    padding: 2rem 2rem 11rem;
    width: 100%;
    height: 60%;

    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 32px 32px 0px 0px;

    animation: ${({ isBottomSheetOpened }) => (isBottomSheetOpened ? slideIn : slideOut)} 0.6s ease-in-out;

    display: flex;
    flex-direction: column;
    align-items: center;

    z-index: 99;
    @media only screen and (min-width: 600px) {
      width: 37.5rem;
    }
  `,
  ImgWrapper: styled.article`
    width: 10.4rem;
    height: 10.4rem;
  `,
  MovePrevButton: styled.button`
    cursor: pointer;
    padding: 2rem 0;
  `,
  TitleWrapper: styled.hgroup`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.8rem 0 4rem;
  `,
  Title: styled.h1`
    ${({ theme }) => theme.fonts.head3};
    color: ${({ theme }) => theme.colors.black};
  `,
  ButtonWrapper: styled.section`
    width: 37.5rem;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 4rem;
    padding: 0 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  `,
  CloseBtn: styled.button`
    bottom: 3.5rem;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.body8};
    width: 100%;
    height: 4.8rem;
    border-radius: 16px;
    cursor: pointer;
  `,
  NextStepBtn: styled.button`
    bottom: 3.5rem;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.orange};
    border: 1px solid ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fonts.body8};
    width: 100%;
    height: 4.8rem;
    border-radius: 16px;
    cursor: pointer;
  `,
};
