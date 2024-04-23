import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { postLogin } from "../../apis/basic.api";
import { routePaths } from "../../core/routes/path";
import { IPostLoginInfo } from "../../types/basic";
import { LoginHeader, LoginInputBox } from "../@common";

export default function LoginPage() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [postLoginInfo, setPostLoginInfo] = useState<IPostLoginInfo>({
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
    setPostLoginInfo({ id: userId, pw: userPassword });
  }, [userId, userPassword]);

  // id, password 정보를 서버에 전송하는 함수
  const handleLoginInfo = async () => {
    // 이 부분에 실제 API 호출 코드를 작성하면 됩니다.
    await postLogin(postLoginInfo, handleSuccessPostLogin, handleFailPostLogin);
  };

  const handleSuccessPostLogin = (token: string) => {
    // 로그인 성공했을 때
    navigate(routePaths.Landing);
    localStorage.clear();
    localStorage.setItem("accessToken", token);
    localStorage.setItem("userId", userId);
  };

  const handleFailPostLogin = (errorMessage: string) => {
    // 로그인 실패했을 때
    console.log(errorMessage);
  };

  return (
    <St.LoginPage>
      <LoginHeader />
      <St.LandingSection>
        <LoginInputBox inputName="ID" value={userId} onChange={handleUserIdChange} />
        <LoginInputBox inputName="Password" value={userPassword} onChange={handleUserPasswordChange} />
        <St.LoginBtn onClick={handleLoginInfo} type="button">
          Login
        </St.LoginBtn>
        <St.SignInBox>
          계정이 없으신가요?
          <St.MoveSignInButton type="button" onClick={() => navigate(routePaths.SiginIn)}>
            회원가입하기
          </St.MoveSignInButton>
        </St.SignInBox>
        <St.Border></St.Border>
      </St.LandingSection>
    </St.LoginPage>
  );
}

const St = {
  LoginPage: styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20% 2.4rem 0;
  `,
  LandingSection: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    gap: 1.6rem;
  `,

  LoginBtn: styled.button`
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
  SignInBox: styled.div`
    color: ${({ theme }) => theme.colors.gray2};
    ${({ theme }) => theme.fonts.reg12};

    display: flex;
  `,
  MoveSignInButton: styled.button`
    color: ${({ theme }) => theme.colors.purple};
    ${({ theme }) => theme.fonts.semi12};
  `,

  Border: styled.div`
    width: 100%;
    border-top: 0.5px solid ${({ theme }) => theme.colors.gray1};
    margin-top: 2.4rem;
  `,
  RouteListWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `,
  RouteList: styled.article`
    width: 100%;
  `,
};
