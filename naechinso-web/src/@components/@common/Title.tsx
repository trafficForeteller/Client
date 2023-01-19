import styled from "styled-components";

export interface TitleProps {
  title: string;
}

export default function Title(props: TitleProps) {
  const { title } = props;

  return <St.Title>{title}</St.Title>;
}

const St = {
  Title: styled.h1`
    ${({ theme }) => theme.fonts.head1};
    color: ${({ theme }) => theme.colors.black};
  `,
};
