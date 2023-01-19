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
        <St.Label inputActive={inputActive} inputborder={inputborder}>
          인증번호
        </St.Label>
        <TimeLimit
          inputActive={inputActive}
          setInputActive={setInputActive}
          count={count}
          setCount={setCount}
          inputborder={inputborder}
        />
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
    border: 1px solid ${({ theme, inputborder }) => (inputborder ? theme.colors.error : "transparent")};
    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.colors.neural};
    padding: 1rem 2rem 1.6rem;
  `,
  LabelWrapper: styled.article`
    display: flex;
    align-items: center;
    gap: 1rem;
  `,
  Label: styled.p<{ inputActive: boolean; inputborder: boolean }>`
    color: ${({ inputActive, inputborder }) => (inputborder ? "#FF3A3A" : inputActive ? "#FF7A00" : "#ABABAE")};
    ${({ theme }) => theme.fonts.body2};
  `,
  Input: styled.input`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};
    display: flex;
    justify-content: center;
    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.colors.black20};
    }
  `,
};
