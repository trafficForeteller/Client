import styled from "styled-components";

import MovePreviousPageBtn from "./MovePreviousPageBtn";

export interface BasicHeaderProps {
  header: string;
}

export default function BasicHeader(props: BasicHeaderProps) {
  const { header } = props;

  return (
    <St.BasicHeader>
      <St.Header>
        <MovePreviousPageBtn />
        {header}
      </St.Header>
    </St.BasicHeader>
  );
}

const St = {
  BasicHeader: styled.article``,
  Header: styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body1};

    position: absolute;
    width: 100%;
    height: 5.6rem;
    top: 0;
    left: 0;
  `,
};
