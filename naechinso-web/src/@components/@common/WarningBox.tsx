import styled from "styled-components";

import { IcWarning } from "../../asset/icons";

export interface WarningBoxProps {
  desc: string;
}

export default function WarningBox(props: WarningBoxProps) {
  const { desc } = props;

  return (
    <St.WarningBox>
      <IcWarning />
      <St.WarningDesc>{desc}</St.WarningDesc>
    </St.WarningBox>
  );
}

const St = {
  WarningBox: styled.article`
    width: 100%;
    height: 3.6rem;
    border-radius: 8px;
    padding: 0.8rem 2rem 0.8rem 1rem;
    background-color: ${({ theme }) => theme.colors.error20};

    display: flex;
    align-items: center;
    gap: 0.55rem;
    z-index: -1;
  `,
  WarningDesc: styled.p`
    color: ${({ theme }) => theme.colors.error};
    ${({ theme }) => theme.fonts.caption4}
  `,
};
