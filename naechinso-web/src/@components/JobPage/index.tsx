import styled from "styled-components";

import { IcSheild } from "../../asset/icons";
import { FixedHeader } from "../@common";

export default function JobPage() {
  return (
    <St.Job>
      <FixedHeader
        header="추천인 소개"
        progressRate={60}
        title1="💼"
        title2="어떤 일을 해?"
        subTitle1="프리랜서는 프리랜서라고 적어주면 돼!"
      />

      <St.SheildBox>
        <IcSheild />
        <St.SheildWrapper>
          <St.SheildDesc>만약 회사명을 밝히고 싶지 않다면 업종으로 적어줘</St.SheildDesc>
          <St.SheildExample>ex. 한국은행 =&gt; 금융공기업 / 당근마켓 =&gt; 중고거래 스타트업</St.SheildExample>
        </St.SheildWrapper>
      </St.SheildBox>
    </St.Job>
  );
}

const St = {
  Job: styled.main``,
  SheildBox: styled.section`
    width: 32.7rem;
    height: 6.4rem;
    border-radius: 8px;
    margin: 22rem auto 2.4rem;
    padding: 1.2rem 0.5rem;
    background-color: ${({ theme }) => theme.colors.blue40};

    display: flex;
    align-items: center;
    gap: 0.55rem;
  `,
  SheildWrapper: styled.article``,
  SheildDesc: styled.p`
    color: ${({ theme }) => theme.colors.blue};
    ${({ theme }) => theme.fonts.caption4}
  `,
  SheildExample: styled.p`
    color: ${({ theme }) => theme.colors.gray40};
    ${({ theme }) => theme.fonts.caption3}
  `,
};
