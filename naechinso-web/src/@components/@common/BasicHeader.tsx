import styled from "styled-components";

import MovePreviousPageBtn from "./MovePreviousPageBtn";
import ProgressBar from "./ProgressBar";

export interface BasicHeaderProps {
  header: string;
  progressRate: number;
}

export default function BasicHeader(props: BasicHeaderProps) {
  const { header, progressRate } = props;

  return (
    <St.BasicHeader>
      <St.Header>
        <MovePreviousPageBtn />
        {header}
      </St.Header>
      <ProgressBar progressRate={progressRate} />
    </St.BasicHeader>
  );
}

const St = {
  BasicHeader: styled.article``,
  Header: styled.header`
    height: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body1};
  `,
};
