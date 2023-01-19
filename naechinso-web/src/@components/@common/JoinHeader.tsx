import styled from "styled-components";

import MovePreviousPageBtn from "./MovePreviousPageBtn";

export default function JoinHeader() {
  return (
    <St.JoinHeader>
      <St.Header>
        <MovePreviousPageBtn />
        회원가입
      </St.Header>
    </St.JoinHeader>
  );
}

const St = {
  JoinHeader: styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.2rem;

    position: absolute;
    width: 100%;
    height: 5.6rem;
    top: 0;
    left: 0;
  `,
  Header: styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body1};
  `,
};
