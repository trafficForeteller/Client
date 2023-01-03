import { useState } from "react";
import styled from "styled-components";

export interface AuthenticationNumProps {
  inputActive: boolean;
  setInputActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AuthenticationNumInput(props: AuthenticationNumProps) {
  const { inputActive, setInputActive } = props;

  const [authNum, setAuthNum] = useState("");

  const checkAuthenticationNumLength = (authNum: string) => {
    if (authNum.length === 6) setInputActive(false);
    else setInputActive(true);
  };

  const autoHyphen = (authNum: string) => {
    setAuthNum(authNum.replace(/[^0-9]/g, ""));
    checkAuthenticationNumLength(authNum);
  };

  const handlePhoneNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    autoHyphen(e.target.value);
  };

  return (
    <St.AuthenticationNumInputBox>
      <St.Label inputActive={inputActive}>인증번호</St.Label>

      <St.Input
        type="text"
        value={authNum}
        onChange={handlePhoneNum}
        placeholder={"인증번호를 입력해줘"}
        maxLength={6}
      />
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

  Input: styled.input`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};

    &::placeholder {
      color: ${({ theme }) => theme.colors.black20};
    }
  `,
};
