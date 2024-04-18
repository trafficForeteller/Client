import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";

export default function Header() {
  const navigate = useNavigate();

  return <St.Header onClick={() => navigate(routePaths.Landing)}>독파민</St.Header>;
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
