import { useState } from "react";
import styled, { keyframes } from "styled-components";

import { IcClose } from "../../asset/icons";
import { keywordProps } from "../../core/recommend/recommend";
import MoveNextPageBtn from "./MoveNextPageBtn";

interface AddKeywordModalProps {
  closeModal: () => void;
  isOpenKeywordModal: boolean;
  keywordArr: keywordProps[];
  setKeywordArr: React.Dispatch<React.SetStateAction<keywordProps[]>>;
  questionNum: number;
}

export default function AddKeywordModal(props: AddKeywordModalProps) {
  const { closeModal, isOpenKeywordModal, keywordArr, setKeywordArr, questionNum } = props;
  const [text, setText] = useState("");

  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const byteLength = new TextEncoder().encode(e.target.value).length;
    if (byteLength <= 15) {
      setText(e.target.value);
    } else {
      setText(e.target.value.slice(0, 15)); // 최대 길이를 15로 제한
    }
  };

  const handleAddKeywordModal = () => {
    if (text.trim() === "") {
      closeModal();
      setText("");
      return; // 추가되지 않도록 함수 종료
    }

    const exists = keywordArr.some((keyword) => keyword.keyword === text);
    if (!exists && questionNum === 2) {
      const newKeyword = {
        id: keywordArr.length,
        keyword: text,
        checked: true,
      };
      const updatedKeywordArr = keywordArr.map((keyword) => {
        return { ...keyword, checked: false };
      });
      setKeywordArr([...updatedKeywordArr, newKeyword]);
    } else if (!exists && questionNum === 3) {
      if (keywordArr.filter((item) => item.checked).length === 3) {
        //arr가 3개일 때, item checked가 false인 키워드 추가
        const newKeyword = {
          id: keywordArr.length,
          keyword: text,
          checked: false,
        };
        setKeywordArr([...keywordArr, newKeyword]);
      } else {
        // arr가 2개 이하면, item checked가 true인 키워드 추가
        const newKeyword = {
          id: keywordArr.length,
          keyword: text,
          checked: true,
        };
        setKeywordArr([...keywordArr, newKeyword]);
      }
    } else {
      const updatedKeywordArr = keywordArr.map((keyword) => {
        if (keyword.keyword === text) return { ...keyword, checked: true };
        else return { ...keyword, checked: false };
      });
      setKeywordArr(updatedKeywordArr);
    }
    closeModal();
    setText("");
  };

  const isButtonDisabled = text.length < 5 || text.length > 15;

  return (
    <>
      <St.ModalBackground />
      <St.AddKeywordModal isOpenKeywordModal={isOpenKeywordModal}>
        <St.ModalHeader>
          <St.Title>키워드 추가</St.Title>
          <St.CloseBtn type="button" onClick={closeModal}>
            <IcClose aria-label="모달 닫기" />
          </St.CloseBtn>
        </St.ModalHeader>
        <St.AddKeywordBox focused={isInputFocused}>
          <St.AddKeywordInput
            type="text"
            value={text}
            onChange={handleText}
            minLength={5}
            maxLength={15}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder={questionNum === 3 ? "ex) 책을 많이 읽는📚" : "ex)사랑스러운❤️"}
          />
          <St.InputCaptionWrapper>
            <St.Minimum>최소 5자</St.Minimum>
            <St.TextCountWrapper>
              <St.TextCount count={text.length}>{text ? text.length : 0}</St.TextCount> / 15
            </St.TextCountWrapper>
          </St.InputCaptionWrapper>
        </St.AddKeywordBox>

        <MoveNextPageBtn title="완료" disabled={isButtonDisabled} handleState={handleAddKeywordModal} />
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
  AddKeywordBox: styled.main<{ focused: boolean }>`
    display: inline-flex;
    flex-direction: column;
    width: 100%;
    gap: 1.6rem;
    margin-top: 2rem;
    padding: 1.6rem 1.4rem 1.2rem 1.6rem;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors.gray5};
    border: ${({ theme, focused }) => (focused ? `1px solid ${theme.colors.orange}` : "")};
  `,
  AddKeywordInput: styled.input`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.reg_15};

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
  Minimum: styled.p`
    color: ${({ theme }) => theme.colors.gray100};
    ${({ theme }) => theme.fonts.reg_12};
  `,
  TextCountWrapper: styled.span`
    color: ${({ theme }) => theme.colors.gray100};
    ${({ theme }) => theme.fonts.reg_12};
  `,
  TextCount: styled.b<{ count: number }>`
    color: ${({ theme, count }) => (count === 0 ? theme.colors.gray30 : theme.colors.orange)};
  `,
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
    ${({ theme }) => theme.fonts.bold_16};
    width: 32.7rem;
    height: 4.8rem;
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
