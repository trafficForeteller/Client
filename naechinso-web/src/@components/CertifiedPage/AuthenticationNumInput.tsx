import { useState } from "react";
import styled from "styled-components";

export interface AuthenticationNumProps {
  inputActive: boolean;
  setInputActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AuthenticationNumInput(props: AuthenticationNumProps) {
  const { inputActive, setInputActive } = props;

  const [phoneNum, setPhoneNum] = useState("");

  const checkPhoneNumLength = (phoneNum: string) => {
    if (phoneNum.length === 9) setInputActive(false);
    else setInputActive(true);
  };

  const autoHyphen = (phoneNum: string) => {
    setPhoneNum(phoneNum.replace(/[^0-9]/g, "").replace(/^(\d{3,4})(\d{4})$/g, "$1 $2"));
    checkPhoneNumLength(phoneNum);
  };

  const handlePhoneNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    autoHyphen(e.target.value);
  };

  return (
    <St.AuthenticationNumInputBox>
      <St.Label inputActive={inputActive}>인증번호</St.Label>
      <St.InputWrapper>
        <St.Input
          type="text"
          value={phoneNum}
          onChange={handlePhoneNum}
          placeholder={"인증번호를 입력해줘"}
          maxLength={9}
        />
      </St.InputWrapper>
    </St.AuthenticationNumInputBox>
  );
}

const St = {
  AuthenticationNumInputBox: styled.article`
    width: 33.5rem;
    height: 8rem;

    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.colors.neural};
    padding: 1rem 2rem 1.6rem;
  `,
  Label: styled.p<{ inputActive: boolean }>`
    color: ${({ theme, inputActive }) => (inputActive ? theme.colors.orange : theme.colors.black40)};
    ${({ theme }) => theme.fonts.body2};
  `,
  InputWrapper: styled.article`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};
  `,
  FrontPhoneNum: styled.span``,
  Input: styled.input`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};

    &::placeholder {
      color: ${({ theme }) => theme.colors.black20};
    }
  `,
};
