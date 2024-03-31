import styled from "styled-components";

export default function LandingHeader() {
  return (
    <St.LandingHeader>
      <St.Title>📖</St.Title>
      <St.Title>독파민</St.Title>
    </St.LandingHeader>
  );
}

const St = {
  LandingHeader: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    margin-bottom: 8.4rem;
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
