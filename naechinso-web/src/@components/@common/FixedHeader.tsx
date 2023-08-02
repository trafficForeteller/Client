import { useEffect, useState } from "react";
import styled from "styled-components";

import BasicHeader from "./BasicHeader";
import SubTitle from "./SubTitle";
import Title from "./Title";

export interface FixedHeaderProps {
  header: string;
  title1: string;
  title2?: string;
  subTitle1?: string;
  subTitle2?: string;
  isModalOpened?: boolean;
  step?: number;
}

export default function FixedHeader(props: FixedHeaderProps) {
  const { header, title1, title2, subTitle1, subTitle2, isModalOpened } = props;
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
          <BasicHeader header={header} />
          <St.TitleWrapper checkSubTitle={checkSubTitle}>
            <Title title={title1} />
            {title2 && <Title title={title2} />}
          </St.TitleWrapper>
          <St.SubTitleWrapper>
            {subTitle1 && <SubTitle subTitle={subTitle1} />}
            {subTitle2 && <SubTitle subTitle={subTitle2} />}
          </St.SubTitleWrapper>
        </St.FixedHeaderWithModal>
      ) : (
        <St.FixedHeader>
          <BasicHeader header={header} />
          <St.TitleWrapper checkSubTitle={checkSubTitle}>
            <Title title={title1} />
            {title2 && <Title title={title2} />}
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
    background-color: ${({ theme }) => theme.colors.white};

    padding-bottom: 1.2rem;
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
    background-color: ${({ theme }) => theme.colors.white};
    padding-bottom: 1.2rem;
    z-index: 2;

    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
  TitleWrapper: styled.hgroup<{ checkSubTitle: boolean }>`
    position: relative;
    padding: 6.8rem 2rem 0;
  `,
  SubTitleWrapper: styled.section`
    padding-right: 2rem;
  `,
};
