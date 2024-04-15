import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";
import { LoginHeader, LoginInputBox } from "../@common";

export default function LoginPage() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  // id 값이 변경될 때마다 호출되는 이벤트 핸들러
  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value); // 입력된 값으로 상태를 업데이트
  };

  // password 값이 변경될 때마다 호출되는 이벤트 핸들러
  const handleUserPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value); // 입력된 값으로 상태를 업데이트
  };

  // id, password 정보를 서버에 전송하는 함수
  const handleLoginInfo = () => {
    // 이 부분에 실제 API 호출 코드를 작성하면 됩니다.
    console.log("id:", userId);
    console.log("pwd:", userPassword);
    setIsClicked(true);
    // 여기에 API 호출 코드 작성

    // startingStation이나 arrivalStation이 비어있는 경우엔 제대로 입력해달라고 뜨게 하기
    // 결과가 없을 땐 없다고 뜨게 하기
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
  LoginPage: styled.div`
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
