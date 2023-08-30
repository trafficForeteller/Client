import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { IcClose } from "../../asset/icons";
import { routePaths } from "../../core/routes/path";
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
            <St.ModalHeader>
              <St.Title>답변 작성</St.Title>
              <St.CloseBtn type="button" onClick={closeModal}>
                <IcClose aria-label="모달 닫기" />
              </St.CloseBtn>
            </St.ModalHeader>
            <ToggleTipBox />

            <St.Question>{localStorage.getItem("checkedSelectiveQ")}</St.Question>

            <TextAreaBox
              placeholder={placeholder}
              minLength={29}
              maxLength={300}
              text={selectiveRecommend}
              setText={setSelectiveRecommend}
              height={13}
              letterLimit="최소 30자"
              isModalOpened={false}
            />
            <St.Blank></St.Blank>
            <St.ButtonWrapper>
              <St.NextStepBtn type="button" disabled={isButtonDisabled} onClick={() => navigate(routePaths.DontGo)}>
                다음
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
    transform: translateY(30%);
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
    overflow: hidden;
  `,
  BottomSheet: styled.main<{ isBottomSheetOpened: boolean }>`
    padding: 2rem 2rem 8rem;
    width: 100%;
    height: 78%;

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
  ModalHeader: styled.div`
    display: flex;
    padding-left: 37%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.8rem;
  `,
  Title: styled.h3`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};
  `,
  CloseBtn: styled.button``,
  MovePrevButton: styled.button`
    cursor: pointer;
    padding: 2rem 0;
  `,
  Question: styled.h1`
    ${({ theme }) => theme.fonts.bold_16};
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 1.8rem;

    display: flex;
    align-items: baseline;
  `,
  ButtonWrapper: styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 2rem;
    height: 8rem;
    z-index: 99;
  `,
  NextStepBtn: styled.button`
    bottom: 3.2rem;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.bold_15};
    width: 32.7rem;
    height: 4.8rem;
    border-radius: 12px;
    cursor: pointer;

    &:disabled {
      background-color: ${({ theme }) => theme.colors.orange20};
      cursor: default;
    }
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
  Blank: styled.div`
    width: 100%;
    margin-bottom: 3rem;
  `,
};
