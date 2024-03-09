import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <St.Header>
      <St.Title>트래픽 예언가</St.Title>
      <St.Border></St.Border>
    </St.Header>
  );
}

const St = {
  Header: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    margin-bottom: 1.6rem;
  `,
  Title: styled.h1`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.bold1};
    margin: 1.5rem 0;
  `,
  Border: styled.div`
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.gray2};
  `,
};
