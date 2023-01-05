import { useEffect, useState } from "react";
import styled from "styled-components";

import { postSmsVerify } from "../../apis/sms.api";
import { IPostPhoneNumber, IPostVerifyPhoneNumber } from "../../types/sms";
import TimeLimit from "./TimeLimit";

export interface AuthenticationNumProps {
  inputActive: boolean;
  setInputActive: React.Dispatch<React.SetStateAction<boolean>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  authNum: string;
  setAuthNum: React.Dispatch<React.SetStateAction<string>>;
  postPhoneNum: IPostPhoneNumber;
}

export default function AuthenticationNumInput(props: AuthenticationNumProps) {
  const { inputActive, setInputActive, count, setCount, authNum, setAuthNum, postPhoneNum } = props;
  const [postAuthNum, setPostAuthNum] = useState<IPostVerifyPhoneNumber>({
    code: "",
    phoneNumber: postPhoneNum.phoneNumber,
  });

  useEffect(() => {
    checkAuthNumLength(authNum);
  }, [authNum]);

  useEffect(() => {
    if (postAuthNum.code === "") return;
    verifyAuthNum();
  }, [postAuthNum]);

  const checkAuthNumLength = (authNum: string) => {
    //인증번호 길이 확인해 label글자색, nextBtn 색 변화
    if (authNum.length === 6) {
      setPostAuthNum({ ...postAuthNum, code: authNum });
      setInputActive(false);
    } else setInputActive(true);
  };

  const enterNumOnly = (inputNum: string) => {
    // input에 숫자만 입력가능케하는 정규식
    setAuthNum(inputNum.replace(/[^0-9]/g, ""));
    checkAuthNumLength(authNum);
  };

  const handleAuthNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 인증번호 handle 함수
    enterNumOnly(e.target.value);
  };

  const verifyAuthNum = async () => {
    // 인증번호 확인 서버에 POST
    await postSmsVerify(postAuthNum);
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
        onChange={handleAuthNum}
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
