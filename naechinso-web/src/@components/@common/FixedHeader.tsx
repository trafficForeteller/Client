import { useEffect, useState } from "react";
import styled from "styled-components";

import BasicHeader from "./BasicHeader";
import SubTitle from "./SubTitle";
import Title from "./Title";

export interface FixedHeaderProps {
  header: string;
  progressRate: number;
  title1: string;
  title2: string;
  title3?: string;
  subTitle1?: string;
  subTitle2?: string;
  isModalOpened?: boolean;
  step?: number;
  selection?: boolean;
}

export default function FixedHeader(props: FixedHeaderProps) {
  const { header, progressRate, title1, title2, title3, subTitle1, subTitle2, isModalOpened, selection } = props;
  const [checkSubTitle, setCheckSubTitle] = useState(false);

  useEffect(() => {
    handleSubTitle();
  }, []);

  const handleSubTitle = () => {
    if (subTitle1) setCheckSubTitle(true);
    else setCheckSubTitle(false);
  };

  return (
    <>
      {isModalOpened ? (
        <St.FixedHeaderWithModal>
          <BasicHeader header={header} progressRate={progressRate} />
          <St.TitleWrapper checkSubTitle={checkSubTitle}>
            <Title title={title1} />
            <Title title={title2} />
            {title3 && <Title title={title3} />}
          </St.TitleWrapper>
          <St.SubTitleWrapper>
            {subTitle1 && <SubTitle subTitle={subTitle1} />}
            {subTitle2 && <SubTitle subTitle={subTitle2} />}
          </St.SubTitleWrapper>
        </St.FixedHeaderWithModal>
      ) : (
        <St.FixedHeader>
          <BasicHeader header={header} progressRate={progressRate} />
          <St.TitleWrapper checkSubTitle={checkSubTitle}>
            {selection && <St.Selection>(선택)</St.Selection>}
            <Title title={title1} />
            <Title title={title2} />
            {title3 && <Title title={title3} />}
          </St.TitleWrapper>
          <St.SubTitleWrapper>
            {subTitle1 && <SubTitle subTitle={subTitle1} />}
            {subTitle2 && <SubTitle subTitle={subTitle2} />}
          </St.SubTitleWrapper>
        </St.FixedHeader>
      )}
    </>
  );
}

const St = {
  FixedHeaderWithModal: styled.section`
    width: 37.5rem;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 0;

    padding-bottom: 1rem;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #ffffff 10%);
    z-index: -1;

    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
  FixedHeader: styled.section`
    width: 37.5rem;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 0;

    padding-bottom: 1rem;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #ffffff 10%);
    z-index: 2;

    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
  Selection: styled.div`
    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.gray40};
    margin-bottom: 0.4rem;
  `,
  TitleWrapper: styled.hgroup<{ checkSubTitle: boolean }>`
    margin-bottom: ${({ checkSubTitle }) => (checkSubTitle ? "0.6rem" : "2.4rem")};
    position: relative;
    padding: 9rem 2rem 0;
  `,
  SubTitleWrapper: styled.section`
    padding-right: 2rem;
  `,
};
