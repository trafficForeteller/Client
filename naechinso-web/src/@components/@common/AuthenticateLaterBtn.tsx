import styled from "styled-components";

export default function AuthenticateLaterBtn() {
  return <St.AuthenticateLaterBtn>나중에 하기</St.AuthenticateLaterBtn>;
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
};
