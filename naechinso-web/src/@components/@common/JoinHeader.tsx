import styled from "styled-components";

import MovePreviousPageBtn from "./MovePreviousPageBtn";

export default function JoinHeader() {
  return (
    <St.JoinHeader>
      <MovePreviousPageBtn />
      본인인증
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

    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body1};
  `,
  Header: styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
