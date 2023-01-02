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
    ${({ theme }) => theme.fonts.body2};
    color: ${({ theme }) => theme.colors.black40};
  `,
};
