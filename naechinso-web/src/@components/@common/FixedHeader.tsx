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
  selection?: boolean;
  questionKind?: string;
}

export default function FixedHeader(props: FixedHeaderProps) {
  const { header, title1, title2, subTitle1, subTitle2, isModalOpened, selection, questionKind } = props;
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
            <St.QuestionKind>{questionKind}</St.QuestionKind>
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
            {selection && <St.Selection>(선택)</St.Selection>}
            <St.QuestionKind>{questionKind}</St.QuestionKind>
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
  QuestionKind: styled.p`
    ${({ theme }) => theme.fonts.body3};
    color: ${({ theme }) => theme.colors.orange};
    margin-bottom: 0.8rem;
  `,
  SubTitleWrapper: styled.section`
    padding-right: 2rem;
  `,
};
