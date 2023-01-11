import styled from "styled-components";

import { MovePreviousPageBtn, Title } from "../@common";
import ProgressBar from "../@common/ProgressBar";

export default function KeywordPage() {
  return (
    <St.KeywordPage>
      <St.Header>
        <MovePreviousPageBtn />
        친구 정보
      </St.Header>
      {/* <ProgressBar progressRate={progressRate} /> */}
      <St.TitleWrapper>
        <Title title="네가 생각하는" />
        <Title title="친구의 매력을 3개 선택해줘" />
      </St.TitleWrapper>
    </St.KeywordPage>
  );
}

const St = {
  KeywordPage: styled.main``,
  Header: styled.header`
    height: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body1};
  `,
  TitleWrapper: styled.hgroup`
    margin-left: 2.4rem;
    margin-bottom: 2.4rem;
    position: relative;
    z-index: -1;
  `,
};
