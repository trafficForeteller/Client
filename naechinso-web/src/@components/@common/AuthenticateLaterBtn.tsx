import { useState } from "react";
import styled from "styled-components";

import AuthenticateLaterModal from "./AuthenticateLaterModal";

export default function AuthenticateLaterBtn() {
  const [isAuthenticateLaterModalOpened, setIsAuthenticateLaterModalOpened] = useState(false);

  const openAuthenticateLaterModal = () => {
    setIsAuthenticateLaterModalOpened(true);
  };

  return (
    <>
      <St.AuthenticateLaterBtn onClick={openAuthenticateLaterModal} type="button">
        나중에 하기
      </St.AuthenticateLaterBtn>
      {isAuthenticateLaterModalOpened && (
        <>
          <AuthenticateLaterModal
            title1="소속인증은 필수야🙌"
            highlight="3일 내"
            desc1="에 인증을 하지 않으면"
            desc2="작성된 추천사가 날아가 😥"
            buttonTitle="바로 인증할래"
            setIsAuthenticateLaterModalOpened={setIsAuthenticateLaterModalOpened}
          />
          <St.BackDrop />
        </>
      )}
    </>
  );
}

const St = {
  AuthenticateLaterBtn: styled.button`
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 2rem;

    color: ${({ theme }) => theme.colors.gray40};
    ${({ theme }) => theme.fonts.body5};
  `,
  BackDrop: styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.64);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
  `,
};
