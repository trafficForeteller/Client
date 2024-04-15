import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";

export default function LandingHeader() {
  const navigate = useNavigate();

  return (
    <St.LoginHeader onClick={() => navigate(routePaths.Landing)}>
      <St.Title>📖</St.Title>
      <St.Title>독파민</St.Title>
    </St.LoginHeader>
  );
}

const St = {
  LoginHeader: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    margin-bottom: 8.4rem;
    cursor: pointer;
  `,
  TitleWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Title: styled.h1`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.bold24};
  `,
};
