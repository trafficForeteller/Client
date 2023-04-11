import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { postMemberReissue } from "../../apis/member.api";
import { postRecommendation } from "../../apis/recommend.api";
import { IcPreviousBtn } from "../../asset/icons";
import { routePaths } from "../../core/routes/path";
import { MoveNextPageBtn, TextAreaBox, ToggleTipBox, ToolTipBox } from "../@common";

interface BottomSheetProps {
  isBottomSheetOpened: boolean;
  closeModal: () => void;
}

export default function BottomSheet(props: BottomSheetProps) {
  const { isBottomSheetOpened, closeModal } = props;
  const [firstRecommend, setFirstRecommend] = useState("");
  const [postRecommend, setPostRecommend] = useState({
    recommendQuestions: [
      {
        recommendQuestion: "",
        recommendAnswer: "",
      },
    ],
  });
  const navigate = useNavigate();
  const [isToolTipOpened, setIsToolTipOpened] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("firstRecommend")) {
      const recommendInLocal = localStorage.getItem("firstRecommend") as string;
      setFirstRecommend(recommendInLocal);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("firstRecommend", firstRecommend);
    parseLocalStorage("checkedQ1") &&
      setPostRecommend({
        recommendQuestions: [
          {
            recommendQuestion: parseLocalStorage("checkedQ1").question,
            recommendAnswer: firstRecommend,
          },
        ],
      });
  }, [firstRecommend]);

  const isButtonDisabled = !firstRecommend || firstRecommend.length < 50;

  const parseLocalStorage = (item: string) => {
    //  localStorage에 저장된 친구가 배열 혹은 object일 때 JSON.parse하는 함수
    const itemInLocal = localStorage.getItem(`${item}`) as string;
    const parseItem = JSON.parse(itemInLocal);
    return parseItem;
  };

  const handleRegisterRecommender = async () => {
    // 추천사 등록하기
    localStorage.getItem("seconedRecommend") === null && setIsToolTipOpened(true);
    await postRecommendation(
      postRecommend,
      localStorage.getItem("accessToken"),
      localStorage.getItem("uuid"),
      handleSuccessPostRecommendation,
      handleFailRequest,
      handleReissuePostRecommendation,
    );
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

  const handleSuccessPostRecommendation = async () => {
    setTimeout(() => {
      navigate(routePaths.SecondRecommend);
    }, 1500);
  };

  const handleFailRequest = (errorMessage: string) => {
    //  postRecommendation 실패할 시
    console.log(errorMessage);
    navigate(routePaths.Error);
  };

  return (
    <>
      <St.ModalBackground />
      <St.BottomSheet isBottomSheetOpened={isBottomSheetOpened}>
        <St.MovePrevButton onClick={closeModal} type="button">
          <IcPreviousBtn aria-label="모달 닫기" />
        </St.MovePrevButton>
        <St.Title>{parseLocalStorage("checkedQ1").question}</St.Title>

        <ToggleTipBox />

        <TextAreaBox
          placeholder={parseLocalStorage("checkedQ1").placeholder}
          minLength={49}
          maxLength={150}
          text={firstRecommend}
          setText={setFirstRecommend}
          height={13}
          letterLimit="50자 이상 150자 이내"
          isModalOpened={false}
          textareaScroll={true}
        />

        {isToolTipOpened && <ToolTipBox text="잘했어! 얼마나 괜찮은 친구인지 궁금한데?" bottom={13} />}
        <MoveNextPageBtn title="다음" disabled={isButtonDisabled} handleState={handleRegisterRecommender} />
      </St.BottomSheet>
    </>
  );
}

const slideIn = keyframes`
  from {
    transform: translateY(70%);
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
    height: 90%;

    position: fixed;
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
};
