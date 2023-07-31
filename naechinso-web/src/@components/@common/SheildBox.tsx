import styled from "styled-components";

import { IcSheild } from "../../asset/icons";

export interface SheildBoxProps {
  desc: string;
}

export default function SheildBox(props: SheildBoxProps) {
  const { desc } = props;

  return (
    <St.SheildBox>
      <IcSheild aria-label="확인 문구" />
      <St.SheildDesc>{desc}</St.SheildDesc>
    </St.SheildBox>
  );
}

const St = {
  SheildBox: styled.article`
    width: calc(100%-4rem);
    height: 3.6rem;
    border-radius: 8px;
    margin-bottom: 2.4rem;
    padding: 1.2rem 1.8rem 1.2rem 0.8rem;
    background-color: ${({ theme }) => theme.colors.blue40};

    display: flex;
    align-items: center;
    gap: 0.55rem;
  `,
  SheildDesc: styled.p`
    color: ${({ theme }) => theme.colors.blue};
    ${({ theme }) => theme.fonts.caption4}
  `,
};
