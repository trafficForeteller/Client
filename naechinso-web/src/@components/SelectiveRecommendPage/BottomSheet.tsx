import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { IcPreviousBtn } from "../../asset/icons";
import { routePaths } from "../../core/routes/path";
import { GTM_CLASS_NAME } from "../../util/const/gtm";
import { TextAreaBox, ToggleTipBox } from "../@common";

interface BottomSheetProps {
  isBottomSheetOpened: boolean;
  closeModal: () => void;
  placeholder: string;
}

export default function BottomSheet(props: BottomSheetProps) {
  const { isBottomSheetOpened, closeModal, placeholder } = props;
  const navigate = useNavigate();
  const [selectiveRecommend, setSelectiveRecommend] = useState(localStorage.getItem("selectiveRecommend") || "");

  useEffect(() => {
    localStorage.setItem("selectiveRecommend", selectiveRecommend);
  }, [selectiveRecommend]);

  const isButtonDisabled = !selectiveRecommend || selectiveRecommend.length < 30;

  return (
    <>
      {(localStorage.getItem("checkedSelectiveQ") as string) && (
        <>
          <St.ModalBackground />
          <St.BottomSheet isBottomSheetOpened={isBottomSheetOpened}>
            <St.MovePrevButton onClick={closeModal} type="button">
              <IcPreviousBtn aria-label="모달 닫기" />
            </St.MovePrevButton>
            <ToggleTipBox />

            <St.Title>{localStorage.getItem("checkedSelectiveQ")}</St.Title>

            <TextAreaBox
              placeholder={placeholder}
              minLength={29}
              maxLength={150}
              text={selectiveRecommend}
              setText={setSelectiveRecommend}
              height={15}
              letterLimit="30자 이상 150자 이내"
              isModalOpened={false}
            />
            <St.Blank></St.Blank>
            <St.ButtonWrapper>
              <St.NextStepBtn
                type="button"
                disabled={isButtonDisabled}
                onClick={() => navigate(routePaths.DontGo)}
                className={GTM_CLASS_NAME.recommendSuccessWithSelectiveQuestion}>
                완성하기
              </St.NextStepBtn>
            </St.ButtonWrapper>
          </St.BottomSheet>
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
    height: 200vh;
    z-index: 98;
  `,
  BottomSheet: styled.main<{ isBottomSheetOpened: boolean }>`
    padding: 0 2rem 11rem;
    width: 100%;
    height: 75%;

    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 32px 32px 0px 0px;
    overflow-y: auto;

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
    height: 8rem;
  `,
  NextStepBtn: styled.button`
    bottom: 3.2rem;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.bold_16};
    width: 34.3rem;
    height: 4.8rem;
    border-radius: 12px;
    cursor: pointer;

    &:disabled {
      background-color: ${({ theme }) => theme.colors.orange20};
      cursor: default;
    }
  `,
  Blank: styled.div`
    width: 100%;
    margin-bottom: 3rem;
  `,
};
