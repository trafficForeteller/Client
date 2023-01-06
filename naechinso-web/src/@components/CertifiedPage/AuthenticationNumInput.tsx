import { useEffect } from "react";
import styled from "styled-components";

import TimeLimit from "./TimeLimit";

export interface AuthenticationNumProps {
  inputActive: boolean;
  setInputActive: React.Dispatch<React.SetStateAction<boolean>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  authNum: string;
  inputborder: boolean;
  handleAuthNum: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkAuthNumLength: (authNum: string) => void;
}

export default function AuthenticationNumInput(props: AuthenticationNumProps) {
  const { inputActive, setInputActive, count, setCount, authNum, inputborder, checkAuthNumLength, handleAuthNum } =
    props;

  useEffect(() => {
    checkAuthNumLength(authNum);
  }, [authNum]);

  return (
    <St.AuthenticationNumInputBox inputborder={inputborder}>
      <St.LabelWrapper>
        <St.Label inputActive={inputActive}>인증번호</St.Label>
        <TimeLimit inputActive={inputActive} setInputActive={setInputActive} count={count} setCount={setCount} />
      </St.LabelWrapper>

      <St.Input
        type="text"
        value={authNum}
        onChange={handleAuthNum}
        placeholder={"인증번호를 입력해줘"}
        maxLength={6}
      />
    </St.AuthenticationNumInputBox>
  );
}

const St = {
  AuthenticationNumInputBox: styled.section<{ inputborder: boolean }>`
    width: 33.5rem;
    height: 8rem;
    border: 2px solid ${({ theme, inputborder }) => (inputborder ? theme.colors.error : "transparent")};
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
