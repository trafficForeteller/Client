import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <St.Header>
      <St.Title>독파민</St.Title>
    </St.Header>
  );
}

const St = {
  Header: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 4.8rem;
  `,
  Title: styled.h1`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.bold18};
  `,
};
