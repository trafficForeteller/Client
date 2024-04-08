import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { IcClose, IcEmptyHeart, IcFullHeart } from "../../asset/icons";
import { routePaths } from "../../core/routes/path";

interface BottomSheetProps {
  isBottomSheetOpened: boolean;
  closeModal: () => void;
}

export default function BottomSheet(props: BottomSheetProps) {
  const { isBottomSheetOpened, closeModal } = props;
  const [selectedHearts, setSelectedHearts] = useState([false, false, false, false, false]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();

  // 하트 클릭 핸들러
  // 하트 클릭 핸들러
  const handleHeartClick = (index: number) => {
    const updatedHearts = selectedHearts.map((_, i) => i <= index);

    setSelectedHearts(updatedHearts);

    // 하나 이상의 하트가 선택되었을 때 버튼을 활성화합니다.
    setIsButtonDisabled(!updatedHearts.some((heart) => heart));
  };

  return (
    <>
      <St.ModalBackground />
      <St.BottomSheet isBottomSheetOpened={isBottomSheetOpened}>
        <St.ModalHeader>
          <St.Title>책이 마음에 들었나요?</St.Title>
          <St.CloseBtn type="button" onClick={closeModal}>
            <IcClose aria-label="모달 닫기" />
          </St.CloseBtn>
        </St.ModalHeader>

        <St.HeartWrapper>
          {selectedHearts.map((selected, index) =>
            selected ? (
              <IcFullHeart key={index} onClick={() => handleHeartClick(index)} />
            ) : (
              <IcEmptyHeart key={index} onClick={() => handleHeartClick(index)} />
            ),
          )}
        </St.HeartWrapper>

        <St.RecordBtn type="button" disabled={isButtonDisabled} onClick={() => navigate(routePaths.Landing)}>
          기록하기
        </St.RecordBtn>
      </St.BottomSheet>
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
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem 2rem 0;
    width: 100%;
    height: 30%;

    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 12px 12px 0px 0px;
    overflow-y: auto;

    animation: ${({ isBottomSheetOpened }) => (isBottomSheetOpened ? slideIn : slideOut)} 0.6s ease-in-out;

    z-index: 99;
    @media only screen and (min-width: 600px) {
      width: 37.5rem;
    }
  `,
  ModalHeader: styled.div`
    display: flex;
    width: 100%;
    padding-left: 32%;
    justify-content: space-between;
    align-items: center;
  `,
  Title: styled.h3`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.semi14};
  `,
  CloseBtn: styled.button``,
  HeartWrapper: styled.div`
    cursor: pointer;
    margin: 2.4rem 0 3rem;
  `,
  RecordBtn: styled.button`
    ${({ theme }) => theme.fonts.semi12};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.purple};
    border-radius: 12px;

    width: 31.4rem;
    height: 4rem;

    &:disabled {
      background-color: ${({ theme }) => theme.colors.lightPurple3};
    }
  `,
};
