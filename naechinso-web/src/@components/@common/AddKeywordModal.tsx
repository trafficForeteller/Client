import { useState } from "react";
import styled, { keyframes } from "styled-components";

import { IcClose } from "../../asset/icons";

interface AddKeywordModalProps {
  closeModal: () => void;
  isOpenKeywordModal: boolean;
}

export default function AddKeywordModal(props: AddKeywordModalProps) {
  const { closeModal, isOpenKeywordModal } = props;
  const [text, setText] = useState("");

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const byteLength = new TextEncoder().encode(e.target.value).length;
    if (byteLength <= 6) {
      setText(e.target.value);
    } else {
      setText(e.target.value.slice(0, 6)); // 최대 길이를 6으로 제한
    }
  };

  const checkMinLength = () => text.length > 0;

  return (
    <>
      <St.ModalBackground />
      <St.AddKeywordModal isOpenKeywordModal={isOpenKeywordModal}>
        <St.ModalHeader>
          <St.Title>키워드 추가</St.Title>
          <St.CloseBtn type="button" onClick={closeModal}>
            <IcClose />
          </St.CloseBtn>
        </St.ModalHeader>
        <St.AddKeywordBox>
          <St.AddKeywordInput
            type="text"
            value={text}
            onChange={handleText}
            minLength={1}
            maxLength={6}
            placeholder="ex)사랑스러워🎀"
          />
          <St.InputCaptionWrapper>
            <St.Maximum>최대 6자</St.Maximum>
            <St.TextCountWrapper>
              <St.TextCount>{text ? text.length : 0}</St.TextCount>/6
            </St.TextCountWrapper>
          </St.InputCaptionWrapper>
        </St.AddKeywordBox>

        <St.NextStepBtnWrapper>
          <St.NextStepBtn type="button" disabled={!checkMinLength}>
            완료
          </St.NextStepBtn>
        </St.NextStepBtnWrapper>
      </St.AddKeywordModal>
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
    z-index: 999;
  `,
  AddKeywordModal: styled.section<{ isOpenKeywordModal: boolean }>`
    z-index: 1000;
    width: 37.5rem;
    height: 60%;
    padding: 2rem 2.4rem 0;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 16px;

    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 32px 32px 0px 0px;

    animation: ${({ isOpenKeywordModal }) => (isOpenKeywordModal ? slideIn : slideOut)} 0.6s ease-in-out;
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  `,
  ModalHeader: styled.div`
    display: flex;
    padding-left: 37%;
    justify-content: space-between;
    align-items: center;
  `,
  Title: styled.h3`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};
  `,
  CloseBtn: styled.button``,
  AddKeywordBox: styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.2rem;
    margin-top: 4.8rem;
  `,
  AddKeywordInput: styled.input`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub3};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray30};
    padding: 0.2rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray40};
    }
  `,
  InputCaptionWrapper: styled.article`
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.gray40};
    ${({ theme }) => theme.fonts.caption3};
  `,
  Maximum: styled.p`
    color: ${({ theme }) => theme.colors.gray40};
    ${({ theme }) => theme.fonts.caption3};
  `,
  TextCountWrapper: styled.span``,
  TextCount: styled.b``,
  NextStepBtnWrapper: styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 2rem;
    height: 11rem;
  `,
  NextStepBtn: styled.button`
    bottom: 3.5rem;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.sub3};
    width: 33.5rem;
    height: 5.6rem;
    border-radius: 16px;

    &:disabled {
      background-color: ${({ theme }) => theme.colors.orange20};
      cursor: default;
    }
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
};
