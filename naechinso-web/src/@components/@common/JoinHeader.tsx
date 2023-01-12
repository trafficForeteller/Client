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
  `,
  Header: styled.header`
    height: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body1};
  `,
};
