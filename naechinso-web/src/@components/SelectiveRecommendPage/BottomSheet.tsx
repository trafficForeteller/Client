import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { postMemberReissue } from "../../apis/member.api";
import { getCheckPrice, patchRecommendFriendDetail, postRecommendation } from "../../apis/recommend.api";
import { IcPreviousBtn } from "../../asset/icons";
import { selectiveRecommendList } from "../../core/recommend/recommend";
import { routePaths } from "../../core/routes/path";
import { IGetCheckPrice, IPatchFriendDetail } from "../../types/recommend";
import { GTM_CLASS_NAME } from "../../util/const/gtm";
import { TextAreaBox, WarningModal } from "../@common";

interface BottomSheetProps {
  isBottomSheetOpened: boolean;
  closeModal: () => void;
  placeholder: string;
}

export default function BottomSheet(props: BottomSheetProps) {
  const { isBottomSheetOpened, closeModal, placeholder } = props;
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

  const [selectiveRecommend, setSelectiveRecommend] = useState("");

  useEffect(() => {
    if (localStorage.getItem("selectiveRecommend")) {
      const selectiveRecommendInLocal = localStorage.getItem("selectiveRecommend") as string;
      setSelectiveRecommend(selectiveRecommendInLocal);
    } else if (localStorage.getItem("firstRecommend")) {
      const firstRecommendInLocal = localStorage.getItem("firstRecommend") as string;
      setSelectiveRecommend(firstRecommendInLocal);
    }

    // 한꺼번에 서버에 전송
    const modifiedAppealDetail = `내 친구는 ${localStorage.getItem("appealDetail")} 친구야!`;
    setPatchRecommend({
      ...patchRecommend,
      appealDetail: modifiedAppealDetail || "",
      appeals: JSON.parse(localStorage.getItem("appeals") || "[]"),
      dontGo: localStorage.getItem("dontGo") || "",
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("selectiveRecommend", selectiveRecommend);
  }, [selectiveRecommend]);

  const isButtonDisabled = !selectiveRecommend || selectiveRecommend.length < 10;

  const handleSubmit = () => {
    // 제출하기 선택 시  postRecommend 채우기
    const modifiedFriendLoverType = `내 친구는 ${localStorage.getItem("friendLoverType")} 애인이랑 만났음 해!`;
    setPostRecommend({
      recommendQuestions: [
        {
          recommendQuestion: "친구는 어떤 사람이랑 어울릴 것 같아?",
          recommendAnswer: modifiedFriendLoverType,
        },
        {
          recommendQuestion: localStorage.getItem("checkedSelectiveQ") as string,
          recommendAnswer: selectiveRecommend,
        },
      ],
    });
  };

  useEffect(() => {
    if (postRecommend.recommendQuestions.length > 1) handleRegisterRecommender();
  }, [postRecommend]);

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
      {(localStorage.getItem("checkedSelectiveQ") as string) && (
        <>
          <St.ModalBackground />
          <St.BottomSheet isBottomSheetOpened={isBottomSheetOpened}>
            <St.MovePrevButton onClick={closeModal} type="button">
              <IcPreviousBtn aria-label="모달 닫기" />
            </St.MovePrevButton>
            <St.Title>{localStorage.getItem("checkedSelectiveQ")}</St.Title>

            <TextAreaBox
              placeholder={placeholder}
              minLength={9}
              maxLength={150}
              text={selectiveRecommend}
              setText={setSelectiveRecommend}
              height={8}
              letterLimit="10자 이상 150자 이내"
              isModalOpened={false}
              textareaScroll={true}
            />

            <St.ButtonWrapper>
              <St.CloseBtn type="button" onClick={closeModal}>
                닫기
              </St.CloseBtn>
              <St.NextStepBtn
                type="button"
                disabled={isButtonDisabled}
                onClick={handleSubmit}
                className={GTM_CLASS_NAME.recommendSuccessWithSelectiveQuestion}>
                완성하기
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
    padding: 0 2rem 11rem;
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

    z-index: 99;
    @media only screen and (min-width: 600px) {
      width: 37.5rem;
    }
  `,
  MovePrevButton: styled.button`
    cursor: pointer;
    padding: 2rem 0;
  `,
  Title: styled.h1`
    ${({ theme }) => theme.fonts.sub2};
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 1.8rem;
  `,
  ButtonWrapper: styled.section`
    display: flex;
    justify-content: center;
    width: 37.5rem;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 2rem;
    height: 11rem;

    display: flex;
    justify-content: space-between;
    gap: 1.1rem;
  `,
  CloseBtn: styled.button`
    bottom: 3.5rem;
    background-color: ${({ theme }) => theme.colors.neural};
    color: ${({ theme }) => theme.colors.gray40};
    ${({ theme }) => theme.fonts.sub3};
    width: 47%;
    height: 5.6rem;
    border-radius: 16px;
    cursor: pointer;
    @media only screen and (min-width: 600px) {
      width: 16.2rem;
    }
  `,
  NextStepBtn: styled.button`
    bottom: 3.5rem;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.sub3};
    width: 47%;
    height: 5.6rem;
    border-radius: 16px;
    cursor: pointer;

    &:disabled {
      background-color: ${({ theme }) => theme.colors.orange20};
      cursor: default;
    }

    @media only screen and (min-width: 600px) {
      width: 16.2rem;
    }
  `,
};
