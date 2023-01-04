import { useEffect, useState } from "react";
import styled from "styled-components";

import TimeLimit from "./TimeLimit";

export interface AuthenticationNumProps {
  inputActive: boolean;
  setInputActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AuthenticationNumInput(props: AuthenticationNumProps) {
  const { inputActive, setInputActive } = props;

  const [authNum, setAuthNum] = useState("");
  const [count, setCount] = useState(3);

  const checkAuthenticationNumLength = (authNum: string) => {
    //인증번호 길이 확인해 label글자색, nextBtn 색 변화
    if (authNum.length === 6) setInputActive(false);
    else setInputActive(true);
  };

  const autoHyphen = (authNum: string) => {
    // 인증번호 정규식
    setAuthNum(authNum.replace(/[^0-9]/g, ""));
    checkAuthenticationNumLength(authNum);
  };

  const handlePhoneNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 인증번호 handle 함수
    autoHyphen(e.target.value);
  };

  return (
    <St.AuthenticationNumInputBox>
      <St.LabelWrapper>
        <St.Label inputActive={inputActive}>인증번호</St.Label>
        <TimeLimit inputActive={inputActive} setInputActive={setInputActive} count={count} setCount={setCount} />
      </St.LabelWrapper>

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
  AuthenticationNumInputBox: styled.section`
    width: 33.5rem;
    height: 8rem;

    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.colors.neural};
    padding: 1rem 2rem 1.6rem;
  `,
  LabelWrapper: styled.article`
    display: flex;
    align-items: center;
    gap: 1rem;
  `,
  Label: styled.p<{ inputActive: boolean }>`
    color: ${({ theme, inputActive }) => (inputActive ? theme.colors.orange : theme.colors.black40)};
    ${({ theme }) => theme.fonts.body2};
  `,
  Count: styled.p`
    color: ${({ theme }) => theme.colors.orange};
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
