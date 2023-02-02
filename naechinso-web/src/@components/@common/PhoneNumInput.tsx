import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export interface IPostPhoneNumber {
  phoneNumber: string;
}

export interface PhoneNumInputProps {
  label: string;
  placeholder: string;
  inputActive: boolean;
  setInputActive: React.Dispatch<React.SetStateAction<boolean>>;
  setPostPhoneNum?: React.Dispatch<React.SetStateAction<IPostPhoneNumber>>;
}

export default function PhoneNumInputBox(props: PhoneNumInputProps) {
  const { label, placeholder, inputActive, setInputActive, setPostPhoneNum } = props;
  const [phoneNum, setPhoneNum] = useState("");
  const inputFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const inputFocusCurrent = inputFocus && (inputFocus.current as HTMLInputElement);
    inputFocusCurrent.focus();
  }, []);

  const checkPhoneNumLength = (phoneNum: string) => {
    //휴대폰번호 길이 확인해 label글자색, nextBtn 색 변화
    if (phoneNum.length === 8) setInputActive(false);
    else setInputActive(true);
  };

  const processPhoneNum = (phoneNum: string) => {
    // 입력한 번호의 공백제거 && 010붙여주기
    const postPhoneNum = "010" + phoneNum.replace(/ /g, "");
    setPostPhoneNum && setPostPhoneNum({ phoneNumber: postPhoneNum });
  };

  const autoHyphen = (phoneNum: string) => {
    // 전화번호 정규식
    setPhoneNum(phoneNum);
    checkPhoneNumLength(phoneNum);
    processPhoneNum(phoneNum);
  };

  const handlePhoneNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    //휴대폰번호 handle 함수
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    autoHyphen(e.target.value);
  };

  return (
    <St.PhoneNumInputBox>
      <St.Label inputActive={inputActive}>{label}</St.Label>
      <St.InputWrapper>
        <St.FrontPhoneNum>010</St.FrontPhoneNum>
        <St.Input
          type="number"
          pattern="\d*"
          value={phoneNum}
          onChange={handlePhoneNum}
          placeholder={placeholder}
          maxLength={8}
          ref={inputFocus}
          style={{
            color: "#111111",

            fontFamily: "Pretendard",
            fontWeight: "700",
            fontSize: "2rem",
            lineHeight: "3rem",
          }}
        />
      </St.InputWrapper>
    </St.PhoneNumInputBox>
  );
}

const St = {
  PhoneNumInputBox: styled.section`
    width: 33.5rem;
    height: 8rem;

    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.colors.neural};
    padding: 1rem 2rem 1.6rem;
    margin: 0 auto;
  `,
  Label: styled.p<{ inputActive: boolean }>`
    color: ${({ theme, inputActive }) => (inputActive ? theme.colors.orange : theme.colors.black40)};
    ${({ theme }) => theme.fonts.body2};
  `,
  InputWrapper: styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};
  `,
  FrontPhoneNum: styled.span``,
  Input: styled.input`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};
    display: flex;
    justify-content: center;
    width: 100%;
    margin-left: 0.2rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.black20};
    }
  `,
};
