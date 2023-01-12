import styled from "styled-components";

import BasicHeader from "./BasicHeader";
import Title from "./Title";

export interface FixedHeaderProps {
  header: string;
  progressRate: number;
  title1: string;
  title2: string;
}

export default function FixedHeader(props: FixedHeaderProps) {
  const { header, progressRate, title1, title2 } = props;

  return (
    <St.FixedHeader>
      <BasicHeader header={header} progressRate={progressRate} />
      <St.TitleWrapper>
        <Title title={title1} />
        <Title title={title2} />
      </St.TitleWrapper>
    </St.FixedHeader>
  );
}

const St = {
  FixedHeader: styled.section`
    width: 36rem;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 0;

    padding-bottom: 1rem;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #ffffff 10%);
    z-index: 3;
  `,
  TitleWrapper: styled.hgroup`
    margin-bottom: 2.4rem;
    position: relative;
  `,
};
