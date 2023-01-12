import styled from "styled-components";

import MovePreviousPageBtn from "./MovePreviousPageBtn";
import ProgressBar from "./ProgressBar";

export interface FriendInfoHeaderProps {
  progressRate: number;
}

export default function FriendInfoHeader(props: FriendInfoHeaderProps) {
  const { progressRate } = props;

  return (
    <St.FriendInfoHeader>
      <St.Header>
        <MovePreviousPageBtn />
        친구 정보
      </St.Header>
      <ProgressBar progressRate={progressRate} />
    </St.FriendInfoHeader>
  );
}

const St = {
  FriendInfoHeader: styled.article``,
  Header: styled.header`
    height: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body1};
  `,
};
