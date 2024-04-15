import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { postSignIn } from "../../apis/basic.api";
import { routePaths } from "../../core/routes/path";
import { IPostSignInInfo } from "../../types/basic";
import { LoginHeader, LoginInputBox } from "../@common";

export default function SiginInPage() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [postSignInInfo, setPostSignInInfo] = useState<IPostSignInInfo>({
    id: "",
    pw: "",
  });

  // id 값이 변경될 때마다 호출되는 이벤트 핸들러
  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value); // 입력된 값으로 상태를 업데이트
  };

  // password 값이 변경될 때마다 호출되는 이벤트 핸들러
  const handleUserPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value); // 입력된 값으로 상태를 업데이트
  };

  useEffect(() => {
    setPostSignInInfo({ id: userId, pw: userPassword });
  }, [userId, userPassword]);

  // id, password 정보를 서버에 전송하는 함수
  const handleSignInInfo = async () => {
    // 인증번호 확인 서버에 POST
    await postSignIn(postSignInInfo, handleSuccessPostSignIn, handleFailPostSignIn);
  };

  const handleSuccessPostSignIn = (successMessage: string) => {
    // 인증번호 맞을 때
    console.log(successMessage);
    navigate(routePaths.Landing);
  };

  const handleFailPostSignIn = (errorMessage: string) => {
    // 인증번호 틀릴 때
    console.log(errorMessage);
  };

  return (
    <St.SignPage>
      <LoginHeader />
      <St.SignSection>
        <LoginInputBox inputName="ID" value={userId} onChange={handleUserIdChange} />
        <LoginInputBox inputName="Password" value={userPassword} onChange={handleUserPasswordChange} />
        <St.SignInBtn onClick={handleSignInInfo} type="button">
          회원가입
        </St.SignInBtn>
      </St.SignSection>
    </St.SignPage>
  );
}

const St = {
  SignPage: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    gap: 1.6rem;
  `,
  SignSection: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    gap: 1.6rem;
  `,
  SignInBtn: styled.button`
    width: 100%;
    height: 4.8rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.semi12};
    border-radius: 12px;
  `,
};
