import React from "react";
import styled from "styled-components";

export default function Header() {
  return <St.Header>독파민</St.Header>;
}

const St = {
  Header: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 4.8rem;

    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.bold18};

    border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray1};
  `,
};
