import styled from "styled-components";

export interface SubTitleProps {
  subTitle: string;
}

export default function SubTitle(props: SubTitleProps) {
  const { subTitle } = props;

  return <St.SubTitle>{subTitle}</St.SubTitle>;
}

const St = {
  SubTitle: styled.h2`
    ${({ theme }) => theme.fonts.reg_13};
    color: ${({ theme }) => theme.colors.gray60};

    margin-left: 2.4rem;
  `,
};
